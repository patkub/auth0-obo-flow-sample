# auth0-tenant

Auth0 tenant configuration.

## Dev Setup

Prerequisites: [Node.js v22 LTS](https://nodejs.org/en/download)

Install dependencies

```bash
npm install
```

Lint
- `pnpm check` - Lint with biome and apply formatting changes, safe lint fixes, and safe assist actions
- `pnpm check:ci` - Check formatting, linting, and assist actions with biome

Run tests
- `npm run test` - Run unit tests
- `npm run test:watch` - Automatically re-run tests when files change

## Deploy

Copy auth0 config from `auth0-config.json.example` to `auth0-config.json` and fill out details using Machine to Machine client.

Deploy Auth0 configuration.
```bash
npm run deploy
```
