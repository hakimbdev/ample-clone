import type React from "react"
import type { Metadata } from "next/types"
import { Inter } from "next/font/google"
import "./globals.css"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import HeaderWrapper from "@/components/header-wrapper"
// import { SupabaseProvider } from "@/context/SupabaseProvider"
import { AuthProvider } from "@/components/auth/auth-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Mams Innovative Homes",
  description: "We create real estate investment opportunities that delivers great value and returns",
  generator: 'v0.dev',
  icons: {
    icon: {
      url: "https://res.cloudinary.com/dc5qncppu/image/upload/v1746365276/Happy_New_Year.png_pags3x.png",
      sizes: "any",
      type: "image/png",
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <HeaderWrapper />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
        </AuthProvider>
      </body>
    </html>
  )
}
