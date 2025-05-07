import { type NextRequest, NextResponse } from "next/server"
import { login } from "@/lib/auth"

export async function POST(request: NextRequest) {
  const { username, password } = await request.json()

  const success = await login(username, password)

  if (success) {
    return NextResponse.json({ success: true })
  } else {
    return NextResponse.json({ success: false, message: "Invalid credentials" }, { status: 401 })
  }
}
