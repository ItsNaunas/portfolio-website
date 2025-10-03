# Naunas Portfolio — Black/Orange Conversion-First Design

A modern, dark-themed portfolio built with Next.js 14, Tailwind CSS, and Framer Motion. Designed for consultants, agencies, and coaches who want to turn clicks into clients.

## 🎨 Design Tokens

- **Colors:**
  - `ink`: `#0C0C0C` (background)
  - `clay-1`: `#481E14`
  - `clay-2`: `#9B3922`
  - `signal`: `#F2613F` (accent orange)

- **Fonts:**
  - **Archivo Black** (headlines) — loaded via Google Fonts
  - **Ranade** (body) — local font files, falls back to Inter

## 🚀 Quick Start

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your site.

### Production Build

```bash
npm run build
npm start
```

## 📁 Project Structure

```
.
├── app/
│   ├── layout.tsx         # Root layout with fonts
│   ├── page.tsx           # Home page
│   ├── globals.css        # Global styles & utilities
│   ├── about/page.tsx     # About page
│   └── case/[slug]/page.tsx  # Dynamic case study pages
├── components/
│   ├── Header.tsx         # Sticky navigation
│   ├── Hero.tsx           # Hero with entrance animations
│   ├── RotatingStat.tsx   # Animated stat block
│   ├── LogoMarquee.tsx    # Client logo marquee
│   ├── Offer.tsx          # Value proposition
│   ├── CaseHighlight.tsx  # Featured case study
│   ├── StatsBand.tsx      # Metrics band
│   ├── CaseGrid.tsx       # Case studies grid
│   ├── Process.tsx        # 4-step process
│   ├── TechStack.tsx      # Tech badges
│   ├── FooterCTA.tsx      # Final conversion CTA
│   └── Footer.tsx         # Footer with links
├── lib/
│   └── data.ts            # All content (editable)
└── public/
    ├── logos/             # Client logos (SVG)
    ├── logos/tech/        # Tech stack icons (SVG)
    ├── screenshots/       # Case study images (JPG/PNG)
    └── fonts/ranade/      # Ranade font files (WOFF2)
```

## 🎯 Features

### Animations
- **Hero entrance:** Fade + stagger + slide animations
- **Rotating stats:** Cycle through 5 stats every 2.2s
- **Scroll reveals:** Sections fade in on scroll
- **Hover effects:** Scale + glow on CTAs
- **Accessibility:** Respects `prefers-reduced-motion`

### Sections (Home Page)
1. Hero with animated entrance
2. Logo marquee (client logos)
3. Offer / Value proposition
4. Featured case highlight
5. Stats band (3 metrics)
6. Case studies grid (4 cards with hover tilt)
7. 4-step process
8. Tech stack badges
9. Footer CTA
10. Footer with links

### Pages
- `/` — Home
- `/about` — About page
- `/case/[slug]` — Dynamic case study detail pages

## 📦 Assets Setup

### 1. Client Logos
Add SVG files to `public/logos/`:
- `client1.svg`, `client2.svg`, etc.
- Update `lib/data.ts` → `marqueeLogos` array

### 2. Case Study Screenshots
Add JPG/PNG files to `public/screenshots/`:
- `e-ctrl-home.jpg`, `main-case.jpg`, etc.
- Update `lib/data.ts` → `caseStudies` and `mainCaseHighlight`

### 3. Tech Stack Icons
Add SVG files to `public/logos/tech/`:
- `nextjs.svg`, `tailwind.svg`, `vercel.svg`, etc.
- Update `lib/data.ts` → `tech` array

### 4. Ranade Font (Optional)
If you have the Ranade font files:
1. Add `Ranade-Regular.woff2` and `Ranade-Light.woff2` to `public/fonts/ranade/`
2. The site will automatically use them via `@font-face` in `globals.css`

If you don't have Ranade, the site will fall back to Inter (system font).

## ✏️ Editing Content

All content is centralized in `lib/data.ts`:

```typescript
// Rotating stats
export const rotatingStats = [...]

// Marquee logos
export const marqueeLogos = [...]

// Case studies
export const caseStudies = [...]

// Main stats
export const stats = [...]

// Process steps
export const processSteps = [...]

// Tech stack
export const tech = [...]
```

Edit this file to update all content across the site.

## 🎨 Customizing Styles

### Tailwind Config
Edit `tailwind.config.ts` to change colors, fonts, spacing, etc.

### Global Utilities
Edit `app/globals.css` for custom utility classes:
- `.btn` — Primary CTA button
- `.btn-secondary` — Secondary button
- `.pill` — Result/stat badge
- `.headline-xl` / `.headline-lg` / etc. — Responsive headlines

## 🔧 TODO List

- [ ] Add actual client logos to `public/logos/`
- [ ] Add case study screenshots to `public/screenshots/`
- [ ] Add tech stack icons to `public/logos/tech/`
- [ ] Add Ranade font files to `public/fonts/ranade/` (or keep Inter fallback)
- [ ] Set up Calendly inline embed in `FooterCTA.tsx`
- [ ] Add mobile menu to `Header.tsx`
- [ ] Populate detailed case study content in `/case/[slug]/page.tsx`
- [ ] Update social links in `lib/data.ts`
- [ ] Update email address in `Footer.tsx`
- [ ] Optimize images with `next/image`
- [ ] Add analytics (Vercel Analytics, Google Analytics, etc.)

## 📱 Calendly Integration

To add Calendly booking:

1. Get your Calendly URL (e.g., `https://calendly.com/yourusername/call`)
2. Add inline widget in `FooterCTA.tsx`:

```tsx
<div className="w-full max-w-2xl mx-auto">
  <div 
    className="calendly-inline-widget" 
    data-url="https://calendly.com/yourusername/call?hide_event_type_details=1&hide_gdpr_banner=1"
    style={{ minWidth: "320px", height: "630px" }}
  />
</div>
```

3. Add Calendly script to `app/layout.tsx`:

```tsx
<Script src="https://assets.calendly.com/assets/external/widget.js" />
```

## 🚢 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Deploy automatically

### Other Platforms
- **Netlify:** `npm run build` → Deploy `/.next` folder
- **Cloudflare Pages:** Set build command to `npm run build`

## 📊 Performance

Target Lighthouse scores:
- Performance: ≥ 90
- Accessibility: ≥ 95
- Best Practices: ≥ 95
- SEO: ≥ 95

Tips:
- Optimize images (use WebP, responsive sizes)
- Enable Vercel Image Optimization
- Use `next/image` for all screenshots
- Lazy load components below the fold

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Marquee:** react-fast-marquee
- **Icons:** react-icons
- **Language:** TypeScript
- **Deployment:** Vercel

## 📝 License

Private project. All rights reserved.

---

Built by Naunas with conversion-first principles. Let's turn clicks into clients. 🚀

