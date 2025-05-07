import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import Link from "next/link"

export default function FAQPage() {
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
              <h1 className="text-5xl md:text-6xl font-heading tracking-tight mb-6">Frequently Asked Questions</h1>
              <div className="w-24 h-1 bg-black mx-auto mb-6"></div>
              <p className="text-lg text-slate-600">
                Find answers to common questions about our services, process, and pricing.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Accordion Section */}
        <section className="py-24 relative -mt-20">
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm p-8">
              <Accordion type="single" collapsible className="space-y-6">
                <AccordionItem value="item-1" className="border-b border-slate-200 pb-6">
                  <AccordionTrigger className="text-xl font-heading tracking-tight hover:no-underline">
                    What services do you offer?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 pt-4">
                    We offer a comprehensive range of digital services including web design and development, e-commerce
                    solutions, SEO optimization, Google Ads management, and AI solutions. Our team can handle everything
                    from simple landing pages to complex web applications.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border-b border-slate-200 pb-6">
                  <AccordionTrigger className="text-xl font-heading tracking-tight hover:no-underline">
                    How much does a website cost?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 pt-4">
                    Our pricing varies depending on your specific needs. We offer flexible options including a one-time
                    payment of $3,800 plus $25/month for hosting, or a monthly plan at $175/month with no upfront cost.
                    E-commerce solutions start at $8,000. We're happy to provide a custom quote based on your project
                    requirements.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border-b border-slate-200 pb-6">
                  <AccordionTrigger className="text-xl font-heading tracking-tight hover:no-underline">
                    How long does it take to build a website?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 pt-4">
                    The timeline for website development varies based on complexity. A standard 5-page business website
                    typically takes 4-6 weeks from start to finish. This includes the discovery phase, design,
                    development, content integration, testing, and launch. More complex projects like e-commerce sites
                    may take 8-12 weeks.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border-b border-slate-200 pb-6">
                  <AccordionTrigger className="text-xl font-heading tracking-tight hover:no-underline">
                    Do you offer website maintenance?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 pt-4">
                    Yes, all our website packages include ongoing maintenance and support. Our monthly plan includes
                    unlimited edits, and our lump sum option offers maintenance for $25/month with an optional $50/month
                    unlimited edits add-on. We handle security updates, backups, and technical support to ensure your
                    website runs smoothly.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="border-b border-slate-200 pb-6">
                  <AccordionTrigger className="text-xl font-heading tracking-tight hover:no-underline">
                    What is your design process?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 pt-4">
                    Our design process begins with a discovery phase where we learn about your business, goals, and
                    target audience. We then create wireframes and mockups for your approval. Once the design is
                    finalized, we move to development, followed by testing and launch. Throughout the process, we
                    maintain open communication and incorporate your feedback.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6" className="border-b border-slate-200 pb-6">
                  <AccordionTrigger className="text-xl font-heading tracking-tight hover:no-underline">
                    Do you offer SEO services?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 pt-4">
                    Yes, we offer comprehensive SEO services to help improve your website's visibility in search
                    engines. This includes keyword research, on-page optimization, technical SEO, content strategy, and
                    local SEO. We provide monthly reports to track progress and make data-driven adjustments to your
                    strategy.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7" className="border-b border-slate-200 pb-6">
                  <AccordionTrigger className="text-xl font-heading tracking-tight hover:no-underline">
                    Can you help with Google Ads?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 pt-4">
                    We offer Google Ads management services to help you reach your target audience and drive qualified
                    traffic to your website. Our team will create and optimize your campaigns, conduct keyword research,
                    write compelling ad copy, and provide regular performance reports to maximize your ROI.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-8" className="border-b border-slate-200 pb-6">
                  <AccordionTrigger className="text-xl font-heading tracking-tight hover:no-underline">
                    What is your payment structure?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 pt-4">
                    For our monthly plan, we require no upfront payment with a 12-month minimum contract at $175/month.
                    For our lump sum option, we typically require a 50% deposit to begin work, with the remaining 50%
                    due upon project completion. We accept credit cards, bank transfers, and PayPal.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-9" className="border-b border-slate-200 pb-6">
                  <AccordionTrigger className="text-xl font-heading tracking-tight hover:no-underline">
                    Do you offer hosting services?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 pt-4">
                    Yes, we provide reliable hosting services for all websites we build. Hosting is included in our
                    monthly plan and available for $25/month with our lump sum option. Our hosting includes regular
                    backups, security monitoring, and technical support to ensure your website remains secure and
                    performs optimally.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-10" className="border-b border-slate-200 pb-6">
                  <AccordionTrigger className="text-xl font-heading tracking-tight hover:no-underline">
                    What happens after my website launches?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 pt-4">
                    After launch, we provide ongoing support and maintenance to ensure your website continues to perform
                    well. We'll schedule a post-launch review to address any issues and discuss future enhancements. We
                    also offer training sessions to help you manage your website content if needed, and we're always
                    available for questions or assistance.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24 relative bg-slate-50">
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-heading tracking-tight mb-6">Still have questions?</h2>
              <div className="w-24 h-1 bg-black mx-auto mb-6"></div>
              <p className="text-slate-600 mb-8">
                If you couldn't find the answer to your question, feel free to contact us directly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button className="bg-black hover:bg-slate-800 text-white rounded-full h-14 px-8 text-base">
                    Contact Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  className="border-slate-300 text-slate-800 hover:bg-slate-100 rounded-full h-14 px-8 text-base"
                >
                  Schedule a Call
                </Button>
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
