"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Menu, ChevronDown, ChevronRight } from "lucide-react"

export function MobileMenu() {
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isAboutOpen, setIsAboutOpen] = useState(false)

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden text-slate-600">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full max-w-sm">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <nav className="mt-8 flex flex-col gap-4">
          <Link href="/" className="text-lg font-medium text-slate-800 hover:text-black">
            Home
          </Link>

          <div>
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="w-full flex items-center justify-between text-lg font-medium text-slate-800 hover:text-black"
            >
              Services
              <ChevronRight className={`h-5 w-5 transition-transform ${isServicesOpen ? "rotate-90" : ""}`} />
            </button>
            {isServicesOpen && (
              <div className="mt-2 flex flex-col gap-2 pl-4">
                <Link href="/services/web-development" className="text-slate-600 hover:text-black">
                  Web Development
                </Link>
                <Link href="/services/ai-solutions" className="text-slate-600 hover:text-black">
                  AI Solutions
                </Link>
                <Link href="/services/google-ads" className="text-slate-600 hover:text-black">
                  Google Ads
                </Link>
                <Link href="/services/seo" className="text-slate-600 hover:text-black">
                  SEO
                </Link>
              </div>
            )}
          </div>

          <Link href="/pricing" className="text-lg font-medium text-slate-800 hover:text-black">
            Pricing
          </Link>

          <div>
            <button
              onClick={() => setIsAboutOpen(!isAboutOpen)}
              className="w-full flex items-center justify-between text-lg font-medium text-slate-800 hover:text-black"
            >
              About
              <ChevronRight className={`h-5 w-5 transition-transform ${isAboutOpen ? "rotate-90" : ""}`} />
            </button>
            {isAboutOpen && (
              <div className="mt-2 flex flex-col gap-2 pl-4">
                <Link href="/about-us" className="text-slate-600 hover:text-black">
                  About Us
                </Link>
                <Link href="/faq" className="text-slate-600 hover:text-black">
                  FAQ
                </Link>
              </div>
            )}
          </div>

          <Link href="/contact" className="text-lg font-medium text-slate-800 hover:text-black">
            Contact
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  )
}