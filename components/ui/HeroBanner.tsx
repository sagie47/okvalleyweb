"use client"

import Image from "next/image"
import { Button } from "../ui/button"
import { ArrowRight } from "lucide-react"
import { AnimatedSection } from "@/app/components/animated-section"

export function HeroBanner() {
  return (
    <AnimatedSection
      className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-lg flex flex-col justify-end"
      style={{ height: 'var(--app-height)' }}
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 pb-12 md:pb-0" style={{ paddingBottom: 'calc(3rem + env(safe-area-inset-bottom))' }}>
            <h1 className="text-5xl font-extrabold tracking-tight leading-tight text-gray-900">
              We provide
              <br />
              <span className="text-6xl font-extrabold text-gradient bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
                Custom Solutions
              </span>
            </h1>
            <p className="text-lg text-gray-600 max-w-xl">
              Custom solutions that drive business growth. $0 down for a standard 5 page website with 12 month contract. Includes design, development, hosting, and unlimited edits.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-black hover:bg-gray-900 text-white rounded-full h-14 px-8 text-base flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="mt-12 flex items-center text-gray-400 text-sm uppercase tracking-wider">
              <svg className="animate-bounce h-6 w-6 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="5" x2="12" y2="19" />
                <polyline points="19 12 12 19 5 12" />
              </svg>
              Scroll to explore
            </div>
          </div>
          <div className="relative">
            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-pink-50 to-blue-50 rounded-full"></div>
            <Image
              src="/images/re.jpg"
              width={600}
              height={600}
              alt="Website showcase on multiple devices"
              className="w-full h-auto object-cover rounded-xl shadow-2xl"
              priority
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium">100% PageSpeed Score</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
