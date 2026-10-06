# Persona Builder visual system

The homepage now uses the full-screen scroll-controlled reveal documented in `scroll-reveal.md`. The ten-second motion timeline and video assets described below remain the original reusable standalone exports.

## What this deliverable is

A marketing composition for the intended Persona Builder, not a functioning editor or proof that these features are shipped. The repository audited on October 6, 2026 contains a React/Vite landing page with no persona editor, API, or backend. The scene is clearly labeled as an illustrative preview and its character as fictional.

## Design audit

The supplied AI Fan Agency screenshot and repository show a text-led hero followed by repeated feature and process cards. Product imagery is absent, and sections have similar visual emphasis. The brand already uses midnight surfaces, magenta `#ff2d7e`, violet `#a855f7`, and blue `#3b82f6`.

The new section introduces a spacious product moment immediately after the hero: an editorial headline, a single large studio composition, an original synthetic portrait, a clear draft-review payoff, and three brief story beats. Apple screenshots informed only the level of hierarchy and product presentation. No Apple imagery, logos, typography, or color tokens were used in the new section.

The global unlayered margin/padding reset was overriding Tailwind utilities. Moving that reset into the base layer restores the existing spacing utilities. This is the only intentional layout change outside the showcase. Two existing TypeScript errors in the class helper and nullable FAQ state were also corrected.

## Truthful content boundary

The existing landing-page feature and workflow descriptions establish the intended look, personality, niche, and platform choices. The new mockup shows only those concepts. Instagram and Fanvue are planned channel selections, not connected accounts or successful integrations. “Persona draft ready” describes the demo narrative, not a live generation result. Nova is an original fictional adult AI character. No earnings, customer quotes, engagement statistics, approvals, platform guarantees, or real users were added.

The existing page contains earnings estimates, testimonials, refund statistics, and compliance claims for which this repository provides no supporting evidence. These were not changed in this contained showcase task and require a separate content review before being relied upon or published as verified proof.

## Reusable visual rules

- Base: midnight `#0a0a0f`; studio shell `#101018`; controls `#191721`.
- Accent: magenta for identity and primary action; violet for personality and portrait lighting; blue for planned channels.
- Typography: system/Inter stack already used by the site. Large, tightly tracked story headlines; quiet supporting copy; small uppercase interface labels.
- Surfaces: one dominant studio window, restrained borders, soft depth, ample negative space. Avoid multiplying marketing cards.
- Portraits: original synthetic adults, clearly identified as fictional AI creators. Never substitute a real customer or celebrity likeness.
- Future product moments should reuse this spacing, caption, disclosure, motion-control, and narrative structure, with their own evidence boundary.

## Motion timeline

The native CSS loop is ten seconds. Its first and final keyframes match.

| Time | Narrative |
| --- | --- |
| 0–1.6 s | Identity field comes into focus |
| 1.5–2.6 s | Niche becomes prominent |
| 2.6–3.8 s | Personality tags appear |
| 3.6–4.8 s | Planned channels come into focus |
| 2.5–5.4 s | A gentle scan travels across the portrait |
| 5.5–6.5 s | Persona draft confirmation appears |
| 6.5–8.6 s | Hold the complete composition |
| 8.6–10 s | Softly return to the initial state |

Transforms and opacity drive the narrative. The scan is a small decorative accent. The section pauses offscreen through IntersectionObserver, supports a visible pause/play button, and switches to a complete still for `prefers-reduced-motion`. The illustrated controls are deliberately not interactive form fields; the composition has a descriptive accessible image label.

## Assets and integration

- `src/components/PersonaShowcase.tsx`: responsive scene, story copy, observer, reduced-motion handling, and playback control.
- `src/components/persona-showcase.css`: scoped visual system and ten-second animation.
- `public/showcase/nova-portrait.webp`: original portrait, resized to 800 × 1000, about 47 KB.
- `public/showcase/persona-builder-static.png`: full-state export for reuse as a poster or presentation still.
- `public/showcase/persona-builder-loop.mp4`: ten-second silent H.264 loop at 30 fps, with fast-start metadata.
- `public/showcase/persona-builder-loop.webm`: alternative VP9 export.

The original showcase used a native responsive CSS loop built from the same composition and timing as the video exports. The homepage now uses the scroll reveal; the following describes the original export implementation. This keeps text sharp, adapts the layout on phones, avoids loading a video on every visit, and lets reduced-motion users see the completed concept. Assets use `import.meta.env.BASE_URL` so the GitHub Pages `/AI-Fan-Agency/` deployment path is respected.

For video reuse, use `autoplay muted loop playsinline`, include the PNG poster, and preserve the illustrative-preview caption. Honor reduced-motion preferences and provide a pause control. A 16:9 crop is not assumed; the exported loop retains the complete studio composition.

## Portrait generation

Created with the built-in image generation tool. Prompt: an original fictional adult woman age 28, dark wavy shoulder-length hair, warm brown eyes, natural makeup, modest black crew-neck top, relaxed confident expression, premium chest-up editorial studio portrait, midnight backdrop, restrained violet and magenta rim light, natural skin detail, vertical 4:5 composition, empty lower space for UI, no text/logos/interface/celebrity likeness/sexualization. The portrait represents Nova, a fictional AI creator, never a real customer.

## Local review

From the repository folder:

```powershell
npm ci
npm run dev
```

Open `http://localhost:3001/AI-Fan-Agency/#persona-builder`. For a production check, run `npm run build` and `npm run preview`. Strict source checking: `npx tsc --noEmit`.

No live site deployment, remote push, or merge is part of this deliverable. The work is on local branch `codex/persona-showcase`.

## Validation results

- Vite production build: passed.
- Strict TypeScript source check: passed after the two small existing type corrections.
- Chromium production preview at 320, 390, 768, and 1440 px: no horizontal overflow; portrait decoded successfully at every width.
- Pause/play control: passed. Offscreen animation pause: passed.
- Reduced-motion preference at every tested width: zero active scene animations, complete still state, playback button disabled with “Still preview” label.
- Loop boundary: all seven animations have matching opacity, transform, and position values at 0 and 10 seconds.
- Browser page errors: none. The existing site requests a missing favicon; this unrelated 404 does not affect the showcase.
- MP4 export: H.264, 1280 × 896, 30 fps, ten seconds, silent, fast-start metadata.
- Browser coverage is Chromium desktop with responsive viewport checks, not physical iPhone/Safari testing. No backend functionality is implied or tested.
- The repository's `lint` script points to ESLint without providing ESLint or a configuration, so lint is unavailable in the existing setup. No dependency upgrades were made.
