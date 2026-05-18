export async function getLatestWeek() {
  const modules = import.meta.glob('../content/weeks/*.json');

  const weeks = [];

  for (const loader of Object.values(modules)) {
    const mod = await loader();
    weeks.push(mod.default);
  }

  if (weeks.length === 0) {
    throw new Error('No week files found in src/content/weeks');
  }

  weeks.sort((a, b) => {
    return (
      new Date(b.weekStart).getTime() -
      new Date(a.weekStart).getTime()
    );
  });

  return weeks[0];
}