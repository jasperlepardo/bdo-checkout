# Prototypes

A Next.js (App Router) app that hosts multiple prototypes, each on the BDO design system (`@jasperlepardo/design-system`). The home page (`/`) is a gallery; each prototype lives under its own route (e.g. `/bdo-checkout`).

## Structure

```
app/
  page.tsx          # gallery at "/" (generated from lib/prototypes.ts)
  layout.tsx        # root layout — theme-neutral, owns <html>/<body>
  <slug>/           # one folder per prototype
    layout.tsx      # sets the prototype's data-theme + page title
    page.tsx        # the prototype's entry screen (+ nested routes)
lib/prototypes.ts   # registry powering the gallery
```

## Adding a prototype

1. Create `app/<slug>/` with a `layout.tsx` (set `data-theme` and `metadata.title`) and a `page.tsx`. Add nested routes (`app/<slug>/<step>/page.tsx`) as needed — route names are scoped to the slug, so they never collide with other prototypes.
2. Build internal links from a local `const BASE = "/<slug>"`.
3. Add one entry to `lib/prototypes.ts`.

Available design-system themes: `bdo-unibank`, `bdo-pay-light`, `bdo-pay-dark`, `bdo-wealth`.

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
