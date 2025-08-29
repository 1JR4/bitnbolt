"use client"

import { useState } from "react"
import { Check, ArrowRight, Zap, Crown, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import Link from "next/link"

const plans = [
  {
    id: "standard",
    name: "Standard",
    description: "Everything you need to get online and grow",
    monthlyPrice: 29,
    yearlyPrice: 290,
    oneTimePrice: 599,
    icon: <Zap className="h-6 w-6" />,
    features: [
      "5-page professional website",
      "AI content generation",
      "Mobile responsive design",
      "Basic SEO optimization", 
      "Contact forms & lead capture",
      "SSL certificate included",
      "Monthly performance reports",
      "Email support",
      "Free domain for 1st year",
      "Social media integration"
    ],
    cta: "Get Started",
    popular: false,
    color: "blue"
  },
  {
    id: "pro",
    name: "Pro",
    description: "Advanced features for ambitious businesses",
    monthlyPrice: 79,
    yearlyPrice: 790,
    oneTimePrice: 999,
    icon: <Crown className="h-6 w-6" />,
    features: [
      "Everything in Standard",
      "Unlimited pages",
      "Advanced AI chatbot",
      "E-commerce functionality",
      "Advanced SEO tools",
      "Custom integrations",
      "Priority support (24/7)",
      "Advanced analytics dashboard",
      "A/B testing tools",
      "White-label options",
      "Custom domain setup",
      "Advanced form builder",
      "Marketing automation"
    ],
    cta: "Go Pro",
    popular: true,
    color: "purple"
  }
]

const billingPeriods = [
  { id: "monthly", label: "Monthly", description: "Pay monthly" },
  { id: "yearly", label: "Yearly", description: "Save 17%" },
  { id: "onetime", label: "One-time", description: "Pay once, own forever" }
]

export default function PricingPageClient() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly" | "onetime">("monthly")

  const getPrice = (plan: typeof plans[0]) => {
    switch (billingPeriod) {
      case "monthly":
        return { amount: plan.monthlyPrice, period: "/mo" }
      case "yearly":
        return { amount: plan.yearlyPrice, period: "/year" }
      case "onetime":
        return { amount: plan.oneTimePrice, period: "" }
      default:
        return { amount: plan.monthlyPrice, period: "/mo" }
    }
  }

  return (
    <div className="min-h-screen py-24 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium mb-4">
            <Sparkles className="h-4 w-4 mr-2" />
            Simple, Transparent Pricing
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Choose Your Plan
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Start with our Standard plan or go Pro for advanced features. 
            Pay monthly, yearly, or make a one-time purchase.
          </p>
        </div>

        {/* Billing Period Toggle */}
        <div className="flex justify-center mb-12">
          <div className="grid grid-cols-3 bg-muted rounded-lg p-1 max-w-md">
            {billingPeriods.map((period) => (
              <button
                key={period.id}
                onClick={() => setBillingPeriod(period.id as any)}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-md transition-all relative",
                  billingPeriod === period.id
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <div className="flex flex-col items-center">
                  <span>{period.label}</span>
                  <span className="text-xs text-muted-foreground">{period.description}</span>
                </div>
                {period.id === "yearly" && (
                  <Badge className="absolute -top-2 -right-2 text-xs bg-green-500 text-white">
                    Save 17%
                  </Badge>
                )}
                {period.id === "onetime" && (
                  <Badge className="absolute -top-2 -right-2 text-xs bg-purple-500 text-white">
                    Best Value
                  </Badge>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => {
            const price = getPrice(plan)
            
            return (
              <div
                key={plan.id}
                className={cn(
                  "relative rounded-2xl border bg-card p-8 shadow-lg transition-all duration-200 hover:shadow-xl",
                  plan.popular 
                    ? "border-purple-500/50 ring-1 ring-purple-500/20 scale-105" 
                    : "border-border hover:border-border/80"
                )}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}

                <div className="flex items-center gap-3 mb-4">
                  <div className={cn(
                    "p-2 rounded-lg",
                    plan.color === "purple" ? "bg-purple-100 text-purple-600 dark:bg-purple-900/30" : "bg-blue-100 text-blue-600 dark:bg-blue-900/30"
                  )}>
                    {plan.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{plan.name}</h3>
                    <p className="text-muted-foreground">{plan.description}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold">${price.amount}</span>
                    <span className="text-xl text-muted-foreground">{price.period}</span>
                  </div>
                  {billingPeriod === "yearly" && (
                    <p className="text-sm text-green-600 mt-1">
                      Save ${(plan.monthlyPrice * 12) - plan.yearlyPrice} annually
                    </p>
                  )}
                  {billingPeriod === "onetime" && (
                    <p className="text-sm text-purple-600 mt-1">
                      One-time payment • Lifetime access
                    </p>
                  )}
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  size="lg" 
                  className={cn(
                    "w-full",
                    plan.popular 
                      ? "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700" 
                      : ""
                  )}
                  asChild
                >
                  <Link href="/contact">
                    {plan.cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            )
          })}
        </div>

        {/* FAQ Section */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">What's included in the one-time payment?</h3>
                <p className="text-sm text-muted-foreground">
                  The one-time payment gives you lifetime access to all Pro features, including future updates. 
                  You own the website forever with no recurring fees.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Can I upgrade or downgrade anytime?</h3>
                <p className="text-sm text-muted-foreground">
                  Yes! You can change your plan at any time. Upgrades take effect immediately, 
                  and downgrades take effect at the next billing cycle.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">What's your refund policy?</h3>
                <p className="text-sm text-muted-foreground">
                  We offer a 30-day money-back guarantee for all plans. If you're not satisfied, 
                  we'll refund your payment in full.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">Do you offer custom solutions?</h3>
                <p className="text-sm text-muted-foreground">
                  Yes! For businesses with unique needs, we offer custom development and 
                  white-label solutions. Contact us to discuss your requirements.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Is there a free trial?</h3>
                <p className="text-sm text-muted-foreground">
                  We offer a free consultation and website audit. This helps you understand 
                  the value before committing to a plan.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">What kind of support do you provide?</h3>
                <p className="text-sm text-muted-foreground">
                  Standard plans include email support with 24-48 hour response time. 
                  Pro plans get priority 24/7 support via chat, email, and phone.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-24 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/50 dark:to-purple-950/50 rounded-3xl p-12 border">
            <h2 className="text-3xl font-bold mb-4">Ready to Launch Your Website?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join 1,200+ business owners who chose BitNBolt for their AI-powered website. 
              Launch in 48 hours with our proven process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">Start Your Project</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">Get Free Consultation</Link>
              </Button>
            </div>
            <div className="flex items-center justify-center gap-8 mt-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-500" />
                <span>30-day money-back guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-500" />
                <span>No setup fees</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-500" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}