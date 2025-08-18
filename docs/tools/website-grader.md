# Website Grader Tool Specification

## Overview
An interactive tool that analyzes a website URL and provides an instant grade with prioritized improvement recommendations. The full report is gated behind lead capture.

## Scoring System

### Overall Score Distribution (100 points)
```typescript
interface ScoringWeights {
  performance: 35;      // Page speed, load time
  seo: 20;             // SEO basics
  ux: 20;              // User experience clarity
  accessibility: 15;   // A11y compliance
  content: 10;         // Content clarity
}
```

### Grade Bands
```typescript
enum Grade {
  A = 90,  // 90-100: Excellent
  B = 80,  // 80-89: Good
  C = 70,  // 70-79: Average
  D = 60,  // 60-69: Below Average
  F = 0    // 0-59: Poor
}
```

## User Interface

### Input Section
```tsx
interface GraderInput {
  url: string;          // Required, validated URL
  sector?: string;      // Optional industry dropdown
}
```

### Results Display
```
┌────────────────────────────────────┐
│        Website Grade: B+            │
│            Score: 85/100            │
│                                     │
│  [Animated Orb Background]          │
│                                     │
├────────────────────────────────────┤
│  Performance     ████████░░  35/35  │
│  SEO Basics      ██████░░░░  15/20  │
│  UX Clarity      ███████░░░  16/20  │
│  Accessibility   ██████░░░░  12/15  │
│  Content         ███████░░░   7/10  │
├────────────────────────────────────┤
│        Top 5 Quick Wins             │
│  ✓ Add meta description             │
│  ✓ Optimize images                  │
│  ✓ Improve mobile menu              │
│  ✓ Add alt text to images          │
│  ✓ Clarify value proposition        │
├────────────────────────────────────┤
│ [Get Full Report] [Get Migration]   │
└────────────────────────────────────┘
```

## Analysis Modules

### 1. Performance Analysis (35 points)
```typescript
interface PerformanceMetrics {
  // Core Web Vitals (if available via API)
  lcp?: number;        // Largest Contentful Paint
  fid?: number;        // First Input Delay
  cls?: number;        // Cumulative Layout Shift
  
  // Basic metrics
  loadTime: number;    // Total page load time
  pageSize: number;    // Total page weight in KB
  requests: number;    // Number of HTTP requests
  
  // Scoring
  score: number;       // 0-35
}

function scorePerformance(metrics: PerformanceMetrics): number {
  let score = 35;
  
  // Deduct points for poor metrics
  if (metrics.loadTime > 3) score -= 10;
  else if (metrics.loadTime > 2) score -= 5;
  
  if (metrics.pageSize > 3000) score -= 10;
  else if (metrics.pageSize > 2000) score -= 5;
  
  if (metrics.requests > 100) score -= 5;
  else if (metrics.requests > 50) score -= 2;
  
  // Core Web Vitals penalties
  if (metrics.lcp && metrics.lcp > 2.5) score -= 5;
  if (metrics.cls && metrics.cls > 0.1) score -= 5;
  
  return Math.max(0, score);
}
```

### 2. SEO Analysis (20 points)
```typescript
interface SEOChecks {
  hasTitle: boolean;           // -3 if missing
  titleLength: boolean;        // -2 if too long/short
  hasMetaDescription: boolean; // -3 if missing
  descLength: boolean;         // -2 if too long/short
  hasH1: boolean;             // -3 if missing
  hasCanonical: boolean;      // -2 if missing
  isIndexable: boolean;       // -5 if not indexable
  hasOGTags: boolean;         // -2 if missing
  hasSitemap: boolean;        // -1 if missing
}

function scoreSEO(checks: SEOChecks): number {
  let score = 20;
  
  if (!checks.hasTitle) score -= 3;
  if (!checks.titleLength) score -= 2;
  if (!checks.hasMetaDescription) score -= 3;
  if (!checks.descLength) score -= 2;
  if (!checks.hasH1) score -= 3;
  if (!checks.hasCanonical) score -= 2;
  if (!checks.isIndexable) score -= 5;
  if (!checks.hasOGTags) score -= 2;
  if (!checks.hasSitemap) score -= 1;
  
  return Math.max(0, score);
}
```

### 3. UX Clarity Analysis (20 points)
```typescript
interface UXChecks {
  hasAboveFoldCTA: boolean;     // -4 if missing
  readableFontSize: boolean;    // -3 if too small
  clearNavigation: boolean;     // -3 if unclear
  visibleContactInfo: boolean;  // -4 if missing
  mobileViewport: boolean;      // -3 if missing
  fastInteraction: boolean;     // -3 if slow
}

function scoreUX(checks: UXChecks): number {
  let score = 20;
  
  if (!checks.hasAboveFoldCTA) score -= 4;
  if (!checks.readableFontSize) score -= 3;
  if (!checks.clearNavigation) score -= 3;
  if (!checks.visibleContactInfo) score -= 4;
  if (!checks.mobileViewport) score -= 3;
  if (!checks.fastInteraction) score -= 3;
  
  return Math.max(0, score);
}
```

