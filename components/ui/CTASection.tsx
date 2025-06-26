"use client"

import Link from "next/link"
import { Button } from "../ui/button"
import { ArrowRight } from "lucide-react"
import { AnimatedSection } from "../components/animated-section"

export function CTASection() {
  return (
    <AnimatedSection className="py-24 relative bg-black text-white rounded-3xl overflow-hidden shadow-lg">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-black to-slate-800 opacity-80 -z-10"></div>
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-pink-500 opacity-20 blur-3xl -z-10"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-blue-500 opacity-20 blur-3xl -z-10"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold tracking-tight mb-6">Ready to transform your digital presence?</h2>
          <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's collaborate to create exceptional digital experiences that drive results for your business. Our team is ready to bring your vision to life.
          </p>
          <div className="flex justify-center">
            <Link href="/contact">
              <Button className="bg-white hover:bg-gray-100 text-black rounded-full h-14 px-8 text-base flex items-center justify-center">
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
