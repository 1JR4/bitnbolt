# Brand Variables Configuration

## Overview
This document contains all customizable brand elements that should be replaced when implementing the website for a specific client. Use find-and-replace to update these throughout the codebase.

## Company Information

### Basic Details
```typescript
const BRAND = {
  COMPANY_NAME: "<Your Company>",
  TAGLINE: "The lightweight website platform for small and mid-sized businesses",
  INDUSTRY: "<Primary industry or 'multi-industry SMBs'>",
  LOCATION: "<City, State or Region>",
  YEAR_FOUNDED: "2024",
  COMPANY_TYPE: "LLC" // LLC, Inc, Corp, etc.
}
```

### Contact Information
```typescript
const CONTACT = {
  EMAIL: "<hello@yourcompany.com>",
  PHONE: "<(555) 000-1234>",
  SUPPORT_EMAIL: "<support@yourcompany.com>",
  SALES_EMAIL: "<sales@yourcompany.com>",
  ADDRESS: {
    street: "<123 Main Street>",
    city: "<City>",
    state: "<State>",
    zip: "<12345>",
    country: "<Country>"
  }
}
```

### Social Media
```typescript
const SOCIAL = {
  TWITTER: "<@yourcompany>",
  LINKEDIN: "<company/yourcompany>",
  FACEBOOK: "<yourcompany>",
  INSTAGRAM: "<@yourcompany>",
  YOUTUBE: "<@yourcompany>",
  GITHUB: "<yourcompany>"
}
```

## Call-to-Action Text

### Primary CTAs
```typescript
const CTA = {
  PRIMARY_CTA_TEXT: "Get a demo",
  PRIMARY_CTA_URL: "/contact?action=demo",
  
  SECONDARY_CTA_TEXT: "See pricing",
  SECONDARY_CTA_URL: "/pricing",
  
  TERTIARY_CTA_TEXT: "Start free trial",
  TERTIARY_CTA_URL: "/signup"
}
```

### Page-Specific CTAs
```typescript
const PAGE_CTA = {
  HOME: {
    hero: "Get started today",
    leadCapture: "Get the starter kit",
    floating: "See it in action"
  },
  ABOUT: {
    main: "Learn how we can help",
    team: "Meet the team"
  },
  SERVICES: {
    starter: "Choose Starter",
    growth: "Choose Growth",
    pro: "Choose Pro",
    custom: "Contact for custom plan"
  },
  PRICING: {
    monthly: "Start monthly",
    yearly: "Save with yearly",
    enterprise: "Contact sales"
  },
  TOOLS: {
    comparator: "Email me this estimate",
    grader: "Get full report",
    migration: "Get migration plan"
  }
}
```

## Headlines & Copy

### Home Page Copy
```typescript
const HOME_COPY = {
  headline: "The lightweight website platform for small and mid-sized businesses",
  subheadline: "Skip the bloat. Launch a modern site that is fast, easy to manage, and built to convert. You stay in control by talking to it like a teammate.",
  
  uspTiles: [
    {
      title: "Built for SMBs",
      description: "Designed for owners, not IT departments. No clutter. No learning cliff."
    },
    {
      title: "Conversational control",
      description: "Update pages, change copy, add sections by chatting with the site."
    },
    {
      title: "Lightweight and fast",
      description: "Clean components, smart caching, and speed scores that win clicks."
    },
    {
      title: "Conversion first",
      description: "Clear calls to action, proven layouts, and tested patterns."
    },
    {
      title: "Transparent pricing",
      description: "Simple plans that scale with you. No surprise add-ons."
    },
    {
      title: "Optimized templates",
      description: "Templates tested for SEO, UI, UX, content clarity, and speed."
    }
  ],
  
  noWebsiteSection: {
    headline: "No site yet? Here is why it matters.",
    points: ["Ownership", "Trust", "Findability", "Control"]
  },
  
  switchSection: {
    headline: "Already have a site but thinking of changing?",
    reasons: ["Cost", "Complexity", "Outdated look and feel", "Slow pages"]
  }
}
```

### Metrics & Stats
```typescript
const METRICS = {
  customerCount: "500+",
  averageSpeedImprovement: "3x",
  conversionLift: "2x",
  supportResponseTime: "< 2 hours",
  uptimeGuarantee: "99.9%",
  launchTime: "< 48 hours"
}
```

