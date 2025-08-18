# Pricing Comparator + TCO Estimator Tool

## Overview
An interactive tool that helps prospects quantify savings versus competing platforms by calculating Total Cost of Ownership (TCO).

## User Interface

### Layout Structure
```
┌─────────────────────────────────────────┐
│  Pricing Comparator & TCO Calculator    │
├──────────┬──────────────────────────────┤
│          │                              │
│  Controls│  Comparison Table            │
│   Panel  │                              │
│          │  ┌────────────────────────┐  │
│  (Left)  │  │  Platform Comparisons  │  │
│          │  └────────────────────────┘  │
│          │                              │
│          │  ┌────────────────────────┐  │
│          │  │   Savings Summary      │  │
│          │  └────────────────────────┘  │
│          │                              │
└──────────┴──────────────────────────────┘
```

### Control Panel (Left Side)
```typescript
interface ControlInputs {
  // Site Configuration
  pages: number;           // Slider: 1-50
  monthlyVisits: number;   // Slider: 1k-250k
  adminSeats: number;      // Slider: 1-10
  blogPostsPerMonth: number; // Slider: 0-20
  
  // Features
  ecommerce: boolean;      // Toggle
  customCode: boolean;     // Toggle
  aiEditingHours: number;  // Slider: 0-50
  
  // Billing
  contractTerm: 'monthly' | 'yearly'; // Toggle
}
```

### Comparison Table
```typescript
interface ComparisonRow {
  platform: string;
  tier: string;
  monthlyPrice: number;
  yearlyPrice: number;
  threeYearTotal: number;
  recommended?: boolean;
}
```

**Table Columns**:
- Platform name
- Recommended tier
- Est. monthly cost
- 12-month total
- 36-month total

### Savings Summary
```typescript
interface SavingsSummary {
  twelveMonthSavings: number;
  threeYearSavings: number;
  percentageSaved: number;
}
```

Display using NumberTicker components for animation.

## Calculation Logic

### Base Pricing Data
```typescript
const COMPETITOR_PRICING = {
  webflow: {
    basic: { base: 18, pageLimit: 2, visitLimit: 50000 },
    cms: { base: 29, pageLimit: 100, visitLimit: 100000 },
    business: { base: 49, pageLimit: 500, visitLimit: 500000 }
  },
  wix: {
    light: { base: 16, pageLimit: 2, visitLimit: 10000 },
    core: { base: 27, pageLimit: 50, visitLimit: 50000 },
    business: { base: 32, pageLimit: 100, visitLimit: 100000 }
  },
  squarespace: {
    personal: { base: 16, pageLimit: 20, visitLimit: 'unlimited' },
    business: { base: 23, pageLimit: 'unlimited', visitLimit: 'unlimited' },
    commerce: { base: 36, pageLimit: 'unlimited', visitLimit: 'unlimited' }
  },
  shopify: {
    basic: { base: 39, pageLimit: 'unlimited', visitLimit: 'unlimited' },
    shopify: { base: 105, pageLimit: 'unlimited', visitLimit: 'unlimited' },
    advanced: { base: 399, pageLimit: 'unlimited', visitLimit: 'unlimited' }
  }
};

const OUR_PRICING = {
  starter: { base: 19, pageLimit: 1, visitLimit: 10000 },
  growth: { base: 49, pageLimit: 10, visitLimit: 100000 },
  pro: { base: 99, pageLimit: 50, visitLimit: 500000 }
};
```

### Overage Calculations
```typescript
function calculateOverages(inputs: ControlInputs, plan: PricingPlan): number {
  let overages = 0;
  
  // Page overages
  if (inputs.pages > plan.pageLimit) {
    const extraPages = inputs.pages - plan.pageLimit;
    overages += Math.ceil(extraPages / 10) * 5; // $5 per 10 pages
  }
  
  // Visit overages
  if (inputs.monthlyVisits > plan.visitLimit) {
    const extraVisits = inputs.monthlyVisits - plan.visitLimit;
    overages += Math.ceil(extraVisits / 50000) * 10; // $10 per 50k visits
  }
  
  // Seat overages
  if (inputs.adminSeats > 1) {
    overages += (inputs.adminSeats - 1) * 10; // $10 per extra seat
  }
  
  // Feature add-ons
  if (inputs.ecommerce && !plan.includesEcommerce) {
    overages += 20; // $20 for ecommerce
  }
  
  if (inputs.customCode && !plan.includesCustomCode) {
    overages += 10; // $10 for custom code
  }
  
  // AI usage
  if (inputs.aiEditingHours > 0) {
    overages += inputs.aiEditingHours * 2; // $2 per hour
  }
  
  return overages;
}
```

