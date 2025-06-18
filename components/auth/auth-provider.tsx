"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { SessionProvider } from "next-auth/react"

// Create a mock session for static export
const mockSession = {
  data: null,
  status: "unauthenticated",
  expires: "2099-01-01T00:00:00.000Z"
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  // For static export, we need to make sure we're only rendering the SessionProvider on the client
  if (!isClient) {
    return <>{children}</>
  }

  return (
    <SessionProvider
      // For static export, we need to disable auto session fetching
      refetchInterval={0}
      refetchOnWindowFocus={false}
      refetchWhenOffline={false}
      session={mockSession}
    >
      {children}
    </SessionProvider>
  )
}
