"use client"

import { useSession } from "next-auth/react"
import Image from "next/image"
import Link from "next/link"
import { TrendingUp, DollarSign, Clock, ArrowRight } from "lucide-react"

export default function DashboardOverview() {
  const { data: session } = useSession()

  // Mock data for the dashboard
  const stats = [
    {
      name: "Total Invested",
      value: "₦25,000,000",
      icon: DollarSign,
      change: "+12.5%",
      trend: "up",
    },
    {
      name: "Active Investments",
      value: "3",
      icon: TrendingUp,
      change: "+1",
      trend: "up",
    },
    {
      name: "Returns to Date",
      value: "₦4,250,000",
      icon: DollarSign,
      change: "+8.2%",
      trend: "up",
    },
    {
      name: "Next Payout",
      value: "15 May, 2023",
      icon: Clock,
      change: "In 12 days",
      trend: "neutral",
    },
  ]

  const recentInvestments = [
    {
      id: 1,
      project: "MIH Heights",
      amount: "₦10,000,000",
      date: "12 Jan, 2023",
      status: "Active",
      roi: "20% p.a.",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 2,
      project: "MIH Towers",
      amount: "₦8,000,000",
      date: "05 Mar, 2023",
      status: "Active",
      roi: "18% p.a.",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 3,
      project: "MIH Gardens",
      amount: "₦7,000,000",
      date: "22 Apr, 2023",
      status: "Pending",
      roi: "22% p.a.",
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Welcome back, {session?.user?.name || "Investor"}!</h2>
        <p className="text-gray-600">
          Here's an overview of your investment portfolio and recent activities. Track your investments, monitor
          returns, and discover new opportunities.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-white shadow rounded-lg p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0 bg-orange-100 rounded-md p-3">
                <stat.icon className="h-6 w-6 text-orange-500" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">{stat.name}</dt>
                  <dd>
                    <div className="text-lg font-medium text-gray-900">{stat.value}</div>
                    <div
                      className={`text-sm ${stat.trend === "up" ? "text-green-600" : stat.trend === "down" ? "text-red-600" : "text-gray-500"}`}
                    >
                      {stat.change}
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="px-6 py-5 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">Recent Investments</h3>
        </div>
        <div className="divide-y divide-gray-200">
          {recentInvestments.map((investment) => (
            <div key={investment.id} className="px-6 py-4">
              <div className="flex items-center">
                <div className="flex-shrink-0 h-12 w-12 relative rounded-md overflow-hidden">
                  <Image
                    src={investment.image || "/placeholder.svg"}
                    alt={investment.project}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="ml-4 flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-medium text-gray-900">{investment.project}</h4>
                    <div
                      className={`px-2 py-1 text-xs rounded-full ${
                        investment.status === "Active"
                          ? "bg-green-100 text-green-800"
                          : investment.status === "Pending"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {investment.status}
                    </div>
                  </div>
                  <div className="mt-1 grid grid-cols-3 text-sm text-gray-500">
                    <div>
                      <span className="font-medium text-gray-900">{investment.amount}</span>
                    </div>
                    <div>
                      <span>ROI: {investment.roi}</span>
                    </div>
                    <div>
                      <span>Invested: {investment.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="px-6 py-4 border-t border-gray-200">
          <Link
            href="/dashboard/investments"
            className="text-sm font-medium text-orange-500 hover:text-orange-600 flex items-center"
          >
            View all investments
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Investment Performance</h3>
          <div className="h-64 flex items-center justify-center bg-gray-50 rounded-md">
            <p className="text-gray-500">Performance chart will be displayed here</p>
          </div>
        </div>
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Recommended Projects</h3>
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="flex-shrink-0 h-10 w-10 relative rounded-md overflow-hidden">
                <Image src="/placeholder.svg?height=40&width=40" alt="MIH Plaza" fill className="object-cover" />
              </div>
              <div className="ml-4 flex-1">
                <h4 className="text-sm font-medium text-gray-900">MIH Plaza</h4>
                <p className="text-sm text-gray-500">19% ROI • Commercial</p>
              </div>
              <Link href="/projects/4" className="text-orange-500 hover:text-orange-600">
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
            <div className="flex items-center">
              <div className="flex-shrink-0 h-10 w-10 relative rounded-md overflow-hidden">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  alt="MIH Business Park"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="ml-4 flex-1">
                <h4 className="text-sm font-medium text-gray-900">MIH Business Park</h4>
                <p className="text-sm text-gray-500">21% ROI • Commercial</p>
              </div>
              <Link href="/projects/6" className="text-orange-500 hover:text-orange-600">
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-200">
            <Link
              href="/projects"
              className="text-sm font-medium text-orange-500 hover:text-orange-600 flex items-center"
            >
              Explore all projects
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
