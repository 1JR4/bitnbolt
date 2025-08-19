"use client"

import { Marquee } from "@/components/magicui/marquee"
import { AvatarCircles } from "@/components/magicui/avatar-circles"
import { BlurFade } from "@/components/magicui/blur-fade"
import { RainbowButton } from "@/components/magicui/rainbow-button"
import { Button } from "@/components/ui/button"
import { Star, ArrowRight, Rocket } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Chen",
    business: "Chen's Bakery",
    content: "Switched from Wix and saved $400/month. Site loads 3x faster!",
    rating: 5
  },
  {
    name: "Mike Rodriguez",
    business: "Rodriguez Plumbing",
    content: "Finally, a website that actually brings in customers. 10+ leads per week now.",
    rating: 5
  },
  {
    name: "Emma Thompson",
    business: "Thompson Fitness Studio",
    content: "Setup took 2 hours, not 2 weeks. My clients love the booking system.",
    rating: 5
  },
  {
    name: "David Kim",
    business: "Kim's Auto Repair",
    content: "No more paying for features I don't use. Simple, fast, effective.",
    rating: 5
  },
  {
    name: "Lisa Johnson",
    business: "Johnson Consulting",
    content: "The AI chat updates are game-changing. I just tell it what to change!",
    rating: 5
  },
  {
    name: "Robert Brown",
    business: "Brown's Hardware",
    content: "Moved from Shopify. Same features, 1/4 the price, 10x easier.",
    rating: 5
  }
]

const businessLogos = [
  "Local Coffee Shop",
  "Dental Practice",
  "Law Firm",
  "Accounting Services",
  "Real Estate Agency",
  "Pet Grooming",
  "Landscaping Co",
  "Hair Salon"
]

export function SocialProofCTA() {
  const avatarUrls = [
    { imageUrl: "https://i.pravatar.cc/150?img=1", profileUrl: "#" },
    { imageUrl: "https://i.pravatar.cc/150?img=2", profileUrl: "#" },
    { imageUrl: "https://i.pravatar.cc/150?img=3", profileUrl: "#" },
    { imageUrl: "https://i.pravatar.cc/150?img=4", profileUrl: "#" },
    { imageUrl: "https://i.pravatar.cc/150?img=5", profileUrl: "#" }
  ]

  return (
    <section className="py-24 px-8 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <BlurFade delay={0.1} inView>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Join 1,200+ Business Owners Who Made the Switch
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real businesses, real results. Launch in 48 hours or less.
            </p>
          </div>
        </BlurFade>

        {/* Testimonials Marquee */}
        <BlurFade delay={0.2} inView>
          <div className="mb-16">
            <Marquee pauseOnHover className="[--duration:40s]">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="mx-4 w-[350px] bg-card/80 backdrop-blur-sm border rounded-xl p-6 shadow-lg"
                >
                  <div className="flex mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>
                  <p className="text-sm mb-4">{testimonial.content}</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-sm">{testimonial.name}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.business}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Marquee>
          </div>
        </BlurFade>

        {/* Stats Section */}
        <BlurFade delay={0.3} inView>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                1,200+
              </div>
              <p className="text-sm text-muted-foreground">Happy Businesses</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-2">
                48hrs
              </div>
              <p className="text-sm text-muted-foreground">Average Launch Time</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                4.9/5
              </div>
              <p className="text-sm text-muted-foreground">Customer Rating</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2">
                $37
              </div>
              <p className="text-sm text-muted-foreground">Avg. Saved/Month</p>
            </div>
          </div>
        </BlurFade>

        {/* Business Types */}
        <BlurFade delay={0.4} inView>
          <div className="mb-16">
            <p className="text-center text-sm text-muted-foreground mb-6">
              Trusted by businesses across all industries
            </p>
            <Marquee reverse pauseOnHover className="[--duration:30s]">
              {businessLogos.map((logo, index) => (
                <div
                  key={index}
                  className="mx-4 px-6 py-3 bg-card/50 backdrop-blur-sm border rounded-full text-sm font-medium"
                >
                  {logo}
                </div>
              ))}
            </Marquee>
          </div>
        </BlurFade>

        {/* Final CTA */}
        <BlurFade delay={0.5} inView>
          <div className="bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-blue-600/10 rounded-3xl p-12 text-center border border-border/50">
            <div className="flex justify-center mb-6">
              <AvatarCircles avatarUrls={avatarUrls} />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Launch Your Professional Website?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join 1,200+ business owners who switched to BitNBolt. Launch in 48 hours, save 75% on monthly costs, and get a website that actually works for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <RainbowButton>
                <Rocket className="mr-2 h-4 w-4" />
                Launch in 48 Hours
              </RainbowButton>
              <Button variant="outline" size="lg" asChild>
                <a href="/pricing">
                  View pricing
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-500" />
                <span>30-day full refund</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-500" />
                <span>No contracts</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-500" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  )
}

function Check({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  )
}