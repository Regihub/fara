export default function handler(req, res) {
  const clientId = process.env.GITHUB_CLIENT_ID;

  const redirectUri =
    'https://fara.vercel.app/api/auth/callback';

  const scope = 'repo';

  const url =
    `https://github.com/login/oauth/authorize` +
    `?client_id=${clientId}` +
    `&scope=${scope}` +
    `&redirect_uri=${encodeURIComponent(redirectUri)}`;

  res.redirect(url);
}
