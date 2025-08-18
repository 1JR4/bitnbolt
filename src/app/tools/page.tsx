import { Metadata } from "next"
import { Calculator, Target, ArrowRight, Zap, BarChart3 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Free Business Tools - BitNBolt",
  description: "Free tools to help you make better decisions about your website and digital presence. Compare pricing, grade your site, and more.",
}

const tools = [
  {
    name: "Pricing Comparator",
    description: "Compare BitNBolt pricing with other website platforms and see how much you could save.",
    href: "/tools/comparator",
    icon: <Calculator className="h-8 w-8" />,
    features: [
      "Compare 10+ popular platforms",
      "Calculate total cost of ownership",
      "Feature comparison matrix",
      "ROI analysis"
    ],
    color: "blue"
  },
  {
    name: "Website Grader", 
    description: "Get a free analysis of your current website's performance, SEO, and user experience.",
    href: "/tools/grader",
    icon: <Target className="h-8 w-8" />,
    features: [
      "Performance analysis",
      "SEO audit",
      "Mobile-friendliness check", 
      "Detailed recommendations"
    ],
    color: "green"
  }
]

export default function ToolsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Free tools for smarter decisions
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Make informed choices about your website with our free analysis and comparison tools.
          </p>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-12 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {tools.map((tool, index) => (
              <div key={index} className="bg-card border rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className={`inline-flex p-3 rounded-xl mb-6 ${
                  tool.color === 'blue' 
                    ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600' 
                    : 'bg-green-100 dark:bg-green-900/30 text-green-600'
                }`}>
                  {tool.icon}
                </div>
                
                <h2 className="text-2xl font-bold mb-4">{tool.name}</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {tool.description}
                </p>
                
                <ul className="space-y-2 mb-8">
                  {tool.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <div className={`w-1.5 h-1.5 rounded-full mr-3 ${
                        tool.color === 'blue' ? 'bg-blue-500' : 'bg-green-500'
                      }`} />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button size="lg" className="w-full" asChild>
                  <Link href={tool.href}>
                    Try {tool.name}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why use our tools?</h2>
            <p className="text-muted-foreground">
              Make data-driven decisions with accurate, unbiased analysis.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Fast & Free</h3>
              <p className="text-sm text-muted-foreground">
                Get instant results without any signup or payment required.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold mb-2">Accurate Data</h3>
              <p className="text-sm text-muted-foreground">
                Based on real market data and current industry standards.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold mb-2">Actionable Insights</h3>
              <p className="text-sm text-muted-foreground">
                Get specific recommendations you can implement right away.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to improve your website?</h2>
          <p className="text-muted-foreground mb-6">
            After using our tools, see how BitNBolt can help you implement the improvements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">Get a demo</Link>
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