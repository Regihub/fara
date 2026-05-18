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
    return res.status(400).send(
      `<pre>${JSON.stringify(data, null, 2)}</pre>`
    );
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
    <h1>OAuth OK</h1>
    <pre id="msg"></pre>

    <script>
      const message = ${JSON.stringify(message)};
      document.getElementById('msg').textContent = message;

      if (window.opener) {
        window.opener.postMessage(message, '*');
      }

      // okno nechávame otvorené na diagnostiku
    </script>
  </body>
</html>
`);
}