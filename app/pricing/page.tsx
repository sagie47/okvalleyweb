import { Button } from "@/components/ui/button"
import { CheckCircle2, X } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { SiteFooter } from "@/components/site-footer"

export default function PricingPage() {
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
              <h1 className="text-5xl md:text-6xl font-heading tracking-tight mb-6">Simple, transparent pricing</h1>
              <div className="w-24 h-1 bg-black mx-auto mb-6"></div>
              <p className="text-lg text-slate-600">
                Choose the plan that fits your needs. All plans include custom design, responsive development, and
                ongoing support.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Tables */}
        <section className="py-24 relative -mt-32">
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Lump Sum Plan */}
              <div className="bg-white border border-slate-200 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl relative group">
                <div className="p-8">
                  <h3 className="text-sm font-heading tracking-widest mb-4">LUMP SUM</h3>
                  <div className="flex items-end mb-6">
                    <span className="text-4xl font-heading">$3800</span>
                    <span className="text-slate-500 ml-2">+$25/mo hosting</span>
                  </div>
                  <p className="text-slate-600 mb-8">
                    Perfect for businesses who prefer a one-time payment with minimal ongoing costs.
                  </p>
                  <ul className="space-y-4 mb-8">
                    {[
                      "Design And Development",
                      "$25/mo Hosting",
                      "$100 fee Per Page after 5",
                      "+$50/mo Unlimited Edits Add-on",
                      "+$250 To Add A Blog",
                      "24/7 Support",
                      "Lifetime Updates",
                    ].map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-black mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-black hover:bg-slate-800 text-white rounded-full h-12">
                    Get Started
                  </Button>
                </div>
              </div>

              {/* Monthly Plan */}
              <div className="bg-white border-2 border-black rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl relative group transform scale-105 z-10">
                <div className="absolute -top-4 right-6 bg-black text-white text-xs font-heading tracking-widest px-3 py-1 rounded-full">
                  MOST POPULAR
                </div>
                <div className="p-8">
                  <h3 className="text-sm font-heading tracking-widest mb-4">MONTHLY</h3>
                  <div className="flex items-end mb-6">
                    <span className="text-4xl font-heading">$175</span>
                    <span className="text-slate-500 ml-2">per month</span>
                  </div>
                  <p className="text-slate-600 mb-8">
                    Our most popular option with $0 down and everything included in one monthly payment.
                  </p>
                  <ul className="space-y-4 mb-8">
                    {[
                      "Design And Development",
                      "Includes Hosting",
                      "$100 fee Per Page After 5",
                      "+$250 To Add A Blog",
                      "Unlimited Edits",
                      "24/7 Support",
                      "Lifetime Updates",
                    ].map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-black mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-black hover:bg-slate-800 text-white rounded-full h-12">
                    Get Started
                  </Button>
                </div>
              </div>

              {/* Ecommerce Plan */}
              <div className="bg-white border border-slate-200 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl relative group">
                <div className="p-8">
                  <h3 className="text-sm font-heading tracking-widest mb-4">ECOMMERCE</h3>
                  <div className="flex items-end mb-6">
                    <span className="text-4xl font-heading">$8k</span>
                    <span className="text-slate-500 ml-2">starting</span>
                  </div>
                  <p className="text-slate-600 mb-8">
                    For businesses that need a full-featured online store with product management.
                  </p>
                  <ul className="space-y-4 mb-8">
                    {[
                      "Custom Shopify Store",
                      "Configure Any And All Apps",
                      "Integrated Shipping",
                      "Shopify Tutorial Walkthrough",
                      "Fully Editable In Shopify CMS",
                      "+$50/mo Unlimited Edits",
                      "24/7 Support",
                    ].map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-black mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-black hover:bg-slate-800 text-white rounded-full h-12">
                    Get Started
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-24 relative bg-slate-50">
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-heading tracking-tight mb-6">Compare Plans</h2>
              <div className="w-24 h-1 bg-black mx-auto mb-6"></div>
              <p className="text-slate-600">
                See which plan is right for your business needs with our detailed comparison.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-sm">
                <thead>
                  <tr>
                    <th className="p-6 text-left font-heading text-lg">Feature</th>
                    <th className="p-6 text-center font-heading text-lg">Lump Sum</th>
                    <th className="p-6 text-center font-heading text-lg bg-slate-50">Monthly</th>
                    <th className="p-6 text-center font-heading text-lg">Ecommerce</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: "Custom Design", lumpSum: true, monthly: true, ecommerce: true },
                    { feature: "Mobile Responsive", lumpSum: true, monthly: true, ecommerce: true },
                    { feature: "SEO Optimization", lumpSum: true, monthly: true, ecommerce: true },
                    { feature: "Hosting Included", lumpSum: false, monthly: true, ecommerce: false },
                    { feature: "Unlimited Edits", lumpSum: false, monthly: true, ecommerce: false },
                    { feature: "Product Management", lumpSum: false, monthly: false, ecommerce: true },
                    { feature: "Payment Processing", lumpSum: false, monthly: false, ecommerce: true },
                    { feature: "Inventory Management", lumpSum: false, monthly: false, ecommerce: true },
                    { feature: "24/7 Support", lumpSum: true, monthly: true, ecommerce: true },
                  ].map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="p-6 border-t border-slate-100 font-medium">{row.feature}</td>
                      <td className="p-6 border-t border-slate-100 text-center">
                        {row.lumpSum ? (
                          <CheckCircle2 className="h-5 w-5 text-green-500 mx-auto" />
                        ) : (
                          <X className="h-5 w-5 text-slate-300 mx-auto" />
                        )}
                      </td>
                      <td className="p-6 border-t border-slate-100 text-center bg-slate-50">
                        {row.monthly ? (
                          <CheckCircle2 className="h-5 w-5 text-green-500 mx-auto" />
                        ) : (
                          <X className="h-5 w-5 text-slate-300 mx-auto" />
                        )}
                      </td>
                      <td className="p-6 border-t border-slate-100 text-center">
                        {row.ecommerce ? (
                          <CheckCircle2 className="h-5 w-5 text-green-500 mx-auto" />
                        ) : (
                          <X className="h-5 w-5 text-slate-300 mx-auto" />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 relative">
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-heading tracking-tight mb-6">Frequently Asked Questions</h2>
                <div className="w-24 h-1 bg-black mx-auto mb-6"></div>
                <p className="text-slate-600">
                  Have questions about our pricing? Find answers to common questions below.
                </p>
              </div>

              <div className="space-y-8">
                {[
                  {
                    question: "What's included in the monthly plan?",
                    answer:
                      "Our monthly plan includes custom design and development of a 5-page website, hosting, unlimited edits, 24/7 support, and lifetime updates. Additional pages can be added for a fee of $100 per page.",
                  },
                  {
                    question: "Is there a contract for the monthly plan?",
                    answer:
                      "Yes, the monthly plan requires a 12-month minimum contract. After the initial 12 months, you can continue on a month-to-month basis.",
                  },
                  {
                    question: "What happens if I want to cancel?",
                    answer:
                      "If you need to cancel before the 12-month contract is up, the remaining balance will be due. After the initial contract period, you can cancel at any time with 30 days notice.",
                  },
                  {
                    question: "Do you offer discounts for non-profits?",
                    answer:
                      "Yes, we offer a 15% discount on all our plans for registered non-profit organizations. Please contact us for details.",
                  },
                  {
                    question: "Can I upgrade my plan later?",
                    answer:
                      "You can upgrade from the Lump Sum or Monthly plan to a more comprehensive package at any time. We'll work with you to ensure a smooth transition.",
                  },
                ].map((faq, index) => (
                  <div key={index} className="bg-white p-8 rounded-xl shadow-sm">
                    <h3 className="text-xl font-heading mb-4">{faq.question}</h3>
                    <p className="text-slate-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
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
              <h2 className="text-4xl font-heading tracking-tight mb-6">Ready to get started?</h2>
              <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
              <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
                Contact us today to discuss your project requirements and find the perfect plan for your business.
              </p>
              <div className="flex justify-center">
                <Link href="/contact">
                  <Button className="bg-white hover:bg-slate-100 text-black rounded-full h-14 px-8 text-base">
                    Contact Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <SiteFooter />
    </div>
  )
}
