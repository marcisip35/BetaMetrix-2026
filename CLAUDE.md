# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start the Next.js dev server (http://localhost:3000)
- `npm run build` — production build
- `npm run start` — serve the production build
- `npm run lint` — run ESLint (flat config via `eslint.config.mjs`, extends `eslint-config-next/core-web-vitals`)

There is no test runner configured in this repository.

## Architecture

This is a Next.js 16 App Router site (JavaScript, not TypeScript) for BetaMetrix, a medical billing company. It's a marketing/brochure site: static content components composed into pages, no backend/API routes or data-fetching layer yet.

- `src/app/layout.js` — root layout; loads Geist fonts and global CSS, wraps every page.
- `src/app/page.js` — home page, composes `Header`, `Hero`, `Footer` (and eventually `About`, `Results`) from `src/app/components/`.
- `src/app/components/` — page sections as components (`Header.jsx`, `Hero.jsx`, `Footer.jsx`, `About.jsx`, `Results.jsx`, `Contact.jsx`, `ContactForm.jsx`). Components that need browser APIs/state (e.g. `Header` scroll listener, `Hero` rotating statement carousel) are marked `"use client"`; others are server components by default.
- `src/app/contact/page.js` — route for `/contact`.
- **Note:** `About.jsx`, `Contact.jsx`, `ContactForm.jsx`, `Results.jsx`, and `src/app/contact/page.js` currently exist as empty stub files — they are referenced/planned but not yet implemented. Check file contents before assuming they contain markup.
- Styling is Tailwind CSS v4 (via `@tailwindcss/postcss`), imported once in `src/app/globals.css` alongside a set of hand-written custom classes (`site-wrapper`, `bg-brand-*`/`text-brand-*`/`border-brand-*` brand color utilities, `hero-*` carousel/pattern-background classes, `footer-*`, `nav-link-subtle`, `contact-button-3d-corner`). Prefer reusing these existing custom classes/brand tokens over hardcoding new colors.
- Path alias: `@/*` maps to `src/*` (configured in `jsconfig.json`).
- Nav links in `Header.jsx` point to `/#about`, `/#results`, `/services`, and `/contact` — `/services` has no corresponding route yet under `src/app/`.
