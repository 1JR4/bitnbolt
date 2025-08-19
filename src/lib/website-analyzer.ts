import puppeteer from 'puppeteer'
import lighthouse from 'lighthouse'
import * as cheerio from 'cheerio'
import axeCore from 'axe-core'

export interface WebsiteAnalysisResult {
  url: string
  scores: {
    seo: number
    mobile: number
    performance: number
    security: number
    uiux: number
    overall: number
  }
  details: {
    seo: SEODetails
    mobile: MobileDetails
    performance: PerformanceDetails
    security: SecurityDetails
    uiux: UIUXDetails
  }
  fixesTop3: string[]
  error?: string
}

interface SEODetails {
  titleLength: number
  metaDescription: boolean
  h1Count: number
  altCoveragePct: number
  schemaOrg: string[]
  brokenLinks: number
  canonicalTag: boolean
  robotsTxt: boolean
  sitemap: boolean
}

interface MobileDetails {
  viewport: boolean
  tapTargets: string
  fontLegibility: string
  lcpMobileMs: number
  cls: number
  inpMs: number
}

interface PerformanceDetails {
  lcpMs: number
  fcpMs: number
  ttfbMs: number
  requests: number
  totalBytesKb: number
  speedIndex: number
  tbt: number
}

interface SecurityDetails {
  https: boolean
  hsts: boolean
  csp: boolean
  mixedContent: boolean
  sslLabsGrade: string
  cookiesSecurePct: number
  securityHeaders: Record<string, boolean>
}

interface UIUXDetails {
  axeViolations: number
  contrastIssues: number
  primaryCtaAboveFold: boolean
  navItems: number
  freshnessDays: number
  readabilityScore: number
}

export async function analyzeWebsite(url: string): Promise<WebsiteAnalysisResult> {
  let browser: puppeteer.Browser | null = null
  
  try {
    // Normalize URL
    const normalizedUrl = normalizeUrl(url)
    
    // Launch browser
    browser = await puppeteer.launch({
      headless: true,
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-gpu'
      ]
    })

    const page = await browser.newPage()
    
    // Set mobile viewport for mobile analysis
    await page.setViewport({
      width: 412,
      height: 732,
      deviceScaleFactor: 2,
      isMobile: true
    })

    // Navigate to page with timeout
    await page.goto(normalizedUrl, {
      waitUntil: 'networkidle0',
      timeout: 60000
    })

    // Run parallel analysis
    const [
      lighthouseResults,
      seoDetails,
      securityDetails,
      uiuxDetails
    ] = await Promise.all([
      runLighthouse(normalizedUrl),
      analyzeSEO(page, normalizedUrl),
      analyzeSecurity(page, normalizedUrl),
      analyzeUIUX(page)
    ])

    // Extract mobile and performance details from Lighthouse
    const mobileDetails = extractMobileDetails(lighthouseResults)
    const performanceDetails = extractPerformanceDetails(lighthouseResults)

    // Calculate scores
    const scores = calculateScores({
      seo: seoDetails,
      mobile: mobileDetails,
      performance: performanceDetails,
      security: securityDetails,
      uiux: uiuxDetails
    })

    // Generate top 3 fixes
    const fixesTop3 = generateTopFixes({
      seo: seoDetails,
      mobile: mobileDetails,
      performance: performanceDetails,
      security: securityDetails,
      uiux: uiuxDetails,
      scores
    })

    return {
      url: normalizedUrl,
      scores,
      details: {
        seo: seoDetails,
        mobile: mobileDetails,
        performance: performanceDetails,
        security: securityDetails,
        uiux: uiuxDetails
      },
      fixesTop3
    }

  } catch (error) {
    throw new Error(`Analysis failed for ${url}: ${error instanceof Error ? error.message : 'Unknown error'}`)
  } finally {
    if (browser) {
      await browser.close()
    }
  }
}

function normalizeUrl(url: string): string {
  try {
    const urlObj = new URL(url)
    return urlObj.origin + urlObj.pathname
  } catch {
    // Try adding protocol if missing
    try {
      return new URL('https://' + url).href
    } catch {
      throw new Error('Invalid URL format')
    }
  }
}

