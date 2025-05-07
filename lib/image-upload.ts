import fs from "fs"
import path from "path"
import { v4 as uuidv4 } from "uuid"

// In a real application, you would use a proper storage solution like AWS S3
// This is a simplified version for demonstration purposes

const UPLOADS_DIR = path.join(process.cwd(), "public", "uploads")

// Ensure the uploads directory exists
function ensureUploadsDirectoryExists() {
  if (!fs.existsSync(UPLOADS_DIR)) {
    fs.mkdirSync(UPLOADS_DIR, { recursive: true })
  }
}

export async function saveImage(file: File): Promise<string> {
  ensureUploadsDirectoryExists()

  const buffer = Buffer.from(await file.arrayBuffer())
  const filename = `${uuidv4()}-${file.name.replace(/\s+/g, "-")}`
  const filepath = path.join(UPLOADS_DIR, filename)

  fs.writeFileSync(filepath, buffer)

  // Return the public URL
  return `/uploads/${filename}`
}

export function deleteImage(url: string): boolean {
  if (!url.startsWith("/uploads/")) {
    return false
  }

  const filename = url.replace("/uploads/", "")
  const filepath = path.join(UPLOADS_DIR, filename)

  if (fs.existsSync(filepath)) {
    fs.unlinkSync(filepath)
    return true
  }

  return false
}
