import { WeeklyAnnouncements } from "./types"

const DAY_NAMES = [
  "Pondelok",
  "Utorok",
  "Streda",
  "Štvrtok",
  "Piatok",
  "Sobota",
  "Nedeľa",
]

const DEFAULT_MASSES = [
  ["17:00"],
  ["09:00"],
  ["17:00"],
  ["17:00"],
  ["17:00"],
  ["08:00"],
  ["09:00"],
]

function getNextMonday(date = new Date()) {
  const d = new Date(date)

  const day = d.getDay()
  const diff = day === 0 ? 1 : 8 - day

  d.setDate(d.getDate() + diff)

  return d
}

function formatDate(date: Date) {
  return date.toISOString().split("T")[0]
}

function getWeekNumber(date: Date) {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()))

  d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7))

  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1))

  const weekNo = Math.ceil((((d.getTime() - yearStart.getTime()) / 86400000) + 1) / 7)

  return weekNo
}

export function generateWeekTemplate(): WeeklyAnnouncements {
  const monday = getNextMonday()

  const sunday = new Date(monday)
  sunday.setDate(monday.getDate() + 6)

  const weekNumber = getWeekNumber(monday)

  const days = DAY_NAMES.map((dayName, index) => {
    const date = new Date(monday)

    date.setDate(monday.getDate() + index)

    return {
      date: formatDate(date),
      dayName,
      feast: "",
      masses: DEFAULT_MASSES[index].map((time) => ({
        time,
        intention: "",
      })),
    }
  })

  return {
    weekNumber,
    year: monday.getFullYear(),

    from: formatDate(monday),
    to: formatDate(sunday),

    title: `${weekNumber}. týždeň`,

    published: false,

    announcements: [],

    days,
  }
}