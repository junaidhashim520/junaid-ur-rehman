# Junaid Ur Rehman — Digital Portfolio

A cinematic personal portfolio presenting AI automation, website development, digital marketing, and content creation services.

## Live routes

- `/` — portfolio homepage
- `/projects/ai-automation` — WhatsApp AI workflow case study
- `/projects/website-development` — four website case studies
- `/projects/digital-marketing` — campaign growth case study
- `/projects/content-creation` — content workflow case study

## Technology

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- GSAP and ScrollTrigger
- Lenis smooth scrolling

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production validation

```bash
npm run check
npm run build
```

## Deploy on Vercel

1. Import this GitHub repository into Vercel.
2. Keep the detected framework as **Next.js**.
3. Keep the repository root as the project root.
4. No environment variables are currently required.
5. Select **Deploy**.

The contact form opens the visitor's configured email application and does not require a server-side email provider.

## Updating the live site from VS Code

This repository is connected to Vercel. Production deploys automatically after a push to `main`.

1. Edit and save your files.
2. Run `npm run build` to check the production build.
3. In VS Code Source Control, stage the intended files and enter a commit message.
4. Commit, then select **Sync Changes** (or **Push**).
5. Wait for Vercel to report the deployment as **Ready**.

Saving files alone does not publish them. Feature branches receive preview deployments.
The GitHub Actions workflow validates the build using Node.js 24; Vercel handles deployment separately.
Keep Vercel's Root Directory at the repository root and its Node.js version at 24.x.
