"use client"

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'

export function useClientSession() {
  const [mounted, setMounted] = useState(false)
  const [sessionData, setSessionData] = useState<any>(null)
  const [sessionStatus, setSessionStatus] = useState<string>("loading")

  useEffect(() => {
    setMounted(true)
    
    try {
      const { data, status } = useSession()
      setSessionData(data)
      setSessionStatus(status)
    } catch (error) {
      console.log("Session not available")
      setSessionStatus("unauthenticated")
    }
  }, [])

  return {
    session: sessionData,
    status: sessionStatus,
    isLoading: !mounted || sessionStatus === "loading",
    isAuthenticated: mounted && sessionStatus === "authenticated"
  }
}
