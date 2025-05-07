"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { LayoutDashboard, FileText, Users, Settings, LogOut, Menu, X } from "lucide-react"

interface AdminLayoutProps {
  children: React.ReactNode
}

export function AdminLayout({ children }: AdminLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  async function handleLogout() {
    try {
      await fetch("/api/auth/logout", { method: "POST" })
      router.push("/admin/login")
      router.refresh()
    } catch (error) {
      console.error("Logout failed", error)
    }
  }

  const navigation = [
    { name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
    { name: "Blog Posts", href: "/admin/blog", icon: FileText },
    { name: "Authors", href: "/admin/authors", icon: Users },
    { name: "Settings", href: "/admin/settings", icon: Settings },
  ]

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Mobile sidebar toggle */}
      <div className="lg:hidden fixed top-0 left-0 w-full bg-white z-50 px-4 py-3 flex items-center justify-between border-b">
        <Link href="/admin/dashboard" className="font-heading text-xl">
          Admin Panel
        </Link>
        <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(!sidebarOpen)}>
          {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-white border-r transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 transition-transform duration-200 ease-in-out`}
      >
        <div className="h-16 flex items-center px-6 border-b lg:h-20">
          <Link href="/admin/dashboard" className="font-heading text-xl">
            Admin Panel
          </Link>
        </div>

        <nav className="mt-6 px-4 space-y-1">
          {navigation.map((item) => {
            const isActive = pathname === item.href || pathname?.startsWith(`${item.href}/`)

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center px-3 py-3 text-sm rounded-md ${
                  isActive ? "bg-slate-100 text-black font-medium" : "text-slate-600 hover:bg-slate-50 hover:text-black"
                }`}
              >
                <item.icon className="h-5 w-5 mr-3" />
                {item.name}
              </Link>
            )
          })}
        </nav>

        <div className="absolute bottom-0 w-full p-4 border-t">
          <Button
            variant="ghost"
            className="w-full justify-start text-slate-600 hover:text-black hover:bg-slate-50"
            onClick={handleLogout}
          >
            <LogOut className="h-5 w-5 mr-3" />
            Log out
          </Button>
        </div>
      </div>

      {/* Main content */}
      <div className="lg:pl-64">
        <div className="pt-16 lg:pt-0">
          <main className="p-6 lg:p-8">{children}</main>
        </div>
      </div>

      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}
    </div>
  )
}
