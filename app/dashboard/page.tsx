import type { Metadata } from "next"
import DashboardLayout from "@/components/dashboard/dashboard-layout"
import DashboardOverview from "@/components/dashboard/dashboard-overview"

export const metadata: Metadata = {
  title: "Dashboard | MIH",
  description: "Manage your real estate investments and track your portfolio performance",
}

// For static export, we're removing server-side authentication
export default function DashboardPage() {
  return (
    <DashboardLayout>
      <DashboardOverview />
    </DashboardLayout>
  )
}