### 4. Accessibility Analysis (15 points)
```typescript
interface A11yChecks {
  hasAltText: boolean;         // -4 if missing
  hasFormLabels: boolean;      // -3 if missing
  hasFocusOutline: boolean;    // -2 if missing
  sufficientContrast: boolean; // -4 if poor
  keyboardNavigable: boolean;  // -2 if not
}

function scoreAccessibility(checks: A11yChecks): number {
  let score = 15;
  
  if (!checks.hasAltText) score -= 4;
  if (!checks.hasFormLabels) score -= 3;
  if (!checks.hasFocusOutline) score -= 2;
  if (!checks.sufficientContrast) score -= 4;
  if (!checks.keyboardNavigable) score -= 2;
  
  return Math.max(0, score);
}
```

### 5. Content Clarity Analysis (10 points)
```typescript
interface ContentChecks {
  hasValueProposition: boolean;  // -3 if missing
  visibleServices: boolean;      // -2 if unclear
  hasTestimonials: boolean;      // -2 if missing
  clearPricing: boolean;         // -2 if hidden
  hasFAQ: boolean;              // -1 if missing
}

function scoreContent(checks: ContentChecks): number {
  let score = 10;
  
  if (!checks.hasValueProposition) score -= 3;
  if (!checks.visibleServices) score -= 2;
  if (!checks.hasTestimonials) score -= 2;
  if (!checks.clearPricing) score -= 2;
  if (!checks.hasFAQ) score -= 1;
  
  return Math.max(0, score);
}
```

## Analysis Implementation

### URL Validation
```typescript
function validateURL(url: string): ValidationResult {
  try {
    const parsed = new URL(url);
    
    // Check protocol
    if (!['http:', 'https:'].includes(parsed.protocol)) {
      return { valid: false, error: 'Invalid protocol' };
    }
    
    // Check for localhost/private IPs
    if (isPrivateIP(parsed.hostname)) {
      return { valid: false, error: 'Cannot analyze local sites' };
    }
    
    return { valid: true, url: parsed.href };
  } catch {
    return { valid: false, error: 'Invalid URL format' };
  }
}
```

### Fetching & Analysis
```typescript
async function analyzeWebsite(url: string): Promise<AnalysisResult> {
  // 1. Fetch HTML
  const html = await fetchHTML(url);
  
  // 2. Parse DOM
  const dom = parseHTML(html);
  
  // 3. Run checks
  const performance = await checkPerformance(url);
  const seo = checkSEO(dom);
  const ux = checkUX(dom);
  const accessibility = checkAccessibility(dom);
  const content = checkContent(dom);
  
  // 4. Calculate scores
  const scores = {
    performance: scorePerformance(performance),
    seo: scoreSEO(seo),
    ux: scoreUX(ux),
    accessibility: scoreAccessibility(accessibility),
    content: scoreContent(content)
  };
  
  // 5. Generate recommendations
  const recommendations = generateRecommendations(scores);
  
  return {
    url,
    scores,
    totalScore: Object.values(scores).reduce((a, b) => a + b, 0),
    grade: calculateGrade(totalScore),
    recommendations
  };
}
```

### PageSpeed Insights Integration (Optional)
```typescript
async function getPageSpeedData(url: string): Promise<PSIData> {
  const API_KEY = process.env.PAGESPEED_API_KEY;
  
  if (!API_KEY) {
    // Fallback to basic analysis
    return getBasicMetrics(url);
  }
  
  const response = await fetch(
    `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${url}&key=${API_KEY}`
  );
  
  const data = await response.json();
  
  return {
    performance: data.lighthouseResult.categories.performance.score * 100,
    accessibility: data.lighthouseResult.categories.accessibility.score * 100,
    seo: data.lighthouseResult.categories.seo.score * 100,
    metrics: data.lighthouseResult.audits
  };
}
```

## Quick Wins Generation

