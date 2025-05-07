import { notFound } from "next/navigation"
import { requireAuth } from "@/lib/auth"
import { getBlogPostById } from "@/lib/blog"
import { AdminLayout } from "@/components/admin/admin-layout"
import { BlogPostForm } from "@/components/admin/blog-post-form"

interface EditBlogPostPageProps {
  params: {
    id: string
  }
}

export default async function EditBlogPostPage({ params }: EditBlogPostPageProps) {
  // Check if user is authenticated
  requireAuth()

  // Get the blog post
  const post = await getBlogPostById(params.id)

  if (!post) {
    notFound()
  }

  return (
    <AdminLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-heading tracking-tight mb-2">Edit Blog Post</h1>
        <p className="text-slate-600">Update your article</p>
      </div>

      <BlogPostForm post={post} />
    </AdminLayout>
  )
}
