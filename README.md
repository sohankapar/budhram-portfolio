# Budhram Kamait — Civil Engineer Portfolio

A premium, engineering-inspired portfolio site built with React, TypeScript, Tailwind CSS, and Framer Motion.

## Design direction

- **Palette:** Engineering Navy (`#0B1E33`), Concrete Gray (`#9BA1AB`), Charcoal (`#1A1D21`), White, Safety Orange accent (`#FF5A1F`), Steel Gray (`#4A5568`).
- **Type:** Space Grotesk (display), Inter (body), IBM Plex Mono (labels, eyebrows, measurements — reinforces the technical/blueprint feel).
- **Signature element:** a hand-drawn-style blueprint building frame in the hero that draws itself in on load, and a "structural beam" timeline (rivet nodes + steel line) for the experience section.
- Blueprint grid backgrounds, dimension-mark lines, and drafting-style SVG illustrations run throughout, but are kept subtle so content stays readable.

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build      # production build → dist/
npm run preview    # preview the production build
```

## Project structure

```
src/
  components/   Navbar, Hero, About, Experience, Skills, Projects,
                Education, Journey, Contact, Footer, SectionHeading,
                ScrollProgress, BackToTop
  data/
    content.ts  All copy and structured content in one place
  index.css     Tailwind layers + blueprint utility classes
```

## Content notes — what's real vs. placeholder

Every fact on this site (companies, roles, dates, university, social handles) comes directly from the information supplied for this project. Nothing was invented. A few areas are intentionally left as **editable placeholders** because the source information didn't include them:

- **Projects section** — no real project data (names, locations, clients, photos) was supplied, so the three cards are clearly labelled "Placeholder" and ready to be filled in.
- **Education** — the degree/programme name wasn't specified, so only the institution, location, and year are shown.
- **Software skills** (AutoCAD, STAAD.Pro, Revit, etc.) were intentionally left out since they weren't confirmed — skills are described at the level of responsibility instead (site supervision, coordination, quality monitoring).
- **Social links** — official profile URLs were constructed from the given usernames/handles; double-check each one resolves to the correct account before publishing.
- **Contact form** — validates on the client and is wired to send via [Formspree](https://formspree.io). To receive messages: sign up at formspree.io (free), create a form, copy the endpoint it gives you (looks like `https://formspree.io/f/xxxxxxxx`), and paste it into the `FORMSPREE_ENDPOINT` constant at the top of `src/components/Contact.tsx`. That's the only step required — no backend to deploy.

## Accessibility & UX

- Visible keyboard focus rings, semantic headings, alt text on illustrative SVGs, `aria-live`-friendly form errors.
- Respects `prefers-reduced-motion`.
- Scroll progress bar, active-section nav highlighting, back-to-top button, sticky nav that compacts on scroll.
- Tested layout breakpoints: 1440px, 1024px, 768px, 390px, 360px.