### Algorithm
```typescript
function generateQuickWins(analysis: AnalysisResult): QuickWin[] {
  const wins: QuickWin[] = [];
  
  // Check each category for low-hanging fruit
  if (analysis.seo.score < 15) {
    if (!analysis.seo.hasMetaDescription) {
      wins.push({
        priority: 1,
        effort: 'low',
        impact: 'high',
        description: 'Add meta description',
        category: 'SEO'
      });
    }
  }
  
  if (analysis.performance.score < 25) {
    if (analysis.performance.pageSize > 3000) {
      wins.push({
        priority: 1,
        effort: 'medium',
        impact: 'high',
        description: 'Optimize images',
        category: 'Performance'
      });
    }
  }
  
  // Sort by priority and return top 5
  return wins
    .sort((a, b) => a.priority - b.priority)
    .slice(0, 5);
}
```

## Lead Capture & Report Generation

### Lead Form
```typescript
interface LeadFormData {
  name: string;
  email: string;
  company: string;
  website: string;
  currentChallenges?: string[];
}
```

### Full Report Contents
```typescript
interface FullReport {
  summary: {
    grade: string;
    score: number;
    url: string;
    analyzedAt: Date;
  };
  
  detailedScores: {
    category: string;
    score: number;
    maxScore: number;
    findings: Finding[];
  }[];
  
  recommendations: {
    immediate: Recommendation[];  // Quick wins
    shortTerm: Recommendation[];   // 1-3 months
    longTerm: Recommendation[];    // 3+ months
  };
  
  competitorComparison?: {
    industry: string;
    averageScore: number;
    percentile: number;
  };
  
  nextSteps: {
    migrationPlan: boolean;
    consultation: boolean;
    pricing: boolean;
  };
}
```

### Email Template
```html
Subject: Your Website Grade Report - [GRADE]

Hi [NAME],

Thank you for using our Website Grader! Here's your analysis for [URL]:

Overall Grade: [GRADE] ([SCORE]/100)

Key Findings:
- Performance: [PERF_SCORE]/35
- SEO: [SEO_SCORE]/20
- UX: [UX_SCORE]/20
- Accessibility: [A11Y_SCORE]/15
- Content: [CONTENT_SCORE]/10

Your Top 5 Quick Wins:
[QUICK_WINS_LIST]

View your full report: [REPORT_LINK]
Schedule a consultation: [CONSULTATION_LINK]

Best regards,
[COMPANY_NAME] Team
```

## Analytics Tracking

### Events to Track
```typescript
const GRADER_EVENTS = {
  // Tool usage
  'grader_loaded': {},
  'url_submitted': { url: string },
  'analysis_completed': { score: number, grade: string },
  
  // Engagement
  'quick_wins_viewed': { count: number },
  'category_expanded': { category: string },
  
  // Conversion
  'report_requested': { score: number },
  'email_submitted': { score: number },
  'migration_clicked': { fromGrade: string },
  'consultation_booked': { score: number }
};
```

## Error Handling

### Common Errors
```typescript
enum GraderError {
  INVALID_URL = 'Please enter a valid website URL',
  UNREACHABLE = 'Could not reach the website',
  TIMEOUT = 'Analysis timed out - please try again',
  RATE_LIMIT = 'Too many requests - please wait',
  ANALYSIS_FAILED = 'Analysis failed - please try another URL'
}
```

### User Feedback
```tsx
function ErrorDisplay({ error }: { error: GraderError }) {
  return (
    <Alert variant="error">
      <AlertTitle>Analysis Error</AlertTitle>
      <AlertDescription>{error}</AlertDescription>
      <Button onClick={retry}>Try Again</Button>
    </Alert>
  );
}
```

## Performance Considerations

### Caching
```typescript
const cache = new Map<string, AnalysisResult>();

async function getCachedOrAnalyze(url: string): Promise<AnalysisResult> {
  const cacheKey = normalizeURL(url);
  
  // Check cache (15 minute TTL)
  if (cache.has(cacheKey)) {
    const cached = cache.get(cacheKey);
    if (Date.now() - cached.timestamp < 15 * 60 * 1000) {
      return cached.result;
    }
  }
  
  // Perform fresh analysis
  const result = await analyzeWebsite(url);
  cache.set(cacheKey, { result, timestamp: Date.now() });
  
  return result;
}
```

### Rate Limiting
```typescript
const rateLimiter = new Map<string, number[]>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const requests = rateLimiter.get(ip) || [];
  
  // Remove old requests (> 1 hour)
  const recent = requests.filter(t => now - t < 3600000);
  
  // Check limit (10 per hour)
  if (recent.length >= 10) {
    return false;
  }
  
  recent.push(now);
  rateLimiter.set(ip, recent);
  
  return true;
}
```

## Testing Requirements

### Unit Tests
- URL validation
- Scoring algorithms
- Quick wins generation
- Cache functionality

### Integration Tests
- External API calls
- Email delivery
- PDF generation
- Analytics tracking

### E2E Tests
- Complete grading flow
- Lead capture process
- Report generation
- Error scenarios