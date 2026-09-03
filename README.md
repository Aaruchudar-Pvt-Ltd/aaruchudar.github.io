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

1. Push this repo to GitHub.
2. In the repository, open **Settings → Pages** and set Source to **GitHub Actions**.
3. The included workflow builds the static site and publishes it on every push to `main`.

For a project site (`https://<user>.github.io/<repo>/`) the workflow sets the Vite base path automatically. For a user/org site (`https://<user>.github.io/`) it uses `/`.
