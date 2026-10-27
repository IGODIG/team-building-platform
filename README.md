# Team-building platform · Astro + TypeScript

Public-facing demo website for a team-building business. Built with Astro, TypeScript, and responsive CSS.

## Stack
- Astro 7, static output, self-hosted fonts (Fontsource), sitemap
- TypeScript with Astro strict config
- Reusable Astro components and typed content data
- Responsive CSS, accessible mobile navigation, category filtering
- Static activity and package detail routes generated from typed data

## Run locally
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
This repository contains the public website only. It does not include a management dashboard, authentication, database, CRM, real reservations, payment processing, or a connected form backend. Forms are client-side demos and explicitly tell the visitor that information was not transmitted or saved.

## Before publishing
- Confirm the final brand name and logo. “Teamflow” is a temporary demo identity, not a confirmed brand.
- Replace sample imagery with licensed/owned photos of real activities.
- Replace contact placeholders.
- Confirm package inclusions and prices. All package prices are examples in MDL, not commercial offers.
- Have legal pages reviewed and adapted to the real operator and applicable law.
- Connect forms to a real, secured backend before accepting customer requests.

## Form endpoint

The quote, event configurator, and career forms are ready for an HTTPS JSON endpoint. Copy `.env.example` to `.env`, set `PUBLIC_FORM_ENDPOINT`, and use an endpoint that accepts `POST` requests with the form fields. When the variable is empty, the forms intentionally remain in demo mode.

## Automated build
GitHub Actions runs `npm install` and `npm run build` on pushes and pull requests to `main`.
