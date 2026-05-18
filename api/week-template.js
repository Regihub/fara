import { generateWeekTemplate } from '../src/lib/week-template.ts';

export default function handler(req, res) {
  const template = generateWeekTemplate();

  res.status(200).json({
    template,
    slug: `${template.year}-W${template.weekNumber}`
  });
}