### TCO Calculation
```typescript
function calculateTCO(
  baseCost: number,
  overages: number,
  months: number,
  isYearly: boolean
): number {
  const monthlyCost = baseCost + overages;
  
  if (isYearly) {
    // Apply yearly discount (2 months free)
    const yearlyTotal = monthlyCost * 10;
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;
    
    return (yearlyTotal * years) + (monthlyCost * remainingMonths);
  }
  
  return monthlyCost * months;
}
```

### Tier Selection Algorithm
```typescript
function selectOptimalTier(inputs: ControlInputs, platform: Platform): Tier {
  // Find the cheapest tier that meets requirements
  const tiers = platform.tiers.sort((a, b) => a.base - b.base);
  
  for (const tier of tiers) {
    if (inputs.pages <= tier.pageLimit && 
        inputs.monthlyVisits <= tier.visitLimit) {
      return tier;
    }
  }
  
  // Return highest tier if no match
  return tiers[tiers.length - 1];
}
```

## Lead Capture Integration

### Email Capture Form
```typescript
interface LeadForm {
  name: string;
  email: string;
  business: string;
  currentSpend?: number;
}
```

### Trigger Points
1. After 30 seconds on page
2. When savings > $500/year
3. On "Email me this estimate" click

### PDF Generation
```typescript
async function generatePDF(
  inputs: ControlInputs,
  comparison: ComparisonData,
  lead: LeadForm
): Promise<Blob> {
  // Use jsPDF or similar library
  const doc = new jsPDF();
  
  // Add header
  doc.setFontSize(20);
  doc.text('Website Platform Cost Comparison', 20, 20);
  
  // Add configuration summary
  doc.setFontSize(12);
  doc.text(`Pages: ${inputs.pages}`, 20, 40);
  doc.text(`Monthly Visits: ${inputs.monthlyVisits}`, 20, 50);
  // ... add more details
  
  // Add comparison table
  // ... render table
  
  // Add savings summary
  // ... render savings
  
  return doc.output('blob');
}
```

## Analytics Events

Track these events:
```typescript
const ANALYTICS_EVENTS = {
  // Tool interaction
  'comparator_viewed': {},
  'inputs_changed': { field: string, value: any },
  'term_toggled': { term: 'monthly' | 'yearly' },
  
  // Results
  'comparison_generated': { 
    config: ControlInputs,
    savings12Month: number,
    savings36Month: number
  },
  
  // Conversion
  'email_requested': { savings: number },
  'pdf_downloaded': { email: string },
  'demo_requested_from_tool': { savings: number }
};
```

## UI Components

### Slider Component
```tsx
<Slider
  min={1}
  max={50}
  value={pages}
  onChange={setPages}
  label="Number of Pages"
  showValue
/>
```

### Toggle Component
```tsx
<Toggle
  checked={ecommerce}
  onChange={setEcommerce}
  label="E-commerce functionality"
/>
```

### Results Table
```tsx
<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Platform</TableHead>
      <TableHead>Tier</TableHead>
      <TableHead>Monthly</TableHead>
      <TableHead>12 Months</TableHead>
      <TableHead>36 Months</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {comparisons.map(row => (
      <TableRow key={row.platform} highlighted={row.recommended}>
        <TableCell>{row.platform}</TableCell>
        <TableCell>{row.tier}</TableCell>
        <TableCell>${row.monthly}</TableCell>
        <TableCell>${row.yearly}</TableCell>
        <TableCell>${row.threeYear}</TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>
```

## Error Handling

### Input Validation
- Ensure numeric inputs stay within bounds
- Prevent negative values
- Handle edge cases (0 pages, 0 visits)

### Calculation Errors
- Catch division by zero
- Handle missing pricing data
- Provide fallback values

### User Feedback
- Show loading states during calculations
- Display clear error messages
- Provide help tooltips

## Performance Optimization

### Debouncing
```typescript
const debouncedCalculate = useMemo(
  () => debounce(calculateComparison, 300),
  []
);
```

### Memoization
```typescript
const comparison = useMemo(
  () => calculateFullComparison(inputs),
  [inputs]
);
```

### Lazy Loading
- Load PDF library only when needed
- Defer competitor data until tool is visible

## Accessibility

- Keyboard navigation for all controls
- ARIA labels on sliders and toggles
- Screen reader announcements for results
- High contrast mode support
- Focus management in modal dialogs

## Testing Requirements

### Unit Tests
- Calculation accuracy
- Tier selection logic
- Overage calculations
- PDF generation

### Integration Tests
- Form submission
- Analytics tracking
- Email delivery
- PDF download

### E2E Tests
- Complete user flow
- Different input combinations
- Lead capture process
- Mobile responsiveness