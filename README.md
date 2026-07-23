# KV DEV

Standalone website for KV DEV, built with Next.js, React, TypeScript, and Tailwind CSS.

## Requirements

- Node.js 20 or newer
- npm 10 or newer

## Install

```bash
npm install
```

## Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in a browser.

## Build

Create a production build:

```bash
npm run build
```

Run the production build locally:

```bash
npm start
```

## Deploy

The production site is deployed on Vercel from the GitHub repository.

Vercel should use the standard Next.js settings:

- Framework preset: Next.js
- Install command: `npm install`
- Build command: `npm run build`
- Output directory: leave as the Vercel default for Next.js

Environment variables are not required at the moment. If they are added later,
document their names in `.env.example` and set the real values in Vercel Project
Settings.

## Project structure

- `src/app` — pages, layouts, and global styles.
- `src/components` — reusable page and site components.
- `src/lib/projects.ts` — project records, image references, statuses, and project metadata.
- `src/lib/site.ts` — shared site-level content and configuration.

## Editing project data

Open `src/lib/projects.ts` and edit the relevant object in the `projects` array. Each project includes its URL slug, name, status, description, specifications, features, cover image, and gallery images.

Keep each `slug` unique because it is used to generate the project URL at `/projects/[slug]`. Shared project types and status labels are defined in the same file.
