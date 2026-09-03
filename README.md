# Aaruchudar Website (React + Vite)

Static Human Intelligence marketing site: React 19, Vite, TypeScript, and React Router.

## Stack

- React 19, Vite, TypeScript, React Router
- Tailwind CSS 4
- three.js brain viewer, Framer Motion, GSAP

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:5173.

Forms (contact, careers, webinar, billing) open the visitor’s email app and send to `hi@aaruchudar.com`.

## GitHub Pages

```bash
npm run deploy
```

That command builds the static site, adds the SPA `404.html` fallback, and publishes the `dist` folder to the `gh-pages` branch.

One-time setup: in the repository, open **Settings → Pages**, set Source to **Deploy from a branch**, and choose **`gh-pages` / (root)**.

Pushes to `main` run the same `npm run deploy` from GitHub Actions.

For a project site (`https://<user>.github.io/<repo>/`) the Vite base path is set automatically. For a user/org site (`https://<user>.github.io/`) it uses `/`.
