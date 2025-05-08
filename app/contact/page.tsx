"use client";
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, Calendar, Mail, MapPin } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import Script from "next/script";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Script src="https://assets.cal.com/embed/embed.js" strategy="afterInteractive" />
      <SiteHeader />

      <main>
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 overflow-hidden">
          <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-slate-50 to-slate-100 -z-10"></div>
          <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-pink-200 opacity-20 blur-3xl -z-10"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-blue-200 opacity-20 blur-3xl -z-10"></div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-heading tracking-tight mb-6">Get in Touch</h1>
              <div className="w-24 h-1 bg-black mx-auto mb-6"></div>
              <p className="text-lg text-slate-600 mb-8">
                We're here to help you grow your business. Reach out to us through any of the options below and we'll
                get back to you as soon as possible.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Options Section */}
        <section className="py-16 relative bg-slate-100">
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Phone className="h-8 w-8 text-black mb-6" />,
                  title: "Call Us",
                  description: "Speak directly with our team",
                  action: "(778) 769-4402",
                  link: "tel:+17787694402",
                  buttonText: "Call Now",
                },
                {
                  icon: <Calendar className="h-8 w-8 text-black mb-6" />,
                  title: "Book a Meeting",
                  description: "Schedule a consultation",
                  action: "30-minute discovery call",
                  link: "https://cal.com/okvalley/30min",
                  buttonText: "Book Now",
                },
                {
                  icon: <Mail className="h-8 w-8 text-black mb-6" />,
                  title: "Email Us",
                  description: "Send us a message anytime",
                  action: "info@okvallweyweb.com",
                  link: "mailto:info@okvallweyweb.com",
                  buttonText: "Send Email",
                },
              ].map((option, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 text-center"
                >
                  <div className="flex justify-center">{option.icon}</div>
                  <h3 className="text-xl font-heading tracking-tight mb-4">{option.title}</h3>
                  <p className="text-slate-600 mb-2">{option.description}</p>
                  <p className="font-medium text-lg mb-6">{option.action}</p>
                  <Link href={option.link}>
                    <Button className="bg-black hover:bg-slate-800 text-white rounded-full">
                      {option.buttonText}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Booking Form Section */}
        <section id="booking-form" className="py-24 relative bg-slate-50">
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid md:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-4xl font-heading tracking-tight mb-6">Book a Meeting</h2>
                <div className="w-24 h-1 bg-black mb-6"></div>
                <p className="text-slate-600 mb-8">
                  Schedule a 30-minute discovery call with our team to discuss your project and how we can help you
                  achieve your business goals.
                </p>
                <div className="space-y-8">
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-black mr-4 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-medium mb-1">Email Us</h3>
                      <p className="text-slate-600">info@okvallweyweb.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-black mr-4 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-medium mb-1">Call Us</h3>
                      <p className="text-slate-600">(778) 769-4402</p>
                    </div>
                  </div>
                  {/* Address removed as per request */}
                </div>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-xl">
                <h3 className="text-xl font-heading tracking-tight mb-6">Request a Consultation</h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="first-name" className="text-sm font-medium">
                        First Name
                      </label>
                      <input
                        id="first-name"
                        type="text"
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                        placeholder="John"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="last-name" className="text-sm font-medium">
                        Last Name
                      </label>
                      <input
                        id="last-name"
                        type="text"
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Phone
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="service" className="text-sm font-medium">
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      <option value="web-development">Web Development</option>
                      <option value="ai-solutions">AI Solutions</option>
                      <option value="google-ads">Google Ads</option>
                      <option value="seo">SEO</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>
                  <button
                    data-cal-namespace="30min"
                    data-cal-link="okvalley/30min"
                    data-cal-config='{"layout":"month_view"}'
                    type="button"
                    className="w-full bg-white hover:bg-slate-100 text-black rounded-full h-14 px-8 text-base"
                  >
                    Book Your Consultation
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-24 relative">
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-heading tracking-tight mb-6">Visit Our Office</h2>
              <div className="w-24 h-1 bg-black mx-auto mb-6"></div>
              <p className="text-slate-600 max-w-2xl mx-auto">
                We're located in the heart of Creative City. Feel free to stop by during business hours.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl h-96">
              <iframe
                title="Kelowna Location"
                src="https://maps.google.com/maps?q=Kelowna,%20BC&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <SiteFooter />
    </div>
  )
}
