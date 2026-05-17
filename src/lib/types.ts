export interface Mass {
  time: string
  intention: string
}

export interface DaySchedule {
  date: string
  dayName: string
  feast: string
  masses: Mass[]
}

export interface WeeklyAnnouncements {
  weekNumber: number
  year: number

  from: string
  to: string

  title: string

  published: boolean

  announcements: string[]

  days: DaySchedule[]
}