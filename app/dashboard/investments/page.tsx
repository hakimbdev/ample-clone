import type { Metadata } from "next"
import DashboardLayout from "@/components/dashboard/dashboard-layout"
import InvestmentsList from "@/components/dashboard/investments-list"

export const metadata: Metadata = {
  title: "My Investments | MIH",
  description: "View and manage your real estate investment portfolio",
}

// For static export, we're removing server-side authentication
export default function InvestmentsPage() {
  return (
    <DashboardLayout>
      <InvestmentsList />
    </DashboardLayout>
  )
}
