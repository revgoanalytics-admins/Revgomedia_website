# Revgo Media and Digital website

React + TypeScript + Vite website completed from the supplied Figma Make export.

## Run locally
Use Node.js 22.12 or newer.

```sh
npm install
npm run dev
```

## Production build
```sh
npm run build
npm run preview
```

## Inquiry email delivery
The inquiry form sends submissions through the Vercel function at `/api/send-inquiry` using Resend. Set `RESEND_API_KEY` and `RESEND_FROM_EMAIL` in the Vercel project environment. The sender domain used by `RESEND_FROM_EMAIL` must be verified with Resend. `.env.example` shows the required variable names; never commit real API keys.

For local API testing, run the project with `npx vercel dev` and set the same variables in `.env.local`.

## GitHub and Vercel
Upload the project source, including package.json and package-lock.json. Do not upload node_modules or dist. Import the repository in Vercel, choose Vite, root directory ./, build command npm run build, output dist. vercel.json includes the SPA rewrite for direct access to team, work and legal pages.

## Before a public company launch
Replace the sample brand/contact details, team profiles, case studies, performance numbers, testimonials, social links, and legal text in src/App.tsx. External Unsplash images and Google fonts require internet access. Replace them with company assets as needed. Remove the noindex,nofollow meta tag in index.html after content approval.

Inquiry submissions are delivered by email and are not stored in a database.
