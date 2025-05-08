import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  BarChart2,
  Target,
  TrendingUp,
  DollarSign,
  Users,
  MousePointer,
  LineChart,
  Zap,
  Layers,
} from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function GoogleAdsPage() {
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
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl md:text-6xl font-heading tracking-tight mb-6">Google Ads Services</h1>
                <div className="w-24 h-1 bg-black mb-6"></div>
                <p className="text-lg text-slate-600 mb-8">
                  Strategic Google Ads campaigns that drive targeted traffic, increase conversions, and maximize your
                  return on investment.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-black hover:bg-slate-800 text-white rounded-full h-14 px-8 text-base">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Link href="/blog">
                    <Button
                      variant="outline"
                      className="border-slate-400 text-slate-800 hover:bg-slate-100 rounded-full h-14 px-8 text-base"
                    >
                      View Our Work
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-pink-50 to-blue-50 rounded-full"></div>
                <Image
                  src="/images/gads.png"
                  width={600}
                  height={600}
                  alt="Google Ads Services"
                  className="w-full h-auto object-cover rounded-xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24 relative">
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-heading tracking-tight mb-6">Our Google Ads Services</h2>
              <div className="w-24 h-1 bg-black mx-auto mb-6"></div>
              <p className="text-slate-600 max-w-2xl mx-auto">
                We offer comprehensive Google Ads services to help you reach your target audience and achieve your
                business goals.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Search Campaigns",
                  description:
                    "Target users actively searching for your products or services with strategic keyword-based ads.",
                  icon: <Target className="h-8 w-8 text-black" />,
                },
                {
                  title: "Display Advertising",
                  description:
                    "Reach potential customers with visually engaging ads across Google's vast network of websites.",
                  icon: <Layers className="h-8 w-8 text-black" />,
                },
                {
                  title: "Remarketing Campaigns",
                  description:
                    "Re-engage visitors who have previously interacted with your website to increase conversions.",
                  icon: <Users className="h-8 w-8 text-black" />,
                },
                {
                  title: "Shopping Campaigns",
                  description: "Showcase your products with image-based ads that appear in Google Shopping results.",
                  icon: <DollarSign className="h-8 w-8 text-black" />,
                },
                {
                  title: "Performance Tracking",
                  description: "Comprehensive analytics and reporting to measure campaign performance and ROI.",
                  icon: <BarChart2 className="h-8 w-8 text-black" />,
                },
                {
                  title: "Conversion Optimization",
                  description:
                    "Continuous refinement of your campaigns to maximize conversions and reduce cost per acquisition.",
                  icon: <TrendingUp className="h-8 w-8 text-black" />,
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  <div className="mb-6 bg-slate-50 w-16 h-16 rounded-full flex items-center justify-center">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-heading tracking-tight mb-4">{service.title}</h3>
                  <p className="text-slate-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 relative bg-slate-50">
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-pink-50 to-blue-50 rounded-full"></div>
                <Image
                  src="/images/dash.png"
                  width={600}
                  height={600}
                  alt="Google Ads Benefits"
                  className="w-full h-auto object-cover rounded-xl shadow-xl"
                />
              </div>
              <div>
                <h2 className="text-4xl font-heading tracking-tight mb-6">Benefits of Google Ads</h2>
                <div className="w-24 h-1 bg-black mb-6"></div>
                <p className="text-slate-600 mb-8">
                  Google Ads offers numerous advantages for businesses looking to increase their online visibility and
                  drive targeted traffic to their website.
                </p>
                <div className="space-y-4">
                  {[
                    {
                      text: "Reach customers at the exact moment they're searching for your products or services",
                      icon: <MousePointer className="h-6 w-6 text-black mr-4 flex-shrink-0 mt-0.5" />,
                    },
                    {
                      text: "Target specific demographics, locations, and devices for maximum relevance",
                      icon: <Target className="h-6 w-6 text-black mr-4 flex-shrink-0 mt-0.5" />,
                    },
                    {
                      text: "Control your budget with flexible spending options and pay only for results",
                      icon: <DollarSign className="h-6 w-6 text-black mr-4 flex-shrink-0 mt-0.5" />,
                    },
                    {
                      text: "Measure performance in real-time and make data-driven adjustments",
                      icon: <LineChart className="h-6 w-6 text-black mr-4 flex-shrink-0 mt-0.5" />,
                    },
                    {
                      text: "Scale your campaigns as your business grows",
                      icon: <TrendingUp className="h-6 w-6 text-black mr-4 flex-shrink-0 mt-0.5" />,
                    },
                    {
                      text: "Complement your organic SEO efforts for comprehensive search visibility",
                      icon: <Zap className="h-6 w-6 text-black mr-4 flex-shrink-0 mt-0.5" />,
                    },
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      {benefit.icon}
                      <p className="text-slate-600">{benefit.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 relative">
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-heading tracking-tight mb-6">Our Google Ads Process</h2>
              <div className="w-24 h-1 bg-black mx-auto mb-6"></div>
              <p className="text-slate-600 max-w-2xl mx-auto">
                We follow a structured approach to develop and implement Google Ads campaigns that deliver results.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Research & Strategy",
                  description:
                    "We analyze your business, competitors, and target audience to develop a customized strategy.",
                },
                {
                  step: "02",
                  title: "Campaign Setup",
                  description:
                    "We create optimized account structures, compelling ad copy, and targeted keyword lists.",
                },
                {
                  step: "03",
                  title: "Optimization",
                  description:
                    "We continuously monitor and refine your campaigns to improve performance and reduce costs.",
                },
                {
                  step: "04",
                  title: "Reporting & Analysis",
                  description:
                    "We provide detailed reports and insights to track progress and inform strategic decisions.",
                },
              ].map((step, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  <div className="text-4xl font-heading text-black opacity-30 mb-4">{step.step}</div>
                  <h3 className="text-xl font-heading tracking-tight mb-4">{step.title}</h3>
                  <p className="text-slate-600">{step.description}</p>
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
              <h2 className="text-4xl font-heading tracking-tight mb-6">
                Ready to grow your business with Google Ads?
              </h2>
              <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
              <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
                Let's discuss how our Google Ads services can help you reach your target audience, drive more
                conversions, and grow your business.
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
