function formatDate(date) {
  return date.toISOString().split('T')[0];
}

function getNextMonday() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const day = today.getDay();
  let diff = (8 - day) % 7;

  if (diff === 0) {
    diff = 7;
  }

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
    ((d.getTime() - yearStart.getTime()) / 86400000 + 1) / 7
  );
}

function generateWeekTemplate() {
  const monday = getNextMonday();

  const sunday = new Date(monday);
  sunday.setDate(monday.getDate() + 6);

  const weekNumber = getISOWeek(monday);
  const year = monday.getFullYear();

  const dayNames = [
    'Pondelok',
    'Utorok',
    'Streda',
    'Štvrtok',
    'Piatok',
    'Sobota',
    'Nedeľa'
  ];

  const defaultTimes = [
    '17:00',
    '09:00',
    '17:00',
    '17:00',
    '17:00',
    '08:00',
    '09:00'
  ];

  const masses = dayNames.map((day, index) => {
    const date = new Date(monday);
    date.setDate(monday.getDate() + index);

    return {
      day,
      date: formatDate(date),
      time: defaultTimes[index],
      intention: '',
      place: 'Farský kostol',
      note: ''
    };
  });

  return {
    title: `Farské oznamy – ${weekNumber}. týždeň ${year}`,
    weekNumber,
    year,
    weekStart: formatDate(monday),
    weekEnd: formatDate(sunday),
    general: '',
    masses
  };
}

function toBase64(str) {
  return Buffer.from(str, 'utf8').toString('base64');
}

export default async function handler(req, res) {
  try {
    const authHeader = req.headers.authorization || '';
    const token = authHeader.replace('Bearer ', '');

    if (!token) {
      return res.status(401).json({
        error: 'Missing GitHub token'
      });
    }

    const template = generateWeekTemplate();
    const slug = `${template.year}-W${template.weekNumber}`;
    const path = `src/content/weeks/${slug}.json`;

    const existing = await fetch(
      `https://api.github.com/repos/Regihub/fara/contents/${path}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/vnd.github+json'
        }
      }
    );

    if (existing.ok) {
      return res.status(200).json({
        slug,
        existed: true
      });
    }

    const response = await fetch(
      `https://api.github.com/repos/Regihub/fara/contents/${path}`,
      {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/vnd.github+json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          message: `Create weekly announcements ${slug}`,
          content: toBase64(
            JSON.stringify(template, null, 2)
          ),
          branch: 'main'
        })
      }
    );

    if (!response.ok) {
      const error = await response.text();

      return res.status(500).json({
        error
      });
    }

    res.status(200).json({
      slug,
      existed: false
    });
  } catch (error) {
    res.status(500).json({
      error: String(error)
    });
  }
}