# Team-building platform · Astro + TypeScript

Public website for Teamflow, a team-building business (content in Romanian). Built with Astro, TypeScript, and responsive CSS.

## Stack
- Astro 7, static output, self-hosted fonts (Fontsource), sitemap
- TypeScript with Astro strict config
- Reusable Astro components and typed content data
- Responsive CSS, accessible mobile navigation, category filtering
- Static activity and package detail routes generated from typed data

## Run locally
Requires Node >=22.23.4 (`.nvmrc` pins 24).
```bash
npm install
npm run dev
```

## Validate and build

The GitHub Actions workflow runs the same production build for pushes to `main` and pull requests targeting `main`.
```bash
npm run check
npm run build
npm run preview
```

## Current scope
This repository contains the public website only. It does not include a management dashboard, authentication, database, CRM, real reservations or payment processing. The forms post to an external form service (Formspree) configured through `PUBLIC_FORM_ENDPOINT`; without it they stay in demo mode.

## Before publishing
- Confirm the final brand name and logo. “Teamflow” is a temporary demo identity, not a confirmed brand.
- Replace sample imagery with licensed/owned photos of real activities.
- Replace contact placeholders.
- Confirm package inclusions and prices. All package prices are examples in MDL, not commercial offers.
- Have legal pages reviewed and adapted to the real operator and applicable law.
- Connect forms to a real, secured backend before accepting customer requests.

## Form endpoint

The quote, event configurator, and career forms are ready for an HTTPS JSON endpoint. Copy `.env.example` to `.env`, set `PUBLIC_FORM_ENDPOINT`, and use an endpoint that accepts `POST` requests with the form fields. When the variable is empty, the forms intentionally remain in demo mode.

## Deploy
The site is published to GitHub Pages at https://igodig.github.io/team-building-platform/ by `.github/workflows/build.yml`. Pages must use the **GitHub Actions** source. Every push to `main` runs `npm ci` and `npm run build` (type check + build) and then deploys; pull requests to `main` only run the build. If the build fails, the error is shown as an annotation on the workflow run.

The form endpoint comes from the repository variable `PUBLIC_FORM_ENDPOINT`, falling back to the value in the workflow file.

## Branches
Work on a short-lived branch, open a pull request into `main`, and merge once the build is green. `main` is always what is live.
