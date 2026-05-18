import { generateWeekMasses } from '../src/lib/generateWeekMasses.js';

function formatDate(date) {
  return date.toISOString().split('T')[0];
}

function getNextMonday() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const day = today.getDay();
  let diff = (8 - day) % 7;

  if (diff === 0) diff = 7;

  const monday = new Date(today);
  monday.setDate(today.getDate() + diff);

  return monday;
}

function getISOWeek(date) {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);

  const day = d.getDay() || 7;
  d.setDate(d.getDate() + 4 - day);

  const yearStart = new Date(d.getFullYear(), 0, 1);

  return Math.ceil(
    ((d - yearStart) / 86400000 + 1) / 7
  );
}

export default function handler(req, res) {
  const monday = getNextMonday();
  const sunday = new Date(monday);
  sunday.setDate(monday.getDate() + 6);

  const weekNumber = getISOWeek(monday);
  const year = monday.getFullYear();

  const masses = generateWeekMasses(monday).map((m) => ({
    day: m.day,
    date: m.date,
    time: m.time,
    intention: '',
    place: 'Farský kostol',
    note: '',
  }));

  const template = {
    title: `Farské oznamy – ${weekNumber}. týždeň ${year}`,
    weekNumber,
    year,
    weekStart: formatDate(monday),
    weekEnd: formatDate(sunday),
    general: '',
    masses,
  };

  res.status(200).json({
    template,
    slug: `${year}-W${weekNumber}`
  });
}