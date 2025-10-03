# 🚀 Quick Setup Guide

Follow these steps to get your portfolio up and running:

## 1. Install Dependencies

```bash
npm install
```

This will install:
- Next.js 14
- React 18
- Tailwind CSS
- Framer Motion
- react-fast-marquee
- react-icons
- TypeScript

## 2. Start Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

You should see:
- ✅ Animated hero with "CONSULTANT / AGENCIES / COACHES"
- ✅ Rotating stat block (cycles through 5 stats)
- ✅ Scrolling logo marquee (placeholder logos)
- ✅ All sections laid out correctly
- ✅ Smooth scroll animations

## 3. Add Your Content

### Edit Content
Open `lib/data.ts` and update:
- Your case studies
- Stats
- Process steps
- Tech stack
- Social links

### Add Assets

**Client Logos** → `public/logos/`
```
client1.svg
client2.svg
...
```

**Screenshots** → `public/screenshots/`
```
e-ctrl-home.jpg
main-case.jpg
...
```

**Tech Icons** → `public/logos/tech/`
```
nextjs.svg
tailwind.svg
vercel.svg
...
```

**Ranade Font** → `public/fonts/ranade/` (optional)
```
Ranade-Regular.woff2
Ranade-Light.woff2
```

## 4. Customize Colors (Optional)

Edit `tailwind.config.ts`:
```ts
colors: {
  ink: "#0C0C0C",      // Background
  "clay-1": "#481E14",
  "clay-2": "#9B3922",
  signal: "#F2613F",   // Accent orange
}
```

## 5. Add Calendly (Optional)

In `components/FooterCTA.tsx`, add:

```tsx
<div className="calendly-inline-widget" 
     data-url="YOUR_CALENDLY_URL" 
     style={{ minWidth: "320px", height: "630px" }} />
```

Then add script in `app/layout.tsx`:
```tsx
import Script from 'next/script'

// In the <html> tag
<Script src="https://assets.calendly.com/assets/external/widget.js" />
```

## 6. Update Personal Info

### Email
`components/Footer.tsx` → Change `hello@naunas.com`

### Social Links
`lib/data.ts` → Update `socialLinks` array

### Navigation
`lib/data.ts` → Update `navLinks` array

## 7. Deploy to Vercel

```bash
# Push to GitHub
git init
git add .
git commit -m "Initial portfolio build"
git push origin main

# Then deploy on Vercel:
# vercel.com → Import from GitHub
```

## 🎨 What You Get

### Animations
- Hero entrance with stagger
- Rotating stats (2.2s interval)
- Scroll-triggered reveals
- Hover effects on cards & CTAs
- Mobile-friendly (respects reduced motion)

### Sections
1. **Hero** — Animated entrance with rotating stat block
2. **Logo Marquee** — Infinite scroll
3. **Offer** — Value prop + bullets
4. **Case Highlight** — Featured project
5. **Stats Band** — 3 key metrics
6. **Case Grid** — 4 case studies with tilt/hover
7. **Process** — 4-step framework
8. **Tech Stack** — Icon badges
9. **Footer CTA** — Final conversion point
10. **Footer** — Links + social

### Pages
- `/` — Home (all sections)
- `/about` — About page
- `/case/[slug]` — Dynamic case study pages

## 🐛 Troubleshooting

### Fonts not loading?
- Archivo Black loads from Google Fonts automatically
- Ranade is optional — add `.woff2` files to `public/fonts/ranade/`
- Falls back to Inter if Ranade is missing

### Images not showing?
- Add actual image files to `public/` directories
- Update paths in `lib/data.ts`

### Animations not working?
- Check browser console for errors
- Ensure Framer Motion installed: `npm list framer-motion`

### Marquee not scrolling?
- Ensure `react-fast-marquee` installed: `npm list react-fast-marquee`

## 📝 Next Steps

1. ✅ Install dependencies (`npm install`)
2. ✅ Start dev server (`npm run dev`)
3. ⬜ Add your assets
4. ⬜ Update content in `lib/data.ts`
5. ⬜ Customize colors/fonts
6. ⬜ Add Calendly
7. ⬜ Deploy to Vercel

---

**Questions?** Everything is documented in `README.md`

**Ready to convert?** Let's build! 🚀

