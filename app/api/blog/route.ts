import { type NextRequest, NextResponse } from "next/server"
import { createBlogPost, getAllBlogPosts } from "@/lib/blog"
import { requireAuth } from "@/lib/auth"

export async function GET() {
  const posts = await getAllBlogPosts()
  return NextResponse.json(posts)
}

export async function POST(request: NextRequest) {
  // Check authentication
  try {
    requireAuth()
  } catch (error) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const postData = await request.json()
  const newPost = await createBlogPost(postData)

  return NextResponse.json(newPost, { status: 201 })
}
