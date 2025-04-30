import type { Metadata } from "next"
import { getServerSession } from "next-auth/next"
import { redirect } from "next/navigation"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import DashboardLayout from "@/components/dashboard/dashboard-layout"
import InvestmentsList from "@/components/dashboard/investments-list"

export const metadata: Metadata = {
  title: "My Investments | MIH",
  description: "View and manage your real estate investment portfolio",
}

export default async function InvestmentsPage() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect("/login")
  }

  return (
    <DashboardLayout>
      <InvestmentsList />
    </DashboardLayout>
  )
}
