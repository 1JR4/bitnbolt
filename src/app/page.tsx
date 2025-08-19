import { NumberTicker } from "@/components/magicui/number-ticker";
import { SparklesCore } from "@/components/ui/sparkles";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Bot, MessageSquare, Sparkles } from "lucide-react";
import Link from "next/link";
import { WebsiteBenchmark } from "@/components/home/website-benchmark";
import { WhyWebsiteMatters } from "@/components/home/why-website-matters";
import { BreakFreePlatforms } from "@/components/home/break-free-platforms";
import { CostOfOutdated } from "@/components/home/cost-of-outdated";
import { SocialProofCTA } from "@/components/home/social-proof-cta";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="flex min-h-screen flex-col items-center justify-center p-8 relative overflow-hidden">
        {/* Sparkles Background */}
        <div className="w-full absolute inset-0 h-screen">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.4}
            maxSize={1.4}
            particleDensity={100}
            className="w-full h-full"
            particleColor="#8B5CF6"
            speed={1.0}
          />
        </div>
        
        {/* Blue Sparkles Layer */}
        <div className="w-full absolute inset-0 h-screen">
          <SparklesCore
            id="tsparticlesblue"
            background="transparent"
            minSize={0.3}
            maxSize={1.2}
            particleDensity={60}
            className="w-full h-full"
            particleColor="#3B82F6"
            speed={0.8}
          />
        </div>
        
        {/* Cyan Accent Sparkles */}
        <div className="w-full absolute inset-0 h-screen">
          <SparklesCore
            id="tsparticlescyan"
            background="transparent"
            minSize={0.2}
            maxSize={1.0}
            particleDensity={40}
            className="w-full h-full"
            particleColor="#06B6D4"
            speed={0.6}
          />
        </div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-small-black/[0.1] dark:bg-grid-small-white/[0.1]" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-background/80 to-transparent" />
        
        <div className="text-center space-y-6 max-w-4xl relative z-10">
          <div className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium">
            🚀 Trusted by 500+ small businesses
          </div>
          <div className="relative">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent relative z-20 drop-shadow-[0_0_20px_rgba(139,92,246,0.3)]">
              AI-Powered Websites for Small Business
            </h1>
            <div className="w-[40rem] h-8 relative mx-auto">
              {/* Subtle gradient lights under text */}
              <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent h-[2px] w-3/4 blur-sm" />
              <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px w-3/4" />
              <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent h-[3px] w-1/4 blur-sm" />
              <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent h-px w-1/4" />
              
              {/* Radial Gradient to prevent sharp edges */}
              <div className="absolute inset-0 w-full h-full bg-background [mask-image:radial-gradient(350px_50px_at_top,transparent_20%,white)]"></div>
            </div>
          </div>
          
          {/* Key Selling Points */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-2 max-w-4xl mx-auto">
            <div className="flex flex-col items-center text-center p-4">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-3">
                <Bot className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-lg mb-1">Build with AI in Minutes</h3>
              <p className="text-sm text-muted-foreground">Launch faster than ever with intelligent automation</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-4">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mb-3">
                <MessageSquare className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-lg mb-1">Conversational Management</h3>
              <p className="text-sm text-muted-foreground">Update your site by simply talking to it</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-4">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-3">
                <Sparkles className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-lg mb-1">Better Alternative</h3>
              <p className="text-sm text-muted-foreground">To Wix, GoDaddy, Shopify & others</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <Button size="lg" asChild>
              <Link href="/contact">
                Get started
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/pricing">See pricing</Link>
            </Button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center relative z-10">
          <div className="space-y-2">
            <div className="text-3xl font-bold">
              <NumberTicker value={500} />+
            </div>
            <p className="text-sm text-muted-foreground">Happy customers</p>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold">
              <NumberTicker value={99.9} />%
            </div>
            <p className="text-sm text-muted-foreground">Uptime guarantee</p>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold">
              <NumberTicker value={3} />x
            </div>
            <p className="text-sm text-muted-foreground">Faster loading</p>
          </div>
        </div>

        {/* Guarantee Section */}
        <div className="mt-12 max-w-2xl mx-auto text-center relative z-10">
          <div className="bg-card/50 border rounded-xl p-6 backdrop-blur-sm">
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
        </div>
      </section>

      {/* Module 1: Website Benchmark Analyzer */}
      <WebsiteBenchmark />

      {/* Module 2: Why a Website Matters */}
      <WhyWebsiteMatters />

      {/* Module 3: Break Free from Big Platforms */}
      <BreakFreePlatforms />

      {/* Module 4: The Cost of a Sh*tty Website */}
      <CostOfOutdated />

      {/* Social Proof + Closing CTA */}
      <SocialProofCTA />
    </div>
  );
}