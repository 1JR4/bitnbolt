import { Metadata } from "next"
import { Users, Target, Lightbulb, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
  title: "About Us - BitNBolt",
  description: "Learn about our mission to help small and mid-sized businesses succeed online with fast, modern websites.",
}

export default function AboutPage() {
  const principles = [
    {
      title: "Simple beats complex",
      description: "We believe in elegant solutions that just work, not bloated features that confuse."
    },
    {
      title: "Speed drives trust", 
      description: "Fast websites create better user experiences and higher conversion rates."
    },
    {
      title: "Clear copy wins",
      description: "Your message should be crystal clear, not buried in jargon or cleverness."
    },
    {
      title: "Owners stay in control",
      description: "You should be able to update your site by simply talking to it, not learning complex tools."
    }
  ]

  const team = [
    {
      name: "Sarah Chen",
      role: "Founder & CEO",
      bio: "Former SMB owner who got frustrated with complex website platforms."
    },
    {
      name: "Marcus Rodriguez", 
      role: "Head of Product",
      bio: "15 years building tools that small business owners actually use."
    },
    {
      name: "Emily Watson",
      role: "Lead Designer", 
      bio: "Believes beautiful design should be accessible to every business."
    },
    {
      name: "David Kim",
      role: "Engineering Lead",
      bio: "Obsessed with performance and making things that scale."
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Why we exist
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Many platforms try to be everything for everyone. That creates clutter and cost. 
            We focus on what SMBs actually need: a site that is fast, modern, easy to run, 
            and ready to convert visitors into leads. You speak. The site updates.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center rounded-lg bg-blue-100 dark:bg-blue-900/30 px-3 py-1 text-sm font-medium text-blue-600 dark:text-blue-400 mb-4">
                <Target className="mr-2 h-4 w-4" />
                Our Mission
              </div>
              <h2 className="text-3xl font-bold mb-6">
                Help small and mid-sized businesses show up online with confidence and without busywork
              </h2>
              <p className="text-muted-foreground mb-6">
                We started BitNBolt because we saw too many great businesses struggling with 
                websites that were either too expensive, too complicated, or too slow. 
                Every business deserves a professional online presence that actually works for them.
              </p>
              <Button asChild>
                <Link href="/contact">Join our mission</Link>
              </Button>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/50 dark:to-purple-950/50 p-8 rounded-2xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Businesses launched</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">$2M+</div>
                  <div className="text-sm text-muted-foreground">Revenue generated</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">48hrs</div>
                  <div className="text-sm text-muted-foreground">Average launch time</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">99.9%</div>
                  <div className="text-sm text-muted-foreground">Uptime achieved</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section className="py-24 px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our principles</h2>
            <p className="text-muted-foreground">
              These beliefs guide every decision we make and every feature we build.
            </p>
          </div>
          <div className="space-y-8">
            {principles.map((principle, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 rounded-xl border bg-card">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                  <Lightbulb className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">{principle.title}</h3>
                  <p className="text-muted-foreground">{principle.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Meet the team</h2>
            <p className="text-muted-foreground">
              We're a small team of builders who believe every business deserves a great website.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-card p-6 rounded-xl border text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold mb-1">{member.name}</h3>
                <p className="text-sm text-blue-600 dark:text-blue-400 mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Built with heart</h2>
          <p className="text-lg text-muted-foreground mb-12">
            We're not just building software—we're supporting dreams, ambitions, and the backbone of our economy: small businesses.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6">
              <Heart className="h-12 w-12 text-red-500 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Purpose-driven</h3>
              <p className="text-sm text-muted-foreground">
                Every feature exists to help real businesses solve real problems.
              </p>
            </div>
            <div className="p-6">
              <Users className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Customer-first</h3>
              <p className="text-sm text-muted-foreground">
                Your success is our success. We measure ourselves by your results.
              </p>
            </div>
            <div className="p-6">
              <Lightbulb className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Always learning</h3>
              <p className="text-sm text-muted-foreground">
                The web evolves fast. We stay ahead so you don't have to.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-8 bg-gradient-to-r from-blue-600/10 to-purple-600/10 border-y">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to work together?</h2>
          <p className="text-muted-foreground mb-6">
            Let's build something amazing for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">Get started today</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/pricing">See our plans</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}