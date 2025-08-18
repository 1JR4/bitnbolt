import { Metadata } from "next"
import { notFound } from "next/navigation"
import { Calendar, Clock, ArrowLeft, ArrowRight, Share2, BookOpen, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { formatDate } from "@/lib/utils"
import Link from "next/link"
import Image from "next/image"

// This would typically come from a database or CMS
const blogPosts = [
  {
    slug: "5-signs-your-website-needs-redesign",
    title: "5 Signs Your Website Needs a Redesign",
    excerpt: "Is your website driving customers away? Here are the clear warning signs that it's time for a modern refresh.",
    content: `Your website is often the first impression potential customers have of your business. In today's digital landscape, that first impression needs to be fast, modern, and compelling. But how do you know when it's time to refresh your site?

## 1. Your Site Looks Outdated

If your website looks like it was designed in 2015 (or earlier), it's time for an update. Design trends evolve for good reasons – they improve user experience and reflect current expectations.

**Warning signs:**
- Outdated fonts and color schemes
- Non-responsive design
- Flash elements or old animations
- Cluttered layouts

## 2. Poor Mobile Experience

With over 60% of web traffic coming from mobile devices, a poor mobile experience is a business killer. If your site isn't mobile-optimized, you're literally turning away the majority of your potential customers.

**Check for:**
- Text that's too small to read
- Buttons that are hard to tap
- Horizontal scrolling required
- Slow loading on mobile networks

## 3. High Bounce Rate

If visitors are leaving your site immediately after arriving, your design might be the culprit. A high bounce rate often indicates that your site isn't meeting visitor expectations.

**Common causes:**
- Confusing navigation
- Slow loading times
- Poor visual hierarchy
- Lack of clear calls-to-action

## 4. Difficult to Update

If updating your website requires calling a developer for every small change, you're losing valuable time and money. Modern websites should be easy to maintain and update.

**You should be able to:**
- Update content yourself
- Add new pages easily
- Modify contact information
- Upload new images and documents

## 5. Not Converting Visitors

The ultimate test of your website is whether it converts visitors into customers. If your site gets traffic but doesn't generate leads or sales, the design likely isn't optimized for conversion.

**Conversion optimization includes:**
- Clear value propositions
- Strategic placement of CTAs
- Trust signals and testimonials
- Streamlined contact forms

## Ready for a Modern Website?

If any of these signs sound familiar, it might be time to consider a redesign. Modern website platforms make it easier than ever to create fast, beautiful, and conversion-optimized sites that you can update yourself.

At BitNBolt, we specialize in creating modern websites that are not only visually appealing but also optimized for performance and conversions. Plus, our conversational update system means you can modify your site just by telling it what you want to change.`,
    author: "Sarah Mitchell",
    authorImage: "/api/placeholder/40/40",
    publishedAt: "2024-01-15",
    category: "Web Design",
    readTime: "6 min read",
    image: "/api/placeholder/800/400",
    featured: true,
    tags: ["Web Design", "UX", "Business Growth"]
  },
  {
    slug: "conversational-ai-websites-future",
    title: "How Conversational AI is Changing Website Management",
    excerpt: "Discover how natural language updates are revolutionizing the way businesses manage their online presence.",
    content: `Managing a website has traditionally required technical knowledge, coding skills, or expensive developer time for every small change. But conversational AI is changing everything.

## The Traditional Problem

For years, business owners have faced a frustrating choice: learn complex content management systems, pay developers for simple updates, or let their websites become stale and outdated.

**Common frustrations include:**
- Learning complicated admin interfaces
- Waiting for developer availability
- Paying high costs for minor changes
- Fear of breaking something

## Enter Conversational AI

Imagine being able to update your website simply by saying: "Add a testimonial from John Smith about our excellent customer service" or "Update the homepage to highlight our new spring promotion."

This isn't science fiction – it's happening now.

## How It Works

Conversational AI for websites understands natural language instructions and translates them into technical changes. The system can:

- **Understand context**: Knows what you mean even with casual language
- **Make smart suggestions**: Proposes improvements based on best practices
- **Maintain consistency**: Keeps your brand voice and styling intact
- **Learn your preferences**: Gets better at understanding your needs over time

## Real-World Applications

### Content Updates
"Change the headline to focus on our speed advantage over competitors"

### Adding Features
"Add a contact form to the services page with fields for project type and budget"

### SEO Improvements
"Optimize the about page for local search in Denver"

### Design Changes
"Make the call-to-action buttons more prominent on mobile"

## The Business Impact

This technology isn't just convenient – it's transformative for businesses:

### Faster Updates
Changes that once took days or weeks can happen in minutes.

### Lower Costs
No need to pay developers for routine updates.

### Better Engagement
Easier updates mean more frequent, relevant content.

### Reduced Risk
AI understands best practices and prevents common mistakes.

## Looking Ahead

As this technology evolves, we'll see even more sophisticated capabilities:

- **Voice commands**: Update your site by speaking
- **Automated improvements**: AI that proactively suggests optimizations
- **Multi-platform sync**: Changes that automatically update across all your digital properties

## Getting Started

If you're ready to experience the future of website management, look for platforms that offer conversational AI capabilities. The technology is still new, but early adopters are already seeing significant benefits in terms of time savings and website performance.

The future of website management is conversational, intuitive, and accessible to everyone – not just technical experts.`,
    author: "Marcus Chen",
    authorImage: "/api/placeholder/40/40", 
    publishedAt: "2024-01-12",
    category: "Technology",
    readTime: "8 min read",
    image: "/api/placeholder/800/400",
    featured: false,
    tags: ["AI", "Technology", "Innovation"]
  }
]

interface PageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = blogPosts.find(p => p.slug === params.slug)
  
  if (!post) {
    return {
      title: "Post Not Found - BitNBolt Blog"
    }
  }

  return {
    title: `${post.title} - BitNBolt Blog`,
    description: post.excerpt,
  }
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export default function BlogPost({ params }: PageProps) {
  const post = blogPosts.find(p => p.slug === params.slug)
  
  if (!post) {
    notFound()
  }

  const relatedPosts = blogPosts
    .filter(p => p.slug !== post.slug && p.category === post.category)
    .slice(0, 2)

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-12 px-8">
        <div className="max-w-4xl mx-auto">
          <Button variant="ghost" asChild className="mb-8">
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to blog
            </Link>
          </Button>
          
          <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-6">
            <span className="flex items-center">
              <Tag className="h-4 w-4 mr-1" />
              {post.category}
            </span>
            <span className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              {post.readTime}
            </span>
            <span className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              {formatDate(post.publishedAt)}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {post.title}
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            {post.excerpt}
          </p>
          
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <Image
                src={post.authorImage}
                alt={post.author}
                width={48}
                height={48}
                className="rounded-full"
              />
              <div>
                <div className="font-semibold">{post.author}</div>
                <div className="text-sm text-muted-foreground">Content Writer</div>
              </div>
            </div>
            
            <Button variant="outline" size="sm">
              <Share2 className="mr-2 h-4 w-4" />
              Share
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="px-8 mb-12">
        <div className="max-w-4xl mx-auto">
          <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="px-8 pb-24">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-gray dark:prose-invert max-w-none">
            {post.content.split('\n\n').map((paragraph, index) => {
              if (paragraph.startsWith('## ')) {
                return (
                  <h2 key={index} className="text-2xl font-bold mt-12 mb-4">
                    {paragraph.replace('## ', '')}
                  </h2>
                )
              }
              
              if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                return (
                  <p key={index} className="font-semibold mb-4">
                    {paragraph.replace(/\*\*/g, '')}
                  </p>
                )
              }
              
              if (paragraph.startsWith('- ')) {
                const items = paragraph.split('\n').filter(item => item.startsWith('- '))
                return (
                  <ul key={index} className="list-disc list-inside mb-6 space-y-2">
                    {items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-muted-foreground">
                        {item.replace('- ', '')}
                      </li>
                    ))}
                  </ul>
                )
              }
              
              return (
                <p key={index} className="mb-6 leading-relaxed">
                  {paragraph}
                </p>
              )
            })}
          </div>
          
          {/* Tags */}
          <div className="mt-12 pt-8 border-t">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-muted rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 px-8 bg-muted/30 border-y">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Related articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedPosts.map((relatedPost, index) => (
                <article key={index} className="bg-card border rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-xs text-muted-foreground mb-3">
                      <span className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {relatedPost.readTime}
                      </span>
                      <span className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {formatDate(relatedPost.publishedAt)}
                      </span>
                    </div>
                    <h3 className="font-bold mb-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {relatedPost.excerpt}
                    </p>
                    <Button variant="ghost" size="sm" asChild>
                      <Link href={`/blog/${relatedPost.slug}`}>
                        Read article
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 px-8">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-2xl p-8">
            <BookOpen className="h-12 w-12 text-blue-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">Ready to get started?</h2>
            <p className="text-muted-foreground mb-6">
              See how BitNBolt can help you build a website that actually converts visitors into customers.
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
        </div>
      </section>
    </div>
  )
}