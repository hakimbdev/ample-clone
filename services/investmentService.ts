import { supabase } from '@/lib/supabase'
import { Investment } from '@/types/supabase'

export const getUserInvestments = async (userId: string): Promise<Investment[]> => {
  const { data, error } = await supabase
    .from('investments')
    .select('*, properties(*)')
    .eq('user_id', userId)
    .order('created_at', { ascending: false })
  
  if (error) {
    console.error('Error fetching user investments:', error)
    return []
  }
  
  return data || []
}

export const getInvestmentById = async (id: string): Promise<Investment | null> => {
  const { data, error } = await supabase
    .from('investments')
    .select('*, properties(*)')
    .eq('id', id)
    .single()
  
  if (error) {
    console.error(`Error fetching investment with id ${id}:`, error)
    return null
  }
  
  return data
}

export const createInvestment = async (investment: Omit<Investment, 'id' | 'created_at'>): Promise<Investment | null> => {
  const { data, error } = await supabase
    .from('investments')
    .insert(investment)
    .select()
    .single()
  
  if (error) {
    console.error('Error creating investment:', error)
    return null
  }
  
  return data
}

export const updateInvestment = async (id: string, investment: Partial<Investment>): Promise<Investment | null> => {
  const { data, error } = await supabase
    .from('investments')
    .update(investment)
    .eq('id', id)
    .select()
    .single()
  
  if (error) {
    console.error(`Error updating investment with id ${id}:`, error)
    return null
  }
  
  return data
}

export const deleteInvestment = async (id: string): Promise<boolean> => {
  const { error } = await supabase
    .from('investments')
    .delete()
    .eq('id', id)
  
  if (error) {
    console.error(`Error deleting investment with id ${id}:`, error)
    return false
  }
  
  return true
}
