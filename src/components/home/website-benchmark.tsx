"use client"

import { useState } from "react"
import { AnimatedBeam } from "@/components/magicui/animated-beam"
import { BorderBeam } from "@/components/magicui/border-beam"
import { Button } from "@/components/ui/button"
import { CircleProgress } from "@/components/magicui/circle-progress"
import { BlurFade } from "@/components/magicui/blur-fade"
import { ArrowRight, Zap, Shield, Gauge, Globe } from "lucide-react"
import { cn } from "@/lib/utils"

interface MetricProps {
  label: string
  value: number
  max: number
  icon: React.ReactNode
  color: string
}

function MetricCard({ label, value, max, icon, color }: MetricProps) {
  const percentage = (value / max) * 100

  return (
    <div className="relative bg-card/50 backdrop-blur-sm border rounded-xl p-6 hover:shadow-lg transition-all duration-300">
      <BorderBeam size={250} duration={12} delay={Math.random() * 3} />
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          {icon}
          <span className="text-sm font-medium">{label}</span>
        </div>
        <span className="text-2xl font-bold">{value}/{max}</span>
      </div>
      <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
        <div 
          className={cn("h-full transition-all duration-700 ease-out", color)}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  )
}

export function WebsiteBenchmark() {
  const [url, setUrl] = useState("")
  const [analyzing, setAnalyzing] = useState(false)
  const [results, setResults] = useState<any>(null)

  const handleAnalyze = () => {
    if (!url) return
    
    setAnalyzing(true)
    // Simulate analysis
    setTimeout(() => {
      setResults({
        speed: 85,
        mobile: 92,
        seo: 78,
        security: 95
      })
      setAnalyzing(false)
    }, 2000)
  }

  return (
    <section className="py-24 px-8 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <BlurFade delay={0.1} inView>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How does your site stack up?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Enter your website and your competitors' to see where you stand on speed, SEO, design, and content freshness.
            </p>
          </div>
        </BlurFade>

        <BlurFade delay={0.2} inView>
          <div className="max-w-2xl mx-auto mb-12">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="url"
                placeholder="Enter your website URL"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="flex-1 px-4 py-3 border border-input rounded-lg bg-background/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Button 
                size="lg" 
                onClick={handleAnalyze}
                disabled={analyzing}
                className="relative"
              >
                {analyzing ? (
                  <>
                    <span className="animate-pulse">Analyzing...</span>
                  </>
                ) : (
                  <>
                    Analyze Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </div>
          </div>
        </BlurFade>

        {results && (
          <BlurFade delay={0.3} inView>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <MetricCard
                label="Speed Score"
                value={results.speed}
                max={100}
                icon={<Zap className="h-5 w-5 text-yellow-500" />}
                color="bg-gradient-to-r from-yellow-400 to-yellow-600"
              />
              <MetricCard
                label="Mobile Ready"
                value={results.mobile}
                max={100}
                icon={<Globe className="h-5 w-5 text-blue-500" />}
                color="bg-gradient-to-r from-blue-400 to-blue-600"
              />
              <MetricCard
                label="SEO Basics"
                value={results.seo}
                max={100}
                icon={<Gauge className="h-5 w-5 text-green-500" />}
                color="bg-gradient-to-r from-green-400 to-green-600"
              />
              <MetricCard
                label="Security"
                value={results.security}
                max={100}
                icon={<Shield className="h-5 w-5 text-purple-500" />}
                color="bg-gradient-to-r from-purple-400 to-purple-600"
              />
            </div>

            <div className="text-center">
              <p className="text-lg font-semibold mb-4">
                Your site scores <span className="text-3xl font-bold text-blue-600">{Math.round((results.speed + results.mobile + results.seo + results.security) / 4)}</span>/100 overall
              </p>
              <Button size="lg" asChild>
                <a href="/contact">
                  Boost your score in days, not months
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </BlurFade>
        )}

        {!results && !analyzing && (
          <BlurFade delay={0.3} inView>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-card/30 rounded-lg border border-border/50">
                <div className="text-3xl font-bold text-blue-600 mb-2">1.8s</div>
                <div className="text-sm text-muted-foreground">vs 4.9s average</div>
                <div className="text-xs font-medium mt-1">Load Time</div>
              </div>
              <div className="text-center p-6 bg-card/30 rounded-lg border border-border/50">
                <div className="text-3xl font-bold text-green-600 mb-2">95/100</div>
                <div className="text-sm text-muted-foreground">vs 60/100</div>
                <div className="text-xs font-medium mt-1">Mobile Score</div>
              </div>
              <div className="text-center p-6 bg-card/30 rounded-lg border border-border/50">
                <div className="text-3xl font-bold text-purple-600 mb-2">85/100</div>
                <div className="text-sm text-muted-foreground">vs 72/100</div>
                <div className="text-xs font-medium mt-1">SEO Score</div>
              </div>
              <div className="text-center p-6 bg-card/30 rounded-lg border border-border/50">
                <div className="text-3xl font-bold text-orange-600 mb-2">A+</div>
                <div className="text-sm text-muted-foreground">Security</div>
                <div className="text-xs font-medium mt-1">SSL Grade</div>
              </div>
            </div>
          </BlurFade>
        )}
      </div>
    </section>
  )
}