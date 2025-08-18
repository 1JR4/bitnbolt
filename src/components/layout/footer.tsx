import Link from "next/link"
import { Github, Twitter, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600" />
              <span className="text-xl font-bold">BitNBolt</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              Built for SMBs who value speed, simplicity, and control. 
              Launch a modern website that converts.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Github className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Product Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/features" className="text-sm text-muted-foreground hover:text-foreground">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-sm text-muted-foreground hover:text-foreground">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/tools" className="text-sm text-muted-foreground hover:text-foreground">
                  Tools
                </Link>
              </li>
              <li>
                <Link href="/templates" className="text-sm text-muted-foreground hover:text-foreground">
                  Templates
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground">
                  About
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-sm text-muted-foreground hover:text-foreground">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="font-semibold">Stay updated</h3>
            <p className="text-sm text-muted-foreground">
              Get the latest updates and SMB website tips.
            </p>
            <div className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-3 py-2 text-sm border border-input rounded-md bg-background"
              />
              <Button size="sm" className="w-full">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © 2024 BitNBolt. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-sm text-muted-foreground hover:text-foreground">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}