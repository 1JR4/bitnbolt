"use client"

import { OrbitingCircles } from "@/components/magicui/orbiting-circles"
import { FlickeringGrid } from "@/components/magicui/flickering-grid"
import { BlurFade } from "@/components/magicui/blur-fade"
import { Button } from "@/components/ui/button"
import { Check, TrendingUp, Eye, Shield, Users } from "lucide-react"
import { cn } from "@/lib/utils"

const stats = [
  {
    percentage: "68%",
    description: "of consumers check online before hiring",
    icon: <Eye className="h-5 w-5" />
  },
  {
    percentage: "2.7x",
    description: "faster growth with websites",
    icon: <TrendingUp className="h-5 w-5" />
  },
  {
    percentage: "90%",
    description: "trust businesses more with a site",
    icon: <Shield className="h-5 w-5" />
  },
  {
    percentage: "73%",
    description: "distrust businesses without web presence",
    icon: <Users className="h-5 w-5" />
  }
]

export function WhyWebsiteMatters() {
  return (
    <section className="py-24 px-8 bg-gradient-to-b from-background via-muted/30 to-background relative overflow-hidden">
      {/* Flickering Grid Background */}
      <FlickeringGrid
        className="absolute inset-0 z-0"
        squareSize={4}
        gridGap={6}
        color="#60A5FA"
        maxOpacity={0.1}
        flickerChance={0.1}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <BlurFade delay={0.1} inView>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              No Website? You're Losing Business.
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Here's what the numbers say about businesses without websites.
            </p>
          </div>
        </BlurFade>

        {/* Stats Grid with Orbiting Animation */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {stats.map((stat, index) => (
              <BlurFade key={index} delay={0.2 + index * 0.1} inView>
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                  <div className="relative bg-card/80 backdrop-blur-sm border rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-blue-500/10 rounded-lg text-blue-500">
                        {stat.icon}
                      </div>
                      <div>
                        <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                          {stat.percentage}
                        </div>
                        <p className="text-muted-foreground">
                          {stat.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>

        {/* Comparison Visual */}
        <BlurFade delay={0.6} inView>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Without Website */}
            <div className="relative">
              <div className="bg-red-500/5 border-2 border-red-500/20 rounded-2xl p-8">
                <h3 className="text-xl font-semibold mb-4 text-red-600">Without a Website</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <div className="h-2 w-2 bg-red-500 rounded-full" />
                    Limited to local foot traffic
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <div className="h-2 w-2 bg-red-500 rounded-full" />
                    Missing 68% of potential customers
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <div className="h-2 w-2 bg-red-500 rounded-full" />
                    No 24/7 presence
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <div className="h-2 w-2 bg-red-500 rounded-full" />
                    Lower trust and credibility
                  </li>
                </ul>
              </div>
            </div>

            {/* With Website */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-2xl blur-xl" />
              <div className="relative bg-green-500/5 border-2 border-green-500/20 rounded-2xl p-8">
                <h3 className="text-xl font-semibold mb-4 text-green-600">With a Website</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    Global reach and visibility
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    Capture leads 24/7
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    Professional credibility
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    2.7x faster business growth
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </BlurFade>

        {/* CTA */}
        <BlurFade delay={0.7} inView>
          <div className="text-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              Launch your website today and stop leaving money on the table
            </Button>
          </div>
        </BlurFade>
      </div>
    </section>
  )
}