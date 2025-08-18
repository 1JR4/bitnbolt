"use client"

import { useState, useMemo } from "react"
import { Metadata } from "next"
import { Check, X, Calculator, DollarSign, TrendingDown, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"

const platforms = [
  {
    name: "BitNBolt",
    monthlyPrice: 49,
    yearlyPrice: 490,
    setupFee: 0,
    features: {
      hosting: true,
      ssl: true,
      mobileResponsive: true,
      seo: true,
      analytics: true,
      support: "Priority",
      updates: "Unlimited",
      customDomain: true,
      ecommerce: true,
      blog: true,
      forms: true,
      chatbot: true,
      conversationalUpdates: true,
      apiAccess: true
    },
    color: "blue"
  },
  {
    name: "WordPress",
    monthlyPrice: 25,
    yearlyPrice: 300,
    setupFee: 500,
    features: {
      hosting: false, // Requires separate hosting ($10-20/mo)
      ssl: false, // Usually extra
      mobileResponsive: true,
      seo: "Plugin required",
      analytics: "Plugin required", 
      support: "Community",
      updates: "Manual",
      customDomain: false, // Extra cost
      ecommerce: "Plugin required",
      blog: true,
      forms: "Plugin required",
      chatbot: "Plugin required",
      conversationalUpdates: false,
      apiAccess: true
    },
    color: "gray"
  },
  {
    name: "Squarespace",
    monthlyPrice: 18,
    yearlyPrice: 216,
    setupFee: 0,
    features: {
      hosting: true,
      ssl: true,
      mobileResponsive: true,
      seo: "Basic",
      analytics: "Basic",
      support: "Email",
      updates: "Template changes only",
      customDomain: true,
      ecommerce: "Higher tier only",
      blog: true,
      forms: "Limited",
      chatbot: false,
      conversationalUpdates: false,
      apiAccess: "Limited"
    },
    color: "gray"
  },
  {
    name: "Wix",
    monthlyPrice: 23,
    yearlyPrice: 276,
    setupFee: 0,
    features: {
      hosting: true,
      ssl: true,
      mobileResponsive: true,
      seo: "Basic",
      analytics: "Basic",
      support: "Email",
      updates: "Editor only",
      customDomain: true,
      ecommerce: "Higher tier only",
      blog: true,
      forms: "Limited",
      chatbot: "Premium feature",
      conversationalUpdates: false,
      apiAccess: "Limited"
    },
    color: "gray"
  },
  {
    name: "Webflow",
    monthlyPrice: 23,
    yearlyPrice: 276,
    setupFee: 0,
    features: {
      hosting: true,
      ssl: true,
      mobileResponsive: true,
      seo: true,
      analytics: "Basic",
      support: "Email",
      updates: "Design skills required",
      customDomain: true,
      ecommerce: "Higher tier only",
      blog: "CMS plan required",
      forms: "Limited submissions",
      chatbot: false,
      conversationalUpdates: false,
      apiAccess: true
    },
    color: "gray"
  }
]

const additionalCosts = {
  WordPress: [
    { item: "Hosting", cost: 15, frequency: "monthly" },
    { item: "Premium Theme", cost: 100, frequency: "yearly" },
    { item: "Essential Plugins", cost: 200, frequency: "yearly" },
    { item: "SSL Certificate", cost: 50, frequency: "yearly" },
    { item: "Professional Setup", cost: 800, frequency: "one-time" }
  ],
  Squarespace: [
    { item: "Advanced features", cost: 8, frequency: "monthly" },
    { item: "Ecommerce upgrade", cost: 18, frequency: "monthly" }
  ],
  Wix: [
    { item: "Remove ads", cost: 5, frequency: "monthly" },
    { item: "Ecommerce features", cost: 20, frequency: "monthly" }
  ],
  Webflow: [
    { item: "CMS for blog", cost: 16, frequency: "monthly" },
    { item: "Ecommerce", cost: 29, frequency: "monthly" }
  ]
}

export default function PricingComparatorPage() {
  const [selectedPlatforms, setSelectedPlatforms] = useState([0, 1]) // BitNBolt and WordPress by default
  const [timeframe, setTimeframe] = useState<"monthly" | "yearly">("yearly")
  const [includeAdditionalCosts, setIncludeAdditionalCosts] = useState(true)

  const togglePlatform = (index: number) => {
    if (selectedPlatforms.includes(index)) {
      if (selectedPlatforms.length > 1) {
        setSelectedPlatforms(selectedPlatforms.filter(i => i !== index))
      }
    } else {
      if (selectedPlatforms.length < 4) {
        setSelectedPlatforms([...selectedPlatforms, index])
      }
    }
  }

  const calculateTotalCost = (platformIndex: number) => {
    const platform = platforms[platformIndex]
    const baseYearlyCost = timeframe === "yearly" ? platform.yearlyPrice : platform.monthlyPrice * 12
    
    if (!includeAdditionalCosts || !additionalCosts[platform.name as keyof typeof additionalCosts]) {
      return baseYearlyCost + platform.setupFee
    }

    const additionals = additionalCosts[platform.name as keyof typeof additionalCosts] || []
    const additionalYearlyCost = additionals.reduce((total, item) => {
      if (item.frequency === "monthly") return total + (item.cost * 12)
      if (item.frequency === "yearly") return total + item.cost
      return total // one-time costs not included in yearly calculation
    }, 0)

    return baseYearlyCost + additionalYearlyCost + platform.setupFee
  }

  const selectedPlatformData = selectedPlatforms.map(index => ({
    ...platforms[index],
    totalCost: calculateTotalCost(index)
  }))

  const cheapestCost = Math.min(...selectedPlatformData.map(p => p.totalCost))
  const savings = selectedPlatformData.map(p => p.totalCost - cheapestCost)

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-12 px-8">
        <div className="max-w-6xl mx-auto">
          <Button variant="ghost" asChild className="mb-8">
            <Link href="/tools">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to tools
            </Link>
          </Button>
          
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Website Platform Pricing Comparator
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Compare the true cost of website platforms including all hidden fees and additional costs.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-8 pb-24">
        {/* Controls */}
        <div className="bg-card border rounded-xl p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
            <div>
              <h3 className="font-semibold mb-4">Select platforms to compare</h3>
              <div className="flex flex-wrap gap-2">
                {platforms.map((platform, index) => (
                  <button
                    key={platform.name}
                    onClick={() => togglePlatform(index)}
                    className={cn(
                      "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                      selectedPlatforms.includes(index)
                        ? platform.color === "blue" 
                          ? "bg-blue-500 text-white" 
                          : "bg-gray-800 text-white"
                        : "bg-muted hover:bg-muted/80"
                    )}
                  >
                    {platform.name}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Billing Period</label>
                <div className="bg-muted p-1 rounded-lg flex">
                  <button
                    onClick={() => setTimeframe("monthly")}
                    className={cn(
                      "px-4 py-2 rounded-md text-sm font-medium transition-colors",
                      timeframe === "monthly" ? "bg-background shadow-sm" : "text-muted-foreground"
                    )}
                  >
                    Monthly
                  </button>
                  <button
                    onClick={() => setTimeframe("yearly")}
                    className={cn(
                      "px-4 py-2 rounded-md text-sm font-medium transition-colors",
                      timeframe === "yearly" ? "bg-background shadow-sm" : "text-muted-foreground"
                    )}
                  >
                    Yearly
                  </button>
                </div>
              </div>
              
              <div>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={includeAdditionalCosts}
                    onChange={(e) => setIncludeAdditionalCosts(e.target.checked)}
                    className="rounded"
                  />
                  <span className="text-sm font-medium">Include additional costs</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="bg-card border rounded-xl overflow-hidden mb-8">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b bg-muted/30">
                  <th className="text-left p-4 font-semibold">Feature</th>
                  {selectedPlatformData.map((platform, index) => (
                    <th key={index} className="text-center p-4 font-semibold min-w-[150px]">
                      <div className={cn(
                        "inline-flex px-3 py-1 rounded-full text-sm",
                        platform.color === "blue" 
                          ? "bg-blue-100 dark:bg-blue-900/30 text-blue-600"
                          : "bg-gray-100 dark:bg-gray-800 text-gray-600"
                      )}>
                        {platform.name}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-4 font-semibold">
                    Base Price ({timeframe})
                  </td>
                  {selectedPlatformData.map((platform, index) => (
                    <td key={index} className="text-center p-4">
                      <div className="font-bold">
                        ${timeframe === "yearly" ? platform.yearlyPrice : platform.monthlyPrice}
                        {timeframe === "monthly" && "/mo"}
                      </div>
                    </td>
                  ))}
                </tr>
                
                <tr className="border-b">
                  <td className="p-4 font-semibold">Setup Fee</td>
                  {selectedPlatformData.map((platform, index) => (
                    <td key={index} className="text-center p-4">
                      {platform.setupFee === 0 ? (
                        <span className="text-green-600 font-semibold">Free</span>
                      ) : (
                        <span className="text-red-600">${platform.setupFee}</span>
                      )}
                    </td>
                  ))}
                </tr>

                <tr className="border-b bg-blue-50 dark:bg-blue-950/20">
                  <td className="p-4 font-bold">
                    <div className="flex items-center">
                      <Calculator className="h-4 w-4 mr-2 text-blue-600" />
                      Total First Year Cost
                    </div>
                  </td>
                  {selectedPlatformData.map((platform, index) => (
                    <td key={index} className="text-center p-4">
                      <div className="font-bold text-lg">
                        ${platform.totalCost.toLocaleString()}
                      </div>
                      {savings[index] > 0 && (
                        <div className="text-red-600 text-sm">
                          +${savings[index].toLocaleString()} vs cheapest
                        </div>
                      )}
                      {savings[index] === 0 && (
                        <div className="text-green-600 text-sm font-medium">
                          Best value
                        </div>
                      )}
                    </td>
                  ))}
                </tr>

                {/* Feature comparison rows */}
                {Object.entries(platforms[0].features).map(([feature, _]) => (
                  <tr key={feature} className="border-b">
                    <td className="p-4 capitalize">
                      {feature.replace(/([A-Z])/g, ' $1').trim()}
                    </td>
                    {selectedPlatformData.map((platform, index) => (
                      <td key={index} className="text-center p-4">
                        {renderFeatureValue(platform.features[feature as keyof typeof platform.features])}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-xl p-6">
            <DollarSign className="h-8 w-8 text-green-600 mb-3" />
            <h3 className="font-bold mb-2">Lowest Cost</h3>
            <div className="text-2xl font-bold text-green-600">
              ${cheapestCost.toLocaleString()}
            </div>
            <div className="text-sm text-muted-foreground">
              {selectedPlatformData.find(p => p.totalCost === cheapestCost)?.name}
            </div>
          </div>

          <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-xl p-6">
            <TrendingDown className="h-8 w-8 text-red-600 mb-3" />
            <h3 className="font-bold mb-2">Potential Savings</h3>
            <div className="text-2xl font-bold text-red-600">
              ${Math.max(...savings).toLocaleString()}
            </div>
            <div className="text-sm text-muted-foreground">
              vs most expensive option
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6">
            <Calculator className="h-8 w-8 text-blue-600 mb-3" />
            <h3 className="font-bold mb-2">Best Value</h3>
            <div className="text-lg font-bold">BitNBolt</div>
            <div className="text-sm text-muted-foreground">
              Most features per dollar
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to switch to BitNBolt?</h2>
          <p className="text-muted-foreground mb-6">
            See how much you could save while getting more features and better support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">Get started</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/pricing">View plans</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

function renderFeatureValue(value: boolean | string) {
  if (typeof value === "boolean") {
    return value ? (
      <Check className="h-5 w-5 text-green-500 mx-auto" />
    ) : (
      <X className="h-5 w-5 text-red-500 mx-auto" />
    )
  }
  
  if (value === "true" || value === "Basic" || value === "Limited") {
    return (
      <span className={cn(
        "text-sm px-2 py-1 rounded-full",
        value === "Basic" || value === "Limited"
          ? "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400"
          : "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400"
      )}>
        {value}
      </span>
    )
  }
  
  return <span className="text-sm text-muted-foreground">{value}</span>
}