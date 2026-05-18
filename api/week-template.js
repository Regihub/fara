import { generateWeekTemplate } from '../src/lib/week-template.ts';

export default function handler(req, res) {
  const template = generateWeekTemplate();

  const mode = req.query.mode;

  // CMS prefill režim
  if (mode === 'cms') {
    return res.status(200).json({
      data: template,
      meta: {
        autoFilled: true
      }
    });
  }

  // default API
  res.status(200).json({
    template,
    slug: `${template.year}-W${template.weekNumber}`
  });
}