"use client"

import { useState, useEffect } from 'react'

export function useClientSession() {
  const [mounted, setMounted] = useState(false)
  const [sessionData, setSessionData] = useState<any>(null)
  const [sessionStatus, setSessionStatus] = useState<string>("unauthenticated")

  useEffect(() => {
    setMounted(true)
    
    // For static export, we don't try to fetch session data
    // Instead, we use mock data
    setSessionData(null)
    setSessionStatus("unauthenticated")
  }, [])

  return {
    session: sessionData,
    status: sessionStatus,
    isLoading: !mounted,
    isAuthenticated: false // Always false for static export
  }
}
