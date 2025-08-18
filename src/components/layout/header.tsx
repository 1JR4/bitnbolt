"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Pricing", href: "/pricing" },
  { 
    name: "Resources", 
    href: "#",
    subItems: [
      { name: "Blog", href: "/blog" },
      { name: "Tools", href: "/tools" },
      { name: "Testimonials", href: "/testimonials" },
      { name: "FAQ", href: "/faq" },
    ]
  },
  { name: "Contact", href: "/contact" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300",
        "w-[95%] max-w-6xl"
      )}
    >
      <nav
        className={cn(
          "relative rounded-2xl border border-border/40 transition-all duration-300",
          isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-lg"
            : "bg-background/80 backdrop-blur-sm"
        )}
      >
        <div className="px-6 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600" />
              <span className="text-xl font-bold">BitNBolt</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navigation.map((item) => (
                <div key={item.name} className="relative">
                  {item.subItems ? (
                    <div
                      className="relative"
                      onMouseEnter={() => setActiveDropdown(item.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <button
                        className={cn(
                          "px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center space-x-1",
                          item.subItems.some(subItem => pathname === subItem.href)
                            ? "bg-accent text-accent-foreground"
                            : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                        )}
                      >
                        <span>{item.name}</span>
                        <ChevronDown className="h-3 w-3" />
                      </button>
                      
                      {activeDropdown === item.name && (
                        <div className="absolute top-full left-0 mt-1 w-48 bg-background/95 backdrop-blur-md border border-border/40 rounded-lg shadow-lg z-50">
                          <div className="py-2">
                            {item.subItems.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className={cn(
                                  "block px-4 py-2 text-sm transition-colors",
                                  pathname === subItem.href
                                    ? "bg-accent text-accent-foreground"
                                    : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                                )}
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className={cn(
                        "px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                        pathname === item.href
                          ? "bg-accent text-accent-foreground"
                          : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                      )}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Right side actions */}
            <div className="flex items-center space-x-4">
              <ThemeToggle className="hidden sm:flex" />
              <Button className="hidden sm:flex">Get started</Button>
              
              {/* Mobile menu button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-accent"
              >
                {isMobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="lg:hidden mt-4 pt-4 border-t border-border">
              <div className="space-y-2">
                {navigation.map((item) => (
                  <div key={item.name}>
                    {item.subItems ? (
                      <div className="space-y-1">
                        <button
                          onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                          className={cn(
                            "w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-colors text-left",
                            item.subItems.some(subItem => pathname === subItem.href)
                              ? "bg-accent text-accent-foreground"
                              : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                          )}
                        >
                          <span>{item.name}</span>
                          <ChevronDown className={cn(
                            "h-3 w-3 transition-transform",
                            activeDropdown === item.name ? "rotate-180" : ""
                          )} />
                        </button>
                        {activeDropdown === item.name && (
                          <div className="pl-4 space-y-1">
                            {item.subItems.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={cn(
                                  "block px-3 py-2 rounded-lg text-sm transition-colors",
                                  pathname === subItem.href
                                    ? "bg-accent text-accent-foreground"
                                    : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                                )}
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={cn(
                          "block px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                          pathname === item.href
                            ? "bg-accent text-accent-foreground"
                            : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                        )}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                <ThemeToggle />
                <Button size="sm">Get started</Button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  )
}