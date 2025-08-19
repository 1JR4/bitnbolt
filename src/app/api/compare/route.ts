import { NextRequest, NextResponse } from 'next/server'
import { analyzeWebsite } from '@/lib/website-analyzer'
import { analyzeWebsiteWithGitHubTools } from '@/lib/github-based-analyzer'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { yourWebsite, competitors = [] } = body

    if (!yourWebsite) {
      return NextResponse.json(
        { error: 'Your website URL is required' },
        { status: 400 }
      )
    }

    // Validate URLs
    const allUrls = [yourWebsite, ...competitors]
    const validUrls = allUrls.filter(url => {
      try {
        new URL(url)
        return true
      } catch {
        return false
      }
    })

    if (validUrls.length === 0) {
      return NextResponse.json(
        { error: 'At least one valid URL is required' },
        { status: 400 }
      )
    }

    // Limit to 6 total sites for performance
    const urlsToAnalyze = validUrls.slice(0, 6)

    // Choose analysis method based on environment
    const useRealAnalysis = process.env.ENABLE_REAL_ANALYSIS === 'true'
    const analyzer = useRealAnalysis ? analyzeWebsiteWithGitHubTools : analyzeWebsite
    
    console.log(`Analyzing ${urlsToAnalyze.length} websites using ${useRealAnalysis ? 'GitHub-based real' : 'mock'} analysis`)

    // Analyze all websites in parallel (or sequential for real analysis to avoid overwhelming)
    const analysisPromises = useRealAnalysis 
      ? urlsToAnalyze.map(async (url, index) => {
          // Sequential analysis to avoid overwhelming the system
          await new Promise(resolve => setTimeout(resolve, index * 2000))
          return analyzer(url).catch(error => ({
            url,
            error: error.message,
            scores: null,
            details: null,
            fixesTop3: []
          }))
        })
      : urlsToAnalyze.map(url => 
          analyzer(url).catch(error => ({
            url,
            error: error.message,
            scores: null,
            details: null,
            fixesTop3: []
          }))
        )

    const results = await Promise.all(analysisPromises)

    const response = {
      analyzedAt: new Date().toISOString(),
      weights: {
        seo: 20,
        mobile: 20,
        performance: 25,
        security: 15,
        uiux: 20
      },
      sites: results
    }

    return NextResponse.json(response)

  } catch (error) {
    console.error('Analysis error:', error)
    return NextResponse.json(
      { error: 'Internal server error during analysis' },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'Website comparison API',
    usage: 'POST with { yourWebsite, competitors } to analyze sites'
  })
}