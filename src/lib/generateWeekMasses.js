import { createRequire } from "module";

const require = createRequire(import.meta.url);

const masses = require("../data/masses.json");

const days = [
  "Nedeľa",
  "Pondelok",
  "Utorok",
  "Streda",
  "Štvrtok",
  "Piatok",
  "Sobota"
];

export function generateWeekMasses(startDate) {
  const result = [];

  const start = new Date(startDate);

  for (let i = 0; i < 7; i++) {
    const current = new Date(start);
    current.setDate(start.getDate() + i);

    const dayName = days[current.getDay()];

    const dayMasses = masses.filter(
      (m) => m.day === dayName
    );

    dayMasses.forEach((mass) => {
      result.push({
        date: current.toLocaleDateString("sv-SE"),
        time: mass.time,
        intention: ""
      });
    });
  }

  return result;
}