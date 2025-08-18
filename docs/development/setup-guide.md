# Development Setup Guide

## Prerequisites

### Required Software
- Node.js 18+ 
- npm or pnpm
- Git
- Code editor (VS Code recommended)

### Recommended VS Code Extensions
- ESLint
- Prettier
- Tailwind CSS IntelliSense
- PostCSS Language Support
- GitLens

## Initial Setup

### 1. Install Dependencies
```bash
# Install core dependencies
npm install

# Install additional required packages
npm install framer-motion lucide-react clsx tailwind-merge
npm install @radix-ui/react-accordion @radix-ui/react-dialog @radix-ui/react-tabs
npm install @radix-ui/react-select @radix-ui/react-slider @radix-ui/react-switch
npm install react-intersection-observer recharts
```

### 2. Environment Variables
Create `.env.local`:
```env
# Application
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_APP_NAME="Your Company"

# Analytics (optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_AMPLITUDE_KEY=your-amplitude-key

# API Keys (optional)
PAGESPEED_API_KEY=your-pagespeed-api-key
RESEND_API_KEY=your-resend-api-key

# Database (if needed)
DATABASE_URL=your-database-url
```

### 3. Configure Tailwind
Update `tailwind.config.ts`:
```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config
```

### 4. Global Styles
Update `src/app/globals.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 222.2 84% 4.9%;
    --primary: 221.2 83.2% 53.3%;
    --primary-foreground: 210 40% 98%;
    --secondary: 210 40% 96.1%;
    --secondary-foreground: 222.2 47.4% 11.2%;
    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;
    --accent: 210 40% 96.1%;
    --accent-foreground: 222.2 47.4% 11.2%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;
    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 221.2 83.2% 53.3%;
    --radius: 0.5rem;
  }

  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    --card: 222.2 84% 4.9%;
    --card-foreground: 210 40% 98%;
    --popover: 222.2 84% 4.9%;
    --popover-foreground: 210 40% 98%;
    --primary: 217.2 91.2% 59.8%;
    --primary-foreground: 222.2 47.4% 11.2%;
    --secondary: 217.2 32.6% 17.5%;
    --secondary-foreground: 210 40% 98%;
    --muted: 217.2 32.6% 17.5%;
    --muted-foreground: 215 20.2% 65.1%;
    --accent: 217.2 32.6% 17.5%;
    --accent-foreground: 210 40% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 210 40% 98%;
    --border: 217.2 32.6% 17.5%;
    --input: 217.2 32.6% 17.5%;
    --ring: 224.3 76.3% 48%;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
  }
}
```

## Project Structure

### Directory Layout
```
src/
├── app/                    # Next.js app router pages
│   ├── (marketing)/       # Marketing pages group
│   │   ├── about/
│   │   ├── services/
│   │   ├── pricing/
│   │   └── contact/
│   ├── tools/             # Interactive tools
│   │   ├── comparator/
│   │   └── grader/
│   ├── blog/              # Blog pages
│   ├── api/               # API routes
│   ├── layout.tsx         # Root layout
│   └── page.tsx          # Home page
├── components/
│   ├── magicui/          # MagicUI components (42 files)
│   ├── ui/               # Custom UI components
│   ├── layout/           # Layout components
│   │   ├── header.tsx
│   │   ├── footer.tsx
│   │   └── navigation.tsx
│   ├── sections/         # Page sections
│   │   ├── hero.tsx
│   │   ├── features.tsx
│   │   └── testimonials.tsx
│   └── tools/            # Tool components
│       ├── pricing-comparator.tsx
│       └── website-grader.tsx
├── lib/                   # Utilities
│   ├── utils.ts          # Helper functions
│   ├── constants.ts      # Constants
│   └── hooks/            # Custom hooks
├── styles/               # Additional styles
└── types/                # TypeScript types
```

## Development Workflow

### 1. Start Development Server
```bash
npm run dev
# Open http://localhost:3000
```

### 2. Code Standards

#### Component Template
```tsx
'use client'

import { cn } from '@/lib/utils'

interface ComponentNameProps {
  className?: string
  children?: React.ReactNode
}

export function ComponentName({ 
  className,
  children 
}: ComponentNameProps) {
  return (
    <div className={cn('default-classes', className)}>
      {children}
    </div>
  )
}
```

#### Page Template
```tsx
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page Title',
  description: 'Page description'
}

export default function PageName() {
  return (
    <main>
      {/* Page content */}
    </main>
  )
}
```

### 3. Git Workflow
```bash
# Create feature branch
git checkout -b feature/component-name

# Make changes and commit
git add .
git commit -m "feat: add component name"

# Push to remote
git push origin feature/component-name
```

## Common Tasks

### Adding a New Page
1. Create directory in `app/`
2. Add `page.tsx` file
3. Add metadata
4. Update navigation

### Adding a Component
1. Create file in appropriate directory
2. Export from index if needed
3. Add to component documentation
4. Create tests if applicable

### Updating Theme
1. Modify CSS variables in `globals.css`
2. Update Tailwind config if needed
3. Test in both light and dark modes

### Adding Analytics Event
```typescript
import { trackEvent } from '@/lib/analytics'

trackEvent('event_name', {
  category: 'engagement',
  label: 'button_click',
  value: 1
})
```

## Testing

### Run Tests
```bash
# Unit tests
npm test

# E2E tests
npm run test:e2e

# Type checking
npm run typecheck

# Linting
npm run lint
```

### Testing Checklist
- [ ] Component renders correctly
- [ ] Responsive on all breakpoints
- [ ] Dark mode works
- [ ] Keyboard navigation works
- [ ] Screen reader accessible
- [ ] No console errors
- [ ] Performance acceptable

## Build & Deploy

### Production Build
```bash
# Build for production
npm run build

# Test production build locally
npm run start
```

### Pre-deployment Checklist
- [ ] All tests passing
- [ ] No TypeScript errors
- [ ] Environment variables set
- [ ] SEO metadata complete
- [ ] Images optimized
- [ ] Performance audit passed
- [ ] Accessibility audit passed

## Troubleshooting

### Common Issues

#### Module not found
```bash
# Clear cache and reinstall
rm -rf node_modules .next
npm install
```

#### TypeScript errors
```bash
# Check types
npm run typecheck

# Generate types
npm run generate-types
```

#### Styling issues
```bash
# Rebuild CSS
npm run build:css

# Check Tailwind config
npx tailwindcss init -p
```

## Resources

### Documentation
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [Radix UI](https://www.radix-ui.com/)

### Component Libraries
- [MagicUI](https://magicui.design/docs)
- [21st.dev](https://21st.dev)
- [shadcn/ui](https://ui.shadcn.com/)

### Tools
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [WAVE Accessibility](https://wave.webaim.org/)
- [PageSpeed Insights](https://pagespeed.web.dev/)