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

  res.setHeader('Content-Type', 'text/html');

  res.end(`
<!doctype html>
<html>
  <body>
    <script>
      window.opener.postMessage(
        {
          token: "${data.access_token}",
          provider: "github"
        },
        "*"
      );
      window.close();
    </script>
  </body>
</html>
`);
}