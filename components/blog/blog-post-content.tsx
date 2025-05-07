"use client"

import { useEffect, useState } from "react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

interface BlogPostContentProps {
  content: string
}

export function BlogPostContent({ content }: BlogPostContentProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Only render the markdown on the client to avoid hydration issues
  if (!mounted) {
    return <div className="prose max-w-none">{content}</div>
  }

  return (
    <div className="prose max-w-none">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </div>
  )
}
