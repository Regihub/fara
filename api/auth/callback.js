export default async function handler(req, res) {
  const { code } = req.query;

  const client_id = process.env.GITHUB_CLIENT_ID;
  const client_secret = process.env.GITHUB_CLIENT_SECRET;

  const tokenRes = await fetch(
    'https://github.com/login/oauth/access_token',
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        client_id,
        client_secret,
        code,
      }),
    }
  );

  const data = await tokenRes.json();

  if (data.error) {
    return res.status(400).send(data.error_description || data.error);
  }

const message =
  'authorization:github:success:' +
  JSON.stringify({
    token: data.access_token,
    provider: 'github',
  });

  const html = `
<!doctype html>
<html>
  <body>
    <script>
      window.opener.postMessage(
        ${JSON.stringify(message)},
        '*'
      );
      window.close();
    </script>
  </body>
</html>`;

  res.setHeader('Content-Type', 'text/html');
  res.status(200).send(html);
}