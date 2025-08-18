# Component Inventory

## Overview
This document catalogs all 42 available MagicUI and 21st.dev components in the project, organized by category and usage.

## Component Categories

### 🎯 Layout & Structure (7 components)

#### bento-grid.tsx
**Purpose**: Feature grid layouts with flexible sizing  
**Props**: `children`, `className`  
**Best for**: USP grids, feature showcases, portfolio layouts  
**Example**: Home page USP section  

#### container.tsx
**Purpose**: Responsive content container  
**Props**: `size`, `className`  
**Best for**: Page width constraints  

#### expandable-masonary-section.tsx
**Purpose**: Fluid masonry layout that expands  
**Props**: `items`, `expandable`  
**Best for**: Blog previews, gallery layouts  

#### hero.tsx
**Purpose**: Hero section layout  
**Props**: `title`, `subtitle`, `actions`  
**Best for**: Page headers, landing sections  

#### hero-section.tsx (21st.dev)
**Purpose**: Enhanced hero with animations  
**Props**: `background`, `overlay`  
**Best for**: Main landing hero  

#### pricing-section.tsx (21st.dev)
**Purpose**: Complete pricing display  
**Props**: `plans`, `billing`  
**Best for**: Pricing page  

#### showcase.tsx
**Purpose**: Product/service showcase  
**Props**: `items`, `layout`  
**Best for**: Portfolio, case studies  

---

### 🎬 Animation & Effects (10 components)

#### animated-beam.tsx
**Purpose**: Animated connection lines  
**Props**: `startPoint`, `endPoint`, `duration`  
**Best for**: Process flows, connections  

#### animated-grid-pattern.tsx
**Purpose**: Animated background grid  
**Props**: `size`, `color`, `animation`  
**Best for**: Hero backgrounds  

#### aurora-background.tsx (21st.dev)
**Purpose**: Aurora gradient animation  
**Props**: `colors`, `intensity`  
**Best for**: Premium hero sections  

#### blur-fade.tsx
**Purpose**: Blur and fade animations  
**Props**: `direction`, `duration`  
**Best for**: Content reveals  

#### border-beam.tsx
**Purpose**: Animated border beam  
**Props**: `color`, `width`  
**Best for**: Highlighting important cards  

#### meteors.tsx
**Purpose**: Meteor shower effect  
**Props**: `count`, `speed`  
**Best for**: Decorative backgrounds  

#### orbiting-circles.tsx
**Purpose**: Orbital circle animations  
**Props**: `radius`, `duration`  
**Best for**: Feature highlights  

#### particles.tsx
**Purpose**: Particle system  
**Props**: `count`, `movement`  
**Best for**: Interactive backgrounds  

#### ripple.tsx
**Purpose**: Ripple click effects  
**Props**: `color`, `size`  
**Best for**: Button interactions  

#### retro-grid.tsx
**Purpose**: Retro-style grid background  
**Props**: `size`, `color`  
**Best for**: Tech/gaming themes  

---

### 🔘 Interactive Elements (12 components)

#### avatar-circles.tsx
**Purpose**: Circular avatar arrangement  
**Props**: `avatars`, `size`  
**Best for**: Team sections, testimonials  

#### circle-progress.tsx (21st.dev)
**Purpose**: Circular progress indicator  
**Props**: `percentage`, `size`  
**Best for**: Statistics, loading states  

#### magic-card.tsx
**Purpose**: 3D tilt card with hover effects  
**Props**: `content`, `tiltDegree`  
**Best for**: Feature cards, testimonials  

#### marquee.tsx
**Purpose**: Smooth scrolling marquee  
**Props**: `speed`, `direction`  
**Best for**: Client logos, testimonials  

#### number-ticker.tsx
**Purpose**: Animated number counter  
**Props**: `value`, `duration`  
**Best for**: Statistics, metrics  

#### pulsating-button.tsx
**Purpose**: Button with pulsing animation  
**Props**: `pulseColor`, `children`  
**Best for**: Primary CTAs  

#### rainbow-button.tsx
**Purpose**: Rainbow gradient button  
**Props**: `gradient`, `children`  
**Best for**: Special promotions  

#### shimmer-button.tsx
**Purpose**: Button with shimmer effect  
**Props**: `shimmerColor`, `children`  
**Best for**: Premium CTAs  

#### shiny-button.tsx
**Purpose**: Shiny metal button effect  
**Props**: `metallic`, `children`  
**Best for**: Hero CTAs  

#### text-morph.tsx (21st.dev)
**Purpose**: Morphing text animations  
**Props**: `texts`, `duration`  
**Best for**: Dynamic headlines  

#### text-shimmer.tsx (21st.dev)
**Purpose**: Shimmering text effect  
**Props**: `colors`, `speed`  
**Best for**: Attention-grabbing text  

#### shine-border.tsx
**Purpose**: Shining border animation  
**Props**: `color`, `width`  
**Best for**: Important content boxes  

---

### 💳 Pricing & Commerce (4 components)

