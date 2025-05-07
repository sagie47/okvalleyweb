import { getAllBlogPosts } from "@/lib/blog"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { BlogPostCard } from "@/components/blog/blog-post-card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default async function BlogPage() {
  const posts = await getAllBlogPosts()

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
              <h1 className="text-5xl md:text-6xl font-heading tracking-tight mb-6">Our Blog</h1>
              <div className="w-24 h-1 bg-black mx-auto mb-6"></div>
              <p className="text-lg text-slate-600">
                Insights, tips, and strategies to help your business succeed in the digital landscape.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts Section */}
        <section className="py-24 relative -mt-20">
          <div className="container mx-auto px-6 relative z-10">
            {posts.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => (
                  <BlogPostCard key={post.id} post={post} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <h2 className="text-2xl font-heading mb-4">No blog posts yet</h2>
                <p className="text-slate-600 mb-8">Check back soon for new content!</p>
              </div>
            )}
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