async function runLighthouse(url: string) {
  // This is a simplified version - in production you'd run Lighthouse programmatically
  // For now, we'll return mock data that matches the expected structure
  return {
    lhr: {
      categories: {
        performance: { score: 0.75 },
        seo: { score: 0.82 },
        accessibility: { score: 0.88 },
        'best-practices': { score: 0.91 }
      },
      audits: {
        'largest-contentful-paint': { numericValue: 2300 },
        'first-contentful-paint': { numericValue: 1200 },
        'server-response-time': { numericValue: 380 },
        'cumulative-layout-shift': { numericValue: 0.06 },
        'interaction-to-next-paint': { numericValue: 140 },
        'speed-index': { numericValue: 2800 },
        'total-blocking-time': { numericValue: 150 }
      }
    }
  }
}

async function analyzeSEO(page: puppeteer.Page, url: string): Promise<SEODetails> {
  const content = await page.content()
  const $ = cheerio.load(content)
  
  // Title analysis
  const title = $('title').text()
  const titleLength = title.length
  
  // Meta description
  const metaDescription = $('meta[name="description"]').attr('content')
  
  // H1 analysis
  const h1Count = $('h1').length
  
  // Alt tag coverage
  const images = $('img')
  const imagesWithAlt = $('img[alt]')
  const altCoveragePct = images.length > 0 ? Math.round((imagesWithAlt.length / images.length) * 100) : 100
  
  // Schema.org detection
  const schemaOrg: string[] = []
  $('script[type="application/ld+json"]').each((_, elem) => {
    try {
      const schema = JSON.parse($(elem).html() || '{}')
      if (schema['@type']) {
        schemaOrg.push(schema['@type'])
      }
    } catch {}
  })
  
  // Check for canonical tag
  const canonicalTag = $('link[rel="canonical"]').length > 0
  
  // Check robots.txt and sitemap (simplified)
  const robotsTxt = await checkRobotsTxt(url)
  const sitemap = await checkSitemap(url)
  
  return {
    titleLength,
    metaDescription: !!metaDescription,
    h1Count,
    altCoveragePct,
    schemaOrg,
    brokenLinks: 0, // Would require link checking
    canonicalTag,
    robotsTxt,
    sitemap
  }
}

async function analyzeSecurity(page: puppeteer.Page, url: string): Promise<SecurityDetails> {
  const response = await page.goto(url, { waitUntil: 'domcontentloaded' })
  const headers = response?.headers() || {}
  
  const https = url.startsWith('https://')
  const hsts = !!headers['strict-transport-security']
  const csp = !!headers['content-security-policy']
  
  // Check for mixed content (simplified)
  const content = await page.content()
  const mixedContent = https && content.includes('http://')
  
  const securityHeaders = {
    'X-Frame-Options': !!headers['x-frame-options'],
    'X-Content-Type-Options': !!headers['x-content-type-options'],
    'Referrer-Policy': !!headers['referrer-policy'],
    'Permissions-Policy': !!headers['permissions-policy']
  }
  
  return {
    https,
    hsts,
    csp,
    mixedContent,
    sslLabsGrade: https ? 'A' : 'F', // Simplified
    cookiesSecurePct: 100, // Would require cookie analysis
    securityHeaders
  }
}

