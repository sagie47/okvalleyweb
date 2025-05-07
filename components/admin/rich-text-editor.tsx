"use client"

import type React from "react"

import { useState } from "react"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Bold, Italic, List, ListOrdered, LinkIcon, ImageIcon, Heading1, Heading2, Heading3, Quote } from "lucide-react"

interface RichTextEditorProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
}

export function RichTextEditor({ value, onChange, placeholder }: RichTextEditorProps) {
  const [selection, setSelection] = useState<{ start: number; end: number }>({ start: 0, end: 0 })

  // Track textarea selection
  function handleSelect(e: React.SyntheticEvent<HTMLTextAreaElement>) {
    const target = e.target as HTMLTextAreaElement
    setSelection({
      start: target.selectionStart,
      end: target.selectionEnd,
    })
  }

  // Insert markdown at current selection
  function insertMarkdown(before: string, after = "") {
    const newValue =
      value.substring(0, selection.start) +
      before +
      value.substring(selection.start, selection.end) +
      after +
      value.substring(selection.end)

    onChange(newValue)
  }

  // Format handlers
  const formatBold = () => insertMarkdown("**", "**")
  const formatItalic = () => insertMarkdown("*", "*")
  const formatUnorderedList = () => insertMarkdown("\n- ")
  const formatOrderedList = () => insertMarkdown("\n1. ")
  const formatH1 = () => insertMarkdown("# ")
  const formatH2 = () => insertMarkdown("## ")
  const formatH3 = () => insertMarkdown("### ")
  const formatQuote = () => insertMarkdown("> ")

  const formatLink = () => {
    const selectedText = value.substring(selection.start, selection.end)
    const linkText = selectedText || "link text"
    insertMarkdown(`[${linkText}](`, ")")
  }

  const formatImage = () => {
    const selectedText = value.substring(selection.start, selection.end)
    const altText = selectedText || "image description"
    insertMarkdown(`![${altText}](`, ")")
  }

  return (
    <div className="border border-slate-300 rounded-md overflow-hidden">
      <div className="bg-slate-50 p-2 border-b border-slate-300 flex flex-wrap gap-1">
        <Button type="button" variant="ghost" size="sm" onClick={formatBold} className="h-8 w-8 p-0">
          <Bold className="h-4 w-4" />
        </Button>
        <Button type="button" variant="ghost" size="sm" onClick={formatItalic} className="h-8 w-8 p-0">
          <Italic className="h-4 w-4" />
        </Button>
        <div className="h-8 w-px bg-slate-300 mx-1"></div>
        <Button type="button" variant="ghost" size="sm" onClick={formatH1} className="h-8 w-8 p-0">
          <Heading1 className="h-4 w-4" />
        </Button>
        <Button type="button" variant="ghost" size="sm" onClick={formatH2} className="h-8 w-8 p-0">
          <Heading2 className="h-4 w-4" />
        </Button>
        <Button type="button" variant="ghost" size="sm" onClick={formatH3} className="h-8 w-8 p-0">
          <Heading3 className="h-4 w-4" />
        </Button>
        <div className="h-8 w-px bg-slate-300 mx-1"></div>
        <Button type="button" variant="ghost" size="sm" onClick={formatUnorderedList} className="h-8 w-8 p-0">
          <List className="h-4 w-4" />
        </Button>
        <Button type="button" variant="ghost" size="sm" onClick={formatOrderedList} className="h-8 w-8 p-0">
          <ListOrdered className="h-4 w-4" />
        </Button>
        <Button type="button" variant="ghost" size="sm" onClick={formatQuote} className="h-8 w-8 p-0">
          <Quote className="h-4 w-4" />
        </Button>
        <div className="h-8 w-px bg-slate-300 mx-1"></div>
        <Button type="button" variant="ghost" size="sm" onClick={formatLink} className="h-8 w-8 p-0">
          <LinkIcon className="h-4 w-4" />
        </Button>
        <Button type="button" variant="ghost" size="sm" onClick={formatImage} className="h-8 w-8 p-0">
          <ImageIcon className="h-4 w-4" />
        </Button>
      </div>
      <Textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onSelect={handleSelect}
        placeholder={placeholder}
        className="min-h-[300px] border-0 rounded-none focus-visible:ring-0 focus-visible:ring-offset-0"
      />
    </div>
  )
}
