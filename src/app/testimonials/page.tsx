import { Metadata } from "next"
import { Star, Quote, ExternalLink, Users, TrendingUp, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { NumberTicker } from "@/components/magicui/number-ticker"
import { AvatarCircles } from "@/components/magicui/avatar-circles"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Testimonials - BitNBolt",
  description: "Real results from real businesses. See how BitNBolt helps SMBs succeed online with fast, modern websites.",
}

const testimonials = [
  {
    quote: "Launched our site in 3 days and saw 40% more inquiries in the first month. The conversational updates are game-changing.",
    author: "Sarah Martinez",
    role: "Owner", 
    company: "Martinez Consulting",
    website: "https://martinez-consulting.example.com",
    avatar: "/api/placeholder/40/40",
    rating: 5,
    results: "+40% inquiries"
  },
  {
    quote: "Finally, a website platform that doesn't require a computer science degree. I can update my site just by telling it what I want.",
    author: "David Chen",
    role: "Founder",
    company: "Chen's Auto Repair", 
    website: "https://chens-auto.example.com",
    avatar: "/api/placeholder/40/40",
    rating: 5,
    results: "+25% bookings"
  },
  {
    quote: "The speed difference is incredible. Our old site took 8 seconds to load, now it's under 2 seconds. Customers notice.",
    author: "Emily Rodriguez",
    role: "Marketing Director",
    company: "Rodriguez Real Estate",
    website: "https://rodriguez-realestate.example.com", 
    avatar: "/api/placeholder/40/40",
    rating: 5,
    results: "4x faster"
  },
  {
    quote: "Support is amazing. They don't just fix problems, they explain how to prevent them. Feels like having a tech team without the cost.",
    author: "Michael Thompson",
    role: "CEO",
    company: "Thompson Manufacturing",
    website: "https://thompson-mfg.example.com",
    avatar: "/api/placeholder/40/40", 
    rating: 5,
    results: "+60% leads"
  },
  {
    quote: "Switched from our old platform and immediately saved $200/month while getting better features. ROI was instant.",
    author: "Lisa Park",
    role: "Owner",
    company: "Park Dental Practice",
    website: "https://park-dental.example.com",
    avatar: "/api/placeholder/40/40",
    rating: 5,
    results: "$2400 saved/year"
  },
  {
    quote: "The blog feature helped us rank #1 for our main keyword. Content creation is so much easier now.",
    author: "James Wilson",
    role: "Marketing Manager", 
    company: "Wilson Legal Services",
    website: "https://wilson-legal.example.com",
    avatar: "/api/placeholder/40/40",
    rating: 5,
    results: "#1 ranking"
  }
]

const caseStudies = [
  {
    company: "TechStart Solutions",
    industry: "Technology Consulting",
    challenge: "Outdated website hurting credibility",
    solution: "Modern redesign with conversational updates",
    results: [
      "300% increase in demo requests",
      "50% improvement in conversion rate", 
      "Reduced bounce rate by 65%"
    ],
    timeToLaunch: "5 days",
    website: "https://techstart.example.com"
  },
  {
    company: "Green Valley Landscaping", 
    industry: "Home Services",
    challenge: "No online presence, losing to competitors",
    solution: "Full website build with local SEO",
    results: [
      "Generated 150+ leads in first quarter",
      "Ranked #1 for 'landscaping [city]'",
      "45% of new business from website"
    ],
    timeToLaunch: "3 days",
    website: "https://greenvalley.example.com"
  },
  {
    company: "Riverside Medical",
    industry: "Healthcare",
    challenge: "Complex booking system integration", 
    solution: "Custom integration with practice management",
    results: [
      "80% reduction in phone bookings",
      "24/7 appointment scheduling",
      "Improved patient satisfaction scores"
    ],
    timeToLaunch: "7 days",
    website: "https://riverside-medical.example.com"
  }
]

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Results others can verify
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Real businesses, real results. See how BitNBolt helps SMBs grow their online presence 
            and convert more visitors into customers.
          </p>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">
                <NumberTicker value={48} />hrs
              </div>
              <p className="text-sm text-muted-foreground">Average launch time</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">
                <NumberTicker value={3.2} />x
              </div>
              <p className="text-sm text-muted-foreground">Average speed improvement</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">
                <NumberTicker value={85} />%
              </div>
              <p className="text-sm text-muted-foreground">Report increased leads</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">
                <NumberTicker value={99.8} />%
              </div>
              <p className="text-sm text-muted-foreground">Customer satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-24 px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">What our customers say</h2>
            <p className="text-muted-foreground">
              Honest feedback from business owners who've transformed their online presence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-card border rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <Quote className="h-6 w-6 text-muted-foreground mb-4" />
                
                <blockquote className="text-sm mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="font-semibold text-sm">{testimonial.author}</div>
                    <div className="text-xs text-muted-foreground">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs font-medium text-green-600">
                      {testimonial.results}
                    </div>
                  </div>
                </div>
                
                <a 
                  href={testimonial.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-blue-600 hover:text-blue-700 flex items-center"
                >
                  Visit site <ExternalLink className="ml-1 h-3 w-3" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Success stories in detail</h2>
            <p className="text-muted-foreground">
              Deep dives into how we've helped businesses transform their online presence.
            </p>
          </div>
          
          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-card border rounded-2xl p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{study.company}</h3>
                    <div className="text-sm text-blue-600 mb-4">{study.industry}</div>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-sm mb-2">Challenge</h4>
                        <p className="text-sm text-muted-foreground">{study.challenge}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-sm mb-2">Solution</h4>
                        <p className="text-sm text-muted-foreground">{study.solution}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-4">Results achieved</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-start">
                          <TrendingUp className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5 mr-2" />
                          <span className="text-sm">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-muted/50 rounded-lg p-4 text-center">
                      <Clock className="h-6 w-6 text-blue-500 mx-auto mb-2" />
                      <div className="font-semibold text-sm">Launch Time</div>
                      <div className="text-2xl font-bold text-blue-600">{study.timeToLaunch}</div>
                    </div>
                    
                    <Button variant="outline" className="w-full" asChild>
                      <a href={study.website} target="_blank" rel="noopener noreferrer">
                        View Live Site <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-24 px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Join growing businesses</h2>
          <p className="text-muted-foreground mb-12">
            You're in good company with business owners who've chosen to grow with BitNBolt.
          </p>
          
          <div className="mb-8">
            <AvatarCircles 
              avatarUrls={testimonials.slice(0, 5).map(t => ({ 
                imageUrl: t.avatar, 
                profileUrl: t.website 
              }))}
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <Users className="h-8 w-8 text-blue-500 mx-auto mb-2" />
              <div className="font-semibold mb-1">Growing Community</div>
              <div className="text-sm text-muted-foreground">500+ businesses launched</div>
            </div>
            <div className="text-center">
              <TrendingUp className="h-8 w-8 text-green-500 mx-auto mb-2" />
              <div className="font-semibold mb-1">Proven Results</div>
              <div className="text-sm text-muted-foreground">Average 85% lead increase</div>
            </div>
            <div className="text-center">
              <Clock className="h-8 w-8 text-purple-500 mx-auto mb-2" />
              <div className="font-semibold mb-1">Fast Launch</div>
              <div className="text-sm text-muted-foreground">Most sites live in 48 hours</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-8 bg-gradient-to-r from-blue-600/10 to-purple-600/10 border-y">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to join them?</h2>
          <p className="text-muted-foreground mb-6">
            See how BitNBolt can transform your business online. Book a personalized demo today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">Get your demo</Link>
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