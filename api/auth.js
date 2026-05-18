const { AuthenticationClient } = require('netlify-cms-oauth-provider');

const auth = new AuthenticationClient({
  github: {
    clientId: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
  },
  baseUrl: process.env.ORIGIN,
  siteDomain: process.env.ORIGIN.replace(/^https?:\/\//, ''),
});

module.exports = auth;
