# Cinematic Portfolio Starter

A dark/gold cinematic developer portfolio inspired by the reference video style.

## Stack
- Next.js 16.3.3
- React 19.2.8
- Tailwind CSS 4.3
- GSAP 3.15 + ScrollTrigger
- Lenis 1.3.26
- TypeScript

## Run
```bash
npm install
npm run dev
```
Then open http://localhost:3000

## Replace first
1. Hero name/positioning in `components/Hero.tsx`
2. Email in `components/Contact.tsx`
3. Projects, capabilities, stats, and experience in `data/portfolio.ts`
4. Replace the CSS portrait placeholder with a transparent WebP/PNG portrait

## Suggested real portrait markup
Replace `.portrait-placeholder` in `Hero.tsx` with Next/Image:
```tsx
<Image
  src="/portrait.webp"
  alt="Your name"
  fill
  priority
  className="object-contain object-bottom"
/>
```
Give the containing element `position: relative` and a fixed/min height.

## Animation map
- Navbar: initial slide/fade
- Hero: staged line reveal
- Section headings: blur + y reveal using ScrollTrigger
- Work: sticky stacked cards + scroll scaling
- Capabilities: staggered card entrance
- Experience: scroll-driven timeline line
- Cursor: GSAP-following dot/ring
- Smooth scrolling: Lenis synchronized to GSAP ticker

## Production next steps
- Wire contact form to Resend / API route
- Add actual project links and case-study pages
- Add `next/image` assets in AVIF/WebP
- Add OpenGraph metadata
- Add mobile menu
- Run Lighthouse and reduce animation on low-power/mobile contexts if necessary
