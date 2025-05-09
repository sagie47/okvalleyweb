"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Smartphone, Search, Zap, LayoutGrid, Globe, Target, ArrowDown } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { AnimatedText } from "./components/animated-text"
import { SiteFooter } from "@/components/site-footer"
import { useEffect, useState } from "react"
import type { BlogPost } from "@/lib/blog"

export default function Home() {
  const [recentPosts, setRecentPosts] = useState<BlogPost[]>([])

  useEffect(() => {
    async function fetchRecentPosts() {
      try {
        const response = await fetch("/api/blog")
        if (response.ok) {
          const posts = await response.json()
          // Sort by date and take the 3 most recent
          const recent = posts
            .sort((a: BlogPost, b: BlogPost) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
            .slice(0, 3)
          setRecentPosts(recent)
        }
      } catch (error) {
        console.error("Error fetching recent posts:", error)
      }
    }

    fetchRecentPosts()
  }, [])

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-hidden">
      <SiteHeader />

      <main>
        {/* Hero Section */}
        <section className="relative pt-20 pb-32 overflow-hidden">
          <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-slate-50 to-slate-100 -z-10"></div>

          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-slate-200 to-transparent opacity-70 -z-10"></div>
          <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-slate-200 to-transparent opacity-50 -z-10"></div>
          <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-pink-200 opacity-20 blur-3xl -z-10"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-blue-200 opacity-20 blur-3xl -z-10"></div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading tracking-tight leading-none md:leading-none lg:leading-none mb-6">
                  We provide
                  <br />
                  <span className="text-5xl md:text-6xl lg:text-7xl">
                    <AnimatedText />
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-slate-600 mb-12 max-w-2xl">
                  Custom solutions that drive business growth. $0 down for a standard 5 page website with 12 month
                  contract. Includes design, development, hosting, and unlimited edits.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-black hover:bg-slate-800 text-white rounded-full h-14 px-8 text-base">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className="mt-12 flex items-center">
                  <ArrowDown className="animate-bounce h-6 w-6 text-slate-400 mr-2" />
                  <span className="text-slate-400 text-sm uppercase tracking-wider">Scroll to explore</span>
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

          {/* Section divider */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              className="w-full h-16 text-slate-50"
            >
              <path d="M1200 120L0 16.48V0h1200v120z" fill="currentColor"></path>
            </svg>
          </div>
        </section>

        {/* Features Grid Section */}
        <section className="py-24 relative bg-slate-50">
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-heading tracking-tight mb-6">Why Choose Us</h2>
              <div className="w-24 h-1 bg-black mx-auto mb-6"></div>
              <p className="text-slate-600 max-w-2xl mx-auto">
                We deliver exceptional web solutions that help your business stand out in the digital landscape.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-x-12 gap-y-16">
              {[
                {
                  title: "Mobile First Design",
                  description:
                    "We start building your site for mobile devices first making sure the code is as lean and optimized with no bloated waste and makes the site even more responsive.",
                  cta: "Get Started",
                  icon: <Smartphone className="h-8 w-8 text-black" />,
                },
                {
                  title: "Fully Responsive",
                  description:
                    "Your website will fit all mobile screens sizes, tablets, and desktop sizes so visitors can access your site from anywhere and see a beautiful site no matter the screen size.",
                  cta: "Get Started",
                  icon: <LayoutGrid className="h-8 w-8 text-black" />,
                },
                {
                  title: "Optimized Page Speed",
                  description:
                    "If your site takes more than 3 seconds to load you can lose up to 50% your traffic because it took too long. Our sites load 1 second or less ensuring everyone that visits your site reaches it.",
                  cta: "More About Page Speed",
                  icon: <Zap className="h-8 w-8 text-black" />,
                },
                {
                  title: "SEO Services",
                  description:
                    "We have an in-house SEO specialist who understands local SEO and how to rank in your local market with plenty of case studies to show results and monthly reports.",
                  cta: "More About SEO",
                  icon: <Search className="h-8 w-8 text-black" />,
                },
                {
                  title: "Google PPC Ads",
                  description:
                    "We also offer Pay-Per-Click Google ads creation and management with our Google Ads expert who can create effective ad campaigns to maximize your ROI.",
                  cta: "More About Ads",
                  icon: <Target className="h-8 w-8 text-black" />,
                },
                {
                  title: "Based In Canada",
                  description:
                    "We do not hire cheap overseas developers. We are mostly based in Canada with team members in Washington, Texas, Pennsylvania, and the UK and work 100% remote from home.",
                  cta: "More About Us",
                  icon: <Globe className="h-8 w-8 text-black" />,
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="relative bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  <div className="mb-6 bg-slate-50 w-16 h-16 rounded-full flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-heading tracking-tight mb-4">{feature.title}</h3>
                  <p className="text-slate-600 mb-4">{feature.description}</p>
                  <div className="inline-flex items-center text-black">
                    {feature.cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section divider */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              className="w-full h-16 text-white"
            >
              <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" fill="currentColor"></path>
            </svg>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 relative">
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid md:grid-cols-2 gap-24 items-center">
              <div>
                <h2 className="text-4xl font-heading tracking-tight mb-6">
                  Websites starting at $0 down and $175 per month
                </h2>
                <div className="w-24 h-1 bg-black mb-12"></div>
                <div className="space-y-8">
                  {[
                    "100% Secure static HTML and CSS code, meaning there's literally nothing that can be hacked.",
                    "Custom designed by our in-house design team, allowing us to create anything you need.",
                    "Perfect 98-100/100 PageSpeed scores with Google due to zero bloat and optimized code.",
                    "Money back guarantee if we can't design something you like. We stand by our work.",
                    "Unmatched support with direct access to the owner and developer.",
                    "Transparent SEO strategies that clearly explain what we can do to get you ranking.",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-slate-50 p-2 rounded-full mr-4 flex-shrink-0 mt-1">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M5 13L9 17L19 7"
                            stroke="black"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <p className="text-slate-600">{feature}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <Link href="/pricing">
                    <Button className="bg-black hover:bg-slate-800 text-white rounded-full h-12 px-8 text-base mt-8">
                      View All Pricing Options
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-pink-50 to-blue-50 rounded-full"></div>
                <Image
                  src="/images/codes.jpg"
                  width={600}
                  height={600}
                  alt="Website pricing illustration"
                  className="w-full h-auto object-cover rounded-xl shadow-xl"
                />
                <div className="absolute -top-6 -left-6 bg-black text-white p-4 rounded-lg">
                  <div className="text-sm font-heading tracking-widest">RESPONSIVE DESIGN</div>
                </div>
              </div>
            </div>
          </div>

          {/* Section divider */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              className="w-full h-16 text-slate-50"
            >
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-24 relative bg-slate-50">
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-xl mb-16">
              <h2 className="text-4xl font-heading tracking-tight mb-6">What our clients say</h2>
              <div className="w-24 h-1 bg-black mb-6"></div>
              <p className="text-slate-600">
                Don't just take our word for it. Here's what our clients have to say about working with us.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {[
                {
                  quote:
                    "OK Valley Web has been instrumental in improving our Google Ads campaigns. His expertise in optimizing ads and running split tests has significantly boosted our results. Their focus on SEO has helped increase our page ranking and organic search visibility. They been a valuable asset to our team, contributing to our overall success.",
                  author: "Dr. Cary Yurikw",
                  position: "Founder/Tutt Street Family Chiropractic",
                  image: "/images/yurikw.png",
                },
                {
                  quote:
                    "OK ValleyWeb helped evaluate our digital marketing strategy and recommended substantial changes in our original approach abased on their experience. They were also able to help develop my tech stack with numerous recommendations. I appreciated their knowledge base and willingness to challenge my approach.",
                  author: "Kendall Justiano",
                  position: "CEO/Founder Growth Arc Advisors",
                  image: "/images/kendall.png",
                },
                {
                  quote:
                    "We've had an amazing experience with OK Valley Web. Their PPC campaigns have really paid off, and our brand's presence on social media has grown significantly thanks to their efforts. They pay attention to every little detail and truly care about our success. If you're looking for a digital marketing partner, these are the folks you want.",
                  author: "Cameron Mounfared",
                  position: "CEO Storage Express",
                  image: "/images/haba.jpg",
                  url: "https://storageexpress.ca/",
                },
                {
                  quote:
                    "OK Valley Web delivered an exceptional website for our boat detailing business. Their web development expertise and attention to detail resulted in a site that perfectly represents our brand and has significantly increased our online bookings. We couldn't be happier with the results.",
                  author: "Ibrahim Raslan",
                  position: "CEO Kelowna Boat Detailing",
                  image: "/images/baba.jpg",
                  url: "https://www.kelownaboatdetailing.com/",
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  onClick={() => testimonial.url && window.open(testimonial.url, '_blank')}
                  className="bg-white border border-slate-100 rounded-xl p-8 transition-all duration-300 hover:shadow-xl cursor-pointer"
                >
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mb-6 opacity-20"
                  >
                    <path d="M0 20L10 0H18L12 20H18V40H0V20Z" fill="black" />
                    <path d="M22 20L32 0H40L34 20H40V40H22V20Z" fill="black" />
                  </svg>
                  <p className="text-slate-600 mb-6">{testimonial.quote}</p>
                  <div className="flex items-center">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      width={48}
                      height={48}
                      alt={testimonial.author}
                      className="rounded-full mr-4 object-cover h-12 w-12"
                    />
                    <div>
                      <h4 className="font-heading">{testimonial.author}</h4>
                      <p className="text-sm text-slate-500">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section divider */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              className="w-full h-16 text-white"
            >
              <path d="M1200 0L0 0 892.25 114.72 1200 0z" fill="currentColor" opacity="0.05"></path>
            </svg>
          </div>
        </section>

        {/* Recent Blog Posts Section */}
        <section className="py-24 relative">
          <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16">
              <div>
                <h2 className="text-4xl font-heading tracking-tight mb-6">Our Work</h2>
                <div className="w-24 h-1 bg-black mb-6"></div>
                <p className="text-slate-600 max-w-2xl">
                  Insights, tips, and strategies to help your business succeed in the digital landscape.
                </p>
              </div>
              <Link href="/blog">
                <Button className="mt-6 md:mt-0 bg-black hover:bg-slate-800 text-white rounded-full">
                  View All Articles
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recentPosts.length > 0
                ? recentPosts.map((post) => (
                    <div
                      key={post.id}
                      onClick={() => post.websiteUrl && window.open(post.websiteUrl, '_blank')}
                      className="group cursor-pointer"
                    >
                      <div className="bg-white overflow-hidden rounded-xl transition-all duration-300 hover:shadow-xl h-full flex flex-col">
                        <div className="relative overflow-hidden">
                          <Image
                            src={post.coverImage || "/placeholder.svg?height=400&width=600"}
                            width={600}
                            height={400}
                            alt={post.title}
                            className="w-full h-64 object-cover transition-transform duration-500 group-active:scale-105"
                          />
                          <div className="absolute top-4 left-4">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-black text-white">
                              {post.category}
                            </span>
                          </div>
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                          <div className="flex items-center mb-4">
                            <div className="h-8 w-8 rounded-full overflow-hidden mr-3">
                              <Image
                                src={post.author.avatar || "/placeholder.svg?height=32&width=32"}
                                width={32}
                                height={32}
                                alt={post.author.name}
                                className="h-8 w-8 object-cover"
                              />
                            </div>
                            <div>
                              <p className="text-sm font-medium">{post.author.name}</p>
                              <p className="text-xs text-slate-500">
                                {new Date(post.publishedAt).toLocaleDateString()}
                              </p>
                            </div>
                          </div>
                          <h3 className="text-xl font-heading tracking-tight mb-3">{post.title}</h3>
                          <p className="text-slate-600 mb-6 flex-grow">{post.excerpt}</p>
                          <Link
                            href={`/blog/${post.slug}`}
                            className="inline-flex items-center text-black hover:underline mt-auto"
                          >
                            Read more
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))
                : // Placeholder cards when no posts are available
                  Array(3)
                    .fill(0)
                    .map((_, index) => (
                      <div key={index} className="bg-white overflow-hidden rounded-xl shadow-sm h-full flex flex-col">
                        <div className="relative overflow-hidden">
                          <div className="w-full h-64 bg-slate-100"></div>
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                          <div className="flex items-center mb-4">
                            <div className="h-8 w-8 rounded-full bg-slate-100 mr-3"></div>
                            <div>
                              <div className="h-4 w-24 bg-slate-100 rounded mb-2"></div>
                              <div className="h-3 w-16 bg-slate-100 rounded"></div>
                            </div>
                          </div>
                          <div className="h-6 w-3/4 bg-slate-100 rounded mb-3"></div>
                          <div className="h-4 w-full bg-slate-100 rounded mb-2"></div>
                          <div className="h-4 w-2/3 bg-slate-100 rounded mb-6"></div>
                          <div className="h-4 w-24 bg-slate-100 rounded mt-auto"></div>
                        </div>
                      </div>
                    ))}
            </div>
          </div>

          {/* Section divider */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              className="w-full h-16 text-slate-50"
            >
              <path
                d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 relative bg-black text-white">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-black to-slate-800 -z-10"></div>
          <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-pink-500 opacity-10 blur-3xl -z-10"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-blue-500 opacity-10 blur-3xl -z-10"></div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-heading tracking-tight mb-6">Ready to transform your digital presence?</h2>
              <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
              <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
                Let's collaborate to create exceptional digital experiences that drive results for your business. Our
                team is ready to bring your vision to life.
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
