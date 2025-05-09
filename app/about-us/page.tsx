import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import Link from "next/link"

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <SiteHeader />

      <main>
        {/* Hero Section */}
        <section className="relative pt-20 pb-32 overflow-hidden">
          <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-slate-50 to-slate-100 -z-10"></div>
          <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-pink-200 opacity-20 blur-3xl -z-10"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-blue-200 opacity-20 blur-3xl -z-10"></div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-heading tracking-tight mb-6">About Us</h1>
              <div className="w-24 h-1 bg-black mx-auto mb-6"></div>
              <p className="text-lg text-slate-600">
                We're a team of passionate web developers, designers, and digital marketers dedicated to helping
                businesses succeed online.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-24 relative -mt-20">
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-heading tracking-tight mb-6">Our Story</h2>
                <div className="w-24 h-1 bg-black mb-6"></div>
                <p className="text-slate-600 mb-6">
                  ValleyWeb was founded in 2015 with a simple mission: to help small and medium-sized businesses succeed
                  in the digital landscape by providing high-quality, affordable web solutions.
                </p>
                <p className="text-slate-600 mb-6">
                  What started as a small team of three passionate web developers has grown into a full-service digital
                  agency with experts in web development, design, SEO, and digital marketing.
                </p>
                <p className="text-slate-600 mb-6">
                  We believe in building long-term relationships with our clients, understanding their unique needs, and
                  delivering solutions that drive real business results.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <Button className="bg-black hover:bg-slate-800 text-white rounded-full">
                    Meet Our Team
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-24 relative bg-slate-50">
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-heading tracking-tight mb-6">Our Values</h2>
              <div className="w-24 h-1 bg-black mx-auto mb-6"></div>
              <p className="text-slate-600">
                These core principles guide everything we do and shape how we work with our clients.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Client-Focused",
                  description:
                    "We put our clients' needs first, taking the time to understand their business goals and delivering solutions that exceed expectations.",
                },
                {
                  title: "Quality Craftsmanship",
                  description:
                    "We take pride in our work, paying attention to every detail and ensuring that every project meets our high standards of excellence.",
                },
                {
                  title: "Continuous Innovation",
                  description:
                    "We stay at the forefront of technology trends, constantly learning and evolving to provide cutting-edge solutions.",
                },
                {
                  title: "Transparency",
                  description:
                    "We believe in open communication and honesty, ensuring our clients understand our process and are involved every step of the way.",
                },
                {
                  title: "Results-Driven",
                  description:
                    "We focus on delivering measurable results that help our clients achieve their business objectives and drive growth.",
                },
                {
                  title: "Long-Term Partnerships",
                  description:
                    "We build lasting relationships with our clients, providing ongoing support and becoming a trusted partner in their digital journey.",
                },
              ].map((value, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  <div className="mb-6">
                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="30" cy="30" r="29.5" stroke="black" strokeWidth="1" />
                      <path d="M20 30L27 37L40 24" stroke="black" strokeWidth="1.5" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-heading tracking-tight mb-4">{value.title}</h3>
                  <p className="text-slate-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 relative bg-black text-white">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-black to-slate-800 -z-10"></div>
          <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-pink-500 opacity-10 blur-3xl -z-10"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-blue-500 opacity-10 blur-3xl -z-10"></div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-heading tracking-tight mb-6">Ready to work with us?</h2>
              <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
              <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
                Let's collaborate to create exceptional digital experiences that drive results for your business.
              </p>
              <div className="flex justify-center">
                <Link href="/contact">
                  <Button className="bg-white hover:bg-slate-100 text-black rounded-full h-14 px-8 text-base">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
