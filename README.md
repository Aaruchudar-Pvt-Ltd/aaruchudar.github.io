# Aaruchudar Website (React + Vite)

Static Human Intelligence marketing site: React 19, Vite, TypeScript, and React Router.

Live site: https://aaruchudar.com/

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

That command builds the static site for `aaruchudar.com`, adds the SPA `404.html` fallback, and publishes the `dist` folder to the `gh-pages` branch.

One-time setup: in the repository, open **Settings → Pages**, set Source to **Deploy from a branch**, choose **`gh-pages` / (root)**, and confirm the custom domain is `aaruchudar.com`.
