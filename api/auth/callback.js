export default async function handler(req, res) {
  const { code } = req.query;

  const tokenRes = await fetch(
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

  const data = await tokenRes.json();

  if (data.error || !data.access_token) {
    return res.status(400).send(
      data.error_description || data.error || 'No access token'
    );
  }

  const payload = {
    token: data.access_token,
    provider: 'github',
  };

  res.setHeader('Content-Type', 'text/html');
  res.status(200).send(`
<!doctype html>
<html>
  <body>
    <script>
      (function() {
        if (window.opener) {
          window.opener.postMessage(
            'authorization:github:success:' + JSON.stringify(${JSON.stringify(payload)}),
            '*'
          );
        }
        window.close();
      })();
    </script>
  </body>
</html>
`);
}