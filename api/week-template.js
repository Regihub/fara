import { generateWeekTemplate } from '../src/lib/week-template.ts';

export default function handler(req, res) {
  const template = generateWeekTemplate();

  const slug = `${template.year}-W${template.weekNumber}`;

  res.status(200).json({
    slug,
    template,
  });
}