#### pricing-card.tsx (21st.dev)
**Purpose**: Individual pricing plan card  
**Props**: `plan`, `featured`, `billing`  
**Best for**: Pricing plans  

#### pricing-tab.tsx (21st.dev)
**Purpose**: Pricing plan tabs  
**Props**: `plans`, `activeTab`  
**Best for**: Plan comparisons  

#### pricing-table.tsx (21st.dev)
**Purpose**: Comparison table for plans  
**Props**: `plans`, `features`  
**Best for**: Detailed feature comparison  

#### hero-pill.tsx (21st.dev)
**Purpose**: Pill-shaped hero element  
**Props**: `text`, `variant`  
**Best for**: Announcements, badges  

---

### 🎪 Content Display (7 components)

#### cta.tsx
**Purpose**: Call-to-action sections  
**Props**: `title`, `description`, `button`  
**Best for**: Conversion sections  

#### testimonials.tsx
**Purpose**: Testimonial display  
**Props**: `testimonials`, `layout`  
**Best for**: Social proof sections  

#### video-testimonials.tsx
**Purpose**: Video testimonial player  
**Props**: `videos`, `autoplay`  
**Best for**: Video social proof  

#### component-demos.tsx
**Purpose**: Component showcase  
**Props**: `demos`, `interactive`  
**Best for**: Feature demonstrations  

#### hero-video-dialog.tsx (21st.dev)
**Purpose**: Hero video modal  
**Props**: `videoUrl`, `thumbnail`  
**Best for**: Product demos  

#### mockup.tsx (21st.dev)
**Purpose**: Device/browser mockups  
**Props**: `device`, `content`  
**Best for**: Product showcases  

#### safari.tsx
**Purpose**: Safari browser mockup  
**Props**: `url`, `content`  
**Best for**: Website previews  

---

### 🌟 Background Patterns (2 components)

#### dot-pattern.tsx
**Purpose**: Dotted background pattern  
**Props**: `size`, `spacing`, `color`  
**Best for**: Subtle backgrounds  

#### flickering-grid.tsx
**Purpose**: Grid with flickering animation  
**Props**: `intensity`, `color`  
**Best for**: Tech-themed backgrounds  

#### grid-pattern.tsx
**Purpose**: Static grid background  
**Props**: `size`, `color`  
**Best for**: Structured layouts  

## Usage Guidelines

### Performance Recommendations

#### Heavy Components (Use Sparingly)
- `particles.tsx` - Limit to 1 per page
- `animated-beam.tsx` - Max 3-4 instances
- `orbiting-circles.tsx` - One per section
- `meteors.tsx` - Hero sections only

#### Lightweight Components (Use Freely)
- `bento-grid.tsx`
- `magic-card.tsx`
- `testimonials.tsx`
- `number-ticker.tsx`

#### Mobile Considerations
- Disable complex animations on mobile
- Use `prefers-reduced-motion` media query
- Provide fallbacks for intensive effects

### Accessibility Features

#### Built-in A11y Support
- `hero-section.tsx` - Semantic HTML
- `pricing-card.tsx` - ARIA labels
- `testimonials.tsx` - Screen reader text

#### Need Custom A11y Implementation
- `particles.tsx` - Add `aria-hidden="true"`
- `animated-beam.tsx` - Decorative role
- `orbiting-circles.tsx` - Skip links

### Theme Compatibility

#### Light/Dark Theme Ready
- All pricing components
- Text components
- Layout components

#### Need Theme Customization
- Background patterns
- Animation colors
- Button gradients

## Quick Reference

### For Hero Sections
```tsx
import { HeroSection } from '@/components/magicui/hero-section'
import { ShinyButton } from '@/components/magicui/shiny-button'
import { Particles } from '@/components/magicui/particles'
```

### For Feature Grids
```tsx
import { BentoGrid } from '@/components/magicui/bento-grid'
import { MagicCard } from '@/components/magicui/magic-card'
```

### For Pricing Pages
```tsx
import { PricingSection } from '@/components/magicui/pricing-section'
import { PricingCard } from '@/components/magicui/pricing-card'
```

### For Testimonials
```tsx
import { Testimonials } from '@/components/magicui/testimonials'
import { AvatarCircles } from '@/components/magicui/avatar-circles'
```

### For Statistics
```tsx
import { NumberTicker } from '@/components/magicui/number-ticker'
import { CircleProgress } from '@/components/magicui/circle-progress'
```

## Component Combinations

### Hero Section Stack
```tsx
<HeroSection>
  <Particles />
  <div>
    <h1>Title</h1>
    <ShinyButton>CTA</ShinyButton>
  </div>
</HeroSection>
```

### Feature Grid
```tsx
<BentoGrid>
  <MagicCard>Feature 1</MagicCard>
  <MagicCard>Feature 2</MagicCard>
  <MagicCard>Feature 3</MagicCard>
</BentoGrid>
```

### Pricing Display
```tsx
<PricingSection>
  <PricingCard plan="starter" />
  <PricingCard plan="pro" featured />
  <PricingCard plan="enterprise" />
</PricingSection>
```