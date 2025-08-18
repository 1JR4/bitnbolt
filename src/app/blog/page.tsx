import { Metadata } from "next"
import { Calendar, Clock, ArrowRight, Tag, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { formatDate } from "@/lib/utils"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Blog - BitNBolt",
  description: "Expert insights on web development, business growth, and digital marketing to help your business succeed online.",
}

const blogPosts = [
  {
    slug: "5-signs-your-website-needs-redesign",
    title: "5 Signs Your Website Needs a Redesign",
    excerpt: "Is your website driving customers away? Here are the clear warning signs that it's time for a modern refresh.",
    content: "Your website is often the first impression potential customers have of your business...",
    author: "Sarah Mitchell",
    authorImage: "/api/placeholder/40/40",
    publishedAt: "2024-01-15",
    category: "Web Design",
    readTime: "6 min read",
    image: "/api/placeholder/600/300",
    featured: true,
    tags: ["Web Design", "UX", "Business Growth"]
  },
  {
    slug: "conversational-ai-websites-future",
    title: "How Conversational AI is Changing Website Management",
    excerpt: "Discover how natural language updates are revolutionizing the way businesses manage their online presence.",
    content: "Managing a website has traditionally required technical knowledge...",
    author: "Marcus Chen",
    authorImage: "/api/placeholder/40/40", 
    publishedAt: "2024-01-12",
    category: "Technology",
    readTime: "8 min read",
    image: "/api/placeholder/600/300",
    featured: false,
    tags: ["AI", "Technology", "Innovation"]
  },
  {
    slug: "local-seo-small-business-guide",
    title: "Local SEO: The Complete Guide for Small Businesses",
    excerpt: "Everything you need to know about ranking higher in local search results and attracting nearby customers.",
    content: "Local SEO is crucial for small businesses that serve customers in specific geographic areas...",
    author: "Emily Rodriguez",
    authorImage: "/api/placeholder/40/40",
    publishedAt: "2024-01-10",
    category: "SEO",
    readTime: "12 min read", 
    image: "/api/placeholder/600/300",
    featured: false,
    tags: ["SEO", "Local Business", "Marketing"]
  },
  {
    slug: "website-speed-conversion-rates",
    title: "Why Website Speed Directly Impacts Your Conversion Rates",
    excerpt: "Learn how page load times affect your bottom line and what you can do to optimize for better performance.",
    content: "Website speed isn't just about user experience – it's directly tied to your revenue...",
    author: "David Park",
    authorImage: "/api/placeholder/40/40",
    publishedAt: "2024-01-08",
    category: "Performance",
    readTime: "7 min read",
    image: "/api/placeholder/600/300", 
    featured: false,
    tags: ["Performance", "Conversion", "UX"]
  },
  {
    slug: "mobile-first-design-principles",
    title: "Mobile-First Design: Essential Principles for 2024",
    excerpt: "With mobile traffic dominating, here's how to design websites that work perfectly on every device.",
    content: "Mobile devices now account for over 60% of web traffic worldwide...",
    author: "Lisa Thompson",
    authorImage: "/api/placeholder/40/40",
    publishedAt: "2024-01-05",
    category: "Design",
    readTime: "9 min read",
    image: "/api/placeholder/600/300",
    featured: false,
    tags: ["Mobile", "Design", "Responsive"]
  },
  {
    slug: "lead-generation-website-optimization",
    title: "Optimizing Your Website for Maximum Lead Generation",
    excerpt: "Turn your website into a lead generation machine with these proven strategies and best practices.",
    content: "Your website should be your best salesperson, working 24/7 to capture and qualify leads...",
    author: "Michael Brown",
    authorImage: "/api/placeholder/40/40",
    publishedAt: "2024-01-03",
    category: "Marketing",
    readTime: "11 min read",
    image: "/api/placeholder/600/300",
    featured: false,
    tags: ["Lead Generation", "Marketing", "Conversion"]
  }
]

const categories = ["All", ...Array.from(new Set(blogPosts.map(post => post.category)))]

export default function BlogPage() {
  const featuredPost = blogPosts.find(post => post.featured)
  const recentPosts = blogPosts.filter(post => !post.featured).slice(0, 5)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Insights for growth
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Expert advice on web development, business growth, and digital marketing 
            to help your business succeed online.
          </p>
          
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full pl-10 pr-4 py-3 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-8 pb-24">
        {/* Featured Post */}
        {featuredPost && (
          <section className="mb-16">
            <div className="bg-card border rounded-2xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center">
                      <Tag className="h-4 w-4 mr-1" />
                      {featuredPost.category}
                    </span>
                    <span className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {featuredPost.readTime}
                    </span>
                    <span className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {formatDate(featuredPost.publishedAt)}
                    </span>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold mb-4">
                    {featuredPost.title}
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Image
                        src={featuredPost.authorImage}
                        alt={featuredPost.author}
                        width={32}
                        height={32}
                        className="rounded-full"
                      />
                      <span className="text-sm font-medium">{featuredPost.author}</span>
                    </div>
                    <Button asChild>
                      <Link href={`/blog/${featuredPost.slug}`}>
                        Read article
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map(category => (
            <button
              key={category}
              className="px-4 py-2 rounded-lg text-sm font-medium bg-muted hover:bg-muted/80 transition-colors"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Recent Posts Grid */}
        <section>
          <h2 className="text-2xl font-bold mb-8">Recent articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post, index) => (
              <article key={index} className="bg-card border rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-black/70 text-white px-2 py-1 rounded text-xs">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-xs text-muted-foreground mb-3">
                    <span className="flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {post.readTime}
                    </span>
                    <span className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {formatDate(post.publishedAt)}
                    </span>
                  </div>
                  <h3 className="font-bold mb-2 line-clamp-2 leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Image
                        src={post.authorImage}
                        alt={post.author}
                        width={24}
                        height={24}
                        className="rounded-full"
                      />
                      <span className="text-xs text-muted-foreground">{post.author}</span>
                    </div>
                    <Button variant="ghost" size="sm" asChild>
                      <Link href={`/blog/${post.slug}`}>
                        Read more
                        <ArrowRight className="ml-1 h-3 w-3" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load more articles
          </Button>
        </div>
      </div>

      {/* Newsletter Signup */}
      <section className="py-16 px-8 bg-muted/30 border-y">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Stay updated</h2>
          <p className="text-muted-foreground mb-6">
            Get the latest insights delivered straight to your inbox. No spam, just valuable content.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Button>Subscribe</Button>
          </div>
        </div>
      </section>
    </div>
  )
}