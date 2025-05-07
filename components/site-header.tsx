import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, Menu, ChevronDown } from "lucide-react"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between relative">
        <div className="flex items-center">
          <Link href="/">
            <Image src="/images/logo.png" alt="ValleyWeb Logo" width={180} height={50} className="h-10 w-auto" />
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-12">
          <Link href="/" className="text-sm uppercase tracking-wider text-slate-600 hover:text-black transition-colors">
            Home
          </Link>

          {/* Services Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 text-sm uppercase tracking-wider text-slate-600 hover:text-black transition-colors focus:outline-none">
              Services <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
            </button>
            <div className="absolute left-0 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="py-2 p-3 grid gap-2">
                <Link
                  href="/services/web-development"
                  className="block px-4 py-3 text-sm text-slate-700 hover:bg-slate-100 rounded-md transition-colors"
                >
                  Web Development
                </Link>
                <Link
                  href="/services/ai-solutions"
                  className="block px-4 py-3 text-sm text-slate-700 hover:bg-slate-100 rounded-md transition-colors"
                >
                  AI Solutions
                </Link>
                <Link
                  href="/services/google-ads"
                  className="block px-4 py-3 text-sm text-slate-700 hover:bg-slate-100 rounded-md transition-colors"
                >
                  Google Ads
                </Link>
                <Link
                  href="/services/seo"
                  className="block px-4 py-3 text-sm text-slate-700 hover:bg-slate-100 rounded-md transition-colors"
                >
                  SEO
                </Link>
              </div>
            </div>
          </div>

          <Link
            href="/pricing"
            className="text-sm uppercase tracking-wider text-slate-600 hover:text-black transition-colors"
          >
            Pricing
          </Link>

          {/* About Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 text-sm uppercase tracking-wider text-slate-600 hover:text-black transition-colors focus:outline-none">
              About <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
            </button>
            <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="py-2 p-3 grid gap-2">
                <Link
                  href="/about-us"
                  className="block px-4 py-3 text-sm text-slate-700 hover:bg-slate-100 rounded-md transition-colors"
                >
                  About Us
                </Link>
                <Link
                  href="/faq"
                  className="block px-4 py-3 text-sm text-slate-700 hover:bg-slate-100 rounded-md transition-colors"
                >
                  FAQ
                </Link>
              </div>
            </div>
          </div>

          <Link
            href="/contact"
            className="text-sm uppercase tracking-wider text-slate-600 hover:text-black transition-colors"
          >
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-6">
          <Button variant="ghost" className="text-slate-600 hover:text-black hover:bg-slate-100 hidden md:flex">
            <Phone className="h-4 w-4 mr-2" />
            (555) 123-4567
          </Button>
          <Link href="/contact">
            <Button className="bg-black hover:bg-slate-800 text-white rounded-full">Contact Us</Button>
          </Link>
          <Button variant="ghost" size="icon" className="md:hidden text-slate-600">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}
