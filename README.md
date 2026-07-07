# Clio Academy

Specialist OCR A Level Ancient History (H407) tutoring website. Built with Vite + React.

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs to /dist
npm run preview  # preview the production build
```

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. In Vercel, **Add New → Project** and import the repo.
3. Vercel auto-detects Vite. Confirm the settings match:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
4. Deploy. `vercel.json` adds an SPA fallback so no path 404s.

> Tip: if you previously got **404 NOT FOUND**, it was because only a single
> `.jsx` component was deployed, not a project. This repo is the full project.

## Before launch

- Replace the sample testimonials with real ones.
- Connect the booking form to Calendly / Stripe / an email handler.
- Finalise the safeguarding policy and confirm DBS/checks status.
- Add privacy & terms pages.
