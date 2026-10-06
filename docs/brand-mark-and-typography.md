# Brand mark and typography directions

The generic robot in a gradient tile has been replaced with an original vector A/fan monogram. The ascending A connects the mark to AI and Agency; two spreading fan blades connect it to Fan and an expanding audience. Its compact geometry, open spaces, and single-color silhouette support small navigation, studio, and favicon use. The magenta/violet/blue gradient sits on the shape itself.

## Implemented

- `BrandMark.tsx`: reusable SVG component. React `useId` gives each gradient a unique reference, so multiple marks do not collide.
- Navigation and footer: new 28 px mark in place of the robot tile.
- Persona studio toolbar: matching 20 px mark.
- `public/brand/`: color, white, and black SVG assets.
- `index.html`: matching SVG favicon with the existing GitHub Pages base path.

No other icon in the product or feature grid was replaced. Space Grotesk has now been selected and applied to the brand name, headings, and persona display names; DM Sans is applied to body text and controls. Both are self-hosted, with their license files included in src/assets/fonts. The five-way comparison remains a review artifact. The previously exported product videos are historical assets and still contain the original studio symbol; regeneration is a separate export step if those videos are reused for the final brand.

## Proposed typography

1. **Creator signature — Space Grotesk:** recommended balance of recognizable display character and a clean digital product voice. Pair with DM Sans for explanatory text and controls. A custom-drawn wordmark could echo one diagonal from the A/fan mark.
2. **Digital atelier — Sora:** a more geometric and deliberate voice. Medium-weight headlines and controlled spacing suit the full-screen product reveals. Its broader proportions require care with mobile line breaks.
3. **Quiet confidence — Manrope:** a restrained, polished agency voice. Let the new symbol, portrait imagery, and visual scale provide the personality. It is calmer and less expressive than the other directions.
4. **Human warmth — Outfit:** approachable geometric type for first-time creators. Keep weights restrained to maintain a premium effect rather than making the site playful.
5. **Editorial personality — Fraunces:** a more expressive serif for character introductions and signature campaign phrases. Pair it with DM Sans in the interface; this direction makes the brand feel more like a creative studio.

These are existing fonts, not exclusive custom typefaces. A distinctive identity comes from a custom wordmark, recurring details, consistent type roles, and controlled scale/spacing. The approved wordmark redraws both uppercase A letters with a curved fan crossbar. BrandWordmark.tsx displays the exact approved vector outlines with an accessible name. This is custom lettering artwork; the installable fonts and normal headline letters remain unchanged.

The standalone interactive review lives in the deliverable folder `brand-review`, separate from the site source. A second review, `custom-lettering.html`, compares three custom vector wordmark studies; Option 1, Fan signature, is approved and applied to the navigation, footer, and Persona Builder studio. It includes real locally hosted Latin WOFF2 specimens, official font-source links, and SIL Open Font License files. It can be opened as an HTML file or served locally; choosing a font changes only the specimen, not the homepage. Body and controls use DM Sans consistently so the display-font comparison is fair.

## Validation

Production build and strict TypeScript check passed. Chromium checks at 320, 810, and 1440 px confirmed the new mark in navigation, footer, and studio, with no horizontal overflow. The favicon resolved under `/AI-Fan-Agency/brand/`. All six review fonts loaded; all five selection controls switched to the corresponding real font; the review had no horizontal overflow at 390 px. No JavaScript page errors occurred. Physical device/Safari testing is unverified.

The work remains local on `codex/persona-showcase`. No push or public deployment has occurred.
