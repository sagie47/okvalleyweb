import fs from "fs"
import path from "path"
import { v4 as uuidv4 } from "uuid"

// Define the blog post type
export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  coverImage: string
  author: {
    name: string
    avatar: string
  }
  category: string
  publishedAt: string
  updatedAt: string
  websiteUrl?: string
}

// Path to the JSON file that will store our blog posts
const DATA_FILE_PATH = path.join(process.cwd(), "data", "blog-posts.json")

// Ensure the data directory exists
function ensureDataDirectoryExists() {
  const dataDir = path.join(process.cwd(), "data")
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true })
  }
}

// Initialize the blog posts file if it doesn't exist
function initBlogPostsFile() {
  ensureDataDirectoryExists()
  if (!fs.existsSync(DATA_FILE_PATH)) {
    fs.writeFileSync(DATA_FILE_PATH, JSON.stringify([]))
  }
}

// Get all blog posts
export async function getAllBlogPosts(): Promise<BlogPost[]> {
  initBlogPostsFile()
  const data = fs.readFileSync(DATA_FILE_PATH, "utf8")
  return JSON.parse(data)
}

// Get a blog post by ID
export async function getBlogPostById(id: string): Promise<BlogPost | null> {
  const posts = await getAllBlogPosts()
  return posts.find((post) => post.id === id) || null
}

// Get a blog post by slug
export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const posts = await getAllBlogPosts()
  return posts.find((post) => post.slug === slug) || null
}

// Create a new blog post
export async function createBlogPost(postData: Omit<BlogPost, "id" | "publishedAt" | "updatedAt">): Promise<BlogPost> {
  const posts = await getAllBlogPosts()

  const newPost: BlogPost = {
    ...postData,
    id: uuidv4(),
    publishedAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }

  posts.push(newPost)
  fs.writeFileSync(DATA_FILE_PATH, JSON.stringify(posts, null, 2))

  return newPost
}

// Update an existing blog post
export async function updateBlogPost(
  id: string,
  postData: Partial<Omit<BlogPost, "id" | "publishedAt">>,
): Promise<BlogPost | null> {
  const posts = await getAllBlogPosts()
  const postIndex = posts.findIndex((post) => post.id === id)

  if (postIndex === -1) {
    return null
  }

  const updatedPost: BlogPost = {
    ...posts[postIndex],
    ...postData,
    updatedAt: new Date().toISOString(),
  }

  posts[postIndex] = updatedPost
  fs.writeFileSync(DATA_FILE_PATH, JSON.stringify(posts, null, 2))

  return updatedPost
}

// Delete a blog post
export async function deleteBlogPost(id: string): Promise<boolean> {
  const posts = await getAllBlogPosts()
  const filteredPosts = posts.filter((post) => post.id !== id)

  if (filteredPosts.length === posts.length) {
    return false
  }

  fs.writeFileSync(DATA_FILE_PATH, JSON.stringify(filteredPosts, null, 2))
  return true
}

// Generate a slug from a title
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim()
}

// Get recent blog posts
export async function getRecentBlogPosts(count = 3): Promise<BlogPost[]> {
  const posts = await getAllBlogPosts()
  return posts.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()).slice(0, count)
}

// Get blog posts by category
export async function getBlogPostsByCategory(category: string): Promise<BlogPost[]> {
  const posts = await getAllBlogPosts()
  return posts.filter((post) => post.category === category)
}
