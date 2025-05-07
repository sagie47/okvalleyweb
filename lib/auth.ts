import { cookies } from "next/headers"
import { redirect } from "next/navigation"

// In a real application, you would use a proper authentication system
// This is a simplified version for demonstration purposes

const ADMIN_USERNAME = "admin"
const ADMIN_PASSWORD = "password123" // In a real app, use hashed passwords
const AUTH_COOKIE = "admin_auth"

export async function login(username: string, password: string) {
  if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
    // Set a cookie to maintain the session
    cookies().set({
      name: AUTH_COOKIE,
      value: "authenticated",
      httpOnly: true,
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 1 week
    })
    return true
  }
  return false
}

export async function logout() {
  cookies().delete(AUTH_COOKIE)
}

export function isAuthenticated() {
  const cookieStore = cookies()
  return cookieStore.get(AUTH_COOKIE)?.value === "authenticated"
}

export function requireAuth() {
  if (!isAuthenticated()) {
    redirect("/admin/login")
  }
}
