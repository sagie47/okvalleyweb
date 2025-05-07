import { type NextRequest, NextResponse } from "next/server"
import { saveImage } from "@/lib/image-upload"
import { requireAuth } from "@/lib/auth"

export async function POST(request: NextRequest) {
  // Check authentication
  try {
    requireAuth()
  } catch (error) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const formData = await request.formData()
    const file = formData.get("file") as File

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 })
    }

    const url = await saveImage(file)

    return NextResponse.json({ url })
  } catch (error) {
    console.error("Error uploading file:", error)
    return NextResponse.json({ error: "Failed to upload file" }, { status: 500 })
  }
}
