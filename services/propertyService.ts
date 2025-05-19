import { supabase } from '@/lib/supabase'
import { Property } from '@/types/supabase'

export const getProperties = async (): Promise<Property[]> => {
  const { data, error } = await supabase
    .from('properties')
    .select('*')
    .order('created_at', { ascending: false })
  
  if (error) {
    console.error('Error fetching properties:', error)
    return []
  }
  
  return data || []
}

export const getPropertyById = async (id: string): Promise<Property | null> => {
  const { data, error } = await supabase
    .from('properties')
    .select('*')
    .eq('id', id)
    .single()
  
  if (error) {
    console.error(`Error fetching property with id ${id}:`, error)
    return null
  }
  
  return data
}

export const createProperty = async (property: Omit<Property, 'id' | 'created_at'>): Promise<Property | null> => {
  const { data, error } = await supabase
    .from('properties')
    .insert(property)
    .select()
    .single()
  
  if (error) {
    console.error('Error creating property:', error)
    return null
  }
  
  return data
}

export const updateProperty = async (id: string, property: Partial<Property>): Promise<Property | null> => {
  const { data, error } = await supabase
    .from('properties')
    .update(property)
    .eq('id', id)
    .select()
    .single()
  
  if (error) {
    console.error(`Error updating property with id ${id}:`, error)
    return null
  }
  
  return data
}

export const deleteProperty = async (id: string): Promise<boolean> => {
  const { error } = await supabase
    .from('properties')
    .delete()
    .eq('id', id)
  
  if (error) {
    console.error(`Error deleting property with id ${id}:`, error)
    return false
  }
  
  return true
}
