# AI Assistant Instructions - BitNBoltDotCom Project

## 🎯 Project Overview
This is a production-ready informational/marketing website template for small and mid-sized businesses (SMBs). Built with Next.js, React, Tailwind CSS, and leveraging MagicUI + 21st.dev components for modern, performant UI.

## 📁 Documentation Structure

### Quick Navigation for AI Assistants:
- **Product Requirements**: `docs/prd/` - Full specifications and requirements
- **Architecture Docs**: `docs/architecture/` - Technical architecture and decisions
- **Component Library**: `docs/components/` - Component usage and examples
- **Page Specifications**: `docs/pages/` - Individual page requirements
- **Development Guides**: `docs/development/` - Setup and development instructions
- **Tools Documentation**: `docs/tools/` - Interactive tools specifications

## 🚀 Quick Start for New AI Sessions

### 1. First Time Setup
```bash
# Check current project status
npm run build
npm run lint

# View available components
ls src/components/magicui/

# Check current pages
ls src/app/
```

### 2. Understanding the Project State
- **Current Stage**: Initial setup with components imported
- **Tech Stack**: Next.js 14, React 18, Tailwind CSS, Framer Motion
- **Component Libraries**: 42 MagicUI/21st.dev components available
- **Pages to Build**: 9 main pages + 2 interactive tools

### 3. Key Files to Review
- `docs/prd/main-requirements.md` - Complete PRD
- `docs/prd/brand-variables.md` - Customizable brand elements
- `package.json` - Current dependencies
- `src/components/magicui/` - Available UI components

## 📋 Development Tasks by Module

### Module 1: Core Setup ✅
- [x] Import MagicUI components
- [x] Import 21st.dev components
- [x] Create documentation structure
- [ ] Install required dependencies
- [ ] Set up theme system (light/dark)

### Module 2: Layout & Navigation
**Files**: `docs/pages/layout.md`
- [ ] Create RootLayout with theme provider
- [ ] Build FloatingNav/Dock header component
- [ ] Create Footer component
- [ ] Add chatbot widget slot
- [ ] Implement Command Palette (Cmd+K)

### Module 3: Home Page
**Files**: `docs/pages/home.md`
- [ ] Hero section with HeroHighlight + Spotlight
- [ ] USP BentoGrid (6 items)
- [ ] Client logo marquee
- [ ] Testimonial carousel
- [ ] Speed showcase slider
- [ ] Blog preview grid
- [ ] Lead capture band
- [ ] Floating CTA pill

### Module 4: Content Pages
**Files**: `docs/pages/[page-name].md`
- [ ] About page with MagicCard sections
- [ ] Services page with package tabs
- [ ] Testimonials page with carousel
- [ ] Blog index and post pages
- [ ] Pricing page with plan cards
- [ ] FAQ page with accordion
- [ ] Contact page with form

### Module 5: Interactive Tools
**Files**: `docs/tools/`
- [ ] Pricing Comparator + TCO Estimator
- [ ] Website Grader with scoring
- [ ] Lead capture integration
- [ ] PDF export functionality
- [ ] Analytics event tracking

### Module 6: Polish & Optimization
- [ ] SEO metadata and JSON-LD
- [ ] Open Graph and Twitter cards
- [ ] Performance optimization
- [ ] Accessibility audit
- [ ] Core Web Vitals optimization
- [ ] GA4 analytics setup

## 🛠 Component Usage Guide

### Available Component Categories:

#### Core Layout Components
- `bento-grid.tsx` - Feature grid layouts
- `hero.tsx`, `hero-section.tsx` - Hero sections
- `cta.tsx` - Call-to-action sections
- `testimonials.tsx` - Testimonial displays

#### Animation & Effects
- `animated-beam.tsx` - Connection animations
- `particles.tsx` - Particle backgrounds
- `aurora-background.tsx` - Gradient backgrounds
- `text-morph.tsx`, `text-shimmer.tsx` - Text effects

#### Interactive Elements
- `marquee.tsx` - Smooth scrolling content
- `number-ticker.tsx` - Animated counters
- `orbiting-circles.tsx` - Orbital animations
- `magic-card.tsx` - 3D tilt cards

#### Buttons
- `shimmer-button.tsx`, `shiny-button.tsx`
- `rainbow-button.tsx`, `pulsating-button.tsx`

#### Pricing Components
- `pricing-card.tsx`, `pricing-section.tsx`
- `pricing-tab.tsx`, `pricing-table.tsx`

## 📝 Brand Variables to Replace

When implementing, replace these placeholders:
```
COMPANY_NAME: <Your Company>
INDUSTRY: <Primary industry>
LOCATION: <City, State>
CONTACT_EMAIL: <hello@company.com>
CONTACT_PHONE: <(555) 000-1234>
PRIMARY_CTA_TEXT: "Get a demo"
SECONDARY_CTA_TEXT: "See pricing"
```

## 🎨 Design System

### Colors (CSS Variables)
```css
/* Light/Dark theme variables in globals.css */
--background: <theme-background>
--foreground: <theme-foreground>
--primary: <brand-primary>
--secondary: <brand-secondary>
--accent: <brand-accent>
```

### Typography
- Headings: Inter or system font
- Body: Inter or system font
- Code: Monospace font

### Spacing
- Use Tailwind's spacing scale
- Consistent padding: p-4, p-6, p-8
- Section spacing: py-12, py-16, py-24

## 🔧 Common Commands

```bash
# Development
npm run dev          # Start dev server
npm run build        # Build for production
npm run lint         # Run linter
npm run typecheck    # Check TypeScript

# Component Management
npm run storybook    # View components (if configured)

# Testing
npm test            # Run tests
npm run test:e2e    # Run E2E tests
```

## 📊 Performance Targets

- **Lighthouse Score**: 90+ across all metrics
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3.5s
- **Cumulative Layout Shift**: < 0.1
- **Bundle Size**: < 200KB initial JS

## 🚨 Important Notes for AI Assistants

1. **Always check existing components** before creating new ones
2. **Follow the modular structure** - work on one module at a time
3. **Test responsiveness** at mobile, tablet, and desktop breakpoints
4. **Maintain accessibility** - keyboard nav, ARIA labels, contrast
5. **Use semantic HTML** for better SEO
6. **Implement loading states** for dynamic content
7. **Add error boundaries** for robust error handling
8. **Follow the PRD exactly** for copy and feature requirements

## 📚 Additional Resources

- [MagicUI Docs](https://magicui.design/docs)
- [21st.dev Components](https://21st.dev)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)

## 🔄 Handoff Protocol

When handing off to another AI assistant:
1. Update the task checklist above
2. Document any custom implementations in `/docs/development/custom-code.md`
3. List any pending issues in `/docs/development/known-issues.md`
4. Update dependency list if new packages added
5. Note any deviations from the PRD in `/docs/development/deviations.md`

---

Last Updated: Current Session
Next Priority: Module 2 - Layout & Navigation