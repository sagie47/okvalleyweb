import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import type { BlogPost } from "@/lib/blog"

interface BlogPostCardProps {
  post: BlogPost
}

export function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <div className="group">
      <div className="bg-white overflow-hidden rounded-xl transition-all duration-300 hover:shadow-xl h-full flex flex-col">
        <div className="relative overflow-hidden">
          <Image
            src={post.coverImage || "/placeholder.svg?height=400&width=600"}
            width={600}
            height={400}
            alt={post.title}
            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
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
                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>
            </div>
          </div>
          <h3 className="text-xl font-heading tracking-tight mb-3">{post.title}</h3>
          <p className="text-slate-600 mb-6 flex-grow">{post.excerpt}</p>
          <Link href={`/blog/${post.slug}`} className="inline-flex items-center text-black hover:underline mt-auto">
            Read more
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
