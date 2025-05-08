import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Code,
  FileText,
  Link2,
  MapPin,
  FileEdit,
  BarChart,
  TrendingUp,
  Shield,
  Smile,
  Users,
  Search,
  DollarSign,
} from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function SEOPage() {
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
                <h1 className="text-5xl md:text-6xl font-heading tracking-tight mb-6">SEO Services</h1>
                <div className="w-24 h-1 bg-black mb-6"></div>
                <p className="text-lg text-slate-600 mb-8">
                  Comprehensive SEO strategies that improve your search engine rankings, increase organic traffic, and
                  help you reach your target audience effectively.
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
                  src="/images/seo.jpg"
                  width={600}
                  height={600}
                  alt="SEO Services"
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
              <h2 className="text-4xl font-heading tracking-tight mb-6">Our SEO Services</h2>
              <div className="w-24 h-1 bg-black mx-auto mb-6"></div>
              <p className="text-slate-600 max-w-2xl mx-auto">
                We offer comprehensive SEO services to help improve your website's visibility in search engines and
                drive organic traffic.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Technical SEO",
                  description:
                    "Website audit and optimization to ensure search engines can crawl and index your site effectively.",
                  icon: <Code className="h-8 w-8 text-black" />,
                },
                {
                  title: "On-Page SEO",
                  description:
                    "Optimization of page titles, meta descriptions, headings, content, and internal linking structure.",
                  icon: <FileText className="h-8 w-8 text-black" />,
                },
                {
                  title: "Off-Page SEO",
                  description:
                    "Building high-quality backlinks and establishing your website's authority in your industry.",
                  icon: <Link2 className="h-8 w-8 text-black" />,
                },
                {
                  title: "Local SEO",
                  description:
                    "Optimization for local search to help customers in your area find your business when they need it.",
                  icon: <MapPin className="h-8 w-8 text-black" />,
                },
                {
                  title: "Content Strategy",
                  description:
                    "Development of SEO-friendly content that attracts, engages, and converts your target audience.",
                  icon: <FileEdit className="h-8 w-8 text-black" />,
                },
                {
                  title: "SEO Analytics",
                  description:
                    "Tracking and reporting on key metrics to measure the success of your SEO campaigns and make data-driven decisions.",
                  icon: <BarChart className="h-8 w-8 text-black" />,
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
                  src="/images/report.jpg"
                  width={600}
                  height={600}
                  alt="SEO Benefits"
                  className="w-full h-auto object-cover rounded-xl shadow-xl"
                />
              </div>
              <div>
                <h2 className="text-4xl font-heading tracking-tight mb-6">Benefits of SEO</h2>
                <div className="w-24 h-1 bg-black mb-6"></div>
                <p className="text-slate-600 mb-8">
                  Investing in SEO offers numerous advantages for businesses looking to establish a strong online
                  presence and drive sustainable growth.
                </p>
                <div className="space-y-4">
                  {[
                    {
                      text: "Increase organic traffic and reduce reliance on paid advertising",
                      icon: <TrendingUp className="h-6 w-6 text-black mr-4 flex-shrink-0 mt-0.5" />,
                    },
                    {
                      text: "Build credibility and trust with your target audience",
                      icon: <Shield className="h-6 w-6 text-black mr-4 flex-shrink-0 mt-0.5" />,
                    },
                    {
                      text: "Improve user experience and website usability",
                      icon: <Smile className="h-6 w-6 text-black mr-4 flex-shrink-0 mt-0.5" />,
                    },
                    {
                      text: "Generate high-quality leads and increase conversions",
                      icon: <Users className="h-6 w-6 text-black mr-4 flex-shrink-0 mt-0.5" />,
                    },
                    {
                      text: "Gain valuable insights about your customers and their search behavior",
                      icon: <Search className="h-6 w-6 text-black mr-4 flex-shrink-0 mt-0.5" />,
                    },
                    {
                      text: "Achieve long-term, sustainable results with a strong ROI",
                      icon: <DollarSign className="h-6 w-6 text-black mr-4 flex-shrink-0 mt-0.5" />,
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
              <h2 className="text-4xl font-heading tracking-tight mb-6">Our SEO Process</h2>
              <div className="w-24 h-1 bg-black mx-auto mb-6"></div>
              <p className="text-slate-600 max-w-2xl mx-auto">
                We follow a structured approach to develop and implement SEO strategies that deliver results.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Audit & Analysis",
                  description:
                    "We conduct a comprehensive audit of your website and analyze your competitors to identify opportunities.",
                },
                {
                  step: "02",
                  title: "Strategy Development",
                  description:
                    "We develop a customized SEO strategy based on your business goals, target audience, and industry.",
                },
                {
                  step: "03",
                  title: "Implementation",
                  description:
                    "We implement on-page and off-page optimizations to improve your website's search engine visibility.",
                },
                {
                  step: "04",
                  title: "Monitoring & Refinement",
                  description:
                    "We continuously monitor performance, provide detailed reports, and refine our strategy for optimal results.",
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
              <h2 className="text-4xl font-heading tracking-tight mb-6">Ready to improve your search rankings?</h2>
              <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
              <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
                Let's discuss how our SEO services can help you increase your online visibility, drive more organic
                traffic, and grow your business.
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
