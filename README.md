# Asma Guenaien — International Software Developer Portfolio

A personal portfolio built with React, TypeScript, TanStack Start, Vite, and Tailwind CSS. It presents selected web projects, research on health-data privacy, professional internships, education, technical skills, community involvement, and contact links in English and French.

## Run locally

Requirements: Node.js 22.12 or newer.

```bash
npm install
npm run dev
```

Open the local URL printed by the development server.

## Build for production

```bash
npm run build
npm start
```

The production server uses the generated `.output` directory. Choose a hosting provider that supports the generated Node.js server, or adapt the deployment configuration to your preferred hosting platform.

## Update your information

- Contact details, projects, experience, education, and skills: `src/lib/portfolio-data.ts`
- Page content and bilingual interface: `src/components/portfolio.tsx`
- SEO metadata: `src/routes/index.tsx` and `src/routes/__root.tsx`
- Styling and responsive layout: `src/styles.css`
- Portrait, latest CV, and project preview images: `public/media/`

Before publishing, verify that every project demo and repository URL is public and working. The research project is described from the current CV; add a public repository or demo link if one becomes available. Keep all dates and claims consistent with your latest CV.
