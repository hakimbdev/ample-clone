'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { Session, User } from '@supabase/supabase-js'
import { supabase } from '@/lib/supabase'

type SupabaseContextType = {
  user: User | null
  session: Session | null
  isLoading: boolean
  signIn: (email: string, password: string) => Promise<any>
  signUp: (email: string, password: string, name: string) => Promise<any>
  signOut: () => Promise<any>
}

const SupabaseContext = createContext<SupabaseContextType | undefined>(undefined)

export function SupabaseProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [session, setSession] = useState<Session | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const setData = async () => {
      const { data: { session }, error } = await supabase.auth.getSession()
      if (error) {
        console.error(error)
      }
      
      setSession(session)
      setUser(session?.user ?? null)
      setIsLoading(false)
    }

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
      setUser(session?.user ?? null)
      setIsLoading(false)
    })

    setData()

    return () => {
      subscription.unsubscribe()
    }
  }, [])

  const signIn = async (email: string, password: string) => {
    return supabase.auth.signInWithPassword({ email, password })
  }

  const signUp = async (email: string, password: string, name: string) => {
    const { data, error } = await supabase.auth.signUp({ 
      email, 
      password,
      options: {
        data: { name }
      }
    })
    
    if (!error && data.user) {
      // Create a profile record
      await supabase.from('profiles').insert({
        id: data.user.id,
        name,
        email
      })
    }
    
    return { data, error }
  }

  const signOut = async () => {
    return supabase.auth.signOut()
  }

  const value = {
    user,
    session,
    isLoading,
    signIn,
    signUp,
    signOut
  }

  return (
    <SupabaseContext.Provider value={value}>
      {children}
    </SupabaseContext.Provider>
  )
}

export const useSupabase = () => {
  const context = useContext(SupabaseContext)
  if (context === undefined) {
    throw new Error('useSupabase must be used within a SupabaseProvider')
  }
  return context
}
