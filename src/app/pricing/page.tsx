"use client"

import { useState } from "react"
import { Metadata } from "next"
import { Check, ArrowRight, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"

const plans = [
  {
    name: "Starter",
    description: "Perfect for new businesses getting online",
    monthlyPrice: 19,
    yearlyPrice: 190,
    features: [
      "One-page website",
      "Lead capture forms",
      "Chatbot integration", 
      "Basic analytics",
      "Mobile responsive",
      "SSL security",
      "Email support"
    ],
    cta: "Start with Starter",
    popular: false
  },
  {
    name: "Growth",
    description: "For businesses ready to scale",
    monthlyPrice: 49,
    yearlyPrice: 490,
    features: [
      "Multi-page website",
      "Blog functionality",
      "Testimonials section",
      "Client showcase",
      "On-page SEO tools",
      "Advanced analytics",
      "Priority email support",
      "Custom forms"
    ],
    cta: "Choose Growth", 
    popular: true
  },
  {
    name: "Pro",
    description: "Enterprise features for ambitious businesses",
    monthlyPrice: 99,
    yearlyPrice: 990,
    features: [
      "Everything in Growth",
      "Automation hooks",
      "Custom components",
      "API access",
      "Advanced integrations",
      "Priority support",
      "Custom domain setup",
      "Performance optimization"
    ],
    cta: "Go Pro",
    popular: false
  }
]

const faqs = [
  {
    question: "How fast can we launch?",
    answer: "Most starter sites launch within 48 hours. More complex projects typically take 3-7 days. Templates and automation reduce the usual busywork."
  },
  {
    question: "What if I already have a domain?",
    answer: "No problem! We'll help you point your existing domain to your new site and guide you through the DNS setup step by step."
  },
  {
    question: "Can you migrate my current content?",
    answer: "Yes, we can import your existing pages, posts, and assets, then modernize the layout and copy to match your new site's design."
  },
  {
    question: "How does pricing work?",
    answer: "Our plans align with your business stage. Start simple with Starter, upgrade to Growth as you expand, or go Pro for advanced features. No surprise add-ons."
  },
  {
    question: "What kind of support do you provide?",
    answer: "All plans include email support. Growth and Pro plans get priority support with faster response times. We also have extensive documentation and video tutorials."
  },
  {
    question: "Can I change plans anytime?",
    answer: "Absolutely! You can upgrade or downgrade your plan at any time. Changes take effect immediately and we'll prorate any differences."
  }
]

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(false)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Simple, transparent pricing
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Choose the plan that fits your business. Upgrade or downgrade anytime.
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center mb-12">
            <div className="bg-muted p-1 rounded-lg">
              <button
                onClick={() => setIsYearly(false)}
                className={cn(
                  "px-4 py-2 rounded-md text-sm font-medium transition-colors",
                  !isYearly ? "bg-background shadow-sm" : "text-muted-foreground"
                )}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsYearly(true)}
                className={cn(
                  "px-4 py-2 rounded-md text-sm font-medium transition-colors relative",
                  isYearly ? "bg-background shadow-sm" : "text-muted-foreground"
                )}
              >
                Yearly
                <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-0.5 rounded-full">
                  Save 17%
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-12 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div 
                key={index}
                className={cn(
                  "bg-card border rounded-2xl p-8 relative",
                  plan.popular ? "border-blue-500 shadow-lg scale-105" : ""
                )}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                  <div className="mb-2">
                    <span className="text-4xl font-bold">
                      ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-muted-foreground">
                      /{isYearly ? "year" : "month"}
                    </span>
                  </div>
                  {isYearly && (
                    <p className="text-sm text-green-600">
                      Save ${(plan.monthlyPrice * 12) - plan.yearlyPrice} per year
                    </p>
                  )}
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5 mr-3" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className="w-full" 
                  variant={plan.popular ? "default" : "outline"}
                  asChild
                >
                  <Link href="/contact">
                    {plan.cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Link */}
      <section className="py-12 px-8 text-center">
        <p className="text-muted-foreground mb-4">
          Want to see how we compare to other platforms?
        </p>
        <Button variant="outline" asChild>
          <Link href="/tools">
            Compare pricing with our tool
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Frequently asked questions</h2>
            <p className="text-muted-foreground">
              Everything you need to know about our pricing and plans.
            </p>
          </div>
          
          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-card p-6 rounded-xl border">
                <div className="flex items-start space-x-4">
                  <HelpCircle className="h-6 w-6 text-blue-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Section */}
      <section className="py-24 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Need something custom?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            For larger businesses or unique requirements, we offer custom solutions 
            with dedicated support and tailored features.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">Contact sales</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/about">Learn more about us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-8 bg-gradient-to-r from-blue-600/10 to-purple-600/10 border-y">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-muted-foreground mb-6">
            Join hundreds of businesses already growing with BitNBolt.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">Start your website today</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}