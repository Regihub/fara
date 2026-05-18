import { getCollection } from 'astro:content';

export async function getLatestWeek() {
  const weeks = await getCollection('weeks');

  if (weeks.length === 0) {
    throw new Error('No week files found in src/content/weeks');
  }

  weeks.sort((a, b) =>
    new Date(b.data.weekStart).getTime() -
    new Date(a.data.weekStart).getTime()
  );

  return weeks[0].data;
}