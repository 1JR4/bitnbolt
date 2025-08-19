"use client"

import { useState } from "react"
import { MagicCard } from "@/components/magicui/magic-card"
import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern"
import { BlurFade } from "@/components/magicui/blur-fade"
import { Button } from "@/components/ui/button"
import { DollarSign, Clock, Zap, HeadphonesIcon, ArrowRight, Check, X } from "lucide-react"
import { cn } from "@/lib/utils"

const comparison = [
  {
    category: "Monthly Price",
    bigPlatforms: "$49+",
    us: "$12",
    difference: "-75%",
    icon: <DollarSign className="h-5 w-5" />
  },
  {
    category: "Setup Time",
    bigPlatforms: "10+ hrs",
    us: "2 hrs",
    difference: "-80%",
    icon: <Clock className="h-5 w-5" />
  },
  {
    category: "Ease of Use",
    bigPlatforms: "Requires tech",
    us: "Owner-friendly",
    difference: "Simple",
    icon: <Zap className="h-5 w-5" />
  },
  {
    category: "Speed to Publish",
    bigPlatforms: "2+ weeks",
    us: "48 hrs",
    difference: "-85%",
    icon: <HeadphonesIcon className="h-5 w-5" />
  }
]

export function BreakFreePlatforms() {
  const [savings, setSavings] = useState(37)

  return (
    <section className="py-24 px-8 relative overflow-hidden">
      {/* Animated Grid Background */}
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "absolute inset-0 h-full w-full skew-y-12"
        )}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <BlurFade delay={0.1} inView>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Overpaying and Overcomplicating?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Big platforms are bloated and expensive. Here's how we compare.
            </p>
          </div>
        </BlurFade>

        {/* Comparison Table */}
        <BlurFade delay={0.2} inView>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Big Platforms Column */}
            <MagicCard className="relative overflow-hidden">
              <div className="p-8">
                <h3 className="text-xl font-semibold mb-6 text-red-600">Big Platforms</h3>
                <div className="space-y-4">
                  {comparison.map((item, index) => (
                    <div key={index} className="flex items-center justify-between py-3 border-b border-border/50">
                      <span className="text-sm text-muted-foreground">{item.category}</span>
                      <span className="font-semibold text-red-600">{item.bigPlatforms}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 space-y-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <X className="h-4 w-4 text-red-500" />
                    Complex dashboard
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <X className="h-4 w-4 text-red-500" />
                    Hidden fees
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <X className="h-4 w-4 text-red-500" />
                    Limited support
                  </div>
                </div>
              </div>
            </MagicCard>

            {/* Us Column - Highlighted */}
            <MagicCard className="relative overflow-hidden border-2 border-blue-500/50 shadow-xl scale-105">
              <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-2 text-sm font-semibold">
                RECOMMENDED
              </div>
              <div className="p-8 pt-12">
                <h3 className="text-xl font-semibold mb-6 text-green-600">BitNBolt</h3>
                <div className="space-y-4">
                  {comparison.map((item, index) => (
                    <div key={index} className="flex items-center justify-between py-3 border-b border-border/50">
                      <span className="text-sm text-muted-foreground">{item.category}</span>
                      <span className="font-semibold text-green-600">{item.us}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 text-green-500" />
                    Simple & intuitive
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 text-green-500" />
                    Transparent pricing
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 text-green-500" />
                    24/7 support
                  </div>
                </div>
              </div>
            </MagicCard>

            {/* Savings Calculator */}
            <MagicCard className="relative overflow-hidden bg-gradient-to-br from-blue-500/5 to-purple-500/5">
              <div className="p-8">
                <h3 className="text-xl font-semibold mb-6">Your Savings</h3>
                <div className="space-y-6">
                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block">
                      Current monthly spend
                    </label>
                    <input
                      type="range"
                      min="29"
                      max="199"
                      value={savings}
                      onChange={(e) => setSavings(Number(e.target.value))}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-muted-foreground mt-1">
                      <span>$29</span>
                      <span className="font-semibold text-lg">${savings}</span>
                      <span>$199</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">You pay now:</span>
                      <span className="font-semibold">${savings}/mo</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">With us:</span>
                      <span className="font-semibold text-green-600">$12/mo</span>
                    </div>
                    <div className="border-t pt-3">
                      <div className="flex justify-between">
                        <span className="font-semibold">You save:</span>
                        <span className="text-2xl font-bold text-green-600">
                          ${savings - 12}/mo
                        </span>
                      </div>
                      <div className="text-center mt-2 text-sm text-muted-foreground">
                        That's <span className="font-semibold text-green-600">${(savings - 12) * 12}/year</span> saved!
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </MagicCard>
          </div>
        </BlurFade>

        {/* CTA */}
        <BlurFade delay={0.3} inView>
          <div className="text-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              Switch today. Lightweight, fast, and tailored for SMBs
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              No contracts. Cancel anytime. 30-day money-back guarantee.
            </p>
          </div>
        </BlurFade>
      </div>
    </section>
  )
}