# HaHaHouse — Developer Handoff

This document is for a developer porting/integrating this storefront with **Medusa** (https://medusajs.com).

The repo is a **Vite + React 18 + TypeScript + Tailwind CSS v3** marketing & storefront site. There is no backend in this codebase — all product/cart data is currently hardcoded in components.

---

## 1. Stack & how to run

```bash
npm install        # or bun install / pnpm install
npm run dev        # vite dev server on :8080
npm run build      # production build → dist/
```

Key config:
- `vite.config.ts` — alias `@` → `src/`
- `tailwind.config.ts` + `src/index.css` — design tokens (HSL CSS variables)
- `src/App.tsx` — routes
- shadcn/ui components live in `src/components/ui/` (do not edit one-by-one; treat as a library)

---

## 2. Design system (do not break)

All brand styling is centralized. Reuse tokens — don't hardcode colors.

**Tokens** (`src/index.css`, `:root`):
- `--primary` House Purple `#5449D5`
- `--navy` `#2B2C82` (default text)
- `--yellow` `#FFDD00`
- `--red` `#EE3A4E`
- `--turquoise` `#34FFD7`
- `--orange` `#FF8E31`
- `--green` `#3DF76E`
- `--cool-gray` `#CDDBE1`
- `--cream` `#F7F4EC`

**Fonts** (loaded via Google Fonts in `src/index.css`):
- Display: **Fraunces** (900) → headings, applied via `.font-display` or any `h1–h4`
- Body: **Space Grotesk** → default

**Utilities** in `src/index.css`:
- `.bg-grad-sunset`, `.bg-grad-jungle`, `.bg-grad-electric`
- `.animate-float`, `.animate-ticker`, `.hover-wiggle`, `.animate-spin-slow`

**Shared components** (`src/components/site/`):
- `Layout.tsx` — wraps every page with `Nav` + `Footer`
- `Nav.tsx`, `Footer.tsx`
- `Sticker.tsx` — branded badges (variants: `starburst`, `pill`, `arrow`)
- `Doodles.tsx`, `RotatingHeadline.tsx`, `TicketReminder.tsx`

---

## 3. Page map

| Route | File | Purpose |
|---|---|---|
| `/` | `src/pages/Index.tsx` | Marketing home (hero video, exhibits, reviews, events) |
| `/tickets` | `src/pages/Tickets.tsx` | Ticket purchase flow |
| `/shop` | `src/pages/Shop.tsx` | Gift tickets + merch + cart drawer |
| `/private-events` | `src/pages/PrivateEvents.tsx` | Private bookings inquiry |
| `/about` | `src/pages/About.tsx` | About / founder |
| `*` | `src/pages/NotFound.tsx` | 404 |

---

## 4. What to wire to Medusa

The codebase has **no real commerce logic** — everything below is mocked and needs to be replaced with Medusa SDK calls.

Install the SDK in the storefront:
```bash
npm install @medusajs/js-sdk
```

### 4.1 `src/pages/Shop.tsx` — products & cart
Currently uses two hardcoded arrays (`giftTickets`, `merch`) and a `useState<Item[]>` cart.

Replace with:
- `sdk.store.product.list()` for merch and gift cards
- `sdk.store.cart.create()` / `retrieve()` / `createLineItem()` / `updateLineItem()` / `deleteLineItem()`
- Checkout button → Medusa checkout flow (`sdk.store.cart.complete()` after payment session)
- Persist `cart_id` in `localStorage`

Gift tickets and gift cards map naturally to **Medusa Gift Cards** + standard products.

### 4.2 `src/pages/Tickets.tsx` — ticketed events
Medusa doesn't ship a ticketing/inventory-by-date module out of the box. Options:
- Model each time slot as a Medusa **product variant** with `inventory_quantity` = seats, OR
- Use a separate booking service (e.g. a custom Medusa module, or third-party like TIQETS/Bookwhen) and let Medusa handle only payment.

### 4.3 `src/pages/PrivateEvents.tsx` — inquiries
This is a contact/inquiry form, not commerce. Send to your own endpoint or an email service (Resend, Postmark). Not a Medusa concern.

### 4.4 Customer accounts (optional)
Use `sdk.store.customer.*` if you want login, order history, saved addresses.

### 4.5 Environment variables
Create `.env`:
```
VITE_MEDUSA_BACKEND_URL=https://your-medusa-backend.com
VITE_MEDUSA_PUBLISHABLE_KEY=pk_...
```
Initialize once in `src/lib/medusa.ts`:
```ts
import Medusa from "@medusajs/js-sdk";
export const sdk = new Medusa({
  baseUrl: import.meta.env.VITE_MEDUSA_BACKEND_URL,
  publishableKey: import.meta.env.VITE_MEDUSA_PUBLISHABLE_KEY,
});
```

---

## 5. Assets
All images are in `src/assets/` and imported as ES modules. The hero video lives in `public/video/hero-walkthrough.mp4` (see `public/video/README.md` for specs). Replace 1:1 — keep filenames.

---

## 6. Alternative: port to Medusa's Next.js starter
If the team prefers Medusa's official storefront stack:
1. `npx create-medusa-app@latest` → choose Next.js storefront
2. Copy `src/index.css` tokens into the Next app's globals
3. Copy `tailwind.config.ts` token extensions
4. Port components from `src/components/site/` and pages from `src/pages/` into Next's `app/` router (rename `react-router-dom` `<Link>` → `next/link`, remove `BrowserRouter`)
5. Wire commerce pages to the SDK as above

This loses the Vite setup but gains SSR, image optimization, and Medusa's reference checkout.

---

## 7. Things NOT to change
- `src/index.css` token names (other files reference them)
- `tailwind.config.ts` color extensions
- The Fraunces + Space Grotesk pairing
- `src/components/ui/` (shadcn primitives — regenerate via shadcn CLI if needed)

Questions on intent / brand voice → check `src/pages/Index.tsx` for tone of copy.
