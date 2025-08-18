# Home Page Specification

## Overview
The home page is the primary landing page that showcases the platform's value proposition, features, and conversion elements.

## Page Structure

### 1. Hero Section
**Components**: 
- MagicUI HeroHighlight + Spotlight
- 21st.dev noise/gradient background
- ShinyButton for primary CTA
- Secondary button for pricing

**Content**:
```
Headline: "The lightweight website platform for small and mid-sized businesses"
Subheadline: "Skip the bloat. Launch a modern site that is fast, easy to manage, and built to convert. You stay in control by talking to it like a teammate."
Primary CTA: "Get a demo"
Secondary CTA: "See pricing"
```

**Implementation**:
```tsx
<HeroSection>
  <HeroHighlight>
    <Spotlight />
    <h1>{headline}</h1>
    <p>{subheadline}</p>
    <div className="flex gap-4">
      <ShinyButton>{PRIMARY_CTA}</ShinyButton>
      <Button variant="outline">{SECONDARY_CTA}</Button>
    </div>
  </HeroHighlight>
</HeroSection>
```

### 2. USP Grid Section
**Components**: 
- BentoGrid with 6 items
- 21st.dev 3D tilt cards for hover effects

**Content**: 6 USP tiles
1. Built for SMBs
2. Conversational control
3. Lightweight and fast
4. Conversion first
5. Transparent pricing
6. Optimized templates

**Layout**: 
- Desktop: 3x2 grid
- Tablet: 2x3 grid
- Mobile: 1x6 stack

### 3. Client Logo Marquee
**Components**: 
- 21st.dev smooth marquee component

**Features**:
- Continuous scroll
- Pause on hover
- Grayscale logos with color on hover
- 10-15 client logos

### 4. Testimonial Carousel
**Components**: 
- MagicUI Carousel
- Card components for quotes

**Content Structure**:
```
"[Outcome statement]. [One detail sentence]."
— Name, Role at Company
```

**Features**:
- Auto-advance every 5 seconds
- Swipe support on mobile
- Dots indicator

### 5. Speed Showcase
**Components**: 
- Before-After slider component
- NumberTicker for metrics

**Content**:
- Before: "5.4s to first paint"
- After: "1.2s"
- Additional metrics cards

### 6. "No Website Yet" Section
**Components**: 
- MagicCard for content blocks
- NumberTicker for statistics

**Content**:
- Headline: "No site yet? Here is why it matters."
- 4 key points: Ownership, Trust, Findability, Control
- Metric cards:
  - "2x more leads with website vs social only"
  - "80% of buyers research online first"
- CTA: "Launch my site"

### 7. "Considering a Switch" Section
**Components**: 
- Grid layout with icon cards

**Content**:
- Headline: "Already have a site but thinking of changing?"
- Pain points: Cost, Complexity, Outdated design, Slow performance
- CTA: "Get a migration plan"

### 8. Blog Preview Section
**Components**: 
- Card grid or 21st.dev fluid masonry
- Skeleton loaders

**Features**:
- Show 3-6 recent posts
- Post thumbnail, title, excerpt, date
- "View all posts" link

### 9. Lead Capture Band
**Components**: 
- Input field with button
- Background gradient or pattern

**Content**:
- Headline: "Get the starter kit"
- Subtext: "Free guide to launching your SMB website"
- Email input + Submit button

### 10. Floating CTA Pill
**Components**: 
- Sticky positioned pill
- Appears after 50% scroll

**Features**:
- Smooth fade-in animation
- Dismissible
- Links to demo booking

## Responsive Behavior

### Mobile (< 768px)
- Single column layout
- Hamburger menu
- Touch-optimized spacing
- Simplified animations

### Tablet (768px - 1024px)
- Two column grids where applicable
- Maintain aspect ratios
- Adjust font sizes

### Desktop (> 1024px)
- Full grid layouts
- All animations enabled
- Hover states active

## Performance Considerations

### Above the Fold
- Inline critical CSS
- Preload hero images
- Minimize initial JavaScript

### Below the Fold
- Lazy load images
- Defer non-critical scripts
- Use Intersection Observer for animations

## Analytics Events

Track these interactions:
- Hero CTA clicks
- USP tile hovers/clicks
- Testimonial carousel interactions
- Speed showcase slider usage
- Blog post clicks
- Lead capture submissions
- Floating CTA appearances/clicks

## SEO Requirements

### Meta Tags
```html
<title>COMPANY_NAME - Modern Websites for Small Business</title>
<meta name="description" content="Launch a fast, modern website that converts. Built for SMBs who want control without complexity.">
```

### Structured Data
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "COMPANY_NAME",
  "description": "Website platform for small businesses",
  "url": "https://yoursite.com"
}
```

## Accessibility Checklist

- [ ] All images have alt text
- [ ] Proper heading hierarchy (h1 → h2 → h3)
- [ ] Keyboard navigation works
- [ ] Focus states visible
- [ ] ARIA labels on interactive elements
- [ ] Color contrast meets WCAG AA
- [ ] Animations respect prefers-reduced-motion

## Testing Scenarios

1. **First Visit**
   - Clear value proposition visible
   - CTAs prominent
   - Fast load time

2. **Mobile Experience**
   - Touch targets adequate size
   - Text readable without zoom
   - Forms easy to complete

3. **Conversion Path**
   - Multiple CTA options
   - Clear next steps
   - Trust signals present

## Implementation Priority

1. Hero section with basic CTA
2. USP grid
3. Lead capture band
4. Testimonial carousel
5. Client logos
6. Speed showcase
7. Blog preview
8. Additional sections
9. Floating CTA
10. Polish and animations