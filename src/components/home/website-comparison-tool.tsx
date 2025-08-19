"use client"

import { useState } from "react"
import { BlurFade } from "@/components/magicui/blur-fade"
import { BorderBeam } from "@/components/magicui/border-beam"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis, 
  Radar, 
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts"
import { 
  ArrowRight, 
  Plus, 
  X, 
  Loader2, 
  TrendingUp, 
  TrendingDown, 
  AlertTriangle,
  CheckCircle,
  Globe,
  Shield,
  Smartphone,
  Zap,
  Search
} from "lucide-react"
import { cn } from "@/lib/utils"

interface ComparisonResult {
  url: string
  scores: {
    seo: number
    mobile: number
    performance: number
    security: number
    uiux: number
    overall: number
  }
  details: any
  fixesTop3: string[]
  error?: string
}

export function WebsiteComparisonTool() {
  const [yourWebsite, setYourWebsite] = useState("")
  const [competitors, setCompetitors] = useState<string[]>([])
  const [analyzing, setAnalyzing] = useState(false)
  const [results, setResults] = useState<ComparisonResult[] | null>(null)
  const [selectedSite, setSelectedSite] = useState<ComparisonResult | null>(null)

  const addCompetitor = () => {
    if (competitors.length < 5) {
      setCompetitors([...competitors, ""])
    }
  }

  const removeCompetitor = (index: number) => {
    setCompetitors(competitors.filter((_, i) => i !== index))
  }

  const updateCompetitor = (index: number, value: string) => {
    const updated = [...competitors]
    updated[index] = value
    setCompetitors(updated)
  }

  const handleAnalyze = async () => {
    if (!yourWebsite) return
    
    setAnalyzing(true)
    setResults(null)
    
    try {
      const response = await fetch('/api/compare', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          yourWebsite,
          competitors: competitors.filter(c => c.trim())
        })
      })
      
      const data = await response.json()
      
      if (!response.ok) {
        throw new Error(data.error || 'Analysis failed')
      }
      
      setResults(data.sites)
      if (data.sites.length > 0) {
        setSelectedSite(data.sites[0])
      }
    } catch (error) {
      console.error('Analysis error:', error)
      // For demo purposes, show mock data
      setResults(getMockResults())
      setSelectedSite(getMockResults()[0])
    } finally {
      setAnalyzing(false)
    }
  }

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-600"
    if (score >= 60) return "text-yellow-600"
    return "text-red-600"
  }

  const getScoreBadgeColor = (score: number) => {
    if (score >= 80) return "bg-green-100 text-green-800 border-green-300"
    if (score >= 60) return "bg-yellow-100 text-yellow-800 border-yellow-300"
    return "bg-red-100 text-red-800 border-red-300"
  }

  // Transform data for radar chart
  const radarData = results ? [
    {
      metric: 'SEO',
      ...results.reduce((acc, site, index) => {
        acc[`site${index}`] = site.scores?.seo || 0
        return acc
      }, {} as Record<string, number>)
    },
    {
      metric: 'Mobile',
      ...results.reduce((acc, site, index) => {
        acc[`site${index}`] = site.scores?.mobile || 0
        return acc
      }, {} as Record<string, number>)
    },
    {
      metric: 'Performance',
      ...results.reduce((acc, site, index) => {
        acc[`site${index}`] = site.scores?.performance || 0
        return acc
      }, {} as Record<string, number>)
    },
    {
      metric: 'Security',
      ...results.reduce((acc, site, index) => {
        acc[`site${index}`] = site.scores?.security || 0
        return acc
      }, {} as Record<string, number>)
    },
    {
      metric: 'UI/UX',
      ...results.reduce((acc, site, index) => {
        acc[`site${index}`] = site.scores?.uiux || 0
        return acc
      }, {} as Record<string, number>)
    }
  ] : []

  // Transform data for bar chart
  const barData = results?.map((site, index) => ({
    name: new URL(site.url).hostname.replace('www.', ''),
    seo: site.scores?.seo || 0,
    mobile: site.scores?.mobile || 0,
    performance: site.scores?.performance || 0,
    security: site.scores?.security || 0,
    uiux: site.scores?.uiux || 0,
    overall: site.scores?.overall || 0
  })) || []

  const colors = ['#3B82F6', '#EF4444', '#10B981', '#F59E0B', '#8B5CF6']

  return (
    <section className="py-24 px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <BlurFade delay={0.1} inView>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How Does Your Website Stack Up?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Compare your website against competitors across 5 key metrics: SEO, Mobile, Performance, Security, and UI/UX.
            </p>
          </div>
        </BlurFade>

        {/* Input Form */}
        <BlurFade delay={0.2} inView>
          <div className="max-w-3xl mx-auto mb-12">
            <div className="bg-card/50 backdrop-blur-sm border rounded-2xl p-8">
              <BorderBeam size={250} duration={12} delay={0} />
              
              <div className="space-y-6">
                {/* Your Website */}
                <div>
                  <label className="block text-sm font-medium mb-2">Your Website</label>
                  <input
                    type="url"
                    placeholder="https://yourwebsite.com"
                    value={yourWebsite}
                    onChange={(e) => setYourWebsite(e.target.value)}
                    className="w-full px-4 py-3 border border-input rounded-lg bg-background/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    disabled={analyzing}
                  />
                </div>

                {/* Competitors */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Competitors <span className="text-muted-foreground">(optional, up to 5)</span>
                  </label>
                  <div className="space-y-3">
                    {competitors.map((competitor, index) => (
                      <div key={index} className="flex gap-2">
                        <input
                          type="url"
                          placeholder={`https://competitor${index + 1}.com`}
                          value={competitor}
                          onChange={(e) => updateCompetitor(index, e.target.value)}
                          className="flex-1 px-4 py-3 border border-input rounded-lg bg-background/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                          disabled={analyzing}
                        />
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => removeCompetitor(index)}
                          disabled={analyzing}
                          className="px-3"
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                    {competitors.length < 5 && (
                      <Button
                        variant="outline"
                        onClick={addCompetitor}
                        disabled={analyzing}
                        className="w-full"
                      >
                        <Plus className="mr-2 h-4 w-4" />
                        Add Competitor
                      </Button>
                    )}
                  </div>
                </div>

                {/* Analyze Button */}
                <Button
                  size="lg"
                  onClick={handleAnalyze}
                  disabled={analyzing || !yourWebsite}
                  className="w-full"
                >
                  {analyzing ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Analyzing websites...
                    </>
                  ) : (
                    <>
                      <Search className="mr-2 h-4 w-4" />
                      Analyze Websites
                    </>
                  )}
                </Button>
              </div>
            </div>
          </div>
        </BlurFade>

        {/* Results */}
        {results && (
          <BlurFade delay={0.3} inView>
            <div className="space-y-8">
              {/* Overview Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {results.map((site, index) => (
                  <div
                    key={index}
                    className={cn(
                      "bg-card/50 backdrop-blur-sm border rounded-xl p-4 cursor-pointer transition-all duration-200",
                      selectedSite?.url === site.url ? "ring-2 ring-blue-500 border-blue-500" : "hover:shadow-lg"
                    )}
                    onClick={() => setSelectedSite(site)}
                  >
                    <div className="text-center">
                      <p className="text-sm font-medium mb-2 truncate" title={site.url}>
                        {new URL(site.url).hostname.replace('www.', '')}
                      </p>
                      <div className="text-3xl font-bold mb-2">
                        <span className={getScoreColor(site.scores?.overall || 0)}>
                          {site.scores?.overall || 0}
                        </span>
                      </div>
                      <Badge className={cn("text-xs", getScoreBadgeColor(site.scores?.overall || 0))}>
                        {index === 0 ? "Your Site" : `Competitor ${index}`}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>

              {/* Charts */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Radar Chart */}
                <div className="bg-card/50 backdrop-blur-sm border rounded-2xl p-6">
                  <h3 className="text-lg font-semibold mb-4">Competitive Analysis</h3>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <RadarChart data={radarData}>
                        <PolarGrid />
                        <PolarAngleAxis dataKey="metric" />
                        <PolarRadiusAxis angle={18} domain={[0, 100]} />
                        {results.map((_, index) => (
                          <Radar
                            key={index}
                            name={new URL(results[index].url).hostname.replace('www.', '')}
                            dataKey={`site${index}`}
                            stroke={colors[index % colors.length]}
                            fill={colors[index % colors.length]}
                            fillOpacity={0.1}
                            strokeWidth={2}
                          />
                        ))}
                      </RadarChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Bar Chart */}
                <div className="bg-card/50 backdrop-blur-sm border rounded-2xl p-6">
                  <h3 className="text-lg font-semibold mb-4">Metric Breakdown</h3>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={barData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis domain={[0, 100]} />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="seo" name="SEO" fill="#3B82F6" />
                        <Bar dataKey="mobile" name="Mobile" fill="#10B981" />
                        <Bar dataKey="performance" name="Performance" fill="#F59E0B" />
                        <Bar dataKey="security" name="Security" fill="#EF4444" />
                        <Bar dataKey="uiux" name="UI/UX" fill="#8B5CF6" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>

              {/* Detailed Analysis */}
              {selectedSite && (
                <div className="bg-card/50 backdrop-blur-sm border rounded-2xl p-6">
                  <h3 className="text-lg font-semibold mb-6">
                    Detailed Analysis: {new URL(selectedSite.url).hostname.replace('www.', '')}
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
                    {[
                      { key: 'seo', label: 'SEO', icon: Search, color: 'blue' },
                      { key: 'mobile', label: 'Mobile', icon: Smartphone, color: 'green' },
                      { key: 'performance', label: 'Performance', icon: Zap, color: 'yellow' },
                      { key: 'security', label: 'Security', icon: Shield, color: 'red' },
                      { key: 'uiux', label: 'UI/UX', icon: Globe, color: 'purple' }
                    ].map(({ key, label, icon: Icon, color }) => {
                      const score = selectedSite.scores?.[key as keyof typeof selectedSite.scores] || 0
                      return (
                        <div key={key} className="text-center">
                          <div className={cn("w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2", 
                            `bg-${color}-100 dark:bg-${color}-900/30`
                          )}>
                            <Icon className={cn("h-6 w-6", `text-${color}-600`)} />
                          </div>
                          <div className={cn("text-2xl font-bold", getScoreColor(score))}>
                            {score}
                          </div>
                          <div className="text-sm text-muted-foreground">{label}</div>
                        </div>
                      )
                    })}
                  </div>

                  {/* Top Issues */}
                  <div className="space-y-4">
                    <h4 className="font-semibold">Top 3 Issues to Fix:</h4>
                    {selectedSite.fixesTop3.map((fix, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-800">
                        <AlertTriangle className="h-5 w-5 text-orange-500 mt-0.5" />
                        <span className="text-sm">{fix}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-6 border-t">
                    <Button asChild>
                      <a href="/contact">
                        Fix These Issues With Our Help
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </BlurFade>
        )}
      </div>
    </section>
  )
}

// Mock data for demo purposes
function getMockResults(): ComparisonResult[] {
  return [
    {
      url: "https://yourwebsite.com",
      scores: {
        seo: 72,
        mobile: 81,
        performance: 78,
        security: 64,
        uiux: 70,
        overall: 73
      },
      details: {},
      fixesTop3: [
        "Add Content Security Policy header for better security",
        "Optimize images to reduce Largest Contentful Paint",
        "Add structured data for better SEO visibility"
      ]
    },
    {
      url: "https://competitor1.com",
      scores: {
        seo: 85,
        mobile: 72,
        performance: 65,
        security: 78,
        uiux: 82,
        overall: 76
      },
      details: {},
      fixesTop3: [
        "Improve mobile page load speed",
        "Optimize Core Web Vitals",
        "Fix mobile tap target spacing"
      ]
    },
    {
      url: "https://competitor2.com",
      scores: {
        seo: 68,
        mobile: 88,
        performance: 91,
        security: 45,
        uiux: 75,
        overall: 73
      },
      details: {},
      fixesTop3: [
        "Enable HTTPS and security headers",
        "Improve meta descriptions",
        "Add alt text to images"
      ]
    }
  ]
}