## Pricing Configuration

### Plan Details
```typescript
const PRICING = {
  currency: "USD",
  currencySymbol: "$",
  
  plans: {
    starter: {
      name: "Starter",
      price: 19,
      yearlyPrice: 190, // 2 months free
      features: [
        "One-page website",
        "Lead capture forms",
        "Chatbot integration",
        "Basic analytics",
        "Email support"
      ]
    },
    growth: {
      name: "Growth",
      price: 49,
      yearlyPrice: 490,
      features: [
        "Multi-page website",
        "Blog functionality",
        "Testimonials section",
        "Client showcase",
        "On-page SEO tools",
        "Priority email support"
      ]
    },
    pro: {
      name: "Pro",
      price: 99,
      yearlyPrice: 990,
      features: [
        "Everything in Growth",
        "Automation hooks",
        "Custom components",
        "API access",
        "Priority support",
        "Custom integrations"
      ]
    }
  }
}
```

## Theme & Styling

### Color Palette
```typescript
const COLORS = {
  primary: {
    light: "#3B82F6", // blue-500
    DEFAULT: "#2563EB", // blue-600
    dark: "#1D4ED8" // blue-700
  },
  secondary: {
    light: "#A78BFA", // violet-400
    DEFAULT: "#8B5CF6", // violet-500
    dark: "#7C3AED" // violet-600
  },
  accent: {
    light: "#34D399", // emerald-400
    DEFAULT: "#10B981", // emerald-500
    dark: "#059669" // emerald-600
  },
  neutral: {
    50: "#FAFAFA",
    100: "#F4F4F5",
    200: "#E4E4E7",
    300: "#D4D4D8",
    400: "#A1A1AA",
    500: "#71717A",
    600: "#52525B",
    700: "#3F3F46",
    800: "#27272A",
    900: "#18181B"
  }
}
```

### Typography
```typescript
const TYPOGRAPHY = {
  fontFamily: {
    sans: ["Inter", "system-ui", "sans-serif"],
    mono: ["JetBrains Mono", "monospace"]
  },
  fontSize: {
    xs: "0.75rem",
    sm: "0.875rem",
    base: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "4rem"
  }
}
```

## SEO & Meta Tags

### Default Meta
```typescript
const META = {
  title: "COMPANY_NAME - Modern Websites for Small Business",
  description: "Launch a fast, modern website that converts. Built for SMBs who want control without complexity.",
  keywords: "small business website, SMB web design, business website builder, fast website platform",
  
  og: {
    type: "website",
    image: "/og-image.png",
    imageAlt: "COMPANY_NAME website preview"
  },
  
  twitter: {
    card: "summary_large_image",
    creator: "@yourcompany"
  }
}
```

## Legal & Compliance

### URLs
```typescript
const LEGAL = {
  privacyPolicy: "/privacy",
  termsOfService: "/terms",
  cookiePolicy: "/cookies",
  gdprCompliance: "/gdpr",
  accessibility: "/accessibility"
}
```

### Copyright
```typescript
const COPYRIGHT = {
  text: `© ${new Date().getFullYear()} ${BRAND.COMPANY_NAME}. All rights reserved.`,
  shortText: `© ${new Date().getFullYear()} ${BRAND.COMPANY_NAME}`
}
```

## Implementation Notes

### Usage in Code
```typescript
// Import brand variables
import { BRAND, CONTACT, CTA } from '@/config/brand';

// Use in components
<h1>{BRAND.COMPANY_NAME}</h1>
<p>{BRAND.TAGLINE}</p>
<Button href={CTA.PRIMARY_CTA_URL}>
  {CTA.PRIMARY_CTA_TEXT}
</Button>
```

### Environment Variables
Create a `.env.local` file with:
```env
NEXT_PUBLIC_COMPANY_NAME="Your Company"
NEXT_PUBLIC_CONTACT_EMAIL="hello@yourcompany.com"
NEXT_PUBLIC_GA_ID="G-XXXXXXXXXX"
```

### Replacement Checklist
- [ ] Update all COMPANY_NAME instances
- [ ] Update all contact information
- [ ] Update social media links
- [ ] Update CTA text and URLs
- [ ] Update pricing information
- [ ] Update color scheme if needed
- [ ] Update meta tags and SEO data
- [ ] Update legal URLs
- [ ] Update copyright text
- [ ] Update environment variables