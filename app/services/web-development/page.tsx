import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Palette,
  ShoppingCart,
  FileText,
  Gauge,
  WrenchIcon,
  Code,
  Layers,
  MonitorSmartphone,
  Database,
  Paintbrush,
  Server,
  Cloud,
} from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function WebDevelopmentPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <SiteHeader />

      <main>
        {/* Hero Section */}
        <section className="relative pt-20 pb-32 overflow-hidden">
          <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-slate-50 to-slate-100 -z-10"></div>
          <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-pink-200 opacity-20 blur-3xl -z-10"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-blue-200 opacity-20 blur-3xl -z-10"></div>

          {/* Code pattern background */}
          <div className="absolute inset-0 opacity-5 -z-10">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <pattern
                id="pattern-circles"
                x="0"
                y="0"
                width="50"
                height="50"
                patternUnits="userSpaceOnUse"
                patternContentUnits="userSpaceOnUse"
              >
                <text x="25" y="25" fontFamily="monospace" fontSize="20" textAnchor="middle" fill="currentColor">
                  &lt;/&gt;
                </text>
              </pattern>
              <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)"></rect>
            </svg>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl md:text-6xl font-heading tracking-tight mb-6">Web Development</h1>
                <div className="w-24 h-1 bg-black mb-6"></div>
                <p className="text-lg text-slate-600 mb-8">
                  Custom designed websites tailored specifically to your business needs with perfect PageSpeed scores
                  and optimized for conversions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-black hover:bg-slate-800 text-white rounded-full h-14 px-8 text-base">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    className="border-slate-400 text-slate-800 hover:bg-slate-100 rounded-full h-14 px-8 text-base"
                  >
                    View Our Work
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-pink-50 to-blue-50 rounded-full"></div>
                <div className="relative bg-white p-4 rounded-xl shadow-2xl">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    <div className="ml-2 text-xs text-slate-500">index.html</div>
                  </div>
                  <div className="bg-slate-50 rounded-lg p-4 font-mono text-sm text-slate-800 overflow-hidden">
                    <div className="flex">
                      <span className="text-slate-400 mr-4">1</span>
                      <span>
                        <span className="text-pink-500">&lt;div</span> <span className="text-blue-500">class</span>=
                        <span className="text-green-500">"container"</span>
                        <span className="text-pink-500">&gt;</span>
                      </span>
                    </div>
                    <div className="flex">
                      <span className="text-slate-400 mr-4">2</span>
                      <span className="ml-4">
                        <span className="text-pink-500">&lt;h1&gt;</span>Welcome to ValleyWeb
                        <span className="text-pink-500">&lt;/h1&gt;</span>
                      </span>
                    </div>
                    <div className="flex">
                      <span className="text-slate-400 mr-4">3</span>
                      <span className="ml-4">
                        <span className="text-pink-500">&lt;p&gt;</span>Custom web solutions
                        <span className="text-pink-500">&lt;/p&gt;</span>
                      </span>
                    </div>
                    <div className="flex">
                      <span className="text-slate-400 mr-4">4</span>
                      <span>
                        <span className="text-pink-500">&lt;/div&gt;</span>
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 border-t border-slate-100 pt-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Code className="h-4 w-4 text-slate-400" />
                        <span className="text-xs text-slate-500">HTML</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Layers className="h-4 w-4 text-slate-400" />
                        <span className="text-xs text-slate-500">CSS</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Database className="h-4 w-4 text-slate-400" />
                        <span className="text-xs text-slate-500">JavaScript</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 relative">
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-heading tracking-tight mb-6">Our Web Development Services</h2>
              <div className="w-24 h-1 bg-black mx-auto mb-6"></div>
              <p className="text-slate-600 max-w-2xl mx-auto">
                We create custom websites that are designed to convert visitors into customers and grow your business.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Custom Website Design",
                  description:
                    "Unique, branded website designs that reflect your business identity and appeal to your target audience.",
                  icon: <Palette className="h-8 w-8 text-black" />,
                },
                {
                  title: "Responsive Development",
                  description:
                    "Mobile-first websites that look and function perfectly on all devices, from smartphones to desktops.",
                  icon: <MonitorSmartphone className="h-8 w-8 text-black" />,
                },
                {
                  title: "E-commerce Solutions",
                  description:
                    "Custom online stores with secure payment processing, inventory management, and seamless user experience.",
                  icon: <ShoppingCart className="h-8 w-8 text-black" />,
                },
                {
                  title: "Content Management",
                  description:
                    "User-friendly CMS implementation that allows you to easily update and manage your website content.",
                  icon: <FileText className="h-8 w-8 text-black" />,
                },
                {
                  title: "Performance Optimization",
                  description:
                    "Lightning-fast websites with perfect PageSpeed scores for improved user experience and SEO rankings.",
                  icon: <Gauge className="h-8 w-8 text-black" />,
                },
                {
                  title: "Maintenance & Support",
                  description:
                    "Ongoing website maintenance, security updates, and technical support to keep your site running smoothly.",
                  icon: <WrenchIcon className="h-8 w-8 text-black" />,
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  <div className="mb-6 bg-slate-50 w-16 h-16 rounded-full flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-heading tracking-tight mb-4">{feature.title}</h3>
                  <p className="text-slate-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 relative bg-slate-50">
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-heading tracking-tight mb-6">Our Development Process</h2>
              <div className="w-24 h-1 bg-black mx-auto mb-6"></div>
              <p className="text-slate-600 max-w-2xl mx-auto">
                We follow a structured approach to ensure your website meets your business goals and exceeds your
                expectations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Discovery",
                  description:
                    "We start by understanding your business, goals, target audience, and requirements to create a strategic plan.",
                },
                {
                  step: "02",
                  title: "Design",
                  description:
                    "Our designers create wireframes and mockups that align with your brand and appeal to your target audience.",
                },
                {
                  step: "03",
                  title: "Development",
                  description:
                    "Our developers build your website using clean, efficient code that ensures fast loading and optimal performance.",
                },
                {
                  step: "04",
                  title: "Launch & Support",
                  description:
                    "After thorough testing, we launch your website and provide ongoing support and maintenance.",
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

        {/* Technologies Section */}
        <section className="py-24 relative">
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-heading tracking-tight mb-6">Technologies We Use</h2>
                <div className="w-24 h-1 bg-black mb-6"></div>
                <p className="text-slate-600 mb-8">
                  We use the latest technologies and frameworks to build fast, secure, and scalable websites that
                  deliver exceptional user experiences.
                </p>
                <div className="space-y-4">
                  {[
                    {
                      text: "React & Next.js for dynamic, interactive user interfaces",
                      icon: <Code className="h-4 w-4 text-black" />,
                    },
                    {
                      text: "Tailwind CSS for responsive, custom designs",
                      icon: <Paintbrush className="h-4 w-4 text-black" />,
                    },
                    {
                      text: "Node.js for server-side applications",
                      icon: <Server className="h-4 w-4 text-black" />,
                    },
                    {
                      text: "WordPress for content management when appropriate",
                      icon: <FileText className="h-4 w-4 text-black" />,
                    },
                    {
                      text: "Shopify for e-commerce solutions",
                      icon: <ShoppingCart className="h-4 w-4 text-black" />,
                    },
                    {
                      text: "AWS & Vercel for reliable, scalable hosting",
                      icon: <Cloud className="h-4 w-4 text-black" />,
                    },
                  ].map((tech, index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-slate-50 p-2 rounded-full mr-4 flex-shrink-0">{tech.icon}</div>
                      <p className="text-slate-600">{tech.text}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-pink-50 to-blue-50 rounded-full"></div>
                <Image
                  src="/images/tranny.jpg"
                  width={600}
                  height={600}
                  alt="Web Development Technologies"
                  className="w-full h-auto object-cover rounded-xl shadow-xl"
                />
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
              <h2 className="text-4xl font-heading tracking-tight mb-6">Ready to start your web project?</h2>
              <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
              <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
                Let's collaborate to create a website that drives business growth and delivers exceptional user
                experiences.
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
