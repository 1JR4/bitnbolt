"use client"

import { useState } from "react"
import { Metadata } from "next"
import { Mail, Phone, MessageCircle, Clock, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    business: "",
    website: "",
    goals: ""
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would normally send the form data to your backend
    console.log("Form submitted:", formData)
    setIsSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Ready for a site you can manage with your voice?
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Book a demo and see how easy it is to build and manage a professional website 
            that actually converts visitors into customers.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-8 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-card border rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-6">Book my demo</h2>
            
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Thank you!</h3>
                <p className="text-muted-foreground mb-4">
                  We'll reach out within one business day to schedule your personalized demo.
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => setIsSubmitted(false)}
                >
                  Submit another request
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="business" className="block text-sm font-medium mb-2">
                    Business Name *
                  </label>
                  <input
                    type="text"
                    id="business"
                    name="business"
                    required
                    value={formData.business}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your business name"
                  />
                </div>

                <div>
                  <label htmlFor="website" className="block text-sm font-medium mb-2">
                    Current Website
                  </label>
                  <input
                    type="url"
                    id="website"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="https://yoursite.com (optional)"
                  />
                </div>

                <div>
                  <label htmlFor="goals" className="block text-sm font-medium mb-2">
                    Goals & Requirements
                  </label>
                  <textarea
                    id="goals"
                    name="goals"
                    rows={4}
                    value={formData.goals}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Tell us about your business goals and what you're looking for in a website..."
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Book my demo
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  We'll reach out within one business day to schedule your personalized demo.
                </p>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-card border rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-6">Get in touch</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-blue-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Email us</h4>
                    <p className="text-muted-foreground text-sm mb-2">
                      For general inquiries and support
                    </p>
                    <a 
                      href="mailto:hello@bitnbolt.com" 
                      className="text-blue-600 hover:text-blue-700 text-sm"
                    >
                      hello@bitnbolt.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Call us</h4>
                    <p className="text-muted-foreground text-sm mb-2">
                      Monday to Friday, 9am to 6pm EST
                    </p>
                    <a 
                      href="tel:+15551234567" 
                      className="text-green-600 hover:text-green-700 text-sm"
                    >
                      (555) 123-4567
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MessageCircle className="h-6 w-6 text-purple-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Live chat</h4>
                    <p className="text-muted-foreground text-sm mb-2">
                      Available on every page - just click the chat button
                    </p>
                    <span className="text-purple-600 text-sm">
                      Chatbot available 24/7
                    </span>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-orange-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Quick demo</h4>
                    <p className="text-muted-foreground text-sm">
                      Live walkthrough in under 20 minutes
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/50 dark:to-purple-950/50 rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-4">What to expect</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm">Personalized demo of our platform</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm">Discussion of your specific needs</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm">Custom recommendations for your business</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm">Timeline and next steps</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm">No pressure - just helpful insights</span>
                </li>
              </ul>
            </div>

            {/* Emergency Contact */}
            <div className="bg-card border rounded-xl p-6">
              <h4 className="font-semibold mb-2">Need immediate help?</h4>
              <p className="text-sm text-muted-foreground mb-3">
                If you're an existing customer with an urgent issue, reach out directly:
              </p>
              <a 
                href="mailto:support@bitnbolt.com" 
                className="text-blue-600 hover:text-blue-700 text-sm font-medium"
              >
                support@bitnbolt.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}