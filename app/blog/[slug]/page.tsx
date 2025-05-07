import { notFound } from "next/navigation"
import { getBlogPostBySlug, getRecentBlogPosts } from "@/lib/blog"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { BlogPostContent } from "@/components/blog/blog-post-content"
import { BlogPostCard } from "@/components/blog/blog-post-card"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = await getBlogPostBySlug(slug)

  if (!post) {
    notFound()
  }

  // Get recent posts for the "Related Posts" section
  const recentPosts = await getRecentBlogPosts(3)
  const relatedPosts = recentPosts.filter((p) => p.id !== post.id).slice(0, 2)

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
            <div className="max-w-4xl mx-auto">
              <Link href="/blog" className="inline-flex items-center text-slate-600 hover:text-black mb-8">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Blog
              </Link>

              <div className="mb-8">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-black text-white">
                  {post.category}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading tracking-tight mb-6">{post.title}</h1>

              <div className="flex items-center mb-8">
                <div className="h-10 w-10 rounded-full overflow-hidden mr-4">
                  <Image
                    src={post.author.avatar || "/placeholder.svg?height=40&width=40"}
                    width={40}
                    height={40}
                    alt={post.author.name}
                    className="h-10 w-10 object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium">{post.author.name}</p>
                  <p className="text-sm text-slate-500">
                    {new Date(post.publishedAt).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </p>
                </div>
              </div>

              <div className="relative w-full h-96 rounded-xl overflow-hidden mb-8">
                <Image
                  src={post.coverImage || "/placeholder.svg?height=800&width=1200"}
                  fill
                  alt={post.title}
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 relative -mt-20">
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl mx-auto">
              <BlogPostContent content={post.content} />
            </div>
          </div>
        </section>

        {/* Related Posts Section */}
        {relatedPosts.length > 0 && (
          <section className="py-16 relative bg-slate-50">
            <div className="container mx-auto px-6 relative z-10">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-heading tracking-tight mb-8">Related Posts</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {relatedPosts.map((relatedPost) => (
                    <BlogPostCard key={relatedPost.id} post={relatedPost} />
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

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