async function analyzeUIUX(page: puppeteer.Page): Promise<UIUXDetails> {
  // Inject axe-core and run accessibility audit
  await page.addScriptTag({
    content: axeCore.source
  })
  
  const axeResults = await page.evaluate(() => {
    return new Promise((resolve) => {
      // @ts-ignore
      axe.run((err: any, results: any) => {
        resolve(results || { violations: [] })
      })
    })
  }) as any
  
  const axeViolations = axeResults.violations?.length || 0
  const contrastIssues = axeResults.violations?.filter((v: any) => 
    v.id.includes('color-contrast')).length || 0
  
  // Analyze page structure
  const content = await page.content()
  const $ = cheerio.load(content)
  
  // Check for primary CTA above fold (simplified heuristic)
  const ctaSelectors = 'button, a[href*="contact"], a[href*="quote"], a[href*="book"], .cta, .btn-primary'
  const primaryCtaAboveFold = $(ctaSelectors).length > 0
  
  // Count navigation items
  const navItems = $('nav a, header a').length
  
  // Freshness analysis (simplified)
  const lastModified = await page.evaluate(() => document.lastModified)
  const freshnessDays = Math.floor((Date.now() - new Date(lastModified).getTime()) / (1000 * 60 * 60 * 24))
  
  // Basic readability score
  const textContent = $('p').text()
  const words = textContent.split(' ').length
  const sentences = textContent.split(/[.!?]+/).length
  const readabilityScore = sentences > 0 ? Math.min(100, Math.max(0, 100 - (words / sentences - 15) * 2)) : 50
  
  return {
    axeViolations,
    contrastIssues,
    primaryCtaAboveFold,
    navItems,
    freshnessDays,
    readabilityScore
  }
}

function extractMobileDetails(lighthouseResults: any): MobileDetails {
  const audits = lighthouseResults.lhr.audits
  
  return {
    viewport: true, // Would check viewport meta tag
    tapTargets: 'ok', // Would analyze tap target spacing
    fontLegibility: 'ok', // Would check font sizes
    lcpMobileMs: audits['largest-contentful-paint']?.numericValue || 0,
    cls: audits['cumulative-layout-shift']?.numericValue || 0,
    inpMs: audits['interaction-to-next-paint']?.numericValue || 0
  }
}

function extractPerformanceDetails(lighthouseResults: any): PerformanceDetails {
  const audits = lighthouseResults.lhr.audits
  
  return {
    lcpMs: audits['largest-contentful-paint']?.numericValue || 0,
    fcpMs: audits['first-contentful-paint']?.numericValue || 0,
    ttfbMs: audits['server-response-time']?.numericValue || 0,
    requests: 64, // Would get from network logs
    totalBytesKb: 1450, // Would calculate from network logs
    speedIndex: audits['speed-index']?.numericValue || 0,
    tbt: audits['total-blocking-time']?.numericValue || 0
  }
}

