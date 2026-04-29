## Hero v2 — Walkthrough Video, Color Factory Style

Replace the current messy hero with a clean, cinematic one: full-bleed autoplaying video of the museum, circular HaHa House logo floating in the top-left corner (replacing the nav for the hero area), and a single rotating headline that swaps every ~3 seconds in your brand font.

### What you'll see

```text
┌──────────────────────────────────────────────────────────────┐
│  ◯ logo                                  [nav stays at top]  │
│                                                              │
│                                                              │
│                  [walkthrough video plays]                   │
│                                                              │
│                    A MUSEUM. BUT FUNNY.                      │  ← rotates
│                                                              │
│                                                              │
│                                          [Tickets corner ↓]  │
└──────────────────────────────────────────────────────────────┘
       VOTED #1 ESCAPE FROM REALITY · ZAGREB, 2026             ← thin strip below
```

- **Full-bleed background**: autoplaying, looping walkthrough video. No controls except mute, no branding, no overlays except the dark gradient that keeps the rotating text legible.
- **Circular logo, top-left**: the round HaHa House mark, white version, floating directly over the video at ~110px. Nothing else competes with it in that corner.
- **TWO MESSAGES EARLY IN THE VIDEO, centered**: one short line at a time, huge display type, EACH LASTS 3 SECONDS AND APPEAR IN 3 SECONDS APART with a fade-in / fade-out. Always reads as "designed," never as a slideshow.
- **Thin strip below the video**: small all-caps line — "VOTED #1 BEST PLACE TO LAUGH IN ZAGREB · 2026" — pulled straight from the Color Factory pattern. Helper text and stickers are gone.
- **No giant centered logo, no eyebrow paragraph, no helper line, no socials in the hero.** Those move to the footer / lower sections.

### The rotating messages (in your voice)

TWO lines, each shown for ~3s, then loop. Pick any 4–6 you like, I'll wire whichever you choose:

1. **LIKE A MUSEUM. BUT FUNNY.**
2. **40+ EXHIBITS DESIGNED TO MAKE YOU LAUGH.**

All caps, Fraunces (your display font), white, with a soft drop-shadow so it reads on any frame of the video. One word per line on small screens, the full line on desktop.

### Hosting decision

**Self-host the MP4.** Same as Color Factory does. No ads, no third-party logos, no end-screen recommendations, full control. The video file goes in the project's `public/` folder and plays via a native HTML5 `<video>` tag with `autoPlay muted loop playsInline`. Vimeo (paid) is a fine fallback if file size becomes a problem; YouTube is not appropriate for a hero — even with all settings off, it can still flash controls and has the "YouTube" wordmark on the player.

You'll need to give me one MP4 file:

- **Resolution**: 1920×1080 (or 1280×720 if the source isn't HD)
- **Length**: 15–25 seconds, designed to loop seamlessly
- **Audio**: doesn't matter, it'll be muted
- **File size target**: under 8 MB — I'll re-encode in the sandbox if it's bigger
- **Content**: a fast, joyful walkthrough — people reacting, exhibits, color, motion. Avoid dialogue/lip-sync (it's muted) and avoid talking-head shots.

If you don't have a final cut yet, I can wire up a placeholder video so you can see the layout immediately, then swap in your real file when it's ready.

### Out of scope

- Nav / header bar (stays as-is at the top of the page)
- All sections below the hero (Exhibits, Offers, Events, Location, Reviews) — untouched
- Stickers, eyebrow paragraph, doodle background, giant centered logo — all removed from the hero specifically; doodles still appear on other sections

### Technical notes

- Replace the entire hero `<section>` in `src/pages/Index.tsx`.
- Use a native `<video autoPlay muted loop playsInline preload="auto">` element, absolutely positioned to fill the section, `object-cover`, with `aria-hidden`.
- Add a subtle dark gradient overlay (`bg-gradient-to-b from-black/30 via-transparent to-black/40`) so the rotating text and corner logo always have contrast regardless of the frame underneath.
- Section height: `h-screen` (or `min-h-[88vh]` to leave a sliver of the next section showing — Color Factory does this and it works).
- Use the existing circular brand mark — `src/assets/brand-logo.jpg` is the round version (will check and confirm); if it has a background, swap to the transparent PNG version.
- Rotating text: a tiny self-contained component using `setInterval` to cycle an index every 3000ms, with Tailwind opacity transitions for the fade. No external dependency.
- Place the MP4 at `public/video/hero-walkthrough.mp4` and reference it as `/video/hero-walkthrough.mp4`.
- Add a `poster` attribute (single still frame, ~80 KB) so the hero renders instantly while the video loads.
- Mobile: same layout, but reduce the rotating text from `text-7xl` to `text-4xl` and the logo from 110px to 72px. Video still plays (iOS allows autoplay when muted+playsInline).
- Performance: only one video, ~5 MB. No noticeable impact on page load with `preload="auto"` and a poster.
- Remove the now-unused `Doodles` import, `Sticker` import, `bubble`/`heroDoodles` imports from this file.