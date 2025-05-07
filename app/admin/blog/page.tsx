import { requireAuth } from "@/lib/auth"
import { getAllBlogPosts } from "@/lib/blog"
import { AdminLayout } from "@/components/admin/admin-layout"
import { Button } from "@/components/ui/button"
import { PlusCircle, Edit, Eye } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { DeleteBlogPostButton } from "@/components/admin/delete-blog-post-button"

export default async function AdminBlogPage() {
  // Check if user is authenticated
  requireAuth()

  // Get all blog posts
  const blogPosts = await getAllBlogPosts()

  return (
    <AdminLayout>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-heading tracking-tight mb-2">Blog Posts</h1>
          <p className="text-slate-600">Manage your blog content</p>
        </div>
        <Link href="/admin/blog/new">
          <Button className="bg-black hover:bg-slate-800 text-white">
            <PlusCircle className="h-4 w-4 mr-2" />
            New Post
          </Button>
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="px-6 py-4 text-left font-medium text-slate-500">Title</th>
                <th className="px-6 py-4 text-left font-medium text-slate-500">Author</th>
                <th className="px-6 py-4 text-left font-medium text-slate-500">Category</th>
                <th className="px-6 py-4 text-left font-medium text-slate-500">Date</th>
                <th className="px-6 py-4 text-right font-medium text-slate-500">Actions</th>
              </tr>
            </thead>
            <tbody>
              {blogPosts.length > 0 ? (
                blogPosts.map((post) => (
                  <tr key={post.id} className="border-b">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="h-10 w-10 flex-shrink-0 mr-3">
                          <Image
                            src={post.coverImage || "/placeholder.svg?height=40&width=40"}
                            width={40}
                            height={40}
                            alt={post.title}
                            className="h-10 w-10 rounded object-cover"
                          />
                        </div>
                        <div className="font-medium">{post.title}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="h-6 w-6 flex-shrink-0 mr-2">
                          <Image
                            src={post.author.avatar || "/placeholder.svg?height=24&width=24"}
                            width={24}
                            height={24}
                            alt={post.author.name}
                            className="h-6 w-6 rounded-full object-cover"
                          />
                        </div>
                        <div>{post.author.name}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-800">
                        {post.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-slate-500">{new Date(post.publishedAt).toLocaleDateString()}</td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end space-x-2">
                        <Link href={`/blog/${post.slug}`}>
                          <Button variant="ghost" size="icon">
                            <Eye className="h-4 w-4" />
                          </Button>
                        </Link>
                        <Link href={`/admin/blog/edit/${post.id}`}>
                          <Button variant="ghost" size="icon">
                            <Edit className="h-4 w-4" />
                          </Button>
                        </Link>
                        <DeleteBlogPostButton id={post.id} title={post.title} />
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="px-6 py-8 text-center text-slate-500">
                    No blog posts found. Create your first post!
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  )
}
