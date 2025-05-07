import { requireAuth } from "@/lib/auth"
import { getAllBlogPosts } from "@/lib/blog"
import { AdminLayout } from "@/components/admin/admin-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, FileText, Users, Eye } from "lucide-react"
import Link from "next/link"

export default async function AdminDashboardPage() {
  // Check if user is authenticated
  requireAuth()

  // Get blog posts for stats
  const blogPosts = await getAllBlogPosts()

  return (
    <AdminLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-heading tracking-tight mb-2">Dashboard</h1>
        <p className="text-slate-600">Welcome to your admin dashboard</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-500">Total Blog Posts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-3xl font-bold">{blogPosts.length}</div>
              <FileText className="h-8 w-8 text-slate-400" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-500">Recent Views</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-3xl font-bold">124</div>
              <Eye className="h-8 w-8 text-slate-400" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-slate-500">Authors</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-3xl font-bold">3</div>
              <Users className="h-8 w-8 text-slate-400" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Recent Blog Posts</CardTitle>
            <CardDescription>Latest articles published on your site</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {blogPosts.slice(0, 5).map((post) => (
                <div key={post.id} className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div>
                    <h3 className="font-medium">{post.title}</h3>
                    <p className="text-sm text-slate-500">{new Date(post.publishedAt).toLocaleDateString()}</p>
                  </div>
                  <Link href={`/admin/blog/edit/${post.id}`} className="text-slate-500 hover:text-black">
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              ))}

              {blogPosts.length === 0 && <p className="text-slate-500">No blog posts yet. Create your first post!</p>}
            </div>

            <div className="mt-6">
              <Link href="/admin/blog" className="text-sm text-black hover:underline flex items-center">
                View all posts
                <ArrowRight className="ml-1 h-3 w-3" />
              </Link>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common tasks you can perform</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Link
                href="/admin/blog/new"
                className="block p-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
              >
                <h3 className="font-medium mb-1">Create New Blog Post</h3>
                <p className="text-sm text-slate-500">Write and publish a new article</p>
              </Link>

              <Link
                href="/blog"
                className="block p-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
              >
                <h3 className="font-medium mb-1">View Blog</h3>
                <p className="text-sm text-slate-500">See how your blog looks to visitors</p>
              </Link>

              <Link
                href="/"
                className="block p-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
              >
                <h3 className="font-medium mb-1">Go to Homepage</h3>
                <p className="text-sm text-slate-500">View your website's homepage</p>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  )
}
