import { Metadata } from "next"
import PricingPageClient from "./pricing-client"

export const metadata: Metadata = {
  title: "Pricing - BitNBolt",
  description: "Simple, transparent pricing for AI-powered websites. Choose monthly, yearly, or one-time payment options.",
}

export default function PricingPage() {
  return <PricingPageClient />
}