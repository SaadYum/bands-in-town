const path = require("path");
const { parsed: localEnv } = require("dotenv-safe").config({
  allowEmptyValues: false,
  path: path.resolve(__dirname, `./.env.local`),
});

const nextConfig = {
  reactStrictMode: true,

  env: localEnv,
};

module.exports = nextConfig;
