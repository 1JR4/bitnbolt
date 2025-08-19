"use client"

import { useState } from "react"
import { Meteors } from "@/components/magicui/meteors"
import { ShineBorder } from "@/components/magicui/shine-border"
import { BlurFade } from "@/components/magicui/blur-fade"
import { Button } from "@/components/ui/button"
import { AlertTriangle, TrendingDown, Users, Lock, ArrowRight, Zap } from "lucide-react"
import { cn } from "@/lib/utils"

const costStats = [
  {
    stat: "46%",
    description: "of users judge credibility by design quality",
    icon: <Users className="h-5 w-5" />,
    color: "text-orange-500"
  },
  {
    stat: "7%",
    description: "conversions lost per second of load time",
    icon: <TrendingDown className="h-5 w-5" />,
    color: "text-red-500"
  },
  {
    stat: "35%",
    description: "higher bounce rate with outdated content",
    icon: <AlertTriangle className="h-5 w-5" />,
    color: "text-yellow-500"
  },
  {
    stat: "2x",
    description: "security risks every 3 years without updates",
    icon: <Lock className="h-5 w-5" />,
    color: "text-purple-500"
  }
]

export function CostOfOutdated() {
  const [sliderPosition, setSliderPosition] = useState(50)

  return (
    <section className="py-24 px-8 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <BlurFade delay={0.1} inView>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Your Old Site is Costing You.
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Outdated websites don't just look bad — they drive customers away.
            </p>
          </div>
        </BlurFade>

        {/* Stats Grid with Meteors Effect */}
        <BlurFade delay={0.2} inView>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {costStats.map((stat, index) => (
              <div key={index} className="relative">
                <ShineBorder
                  className="relative overflow-hidden bg-background/80 backdrop-blur-sm"
                  color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                >
                  <div className="p-8">
                    <Meteors number={10} />
                    <div className="flex items-start gap-4 relative z-10">
                      <div className={cn("p-3 bg-background rounded-lg", stat.color)}>
                        {stat.icon}
                      </div>
                      <div>
                        <div className={cn("text-4xl font-bold mb-2", stat.color)}>
                          {stat.stat}
                        </div>
                        <p className="text-muted-foreground">
                          {stat.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </ShineBorder>
              </div>
            ))}
          </div>
        </BlurFade>

        {/* Before/After Slider */}
        <BlurFade delay={0.3} inView>
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-center mb-8">See the Difference</h3>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl max-w-4xl mx-auto">
              <div className="relative h-[400px] bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
                {/* After (New Site) */}
                <div className="absolute inset-0">
                  <div className="h-full flex flex-col justify-center items-center p-8">
                    <div className="text-center">
                      <div className="mb-4">
                        <div className="inline-block p-4 bg-green-500/20 rounded-full">
                          <Zap className="h-12 w-12 text-green-500" />
                        </div>
                      </div>
                      <h4 className="text-2xl font-bold mb-2 text-green-600">Modern & Fast</h4>
                      <p className="text-muted-foreground max-w-md">
                        Lightning-fast load times, mobile-optimized, SEO-ready, secure, and conversion-focused design
                      </p>
                      <div className="mt-6 flex justify-center gap-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-600">1.2s</div>
                          <div className="text-xs text-muted-foreground">Load Time</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-600">95/100</div>
                          <div className="text-xs text-muted-foreground">PageSpeed</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-600">A+</div>
                          <div className="text-xs text-muted-foreground">Security</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Before (Old Site) */}
                <div 
                  className="absolute inset-0 bg-gradient-to-br from-red-50 to-red-100 dark:from-red-950 dark:to-red-900"
                  style={{
                    clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`
                  }}
                >
                  <div className="h-full flex flex-col justify-center items-center p-8">
                    <div className="text-center">
                      <div className="mb-4">
                        <div className="inline-block p-4 bg-red-500/20 rounded-full">
                          <AlertTriangle className="h-12 w-12 text-red-500" />
                        </div>
                      </div>
                      <h4 className="text-2xl font-bold mb-2 text-red-600">Outdated & Slow</h4>
                      <p className="text-muted-foreground max-w-md">
                        Slow loading, not mobile-friendly, poor SEO, security vulnerabilities, high bounce rates
                      </p>
                      <div className="mt-6 flex justify-center gap-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-red-600">5.4s</div>
                          <div className="text-xs text-muted-foreground">Load Time</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-red-600">45/100</div>
                          <div className="text-xs text-muted-foreground">PageSpeed</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-red-600">D</div>
                          <div className="text-xs text-muted-foreground">Security</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Slider Handle */}
                <div 
                  className="absolute top-0 bottom-0 w-1 bg-white shadow-lg cursor-ew-resize"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3-3m0 0l3 3m-3-3v12" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 15l-3 3m0 0l-3-3m3 3V6" />
                    </svg>
                  </div>
                </div>

                {/* Slider Input (invisible) */}
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={sliderPosition}
                  onChange={(e) => setSliderPosition(Number(e.target.value))}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
                />
              </div>
            </div>
            <p className="text-center text-sm text-muted-foreground mt-4">
              Drag the slider to compare before and after
            </p>
          </div>
        </BlurFade>

        {/* Hidden Costs */}
        <BlurFade delay={0.4} inView>
          <div className="bg-card/50 backdrop-blur-sm border rounded-2xl p-8 mb-12">
            <h3 className="text-xl font-semibold mb-6 text-center">The Hidden Costs You're Paying</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">$2,500</div>
                <div className="text-sm text-muted-foreground">Lost monthly revenue from slow loading</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">40%</div>
                <div className="text-sm text-muted-foreground">Visitors who never return after bad experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">3x</div>
                <div className="text-sm text-muted-foreground">More likely to be hacked with outdated security</div>
              </div>
            </div>
          </div>
        </BlurFade>

        {/* CTA */}
        <BlurFade delay={0.5} inView>
          <div className="text-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              Upgrade now before it costs you more customers
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              Get a free site audit and see exactly what you're losing
            </p>
          </div>
        </BlurFade>
      </div>
    </section>
  )
}