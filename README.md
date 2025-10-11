# Alaf Furniture — Deploy notes

This repository contains a Vite + React client in `client/` and a Node server in `server/`.

Netlify deploy notes

- Build command: `npm run build:client`
- Publish directory: `dist/public`

Steps to deploy on Netlify (simple):

1. Push your repository to GitHub (or Git provider).
2. In Netlify, click "New site from Git" and connect your repo.
3. For build settings use:
   - Build command: `npm run build:client`
   - Publish directory: `dist/public`
4. Set environment variables on Netlify if your app needs any (for example `NODE_ENV=production`).

Local verification

1. Install dependencies: `npm install`
2. Build the client: `npm run build:client`
3. After successful build, open `dist/public` — it should contain the static site.

Notes

- The monorepo also builds a server bundle via `npm run build` (server output to `dist/index.js`). Netlify serves static files; if you intend to host the server elsewhere, deploy the server separately.
- If your app uses client-side routing (React Router / wouter), consider adding a `_redirects` file to `dist/public` with `/* /index.html 200` to enable SPA routing on Netlify.
- This project now generates a `_redirects` file automatically after the client build via the `postbuild:client` script. The file contains:

   /* /index.html 200

   This ensures SPA routing works when deployed to Netlify or when serving the `dist/public` folder locally.
