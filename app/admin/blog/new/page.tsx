import { requireAuth } from "@/lib/auth"
import { AdminLayout } from "@/components/admin/admin-layout"
import { BlogPostForm } from "@/components/admin/blog-post-form"

export default function NewBlogPostPage() {
  // Check if user is authenticated
  requireAuth()

  return (
    <AdminLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-heading tracking-tight mb-2">Create New Blog Post</h1>
        <p className="text-slate-600">Write and publish a new article</p>
      </div>

      <BlogPostForm />
    </AdminLayout>
  )
}
