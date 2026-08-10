# Ngwendu Gambu Portfolio

The source for [portfolio-ngwendu.vercel.app](https://portfolio-ngwendu.vercel.app), an employment-first portfolio for Johannesburg-based Full-Stack Software Engineer and Creative Developer Ngwendu Gambu.

The site connects commercial product delivery, responsive frontend systems, and an active real-time graphics practice without presenting them as interchangeable portfolio cards.

## Selected work

- [KOI](https://portfolio-ngwendu.vercel.app/work/koi) presents an active client platform built around Next.js, relational data modelling, and precise responsive interface engineering.
- [moBikes](https://portfolio-ngwendu.vercel.app/work/mobikes) documents sold commercial work focused on trust, offer clarity, and a direct application path.
- [Signal Field](https://portfolio-ngwendu.vercel.app/work/signal-field) examines GPU-driven animation through Three.js, instancing, GLSL, procedural motion, and bloom.
- [SÉRA](https://portfolio-ngwendu.vercel.app/work/sera) explores editorial frontend systems, reusable GSAP motion, responsive media, and reduced-motion support.

## Technical foundation

- Next.js App Router, React, and TypeScript
- modular typed content for project and portfolio copy
- server-rendered structure with isolated client-side motion
- Framer Motion with reduced-motion fallbacks
- responsive image handling through `next/image`
- metadata, social previews, sitemap, robots, and structured data
- Sentry runtime instrumentation with source-map handling at build time

The architecture intentionally leaves room for future WebGL-heavy work without making a canvas runtime part of every page.

## Routes

```text
/
/work/koi
/work/mobikes
/work/signal-field
/work/sera
```

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Verification

```bash
npm run lint
npm run typecheck
npm run build
```

The production project deploys from the repository's `main` branch through its existing Vercel Git integration.
