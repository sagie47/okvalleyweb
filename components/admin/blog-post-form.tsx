"use client"

import type React from "react"

import { useState, useRef } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertCircle, Upload, X, ImageIcon } from "lucide-react"
import Image from "next/image"
import type { BlogPost } from "@/lib/blog"
import { generateSlug } from "@/lib/slug"
import { RichTextEditor } from "@/components/admin/rich-text-editor"

interface BlogPostFormProps {
  post?: BlogPost
}

export function BlogPostForm({ post }: BlogPostFormProps) {
  const router = useRouter()
  const fileInputRef = useRef<HTMLInputElement>(null)

  const [title, setTitle] = useState(post?.title || "")
  const [slug, setSlug] = useState(post?.slug || "")
  const [excerpt, setExcerpt] = useState(post?.excerpt || "")
  const [content, setContent] = useState(post?.content || "")
  const [category, setCategory] = useState(post?.category || "")
  const [coverImage, setCoverImage] = useState(post?.coverImage || "")
  const [authorName, setAuthorName] = useState(post?.author.name || "")
  const [authorAvatar, setAuthorAvatar] = useState(post?.author.avatar || "")

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState("")
  const [isUploading, setIsUploading] = useState(false)
  const [isAvatarUploading, setIsAvatarUploading] = useState(false)

  // Generate slug from title
  function handleTitleChange(value: string) {
    setTitle(value)
    if (!post) {
      // Only auto-generate slug for new posts
      setSlug(generateSlug(value))
    }
  }

  // Handle cover image upload
  async function handleImageUpload(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0]
    if (!file) return

    setIsUploading(true)

    try {
      const formData = new FormData()
      formData.append("file", file)

      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      })

      if (!response.ok) {
        throw new Error("Failed to upload image")
      }

      const data = await response.json()
      setCoverImage(data.url)
    } catch (err) {
      console.error("Error uploading image:", err)
      setError("Failed to upload image. Please try again.")
    } finally {
      setIsUploading(false)
    }
  }

  // Handle author avatar upload
  async function handleAvatarUpload(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0]
    if (!file) return

    setIsAvatarUploading(true)

    try {
      const formData = new FormData()
      formData.append("file", file)

      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      })

      if (!response.ok) {
        throw new Error("Failed to upload avatar")
      }

      const data = await response.json()
      setAuthorAvatar(data.url)
    } catch (err) {
      console.error("Error uploading avatar:", err)
      setError("Failed to upload avatar. Please try again.")
    } finally {
      setIsAvatarUploading(false)
    }
  }

  // Handle form submission
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    // Validate form
    if (!title || !slug || !excerpt || !content || !category || !authorName) {
      setError("Please fill in all required fields")
      setIsSubmitting(false)
      return
    }

    try {
      const postData = {
        title,
        slug,
        excerpt,
        content,
        category,
        coverImage: coverImage || "/placeholder.svg?height=600&width=1200",
        author: {
          name: authorName,
          avatar: authorAvatar || "/placeholder.svg?height=100&width=100",
        },
      }

      const url = post ? `/api/blog/${post.id}` : "/api/blog"

      const method = post ? "PUT" : "POST"

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      })

      if (!response.ok) {
        throw new Error("Failed to save blog post")
      }

      router.push("/admin/blog")
      router.refresh()
    } catch (err) {
      console.error("Error saving blog post:", err)
      setError("Failed to save blog post. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Hidden file input always mounted for Change button */}
      <input
        id="file-upload"
        type="file"
        className="sr-only"
        ref={fileInputRef}
        onChange={handleImageUpload}
        accept="image/*"
        disabled={isUploading}
      />
      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-8">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                value={title}
                onChange={(e) => handleTitleChange(e.target.value)}
                placeholder="Enter post title"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="slug">Slug</Label>
              <Input
                id="slug"
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                placeholder="enter-post-slug"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="excerpt">Excerpt</Label>
              <Textarea
                id="excerpt"
                value={excerpt}
                onChange={(e) => setExcerpt(e.target.value)}
                placeholder="Brief summary of the post"
                rows={3}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="content">Content</Label>
              <RichTextEditor
                value={content}
                onChange={setContent}
                placeholder="Write your blog post content here..."
              />
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Cover Image</Label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed border-slate-300 rounded-md">
                    {coverImage ? (
                      <div className="space-y-2">
                        <div className="relative w-full h-40">
                          <Image
                            src={coverImage || "/placeholder.svg"}
                            alt="Cover image"
                            fill
                            className="object-cover rounded-md"
                          />
                        </div>
                        <div className="flex justify-center space-x-2">
                          <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            onClick={() => fileInputRef.current?.click()}
                            disabled={isUploading}
                          >
                            Change
                          </Button>
                          <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            onClick={() => setCoverImage("")}
                            disabled={isUploading}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-1 text-center">
                        <div className="flex justify-center">
                          <ImageIcon className="h-12 w-12 text-slate-400" />
                        </div>
                        <div className="flex text-sm text-slate-600">
                          <label
                            htmlFor="file-upload"
                            className="relative cursor-pointer rounded-md font-medium text-black hover:text-slate-700 focus-within:outline-none"
                          >
                            <span>Upload a file</span>
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-slate-500">PNG, JPG, GIF up to 10MB</p>
                        {isUploading && <div className="mt-2 text-sm text-slate-500">Uploading...</div>}
                      </div>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select value={category} onValueChange={setCategory}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Web Development">Web Development</SelectItem>
                      <SelectItem value="SEO">SEO</SelectItem>
                      <SelectItem value="Google Ads">Google Ads</SelectItem>
                      <SelectItem value="AI Solutions">AI Solutions</SelectItem>
                      <SelectItem value="Case Study">Case Study</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="author-name">Author Name</Label>
                  <Input
                    id="author-name"
                    value={authorName}
                    onChange={(e) => setAuthorName(e.target.value)}
                    placeholder="Author name"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label>Author Avatar</Label>
                  <div className="flex items-center space-x-4">
                    <div className="relative h-12 w-12 rounded-full overflow-hidden bg-slate-100">
                      {authorAvatar && (
                        <Image
                          src={authorAvatar || "/placeholder.svg"}
                          alt="Author avatar"
                          fill
                          className="object-cover"
                        />
                      )}
                    </div>
                    <div>
                      <input
                        type="file"
                        className="sr-only"
                        id="avatar-upload"
                        onChange={handleAvatarUpload}
                        accept="image/*"
                        disabled={isAvatarUploading}
                      />
                      <label
                        htmlFor="avatar-upload"
                        className="inline-flex items-center px-3 py-2 border border-slate-300 shadow-sm text-sm font-medium rounded-md text-slate-700 bg-white hover:bg-slate-50 focus:outline-none cursor-pointer"
                      >
                        <Upload className="h-4 w-4 mr-2" />
                        {authorAvatar ? "Change" : "Upload"}
                      </label>
                      {isAvatarUploading && <div className="mt-1 text-sm text-slate-500">Uploading...</div>}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-end space-x-4">
            <Button type="button" variant="outline" onClick={() => router.push("/admin/blog")} disabled={isSubmitting}>
              Cancel
            </Button>
            <Button type="submit" className="bg-black hover:bg-slate-800 text-white" disabled={isSubmitting}>
              {isSubmitting ? "Saving..." : post ? "Update Post" : "Publish Post"}
            </Button>
          </div>
        </div>
      </div>
    </form>
  )
}
