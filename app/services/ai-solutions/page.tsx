import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  MessageSquare,
  BarChart,
  FileText,
  ImageIcon,
  MessageCircle,
  ThumbsUp,
  Clock,
  LineChart,
  UserCheck,
  TrendingUp,
  Users,
  Rocket,
} from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function AISolutionsPage() {
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
                <h1 className="text-5xl md:text-6xl font-heading tracking-tight mb-6">AI Solutions</h1>
                <div className="w-24 h-1 bg-black mb-6"></div>
                <p className="text-lg text-slate-600 mb-8">
                  Leverage the power of artificial intelligence to automate processes, gain insights, and create
                  personalized experiences for your customers.
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
                  src="/images/model.png"
                  width={600}
                  height={600}
                  alt="AI Solutions"
                  className="w-full h-auto object-cover rounded-xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 relative">
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-heading tracking-tight mb-6">Our AI Solutions</h2>
              <div className="w-24 h-1 bg-black mx-auto mb-6"></div>
              <p className="text-slate-600 max-w-2xl mx-auto">
                We develop custom AI solutions that help businesses automate processes, gain insights, and enhance
                customer experiences.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "AI Chatbots",
                  description:
                    "Intelligent chatbots that can handle customer inquiries, qualify leads, and provide 24/7 support.",
                  icon: <MessageSquare className="h-8 w-8 text-black" />,
                },
                {
                  title: "Predictive Analytics",
                  description:
                    "AI-powered analytics that help you predict customer behavior, market trends, and business outcomes.",
                  icon: <BarChart className="h-8 w-8 text-black" />,
                },
                {
                  title: "Content Generation",
                  description:
                    "Automated content creation for blogs, social media, product descriptions, and marketing materials.",
                  icon: <FileText className="h-8 w-8 text-black" />,
                },
                {
                  title: "Image Recognition",
                  description:
                    "Visual AI solutions that can identify objects, faces, and patterns in images and videos.",
                  icon: <ImageIcon className="h-8 w-8 text-black" />,
                },
                {
                  title: "Natural Language Processing",
                  description:
                    "NLP solutions that can analyze text, extract insights, and understand customer sentiment.",
                  icon: <MessageCircle className="h-8 w-8 text-black" />,
                },
                {
                  title: "Recommendation Systems",
                  description:
                    "AI-powered recommendation engines that suggest products, content, and services to your customers.",
                  icon: <ThumbsUp className="h-8 w-8 text-black" />,
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

        {/* Benefits Section */}
        <section className="py-24 relative bg-slate-50">
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-pink-50 to-blue-50 rounded-full"></div>
                <Image
                  src="/images/pag.jpg"
                  width={600}
                  height={600}
                  alt="AI Benefits"
                  className="w-full h-auto object-cover rounded-xl shadow-xl"
                />
              </div>
              <div>
                <h2 className="text-4xl font-heading tracking-tight mb-6">Benefits of AI Solutions</h2>
                <div className="w-24 h-1 bg-black mb-6"></div>
                <p className="text-slate-600 mb-8">
                  Implementing AI solutions can transform your business operations and customer experiences in numerous
                  ways.
                </p>
                <div className="space-y-4">
                  {[
                    {
                      text: "Automate repetitive tasks and free up your team for more strategic work",
                      icon: <Clock className="h-6 w-6 text-black mr-4 flex-shrink-0 mt-0.5" />,
                    },
                    {
                      text: "Gain deeper insights from your data to make better business decisions",
                      icon: <LineChart className="h-6 w-6 text-black mr-4 flex-shrink-0 mt-0.5" />,
                    },
                    {
                      text: "Provide personalized experiences that increase customer satisfaction and loyalty",
                      icon: <UserCheck className="h-6 w-6 text-black mr-4 flex-shrink-0 mt-0.5" />,
                    },
                    {
                      text: "Improve efficiency and reduce operational costs",
                      icon: <TrendingUp className="h-6 w-6 text-black mr-4 flex-shrink-0 mt-0.5" />,
                    },
                    {
                      text: "Scale your customer service capabilities without increasing headcount",
                      icon: <Users className="h-6 w-6 text-black mr-4 flex-shrink-0 mt-0.5" />,
                    },
                    {
                      text: "Stay ahead of competitors by leveraging cutting-edge technology",
                      icon: <Rocket className="h-6 w-6 text-black mr-4 flex-shrink-0 mt-0.5" />,
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
              <h2 className="text-4xl font-heading tracking-tight mb-6">Our AI Development Process</h2>
              <div className="w-24 h-1 bg-black mx-auto mb-6"></div>
              <p className="text-slate-600 max-w-2xl mx-auto">
                We follow a structured approach to develop AI solutions that meet your specific business needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Discovery",
                  description: "We identify your business challenges and determine how AI can help solve them.",
                },
                {
                  step: "02",
                  title: "Data Analysis",
                  description: "We analyze your existing data and determine what additional data might be needed.",
                },
                {
                  step: "03",
                  title: "Model Development",
                  description:
                    "We develop and train AI models using your data to solve your specific business problems.",
                },
                {
                  step: "04",
                  title: "Integration & Support",
                  description: "We integrate the AI solution into your existing systems and provide ongoing support.",
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
              <h2 className="text-4xl font-heading tracking-tight mb-6">Ready to leverage the power of AI?</h2>
              <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
              <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
                Let's discuss how our AI solutions can help your business automate processes, gain insights, and enhance
                customer experiences.
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
