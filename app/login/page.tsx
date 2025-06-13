import type { Metadata } from "next"
import LoginForm from "@/components/auth/login-form"

export const metadata: Metadata = {
  title: "Login | MIH",
  description: "Login to your MIH account to manage your real estate investments",
}

// For static export, we're removing searchParams usage
export default function LoginPage() {
  // Static version doesn't use searchParams
  const isNewUser = false

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Access your dashboard and manage your real estate investments
          </p>
          {isNewUser && (
            <div className="mt-4 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded text-sm">
              Account created successfully! Please sign in with your credentials.
            </div>
          )}
        </div>
        <LoginForm />
      </div>
    </div>
  )
}
