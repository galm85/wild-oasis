import { createClient } from '@supabase/supabase-js'
export const supabaseUrl = 'https://jjhciejthaetolsdsgih.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpqaGNpZWp0aGFldG9sc2RzZ2loIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE4NzAxNzksImV4cCI6MjA1NzQ0NjE3OX0.9DbHDJGhYpyLBswrnJx-t_P_Btx7tAgU80QAY-Ocv3k'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;