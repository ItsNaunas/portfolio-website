# 📦 Component Reference

Quick reference for all components in this project.

---

## Navigation

### `Header.tsx`
**Location:** Sticky top nav  
**Features:**
- Appears fixed at top
- Adds blur + shadow on scroll
- Desktop nav links + CTA button
- Mobile menu button (TODO: implement drawer)

**Props:** None  
**Usage:** Add once in layout/page

---

## Hero Section

### `Hero.tsx`
**Location:** Full-screen hero  
**Features:**
- Entrance animation (fade + stagger)
- Headline stack: "CONSULTANT / AGENCIES / COACHES"
- Integrated rotating stat block
- Primary CTA button

**Animation Sequence:**
1. Container fades in (0.6s)
2. "BY NAUNAS" label appears
3. Words stagger in (0.08s delay each)
4. Stat block scales in (0.8s delay)
5. JOIN button appears

**Props:** None

---

### `RotatingStat.tsx`
**Location:** Inside Hero (orange block)  
**Features:**
- Cycles through 5 stats every 2.2s
- Fade + slide transitions
- Pauses on reduced motion

**Data Source:** `lib/data.ts` → `rotatingStats`

**Props:** None

---

## Content Sections

### `LogoMarquee.tsx`
**Location:** Orange band below hero  
**Features:**
- Infinite horizontal scroll
- Pauses on hover
- Uses `react-fast-marquee`

**Data Source:** `lib/data.ts` → `marqueeLogos`

**Props:** None

---

### `Offer.tsx`
**Location:** Value proposition section  
**Features:**
- Split layout (headline + bullets)
- Check icons for bullets
- CTA box with "BOOK A CALL"
- Scroll-triggered fade-in

**Data Source:** `lib/data.ts` → `offerBullets`

**Props:** None

---

### `CaseHighlight.tsx`
**Location:** Featured case study  
**Features:**
- Laptop mockup frame
- Problem → Solution → Results layout
- Orange results pill
- Scroll-triggered animation

**Data Source:** `lib/data.ts` → `mainCaseHighlight`

**Props:** None

---

### `StatsBand.tsx`
**Location:** Orange metrics band  
**Features:**
- 3-column grid (stacks on mobile)
- Large metric numbers
- Scroll-triggered stagger

**Data Source:** `lib/data.ts` → `stats`

**Props:** None

---

### `CaseGrid.tsx`
**Location:** Case studies section  
**Features:**
- 2-column grid (1 on mobile)
- Cards with default tilt (±2deg)
- Straightens + lifts on hover
- "Read case study →" appears on hover
- Links to `/case/[slug]`

**Data Source:** `lib/data.ts` → `caseStudies`

**Props:** None

---

### `Process.tsx`
**Location:** 4-step framework section  
**Features:**
- Split layout (steps + title + arrow)
- Orange border box with steps list
- Arrow pointing left
- Scroll-triggered animation

**Data Source:** `lib/data.ts` → `processSteps`

**Props:** None

---

### `TechStack.tsx`
**Location:** Tech badges section  
**Features:**
- Centered badge grid
- Icon + label format
- Hover border color change
- Scroll-triggered scale-in

**Data Source:** `lib/data.ts` → `tech`

**Props:** None

---

## Footer

### `FooterCTA.tsx`
**Location:** Final conversion section  
**Features:**
- Large "JOIN NOW" CTA
- Subline text
- Calendly embed placeholder

**Props:** None

---

### `Footer.tsx`
**Location:** Site footer  
**Features:**
- 3-column grid: Brand / Links / Contact
- Social icons (Twitter, LinkedIn, GitHub)
- Copyright line
- Top border

**Data Source:** `lib/data.ts` → `navLinks`, `socialLinks`

**Props:** None

---

## Data Structure

All content lives in `lib/data.ts`:

```typescript
// Rotating stats (5 items)
rotatingStats: { text: string }[]

// Marquee logos (6+ paths)
marqueeLogos: string[]

// Offer bullets (3 items)
offerBullets: string[]

// Case studies (4+ items)
caseStudies: {
  slug: string
  title: string
  image: string
  problem: string
  solution: string
  result: string
}[]

// Main case highlight (1 item)
mainCaseHighlight: {
  title: string
  problem: string
  solution: string
  result: string
  image: string
  videoThumb: string
}

// Stats (3 items)
stats: {
  metric: string
  label: string
}[]

// Process steps (4 items)
processSteps: string[]

// Tech stack (6+ items)
tech: {
  name: string
  icon: string
}[]

// Nav links
navLinks: {
  label: string
  href: string
}[]

// Social links
socialLinks: {
  name: string
  url: string
  icon: string // FaTwitter, FaLinkedin, FaGithub
}[]
```

---

## Animation Details

### Hero Entrance
```typescript
containerVariants: {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    staggerChildren: 0.08 
  }
}

wordVariants: {
  hidden: { opacity: 0, y: -24 },
  visible: { opacity: 1, y: 0 }
}
```

### Scroll Reveals
```typescript
// All sections use:
useInView(ref, { once: true, margin: "-100px" })

// Then:
initial={{ opacity: 0, y: 24 }}
animate={isInView ? { opacity: 1, y: 0 } : {}}
```

### Rotating Stat
```typescript
setInterval(() => {
  setCurrentIndex((prev) => (prev + 1) % rotatingStats.length)
}, 2200)

// Transitions:
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
exit={{ opacity: 0, y: -20 }}
```

### Case Card Tilt
```typescript
initial={{ rotate: idx % 2 === 0 ? -2 : 2 }}
whileHover={{ rotate: 0, y: -8, scale: 1.02 }}
```

---

## Utility Classes

Defined in `app/globals.css`:

### Buttons
```css
.btn              /* Primary CTA (signal bg) */
.btn-secondary    /* Outline button */
```

### Layout
```css
.section-container /* Max-width container with padding */
.pill             /* Orange badge/pill */
```

### Typography
```css
.headline-xl      /* clamp(36px, 7vw, 96px) */
.headline-lg      /* clamp(28px, 5vw, 64px) */
.headline-md      /* clamp(24px, 4vw, 48px) */
.headline-sm      /* clamp(18px, 3vw, 32px) */
```

All use:
- `font-display` (Archivo Black)
- `uppercase`
- `tracking-tight`
- Responsive scaling

---

## Adding New Sections

**Template:**

```tsx
"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function MySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-ink">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Your content */}
        </motion.div>
      </div>
    </section>
  );
}
```

Then add to `app/page.tsx`.

---

## Performance Tips

1. **Images:** Use `next/image` with `priority` for hero images
2. **Lazy load:** Sections below fold animate on scroll (built-in)
3. **Fonts:** Archivo Black loads with `font-display: swap`
4. **Animations:** Disabled for `prefers-reduced-motion`
5. **Marquee:** Use `pauseOnHover` to reduce CPU when not needed

---

## Customization Examples

### Change Stat Rotation Speed
`RotatingStat.tsx` line 11:
```ts
setInterval(() => {...}, 2200) // Change 2200 to your ms
```

### Change Card Tilt Angle
`CaseGrid.tsx` line 32:
```ts
rotate: idx % 2 === 0 ? -2 : 2  // Change ±2 to your degrees
```

### Change Scroll Trigger Distance
Any component:
```ts
useInView(ref, { once: true, margin: "-100px" }) // Change -100px
```

---

**That's it!** All components are fully typed, accessible, and animation-ready. 🎨

