"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { LayoutDashboard, PieChart, Building, Bell, Menu, X, ChevronDown } from "lucide-react"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  // Mock user data for static export
  const mockUser = {
    name: "Demo User",
    image: "/placeholder.svg?height=32&width=32"
  }

  const pathname = usePathname()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const navigation = [
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "My Investments", href: "/dashboard/investments", icon: PieChart },
    { name: "Available Projects", href: "/projects", icon: Building },
  ]

  const userNavigation = [
    { name: "Your Profile", href: "/dashboard/profile" },
    { name: "Settings", href: "/dashboard/settings" },
  ]

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Mobile sidebar */}
      <div
        className={`fixed inset-0 z-50 bg-gray-900 bg-opacity-50 transition-opacity lg:hidden ${
          sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setSidebarOpen(false)}
      />

      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform lg:hidden ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200">
          <Link href="/" className="flex items-center">
            <span className="text-sm font-bold">
              Mams Innovative Homes
            </span>
          </Link>
          <button
            className="text-gray-500 hover:text-gray-600"
            onClick={() => setSidebarOpen(false)}
            aria-label="Close sidebar"
          >
            <X size={24} />
          </button>
        </div>
        <nav className="flex-1 px-2 py-4 space-y-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center px-4 py-2 text-sm font-medium rounded-md ${
                pathname === item.href
                  ? "bg-orange-50 text-orange-500"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              }`}
            >
              <item.icon className="mr-3 h-5 w-5" />
              {item.name}
            </Link>
          ))}
        </nav>
      </div>

      {/* Desktop sidebar */}
      <div className="hidden lg:flex lg:flex-col lg:w-64 lg:fixed lg:inset-y-0 lg:border-r lg:border-gray-200 lg:bg-white">
        <div className="flex items-center h-16 px-4 border-b border-gray-200">
          <Link href="/" className="flex items-center">
            <span className="text-sm font-bold">
              Mams Innovative Homes
            </span>
          </Link>
        </div>
        <div className="flex flex-col flex-grow overflow-y-auto">
          <nav className="flex-1 px-2 py-4 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center px-4 py-2 text-sm font-medium rounded-md ${
                  pathname === item.href
                    ? "bg-orange-50 text-orange-500"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                }`}
              >
                <item.icon className="mr-3 h-5 w-5" />
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Main content */}
      <div className="lg:pl-64">
        <div className="sticky top-0 z-10 flex items-center justify-between h-16 px-4 bg-white border-b border-gray-200 sm:px-6 lg:px-8">
          <button
            className="lg:hidden text-gray-500 hover:text-gray-600"
            onClick={() => setSidebarOpen(true)}
            aria-label="Open sidebar"
          >
            <Menu size={24} />
          </button>

          <div className="flex items-center space-x-4">
            <button className="text-gray-500 hover:text-gray-600" aria-label="Notifications">
              <Bell size={20} />
            </button>

            <div className="relative">
              <div className="flex items-center space-x-3">
                <div className="relative h-8 w-8 rounded-full overflow-hidden">
                  <Image
                    src={mockUser.image}
                    alt={mockUser.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="hidden md:block text-sm font-medium text-gray-700">
                  {mockUser.name}
                </span>
                <ChevronDown size={16} className="text-gray-500" />
              </div>

              {/* Dropdown menu would go here */}
            </div>
          </div>
        </div>

        <main className="py-6 px-4 sm:px-6 lg:px-8">{children}</main>
      </div>
    </div>
  )
}
