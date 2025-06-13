import type { Metadata } from "next"
import DashboardLayout from "@/components/dashboard/dashboard-layout"
import ProfileSettings from "@/components/dashboard/profile-settings"

export const metadata: Metadata = {
  title: "Profile Settings | MIH",
  description: "Manage your account settings and personal information",
}

// For static export, we're removing server-side authentication
export default function ProfilePage() {
  return (
    <DashboardLayout>
      <ProfileSettings />
    </DashboardLayout>
  )
}
