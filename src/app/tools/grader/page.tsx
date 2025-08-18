"use client"

import { useState } from "react"
import { ArrowLeft, Globe, Search, Smartphone, Zap, Shield, BarChart3, CheckCircle, AlertCircle, XCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"

interface GradeResult {
  category: string
  score: number
  status: "excellent" | "good" | "needs-improvement" | "poor"
  icon: React.ReactNode
  issues: string[]
  recommendations: string[]
}

export default function WebsiteGraderPage() {
  const [url, setUrl] = useState("")
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [results, setResults] = useState<GradeResult[] | null>(null)
  const [overallScore, setOverallScore] = useState<number | null>(null)

  const analyzeWebsite = async () => {
    if (!url) return
    
    setIsAnalyzing(true)
    
    // Simulate analysis delay
    await new Promise(resolve => setTimeout(resolve, 3000))
    
    // Mock results - in a real app, this would call an actual analysis service
    const mockResults: GradeResult[] = [
      {
        category: "Performance",
        score: 72,
        status: "good",
        icon: <Zap className="h-5 w-5" />,
        issues: [
          "Large image files slow down loading",
          "Too many HTTP requests",
          "No image compression"
        ],
        recommendations: [
          "Optimize and compress images",
          "Enable browser caching",
          "Minify CSS and JavaScript files",
          "Use a Content Delivery Network (CDN)"
        ]
      },
      {
        category: "SEO",
        score: 85,
        status: "excellent",
        icon: <Search className="h-5 w-5" />,
        issues: [
          "Missing meta descriptions on some pages"
        ],
        recommendations: [
          "Add meta descriptions to all pages",
          "Optimize title tags for target keywords",
          "Improve internal linking structure"
        ]
      },
      {
        category: "Mobile Friendliness",
        score: 45,
        status: "poor",
        icon: <Smartphone className="h-5 w-5" />,
        issues: [
          "Text too small to read on mobile",
          "Buttons are too close together",
          "Content doesn't fit viewport",
          "Horizontal scrolling required"
        ],
        recommendations: [
          "Implement responsive design",
          "Increase font sizes for mobile",
          "Add proper spacing between clickable elements",
          "Test on multiple mobile devices"
        ]
      },
      {
        category: "Security",
        score: 90,
        status: "excellent",
        icon: <Shield className="h-5 w-5" />,
        issues: [],
        recommendations: [
          "Consider adding additional security headers",
          "Regular security audits recommended"
        ]
      },
      {
        category: "User Experience",
        score: 65,
        status: "needs-improvement",
        icon: <Globe className="h-5 w-5" />,
        issues: [
          "Confusing navigation structure",
          "No clear call-to-action",
          "Contact information hard to find"
        ],
        recommendations: [
          "Simplify navigation menu",
          "Add prominent call-to-action buttons",
          "Make contact information more visible",
          "Improve page loading indicators"
        ]
      },
      {
        category: "Conversion Optimization",
        score: 55,
        status: "needs-improvement",
        icon: <BarChart3 className="h-5 w-5" />,
        issues: [
          "Weak value proposition",
          "No social proof visible",
          "Forms are too long"
        ],
        recommendations: [
          "Add customer testimonials",
          "Create shorter, focused forms",
          "Highlight unique value proposition",
          "Add trust signals and badges"
        ]
      }
    ]
    
    setResults(mockResults)
    setOverallScore(Math.round(mockResults.reduce((sum, result) => sum + result.score, 0) / mockResults.length))
    setIsAnalyzing(false)
  }

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-600"
    if (score >= 60) return "text-yellow-600"
    return "text-red-600"
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "excellent":
        return <CheckCircle className="h-5 w-5 text-green-500" />
      case "good":
        return <CheckCircle className="h-5 w-5 text-blue-500" />
      case "needs-improvement":
        return <AlertCircle className="h-5 w-5 text-yellow-500" />
      case "poor":
        return <XCircle className="h-5 w-5 text-red-500" />
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-12 px-8">
        <div className="max-w-4xl mx-auto">
          <Button variant="ghost" asChild className="mb-8">
            <Link href="/tools">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to tools
            </Link>
          </Button>
          
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Website Grader
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Get a comprehensive analysis of your website's performance, SEO, and user experience. 
              Completely free, no signup required.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-8 pb-24">
        {/* URL Input Form */}
        <div className="bg-card border rounded-2xl p-8 mb-8">
          <div className="text-center mb-6">
            <Globe className="h-12 w-12 text-blue-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2">Enter your website URL</h2>
            <p className="text-muted-foreground">
              We'll analyze your site and provide actionable recommendations for improvement.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="url"
              placeholder="https://yourwebsite.com"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="flex-1 px-4 py-3 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Button 
              onClick={analyzeWebsite}
              disabled={!url || isAnalyzing}
              size="lg"
            >
              {isAnalyzing ? "Analyzing..." : "Grade My Site"}
            </Button>
          </div>
          
          {isAnalyzing && (
            <div className="mt-6 text-center">
              <div className="inline-flex items-center space-x-2 text-blue-600">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
                <span>Analyzing your website...</span>
              </div>
              <div className="mt-2 text-sm text-muted-foreground">
                This may take a few moments while we check performance, SEO, and more.
              </div>
            </div>
          )}
        </div>

        {/* Results */}
        {results && overallScore !== null && (
          <div className="space-y-8">
            {/* Overall Score */}
            <div className="bg-card border rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold mb-6">Overall Website Grade</h2>
              <div className={cn("text-6xl font-bold mb-4", getScoreColor(overallScore))}>
                {overallScore}
              </div>
              <div className="text-lg text-muted-foreground mb-6">
                out of 100
              </div>
              <div className="max-w-2xl mx-auto">
                {overallScore >= 80 && (
                  <p className="text-green-600">
                    Excellent! Your website is performing well across most areas.
                  </p>
                )}
                {overallScore >= 60 && overallScore < 80 && (
                  <p className="text-yellow-600">
                    Good foundation, but there are opportunities for improvement.
                  </p>
                )}
                {overallScore < 60 && (
                  <p className="text-red-600">
                    Your website needs attention in several key areas to improve performance and user experience.
                  </p>
                )}
              </div>
            </div>

            {/* Detailed Results */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Detailed Analysis</h2>
              
              {results.map((result, index) => (
                <div key={index} className="bg-card border rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="text-blue-600">
                        {result.icon}
                      </div>
                      <h3 className="text-lg font-semibold">{result.category}</h3>
                      {getStatusIcon(result.status)}
                    </div>
                    <div className={cn("text-2xl font-bold", getScoreColor(result.score))}>
                      {result.score}
                    </div>
                  </div>
                  
                  {result.issues.length > 0 && (
                    <div className="mb-4">
                      <h4 className="font-medium mb-2 text-red-600">Issues Found:</h4>
                      <ul className="space-y-1">
                        {result.issues.map((issue, issueIndex) => (
                          <li key={issueIndex} className="text-sm text-muted-foreground flex items-start">
                            <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                            {issue}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <div>
                    <h4 className="font-medium mb-2 text-blue-600">Recommendations:</h4>
                    <ul className="space-y-1">
                      {result.recommendations.map((rec, recIndex) => (
                        <li key={recIndex} className="text-sm text-muted-foreground flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          {rec}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Ready to fix these issues?</h2>
              <p className="text-muted-foreground mb-6">
                BitNBolt can help you implement these improvements and create a high-performing website 
                that converts visitors into customers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/contact">Get expert help</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/pricing">View our plans</Link>
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* What We Check Section */}
        {!results && (
          <div className="bg-muted/30 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-center mb-8">What we analyze</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center">
                <Zap className="h-8 w-8 text-blue-500 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Performance</h3>
                <p className="text-sm text-muted-foreground">
                  Loading speed, image optimization, and technical performance
                </p>
              </div>
              <div className="text-center">
                <Search className="h-8 w-8 text-green-500 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">SEO</h3>
                <p className="text-sm text-muted-foreground">
                  Search engine optimization and content structure
                </p>
              </div>
              <div className="text-center">
                <Smartphone className="h-8 w-8 text-purple-500 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Mobile Experience</h3>
                <p className="text-sm text-muted-foreground">
                  Mobile responsiveness and touch-friendly design
                </p>
              </div>
              <div className="text-center">
                <Shield className="h-8 w-8 text-orange-500 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Security</h3>
                <p className="text-sm text-muted-foreground">
                  SSL certificates, security headers, and vulnerabilities
                </p>
              </div>
              <div className="text-center">
                <Globe className="h-8 w-8 text-cyan-500 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">User Experience</h3>
                <p className="text-sm text-muted-foreground">
                  Navigation, accessibility, and overall usability
                </p>
              </div>
              <div className="text-center">
                <BarChart3 className="h-8 w-8 text-red-500 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Conversion</h3>
                <p className="text-sm text-muted-foreground">
                  Call-to-actions, forms, and conversion optimization
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}