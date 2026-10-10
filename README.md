# Surgical Oncology Team portfolio

React 18, Vite, and Tailwind CSS. The homepage introduces the team, clinical expertise, and clinic contacts; profiles retain the existing medical content.

## Local development

- `npm ci`
- `npm run dev`
- `npm run lint`
- `npm run build`
- `npm run preview`

## Content ownership

Clinic locations, schedules, secretaries, phone numbers, and map links are centralized in `src/clinics.json`. Doctor biographies and credentials must be reviewed by the team before substantive edits. Footer credits are shared in `src/components/Footer.jsx`.

Raster assets have optimized WebP counterparts; originals remain for review. No backend, booking submission, or patient data collection is added. Contact buttons use phone links.

## Deployment and review

Production is hosted at https://surgicaloncology.vercel.app. `vercel.json` rewrites extensionless application routes to the SPA entry point; static assets retain their paths. The routing fix takes effect only after an approved deployment. Confirm the Vercel Git connection and production branch before pushing: historic deployment metadata uses the repository name `web-doc-portfolio`, while the current remote is `kcrosita23/doctors`.

Changes are developed locally on `codex/oncology-portfolio-refresh`. Do not merge or deploy without explicit approval. Before publishing, check desktop and mobile navigation, all three doctor profiles, direct profile loads and refreshes, unknown routes, service selectors, keyboard focus, phone/map links, and social metadata. Clinic schedules are preserved from the previous source, not independently verified.
