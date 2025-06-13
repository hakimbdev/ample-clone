import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://gkcxqgslcbaspnkkzigu.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdrY3hxZ3NsY2Jhc3Bua2t6aWd1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzkwMDY2MjAsImV4cCI6MjA1NDU4MjYyMH0.kKlH0yFKJJB5dNdCHd-aoN3KpHsVbNd2baYcu-4lbrU'

export const supabase = createClient(supabaseUrl, supabaseKey)
