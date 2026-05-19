function toBase64(str) {
  return Buffer.from(str, 'utf8').toString('base64');
}

export default async function handler(req, res) {
  try {
    const authHeader = req.headers.authorization || '';
    const token = authHeader.replace('Bearer ', '');

    if (!token) {
      return res.status(401).json({
        error: 'Missing GitHub token',
      });
    }

    // Načítanie template z už funkčného API
    const origin =
      req.headers['x-forwarded-proto'] +
      '://' +
      req.headers.host;

    const templateResponse = await fetch(
      `${origin}/api/week-template`
    );

    const templateData = await templateResponse.json();

    const template = templateData.template;
    const slug = templateData.slug;

    const path = `src/content/weeks/${slug}.json`;

    // Overenie, či súbor už existuje
    const existing = await fetch(
      `https://api.github.com/repos/Regihub/fara/contents/${path}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/vnd.github+json',
        },
      }
    );

    if (existing.ok) {
      return res.status(200).json({
        slug,
        existed: true,
      });
    }

    // Vytvorenie nového súboru
    const response = await fetch(
      `https://api.github.com/repos/Regihub/fara/contents/${path}`,
      {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/vnd.github+json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: `Create weekly announcements ${slug}`,
          content: toBase64(
            JSON.stringify(template, null, 2)
          ),
          branch: 'main',
        }),
      }
    );

    if (!response.ok) {
      const error = await response.text();

      return res.status(500).json({
        error,
      });
    }

    res.status(200).json({
      slug,
      existed: false,
    });
  } catch (error) {
    res.status(500).json({
      error: String(error),
    });
  }
}