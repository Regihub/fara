export default async function handler(req, res) {
  const { code } = req.query;

  const response = await fetch(
    'https://github.com/login/oauth/access_token',
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code,
      }),
    }
  );

  const data = await response.json();

  if (!data.access_token) {
    return res.status(400).send('OAuth failed');
  }

  const message =
    'authorization:github:success:' +
    JSON.stringify({
      token: data.access_token,
    });

  res.setHeader('Content-Type', 'text/html');
  res.end(`
<!doctype html>
<html>
  <body>
    <script>
      if (window.opener) {
        window.opener.postMessage(
          ${JSON.stringify(message)},
          window.location.origin
        );
      }
      window.close();
    </script>
  </body>
</html>
`);
}