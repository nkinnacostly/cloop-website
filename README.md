# CLOOP UNIVERSE TECH — Company Website

Marketing site for **CLOOP UNIVERSE TECH LTD** (RC 9771867), a Nigerian
technology company registered with the Corporate Affairs Commission.

Built with Next.js 16 (App Router), React 19, TypeScript and Tailwind CSS v4.
Every route is statically prerendered — no server or database required.

## Running locally

```bash
npm install
npm run dev
```

Then open <http://localhost:3000>.

Other scripts:

```bash
npm run build   # production build (also type-checks)
npm run start   # serve the production build
npm run lint    # eslint
```

## Structure

| Path | What it holds |
| --- | --- |
| `src/lib/site.ts` | **Single source of truth** — company facts, services, process, nav. Edit copy here first. |
| `src/app/layout.tsx` | Fonts, metadata, JSON-LD organisation schema, nav + footer shell |
| `src/app/page.tsx` | Home |
| `src/app/products/page.tsx` | Products — Paidly, Get Any Number, MyEstateAccess |
| `src/app/services/page.tsx` | Services |
| `src/app/about/page.tsx` | About, including the public CAC registration table |
| `src/app/contact/page.tsx` | Contact page and FAQ |
| `src/app/globals.css` | Design tokens (colours, fonts, shadows) and custom utilities |
| `src/components/` | Nav, Footer, Logo, HeroArt, Reveal, ContactForm, UI primitives |

### Editing content

Almost all copy lives in [`src/lib/site.ts`](src/lib/site.ts). Adding a service
there automatically adds it to the home grid, the services page, the footer and
the contact form's dropdown.

### Product copy

The `products` array in `src/lib/site.ts` drives both the home page section and
`/products`. Scope and positioning for all three are confirmed. Two `TODO`
comments remain for detail worth adding — the countries Get Any Number covers,
and the pricing model for it and MyEstateAccess. Neither blocks launch; neither
renders on the page.

### What is deliberately not published

`src/lib/site.ts` omits the company's TIN, share capital, registered street
address and direct phone line. The street address on the CAC filing is a
residential address, and the TIN belongs on invoices rather than a public page.
Procurement teams get the full particulars from the certified CAC extract,
which the About page tells them to ask for. The RC number stays public — it is
public by design and is what anyone verifying the company actually checks.

### Design tokens

Colours and fonts are declared once in the `@theme` block of
[`src/app/globals.css`](src/app/globals.css):

- `ink-950 … ink-500` — the deep navy backgrounds
- `cream-50 … cream-300` — text and light sections
- `ember-300 … ember-600` — the orange accent
- `sea-400 / sea-500` — the teal secondary accent

Change a value there and it updates everywhere.

## The contact form

`src/components/ContactForm.tsx` composes the enquiry into a pre-filled email
and hands it to the visitor's mail client. That keeps the site backendless and
means no third party processes enquiry data.

To switch to a hosted endpoint (Formspree, Resend, your own API route), replace
the body of `handleSubmit` with a `fetch()` to that endpoint — the markup and
the success state can stay as they are.

## Before going live

1. **Point the domain.** The site is configured for `https://cloopuniverse.com`
   (`siteUrl` in `src/lib/site.ts`), which drives canonical URLs, the sitemap,
   `robots.txt` and social preview images. Add the domain in your host's
   dashboard and update DNS.
2. **Set up the mailbox.** Contact links point at `hello@cloopuniverse.com`, so
   that mailbox needs to exist before launch (Google Workspace, Zoho Mail and
   Fastmail all work; Zoho has a free tier for one domain).
3. **Add real work.** The site deliberately makes no claims about clients,
   uptime or project counts. Once you have case studies, they are the strongest
   thing you can add.

## Deploying

The site is fully static, so anything that serves Next.js output works.

**Vercel** (simplest):

```bash
npx vercel
```

Push the repository to GitHub and import it at vercel.com for automatic
deploys on every commit. Add your domain under Project → Settings → Domains.

**Netlify, Cloudflare Pages, Render:** build command `npm run build`, and use
the platform's Next.js adapter.

---

© CLOOP UNIVERSE TECH LTD · RC 9771867 · Lagos, Nigeria