function calculateScores(details: any) {
  // SEO Score (0-100)
  let seoScore = 0
  seoScore += details.seo.titleLength > 0 && details.seo.titleLength < 70 ? 15 : 0
  seoScore += details.seo.metaDescription ? 15 : 0
  seoScore += details.seo.h1Count === 1 ? 15 : 0
  seoScore += Math.min(15, details.seo.altCoveragePct * 0.15)
  seoScore += details.seo.canonicalTag ? 10 : 0
  seoScore += details.seo.robotsTxt ? 10 : 0
  seoScore += details.seo.sitemap ? 10 : 0
  seoScore += details.seo.schemaOrg.length > 0 ? 10 : 0
  
  // Mobile Score (0-100)
  let mobileScore = 0
  mobileScore += details.mobile.viewport ? 25 : 0
  mobileScore += details.mobile.tapTargets === 'ok' ? 25 : 0
  mobileScore += details.mobile.fontLegibility === 'ok' ? 25 : 0
  mobileScore += details.mobile.lcpMobileMs < 2500 ? 25 : details.mobile.lcpMobileMs < 4000 ? 15 : 0
  
  // Performance Score (0-100)
  let performanceScore = 0
  performanceScore += details.performance.lcpMs < 2500 ? 30 : details.performance.lcpMs < 4000 ? 20 : 10
  performanceScore += details.performance.fcpMs < 1800 ? 20 : details.performance.fcpMs < 3000 ? 15 : 5
  performanceScore += details.performance.ttfbMs < 600 ? 20 : details.performance.ttfbMs < 1000 ? 15 : 5
  performanceScore += details.performance.cls < 0.1 ? 15 : details.performance.cls < 0.25 ? 10 : 0
  performanceScore += details.performance.requests < 50 ? 15 : details.performance.requests < 100 ? 10 : 0
  
  // Security Score (0-100)
  let securityScore = 0
  securityScore += details.security.https ? 30 : 0
  securityScore += details.security.hsts ? 15 : 0
  securityScore += details.security.csp ? 15 : 0
  securityScore += !details.security.mixedContent ? 10 : 0
  securityScore += Object.values(details.security.securityHeaders).filter(Boolean).length * 5
  securityScore += details.security.sslLabsGrade === 'A' ? 10 : details.security.sslLabsGrade === 'B' ? 5 : 0
  
  // UI/UX Score (0-100)
  let uiuxScore = 0
  uiuxScore += Math.max(0, 40 - details.uiux.axeViolations * 2)
  uiuxScore += details.uiux.contrastIssues === 0 ? 20 : Math.max(0, 20 - details.uiux.contrastIssues * 5)
  uiuxScore += details.uiux.primaryCtaAboveFold ? 15 : 0
  uiuxScore += details.uiux.navItems < 10 ? 10 : details.uiux.navItems < 15 ? 5 : 0
  uiuxScore += Math.max(0, Math.min(15, (90 - details.uiux.freshnessDays) * 0.1))
  
  const scores = {
    seo: Math.round(seoScore),
    mobile: Math.round(mobileScore),
    performance: Math.round(performanceScore),
    security: Math.round(securityScore),
    uiux: Math.round(uiuxScore)
  }
  
  // Calculate weighted overall score
  const weights = { seo: 20, mobile: 20, performance: 25, security: 15, uiux: 20 }
  const overall = Math.round(
    (scores.seo * weights.seo + 
     scores.mobile * weights.mobile + 
     scores.performance * weights.performance + 
     scores.security * weights.security + 
     scores.uiux * weights.uiux) / 100
  )
  
  return { ...scores, overall }
}

function generateTopFixes(data: any): string[] {
  const fixes: Array<{ fix: string, priority: number }> = []
  
  // Security fixes (highest priority)
  if (!data.security.https) {
    fixes.push({ fix: 'Enable HTTPS/SSL certificate', priority: 10 })
  }
  if (!data.security.csp) {
    fixes.push({ fix: 'Add Content Security Policy header', priority: 9 })
  }
  
  // Performance fixes
  if (data.performance.lcpMs > 4000) {
    fixes.push({ fix: 'Optimize largest contentful paint (compress images, improve server response)', priority: 8 })
  }
  if (data.performance.cls > 0.25) {
    fixes.push({ fix: 'Reduce cumulative layout shift (reserve space for images/ads)', priority: 7 })
  }
  
  // SEO fixes
  if (!data.seo.metaDescription) {
    fixes.push({ fix: 'Add meta description to improve search snippets', priority: 6 })
  }
  if (data.seo.h1Count !== 1) {
    fixes.push({ fix: 'Use exactly one H1 tag per page', priority: 5 })
  }
  if (data.seo.altCoveragePct < 80) {
    fixes.push({ fix: 'Add alt text to images for accessibility and SEO', priority: 4 })
  }
  
  // UI/UX fixes
  if (data.uiux.axeViolations > 5) {
    fixes.push({ fix: 'Fix accessibility issues for better user experience', priority: 3 })
  }
  if (!data.uiux.primaryCtaAboveFold) {
    fixes.push({ fix: 'Add clear call-to-action above the fold', priority: 2 })
  }
  
  return fixes
    .sort((a, b) => b.priority - a.priority)
    .slice(0, 3)
    .map(f => f.fix)
}

async function checkRobotsTxt(url: string): Promise<boolean> {
  try {
    const robotsUrl = new URL('/robots.txt', url).href
    const response = await fetch(robotsUrl)
    return response.ok
  } catch {
    return false
  }
}

async function checkSitemap(url: string): Promise<boolean> {
  try {
    const sitemapUrl = new URL('/sitemap.xml', url).href
    const response = await fetch(sitemapUrl)
    return response.ok
  } catch {
    return false
  }
}