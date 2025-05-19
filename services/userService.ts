import { supabase } from '@/lib/supabase'
import { User } from '@/types/supabase'

export const getUserProfile = async (userId: string): Promise<User | null> => {
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .single()
  
  if (error) {
    console.error(`Error fetching user profile with id ${userId}:`, error)
    return null
  }
  
  return data
}

export const updateUserProfile = async (userId: string, profile: Partial<User>): Promise<User | null> => {
  const { data, error } = await supabase
    .from('profiles')
    .update(profile)
    .eq('id', userId)
    .select()
    .single()
  
  if (error) {
    console.error(`Error updating user profile with id ${userId}:`, error)
    return null
  }
  
  return data
}

export const uploadAvatar = async (userId: string, file: File): Promise<string | null> => {
  const fileExt = file.name.split('.').pop()
  const fileName = `${userId}-${Math.random()}.${fileExt}`
  const filePath = `avatars/${fileName}`
  
  const { error } = await supabase.storage
    .from('user-content')
    .upload(filePath, file)
  
  if (error) {
    console.error('Error uploading avatar:', error)
    return null
  }
  
  const { data } = supabase.storage
    .from('user-content')
    .getPublicUrl(filePath)
  
  // Update the user profile with the new avatar URL
  await updateUserProfile(userId, { avatar_url: data.publicUrl })
  
  return data.publicUrl
}
