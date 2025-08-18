import { NumberTicker } from "@/components/magicui/number-ticker";
import { BentoGrid } from "@/components/magicui/bento-grid";
import { Marquee } from "@/components/magicui/marquee";
import { SparklesCore } from "@/components/ui/sparkles";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Star, Users, Zap, Shield, Bot, MessageSquare, Sparkles } from "lucide-react";
import Link from "next/link";

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


      {/* USP Grid Section */}
      <section className="py-24 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything you need to succeed online
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Built specifically for small and mid-sized businesses who want powerful features without complexity.
            </p>
          </div>
          <BentoGrid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-card text-card-foreground p-8 rounded-xl border hover:shadow-lg transition-shadow">
              <Users className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="font-semibold mb-2 text-lg">Built for SMBs</h3>
              <p className="text-sm text-muted-foreground">Designed for owners, not IT departments. No clutter. No learning cliff.</p>
            </div>
            <div className="bg-card text-card-foreground p-8 rounded-xl border hover:shadow-lg transition-shadow">
              <Zap className="h-8 w-8 text-purple-600 mb-4" />
              <h3 className="font-semibold mb-2 text-lg">Conversational control</h3>
              <p className="text-sm text-muted-foreground">Update pages, change copy, add sections by chatting with the site.</p>
            </div>
            <div className="bg-card text-card-foreground p-8 rounded-xl border hover:shadow-lg transition-shadow">
              <ArrowRight className="h-8 w-8 text-green-600 mb-4" />
              <h3 className="font-semibold mb-2 text-lg">Lightning fast</h3>
              <p className="text-sm text-muted-foreground">Clean components, smart caching, and speed scores that win clicks.</p>
            </div>
            <div className="bg-card text-card-foreground p-8 rounded-xl border hover:shadow-lg transition-shadow">
              <Check className="h-8 w-8 text-emerald-600 mb-4" />
              <h3 className="font-semibold mb-2 text-lg">Conversion first</h3>
              <p className="text-sm text-muted-foreground">Clear calls to action, proven layouts, and tested patterns.</p>
            </div>
            <div className="bg-card text-card-foreground p-8 rounded-xl border hover:shadow-lg transition-shadow">
              <Shield className="h-8 w-8 text-orange-600 mb-4" />
              <h3 className="font-semibold mb-2 text-lg">Transparent pricing</h3>
              <p className="text-sm text-muted-foreground">Simple plans that scale with you. No surprise add-ons.</p>
            </div>
            <div className="bg-card text-card-foreground p-8 rounded-xl border hover:shadow-lg transition-shadow">
              <Star className="h-8 w-8 text-yellow-600 mb-4" />
              <h3 className="font-semibold mb-2 text-lg">Optimized templates</h3>
              <p className="text-sm text-muted-foreground">Templates tested for SEO, UI, UX, content clarity, and speed.</p>
            </div>
          </BentoGrid>
        </div>
      </section>

      {/* No Website Section */}
      <section className="py-24 px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            No site yet? Here's why it matters.
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-2">
              <div className="text-2xl font-bold text-blue-600">Ownership</div>
              <p className="text-sm text-muted-foreground">Your digital presence</p>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-purple-600">Trust</div>
              <p className="text-sm text-muted-foreground">Professional credibility</p>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-green-600">Findability</div>
              <p className="text-sm text-muted-foreground">Search visibility</p>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-orange-600">Control</div>
              <p className="text-sm text-muted-foreground">Your message, your way</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-card p-6 rounded-lg border">
              <div className="text-3xl font-bold text-blue-600 mb-2">2x</div>
              <p className="text-sm text-muted-foreground">More leads with a clear website vs social only</p>
            </div>
            <div className="bg-card p-6 rounded-lg border">
              <div className="text-3xl font-bold text-purple-600 mb-2">80%</div>
              <p className="text-sm text-muted-foreground">Buyers research online before reaching out</p>
            </div>
          </div>
          <Button size="lg" asChild>
            <Link href="/contact">Launch my site</Link>
          </Button>
        </div>
      </section>

      {/* Speed Showcase */}
      <section className="py-24 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Speed that converts
          </h2>
          <div className="bg-card border rounded-xl p-8 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <div className="text-sm text-muted-foreground">Before</div>
                <div className="text-4xl font-bold text-red-500">5.4s</div>
                <div className="text-sm text-muted-foreground">to first paint</div>
              </div>
              <div className="space-y-4">
                <div className="text-sm text-muted-foreground">After</div>
                <div className="text-4xl font-bold text-green-500">1.2s</div>
                <div className="text-sm text-muted-foreground">to first paint</div>
              </div>
            </div>
          </div>
          <p className="text-muted-foreground mb-8">
            Every millisecond matters. Fast sites rank better, convert more, and keep visitors engaged.
          </p>
        </div>
      </section>

      {/* Lead Capture Band */}
      <section className="py-16 px-8 bg-gradient-to-r from-blue-600/10 to-purple-600/10 border-y">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Get the starter kit</h2>
          <p className="text-muted-foreground mb-6">
            Free guide to launching your SMB website. One page. 10 minutes. Real impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 border border-input rounded-lg bg-background"
            />
            <Button>Get the guide</Button>
          </div>
        </div>
      </section>
    </div>
  );
}