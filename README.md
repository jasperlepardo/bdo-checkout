# BDO Checkout

A Next.js (App Router) application that consumes the BDO design system (`@jasperlepardo/design-system`) and renders the BDO Checkout page.

## Prerequisites

The design system is published to **GitHub Packages** (private). To install it you need a Personal Access Token with the `read:packages` scope.

### One-time setup

1. Create a classic PAT at https://github.com/settings/tokens with the `read:packages` scope (and `write:packages` if you'll publish). Copy the token.
2. Export it in your shell (or add to `.env.local`):
   ```bash
   export GITHUB_TOKEN=ghp_yourtokenhere
   ```
   The `.npmrc` in this repo reads `${GITHUB_TOKEN}` to authenticate with `npm.pkg.github.com` for the `@jasperlepardo` scope.

   Alternatively, if you use the `gh` CLI, you can refresh your existing token's scopes:
   ```bash
   gh auth refresh -h github.com -s read:packages
   GITHUB_TOKEN="$(gh auth token)" npm install
   ```

## Install

```bash
GITHUB_TOKEN="$(gh auth token)" npm install
```

## Develop

```bash
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
npm run start
```
