"use client"

import { useState } from "react"
import { Metadata } from "next"
import { ChevronDown, ChevronUp, Search, MessageCircle, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"

const faqData = [
  {
    category: "Getting Started",
    questions: [
      {
        question: "How fast can we launch?",
        answer: "Most starter sites launch within 48 hours. More complex projects typically take 3-7 days. Our templates and automation reduce the usual busywork, so you can focus on your business while we handle the technical details."
      },
      {
        question: "What if I already have a domain?",
        answer: "Perfect! We'll help you point your existing domain to your new site. We provide step-by-step DNS instructions and can even handle the technical setup for you if needed."
      },
      {
        question: "Do you provide hosting?",
        answer: "Yes, hosting is included in all our plans. We use enterprise-grade infrastructure with 99.9% uptime guarantee, automatic backups, and global CDN for fast loading worldwide."
      },
      {
        question: "Can you migrate my current content?",
        answer: "Absolutely. We can import your existing pages, posts, images, and other content, then modernize the layout and copy to match your new site's design and best practices."
      }
    ]
  },
  {
    category: "Pricing & Plans",
    questions: [
      {
        question: "How does pricing work?",
        answer: "Our plans align with your business stage. Start with Starter ($19/mo) for a basic presence, upgrade to Growth ($49/mo) as you expand, or choose Pro ($99/mo) for advanced features. No surprise add-ons or hidden fees."
      },
      {
        question: "Can I change plans anytime?",
        answer: "Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any price differences. No contracts or cancellation fees."
      },
      {
        question: "Is there a free trial?",
        answer: "We don't offer a traditional free trial, but we do provide a 30-day money-back guarantee. If you're not completely satisfied, we'll refund your payment in full."
      },
      {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit cards (Visa, MasterCard, American Express) and PayPal. All payments are processed securely through Stripe."
      }
    ]
  },
  {
    category: "Features & Functionality", 
    questions: [
      {
        question: "How does the conversational control work?",
        answer: "Simply tell our AI what you want to change on your site using natural language. For example: 'Update the homepage headline to focus on our new service' or 'Add a testimonial section with our latest reviews.' The AI understands context and makes the changes accurately."
      },
      {
        question: "Can I edit the site myself without the AI?",
        answer: "Yes! While our conversational AI makes updates super easy, you can also edit content directly through our intuitive dashboard. You get the best of both worlds - easy AI updates or hands-on control when you want it."
      },
      {
        question: "What integrations do you support?",
        answer: "We integrate with popular tools like Google Analytics, Mailchimp, Zapier, Calendly, and more. Pro plans include advanced integrations and custom API access for specialized needs."
      },
      {
        question: "Is my site mobile-responsive?",
        answer: "Absolutely. All our sites are built mobile-first and look great on phones, tablets, and desktops. We test on real devices to ensure your site works perfectly everywhere."
      }
    ]
  },
  {
    category: "Support & Maintenance",
    questions: [
      {
        question: "What kind of support do you provide?",
        answer: "All plans include email support with detailed responses. Growth and Pro plans get priority support with faster response times. We also provide extensive documentation, video tutorials, and live chat during business hours."
      },
      {
        question: "Do you handle updates and security?",
        answer: "Yes, we handle all technical maintenance including security updates, performance optimization, and backup management. Your site stays secure and fast without any effort from you."
      },
      {
        question: "What if something breaks?",
        answer: "We monitor all sites 24/7 and fix issues proactively. If something does go wrong, we'll restore from our automatic backups and have you back online quickly. Pro customers get priority emergency support."
      },
      {
        question: "Can I download my site if I leave?",
        answer: "Yes, you own your content. We can provide exports of your content and help with migration to another platform if needed. We believe in transparency and no vendor lock-in."
      }
    ]
  }
]

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [expandedItems, setExpandedItems] = useState<string[]>([])
  const [selectedCategory, setSelectedCategory] = useState("All")

  const categories = ["All", ...faqData.map(cat => cat.category)]

  const toggleExpanded = (questionId: string) => {
    setExpandedItems(prev => 
      prev.includes(questionId) 
        ? prev.filter(id => id !== questionId)
        : [...prev, questionId]
    )
  }

  const filteredFAQs = faqData.filter(category => {
    if (selectedCategory !== "All" && category.category !== selectedCategory) {
      return false
    }
    
    if (searchTerm) {
      return category.questions.some(q => 
        q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        q.answer.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }
    
    return true
  }).map(category => ({
    ...category,
    questions: category.questions.filter(q => 
      !searchTerm || 
      q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }))

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Everything you need to know about BitNBolt. Can't find what you're looking for? 
            Just ask us directly.
          </p>
          
          {/* Search */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-8 pb-24">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                selectedCategory === category
                  ? "bg-blue-500 text-white"
                  : "bg-muted hover:bg-muted/80"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* FAQ Sections */}
        <div className="space-y-12">
          {filteredFAQs.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h2 className="text-2xl font-bold mb-6">{category.category}</h2>
              <div className="space-y-4">
                {category.questions.map((faq, questionIndex) => {
                  const questionId = `${categoryIndex}-${questionIndex}`
                  const isExpanded = expandedItems.includes(questionId)
                  
                  return (
                    <div 
                      key={questionIndex}
                      className="bg-card border rounded-xl overflow-hidden"
                    >
                      <button
                        onClick={() => toggleExpanded(questionId)}
                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
                      >
                        <h3 className="font-semibold pr-4">{faq.question}</h3>
                        {isExpanded ? (
                          <ChevronUp className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                        )}
                      </button>
                      {isExpanded && (
                        <div className="px-6 pb-4">
                          <p className="text-muted-foreground leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredFAQs.every(cat => cat.questions.length === 0) && (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold mb-2">No results found</h3>
            <p className="text-muted-foreground mb-6">
              Try adjusting your search or browse all categories.
            </p>
            <Button 
              variant="outline" 
              onClick={() => {
                setSearchTerm("")
                setSelectedCategory("All")
              }}
            >
              Clear filters
            </Button>
          </div>
        )}
      </div>

      {/* Contact Section */}
      <section className="py-16 px-8 bg-muted/30 border-y">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
          <p className="text-muted-foreground mb-6">
            Can't find the answer you're looking for? Our team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">
                <MessageCircle className="mr-2 h-4 w-4" />
                Start a conversation
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="mailto:hello@bitnbolt.com">
                <Mail className="mr-2 h-4 w-4" />
                Email us directly
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Popular resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link 
              href="/pricing" 
              className="bg-card border rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="font-semibold mb-2">Pricing & Plans</h3>
              <p className="text-sm text-muted-foreground">
                Compare our plans and find the right fit for your business.
              </p>
            </Link>
            <Link 
              href="/services" 
              className="bg-card border rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="font-semibold mb-2">Services Overview</h3>
              <p className="text-sm text-muted-foreground">
                Learn about all the features and services we offer.
              </p>
            </Link>
            <Link 
              href="/contact" 
              className="bg-card border rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="font-semibold mb-2">Book a Demo</h3>
              <p className="text-sm text-muted-foreground">
                See our platform in action with a personalized walkthrough.
              </p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}