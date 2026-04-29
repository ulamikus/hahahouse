# Hero Refresh — Cream + Purple Doodles

Make the hero quieter and more on-brand. Background goes from purple to warm cream, doodles become a subtle purple wallpaper, and the purple "HAHAHOUSE" wordmark becomes the focal point.

## What changes

**Hero section in `src/pages/Index.tsx` only.** Other sections stay as-is.

### Background + doodles
- Hero `bg-primary text-white` → warm cream background (`#F7F4EC`).
- Replace the current `Doodles` wallpaper with a tuned variant:
  - Same `brand-doodles-dense.jpg` source.
  - Zoomed out: tile size ~1100px (currently 640px).
  - Tinted purple via CSS filter / blend, ~15% opacity.
  - No floating icon cut-outs in the hero (they add noise). Keep them on other sections.

### Logo + text
- Bubble logo: swap dark version for the purple-on-transparent version (`brand-logo-light.png`).
- Eyebrow ("World's first museum of laughter · Zagreb, Croatia"): navy, mono, small.
- Headline "A museum. **But make it funny.**": navy, with the second clause in red.
- Subline ("40+ exhibits…"): navy at 70% opacity.
- CTA button: purple background, white text, hover flips to red. Hover label "fine." stays.
- "starting from €9…" helper: navy at 60%.
- Social icons (bottom-left): navy, "we're there too" label in navy/60.

### Stickers
- Red starburst "MUSEUM OF LAUGHTER" — keep, will read better on cream.
- Turquoise circle "PLEASE DO TOUCH EVERYTHING." — keep.

## Technical notes

- Add a new `Doodles` variant or pass props for `tileSize` and `tone="cream"` so the hero can use the lighter setting without affecting other pages. Simplest: add an optional `tileSize` prop and a `tone="cream"` branch that renders the doodle image with `filter: invert + hue-rotate` or a purple-tinted overlay using `mix-blend-multiply` at ~15% opacity.
- Cream color: add a `--cream: 42 38% 95%` token to `src/index.css` and a `cream` Tailwind color in `tailwind.config.ts` so it stays in the design system (no hardcoded hex in the component).
- No new assets needed — reuse `brand-logo-light.png` (purple wordmark) and `brand-doodles-dense.jpg`.

## Out of scope

- Other sections (Exhibits, Offers, Events, Location, Reviews) stay untouched.
- Nav and Footer unchanged.
