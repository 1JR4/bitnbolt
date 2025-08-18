import { Metadata } from "next"
import { Check, ArrowRight, Zap, Users, MessageSquare, BarChart3, Shield, Rocket } from "lucide-react"
import { Button } from "@/components/ui/button"
import { BentoGrid } from "@/components/magicui/bento-grid"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Services - BitNBolt",
  description: "Everything you need to launch and grow online, without the bloat. From starter sites to advanced business features.",
}

export default function ServicesPage() {
  const packages = [
    {
      name: "Starter",
      price: "$19/mo",
      description: "Perfect for new businesses ready to get online",
      features: [
        "Modern one-page website",
        "Lead capture forms", 
        "Built-in chatbot",
        "Basic analytics",
        "Mobile-responsive design",
        "SSL security included"
      ],
      cta: "Start with Starter",
      popular: false
    },
    {
      name: "Growth", 
      price: "$49/mo",
      description: "For businesses ready to scale their online presence",
      features: [
        "Multi-page website",
        "Blog and resource hub",
        "Client testimonials showcase",
        "Advanced lead capture",
        "On-page SEO optimization",
        "Email support"
      ],
      cta: "Choose Growth",
      popular: true
    },
    {
      name: "Pro",
      price: "$99/mo", 
      description: "Enterprise features for ambitious businesses",
      features: [
        "Everything in Growth",
        "Automation hooks and integrations",
        "Custom components and sections",
        "Priority support",
        "Advanced analytics",
        "API access"
      ],
      cta: "Go Pro",
      popular: false
    }
  ]

  const allFeatures = [
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Conversational updates",
      description: "Update your site by simply telling it what you want. No technical knowledge required."
    },
    {
      icon: <Rocket className="h-6 w-6" />,
      title: "Blog and resource hub", 
      description: "Share your expertise and improve SEO with a built-in blogging platform."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Client links with testimonials",
      description: "Showcase your work and let happy clients speak for you."
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Built-in chatbot",
      description: "Never miss a lead with 24/7 automated customer support."
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Lead capture everywhere",
      description: "Smart forms and CTAs that convert visitors into customers."
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Analytics ready",
      description: "Track what matters with built-in analytics and reporting."
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Everything you need to launch and grow online
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Without the bloat. Choose your package and start building your professional presence today.
          </p>
          <Button size="lg" asChild>
            <Link href="#packages">
              See packages
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Service Packages */}
      <section id="packages" className="py-24 px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Choose your package</h2>
            <p className="text-muted-foreground">
              Start simple, scale as you grow. No surprise add-ons or hidden fees.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div 
                key={index} 
                className={`bg-card border rounded-2xl p-8 relative ${
                  pkg.popular ? 'border-blue-500 shadow-lg' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                  <div className="text-3xl font-bold text-blue-600 mb-2">{pkg.price}</div>
                  <p className="text-sm text-muted-foreground">{pkg.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5 mr-3" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className="w-full" 
                  variant={pkg.popular ? "default" : "outline"}
                  asChild
                >
                  <Link href="/contact">{pkg.cta}</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Features */}
      <section className="py-24 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Features that work for your business</h2>
            <p className="text-muted-foreground">
              Every feature is designed to help you attract more customers and grow your business.
            </p>
          </div>
          <BentoGrid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allFeatures.map((feature, index) => (
              <div key={index} className="bg-card p-8 rounded-xl border hover:shadow-lg transition-shadow">
                <div className="text-blue-600 mb-4">
                  {feature.icon}
                </div>
                <h3 className="font-semibold mb-3 text-lg">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </BentoGrid>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">How it works</h2>
            <p className="text-muted-foreground">
              From idea to launch in days, not months.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="font-semibold mb-2">Choose your package</h3>
              <p className="text-sm text-muted-foreground">
                Select the plan that fits your business needs and goals.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">2</span>
              </div>
              <h3 className="font-semibold mb-2">Tell us your vision</h3>
              <p className="text-sm text-muted-foreground">
                Share your business story, goals, and what you want to achieve.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">3</span>
              </div>
              <h3 className="font-semibold mb-2">Launch and grow</h3>
              <p className="text-sm text-muted-foreground">
                Your site goes live and you can update it anytime by talking to it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-8 bg-gradient-to-r from-blue-600/10 to-purple-600/10 border-y">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">See it in action</h2>
          <p className="text-muted-foreground mb-6">
            Live walkthrough in under 20 minutes. No commitment required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">Book a demo</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/pricing">View pricing</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}