# VOLT Fitness — Design System

## Pattern
Hero-Centric, Conversion-Optimized, Feature-Rich Landing Page

## Style
Dark Mode + Glassmorphism + Neon Accents + Kinetic Typography

## Colors
- **Primary (Volt):** #ccff00
- **Primary Dark:** #9dcc00
- **Background:** #09090b
- **Surface (Carbon):** #131316
- **Surface Light:** #1c1c21
- **Text (Foreground):** #fafafa
- **Muted (Ash):** #a1a1aa
- **Border:** rgba(255,255,255,0.1)

## Typography
- **Display:** Bebas Neue (weight 400) — headlines, stats, labels
- **Body:** Geist Sans — paragraphs, captions, UI text
- **Mono:** Geist Mono — code, data

## Key Effects
1. Scroll-reveal (IntersectionObserver, stagger delays)
2. Animated counters (ease-out cubic)
3. Neon flicker on accent text
4. Floating elements (float-y, float-y-slow)
5. Pulse-glow on CTA buttons
6. Shine-sweep on buttons/cards
7. Gradient mesh backgrounds on sections
8. Mouse-follow glow on hero
9. Bar pulse (heartbeat-style energy bars)
10. Marquee ticker with volt background

## Anti-Patterns
- Overuse of neon glow (keep it selective for emphasis only)
- Low contrast text on dark backgrounds (maintain 4.5:1 minimum)
- Missing hover states on interactive elements
- Ignoring prefers-reduced-motion
- Emojis as icons (use SVG: Heroicons/Lucide)

## Pre-Delivery Checklist
- [ ] Accessibility: focus states on all interactive elements
- [ ] Contrast: text/background meets 4.5:1 ratio
- [ ] Responsive: tested at 320px, 768px, 1024px, 1440px
- [ ] Reduced-motion: respects prefers-reduced-motion
- [ ] Performance: images use next/image with priority loading
- [ ] Lint passes with no errors
- [ ] Build succeeds without warnings