import { supabase } from '@/lib/supabase'
import { Message } from '@/types/supabase'

export const getMessages = async (): Promise<Message[]> => {
  const { data, error } = await supabase
    .from('messages')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error fetching messages:', error)
    return []
  }

  return data || []
}

export const getMessageById = async (id: string): Promise<Message | null> => {
  const { data, error } = await supabase
    .from('messages')
    .select('*')
    .eq('id', id)
    .single()

  if (error) {
    console.error(`Error fetching message with id ${id}:`, error)
    return null
  }

  return data
}

export const createMessage = async (message: Omit<Message, 'id' | 'created_at' | 'read'> & { user_id: string | null }): Promise<Message | null> => {
  const newMessage = {
    ...message,
    read: false
  }

  const { data, error } = await supabase
    .from('messages')
    .insert(newMessage)
    .select()
    .single()

  if (error) {
    console.error('Error creating message:', error)
    return null
  }

  return data
}

export const markMessageAsRead = async (id: string): Promise<Message | null> => {
  const { data, error } = await supabase
    .from('messages')
    .update({ read: true })
    .eq('id', id)
    .select()
    .single()

  if (error) {
    console.error(`Error marking message with id ${id} as read:`, error)
    return null
  }

  return data
}

export const deleteMessage = async (id: string): Promise<boolean> => {
  const { error } = await supabase
    .from('messages')
    .delete()
    .eq('id', id)

  if (error) {
    console.error(`Error deleting message with id ${id}:`, error)
    return false
  }

  return true
}
