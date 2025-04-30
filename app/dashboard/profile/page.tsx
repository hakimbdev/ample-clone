import type { Metadata } from "next"
import { getServerSession } from "next-auth/next"
import { redirect } from "next/navigation"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import DashboardLayout from "@/components/dashboard/dashboard-layout"
import ProfileSettings from "@/components/dashboard/profile-settings"

export const metadata: Metadata = {
  title: "Profile Settings | MIH",
  description: "Manage your account settings and personal information",
}

export default async function ProfilePage() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect("/login")
  }

  return (
    <DashboardLayout>
      <ProfileSettings />
    </DashboardLayout>
  )
}
