export type User = {
  id: string;
  email: string;
  name?: string;
  avatar_url?: string;
  created_at: string;
}

export type Property = {
  id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  image_url: string;
  created_at: string;
  user_id: string;
}

export type Investment = {
  id: string;
  property_id: string;
  user_id: string;
  amount: number;
  status: 'pending' | 'active' | 'completed';
  created_at: string;
  return_rate: number;
}

export type Message = {
  id: string;
  user_id: string | null;
  name: string;
  email: string;
  subject: string;
  message: string;
  created_at: string;
  read: boolean;
}
