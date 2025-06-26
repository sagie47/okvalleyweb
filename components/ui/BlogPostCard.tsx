"use client"

import Image from "next/image"
import Link from "next/link"
import React from "react"

interface BlogPostCardProps {
  id: string
  title: string
  excerpt: string
  coverImage?: string
  category: string
  author: {
    name: string
    avatar?: string
  }
  publishedAt: string
  slug: string
  websiteUrl?: string
}

export function BlogPostCard({
  id,
  title,
  excerpt,
  coverImage,
  category,
  author,
  publishedAt,
  slug,
  websiteUrl,
}: BlogPostCardProps) {
  const handleClick = () => {
    if (websiteUrl) {
      window.open(websiteUrl, "_blank")
    }
  }

  return (
    <div
      key={id}
      onClick={handleClick}
      className="group cursor-pointer bg-white overflow-hidden rounded-3xl shadow-md hover:shadow-xl transition-shadow duration-300 h-full flex flex-col"
    >
      <div className="relative overflow-hidden rounded-t-3xl">
        <Image
          src={coverImage || "/placeholder.svg?height=400&width=600"}
          width={600}
          height={400}
          alt={title}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-black text-white">
            {category}
          </span>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow rounded-b-3xl">
        <div className="flex items-center mb-4">
          <div className="h-8 w-8 rounded-full overflow-hidden mr-3">
            <Image
              src={author.avatar || "/placeholder.svg?height=32&width=32"}
              width={32}
              height={32}
              alt={author.name}
              className="h-8 w-8 object-cover"
            />
          </div>
          <div>
            <p className="text-sm font-medium">{author.name}</p>
            <p className="text-xs text-gray-500">{new Date(publishedAt).toLocaleDateString()}</p>
          </div>
        </div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-600 mb-6 flex-grow">{excerpt}</p>
        <Link
          href={`/blog/${slug}`}
          className="inline-flex items-center text-black hover:underline mt-auto"
        >
          Read more
          <svg
            className="ml-2 h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  )
}
