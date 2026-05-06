import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://tignezokdpaegechfkip.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRpZ25lem9rZHBhZWdlY2hma2lwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzgwNDcwMTUsImV4cCI6MjA5MzYyMzAxNX0.GljbVLkAFruMiYQOUxlYGPwiIu12yeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9oOlsJVruRDUIj8'

export const supabase = createClient(supabaseUrl, supabaseKey)
