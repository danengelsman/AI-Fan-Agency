# Full-screen Persona Builder reveal

The homepage now opens the Persona Builder story on a native sticky viewport stage immediately after the hero. The original exported still and ten-second MP4/WebM loop remain available as standalone marketing assets. The site itself now uses scroll position rather than a repeating timer for this scene.

## The sequence

1. **Idea:** “Every creator starts with an idea.” A dim portrait hints at what is coming.
2. **Choices:** Lifestyle, Warm, and Confident appear sequentially as the portrait gains light.
3. **Reveal:** “Meet Nova.” The original fictional portrait becomes the dominant visual.
4. **Pullback:** The portrait recedes and the complete intended Persona Builder interface appears.
5. **Review:** “A persona draft. Ready for your direction.” The interface holds before the page returns to normal content.

The sticky stage sits below the existing 48 px navigation. Desktop uses a 340 svh track, giving approximately 2.4 viewport heights of controlled scrolling; mobile uses 240 svh. The full-screen scene retains midnight, magenta, violet, and blue. There are no new images, animation dependencies, network services, or third-party scripts.

## Interaction and accessibility

Scroll position maps directly to the reveal. Upward scrolling retraces the same sequence; when scrolling stops, the scene holds. Passive scroll listeners schedule a single requestAnimationFrame update. IntersectionObserver suspends updates outside the track. ResizeObserver recalculates the studio scale to fit the viewport, including shorter desktop screens.

“Show complete preview” collapses the scroll track into a completed still and brings it into view. “Enable scroll story” restores the sequence. Reduced-motion preferences automatically use the completed static view without a long sticky track. No wheel interception, forced scrolling during the sequence, or scroll snapping is used. The explicit preview control and normal anchor links are the only programmatic navigation.

Animated visual duplicates are hidden from assistive technology. A stable descriptive heading and explanation communicate the complete story. The preview toggle and detail links remain keyboard-accessible with visible focus styles. A persistent readable footer identifies the scene as an illustrative product concept and Nova as fictional.

On phones, the reveal concludes with a large readable persona summary. The full responsive Persona Builder interface follows in the details section, avoiding an unreadably tiny desktop interface inside a phone viewport. The disclosure and the existing three explanatory story beats remain below the reveal on all devices.

## Scope

- Added `PersonaReveal.tsx` and `persona-reveal.css` for the scroll stage.
- Extracted the reusable existing studio composition into `PersonaScene.tsx`.
- Updated `PersonaShowcase.tsx` to use the new reveal, retain the explanation, and display the full interface below the mobile story.
- No new edits to hero, pricing, features, testimonials, contact behavior, or dependencies.
- Work remains local on `codex/persona-showcase`; no push or live deployment.

The illustration describes intended functionality. This repository still contains no working persona editor or backend. It introduces no evidence of shipped capabilities, customers, connected platform accounts, or revenue.

## Validation

The accompanying `scroll-reveal-validation.json` records production-browser checks of the story phases, reverse scrolling, stopped scrolling, complete-preview control, reduced-motion fallback, viewport fit, and detail/workflow links. Screenshots capture the idea, choices, Nova reveal, full studio, mobile summary, mobile details, and reduced-motion presentation. Build and strict TypeScript checks are run separately. Browser coverage is Chromium with responsive viewport checks rather than physical iPhone/Safari testing.

All checks passed on the final production build: no page JavaScript errors; stage pinned at 48 px in each phase; reverse scroll returned to the same choices state; stopping scroll held that state; the complete-preview control collapsed the track, showed the final composition, and brought it into view. Reduced motion used a one-screen relative stage with no running animations. Viewports 320 × 700, 390 × 844, 768 × 1024, 1440 × 1000, and 1440 × 600 had no horizontal overflow and kept the final product composition within the viewport. Detail and workflow anchor links worked. The production build, strict TypeScript check, and Git whitespace check passed.
