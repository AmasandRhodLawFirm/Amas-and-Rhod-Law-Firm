# Website Restructuring Assets

The September 2026 revision follows the client's Website Restructuring document.
The Drive-image import and a new standalone Complaints Policy are deferred.
The footer's Complaints Policy link opens the existing published complaints
process in the Client Interview Policy. No legal policy text was authored or
changed as part of this revision.

## Generated Images

Created with the built-in image generation tool, then encoded as WebP. These
are thematic illustrations, not photographs of the firm's staff or premises.
Original generated PNGs remain in the Codex generated-images directory.

- `public/images/lady-justice-hero.webp`: 1672 x 941, 75,474 bytes.
- `public/images/maritime-shipping.webp`: 1200 x 675, 114,262 bytes.
- `public/images/family-support.webp`: 1200 x 675, 34,990 bytes.

### Hero Prompt

Use case: photorealistic-natural. Asset type: full-bleed homepage hero photograph for Amas & Rhod Law, a Nigerian law firm. Create a distinctive sophisticated legal-themed editorial photograph, wide landscape 16:9. Main subject: a beautifully sculpted dark bronze Lady Justice statue, blindfolded, with clearly visible balanced scales and sword, placed in the right half of the composition, against a refined modern architectural setting with pale stone and deep charcoal vertical panels. Statue and scales should be fully readable, accurate and crisp, not cropped off at top or sides. Left half is quiet charcoal architectural negative space with subtle natural surface texture for white website text overlay; no text in the image. Soft daylight lights the statue, with gentle metallic highlights. Elegant, contemporary, credible legal-profession visual. Restrained neutral charcoal, silver and subtle bronze; not dominated by brown or orange. No people, no logos, no watermarks, no lettering, no gavels, no dramatic fog, no blur or bokeh. Generous framing so it can adapt to mobile crops.

### Maritime Prompt

Use case: photorealistic-natural. Asset type: website practice-area photograph for Maritime Law at a Nigerian law firm. Wide landscape 16:9 professional editorial image of a large cargo container ship at a working seaport, calm blue-green water, organized container stacks and gantry cranes. Clear daylight, realistic details, confident contemporary composition, ship clearly visible, clean neutral colors with varied container colors. This is generic thematic artwork, no specific real operator. No text, no logos, no watermarks, no border. Keep main subject centrally framed with room for a wide website crop.

### Family Prompt

Use case: photorealistic-natural. Asset type: website practice-area photograph for Family Law at a Nigerian law firm. Wide landscape 16:9 tasteful professional editorial photograph: close view of a Black parent and a school-age child's hands held supportively across a light neutral table, with another adult hand resting nearby, focus on the gesture of care and protection. Only hands and cropped sleeves, no faces or identifying people. Natural soft daylight, realistic anatomy, modern setting, simple white and muted green clothing, warm human feeling without overly sentimental staging. Sharp clear image, realistic skin texture. Central grouping of hands with generous surrounding space for wide crops. No text, no logos, no watermark, no legal props, no border.

## Existing Artwork and Fonts

The entertainment, immigration and property images are optimized copies of
existing project images. Article artwork is selected in
`src/data/articlePresentation.js`; a cover image published in Sanity takes
precedence over local artwork. Existing gallery images remain unchanged.

Cormorant Garamond (headings) and Inter (body/UI) are self-hosted Latin variable
WOFF2 fonts from Google Fonts. Their Open Font License files are included in
`public/fonts`. Weights 400 through 700 are available without a runtime request
to Google Fonts.
