import { type NextRequest, NextResponse } from "next/server"
import { getBlogPostById, updateBlogPost, deleteBlogPost } from "@/lib/blog"
import { requireAuth } from "@/lib/auth"

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  const post = await getBlogPostById(params.id)

  if (!post) {
    return NextResponse.json({ error: "Blog post not found" }, { status: 404 })
  }

  return NextResponse.json(post)
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  // Check authentication
  try {
    requireAuth()
  } catch (error) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const postData = await request.json()
  const updatedPost = await updateBlogPost(params.id, postData)

  if (!updatedPost) {
    return NextResponse.json({ error: "Blog post not found" }, { status: 404 })
  }

  return NextResponse.json(updatedPost)
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  // Check authentication
  try {
    requireAuth()
  } catch (error) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const success = await deleteBlogPost(params.id)

  if (!success) {
    return NextResponse.json({ error: "Blog post not found" }, { status: 404 })
  }

  return NextResponse.json({ success: true })
}
