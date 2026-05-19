import { generateWeekMasses } from './generateWeekMasses.js';

function formatDate(date: Date): string {
  return date.toISOString().split('T')[0];
}

function getNextMonday(): Date {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const day = today.getDay(); // 0 = Sunday, 1 = Monday
  let diff = (8 - day) % 7;

  // ak je dnes pondelok, ber nasledujúci týždeň
  if (diff === 0) {
    diff = 7;
  }

  const monday = new Date(today);
  monday.setDate(today.getDate() + diff);

  return monday;
}

function getISOWeek(date: Date): number {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);

  const day = d.getDay() || 7;
  d.setDate(d.getDate() + 4 - day);

  const yearStart = new Date(d.getFullYear(), 0, 1);

  return Math.ceil(
    ((d.getTime() - yearStart.getTime()) / 86400000 + 1) / 7
  );
}

export function generateWeekTemplate() {
  const monday = getNextMonday();

  const sunday = new Date(monday);
  sunday.setDate(monday.getDate() + 6);

  const weekNumber = getISOWeek(monday);
  const year = monday.getFullYear();

  return {
    title: `Farské oznamy – ${weekNumber}. týždeň ${year}`,
    weekNumber,
    year,
    weekStart: formatDate(monday),
    weekEnd: formatDate(sunday),
    general: '',
    masses: generateWeekMasses(monday).map((m) => ({
      day: m.day,               // ← dôležité pre CMS
      date: m.date,
      time: m.time,
      intention: '',
      place: '',
      note: '',
    })),
  };
}