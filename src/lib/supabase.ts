import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    'Missing Supabase environment variables. Please check your .env.local file and ensure NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY are set.'
  )
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Test connection function
export async function testConnection() {
  try {
    const { data, error } = await supabase.from('_test_').select('*').limit(1)
    if (error && error.code === '42P01') {
      // Table doesn't exist, but connection works
      return { success: true, message: 'Connected to Supabase successfully!' }
    }
    if (error) {
      return { success: false, message: `Connection error: ${error.message}` }
    }
    return { success: true, message: 'Connected to Supabase successfully!', data }
  } catch (err) {
    return { success: false, message: `Connection failed: ${err}` }
  }
}

// Helper function to create initial tables
export async function createInitialTables() {
  // Note: For production, use migrations instead
  // This is just for quick setup
  
  const tables = [
    {
      name: 'profiles',
      sql: `
        CREATE TABLE IF NOT EXISTS profiles (
          id UUID REFERENCES auth.users(id) PRIMARY KEY,
          email TEXT UNIQUE,
          full_name TEXT,
          avatar_url TEXT,
          created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
          updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
        );
      `
    },
    {
      name: 'pages',
      sql: `
        CREATE TABLE IF NOT EXISTS pages (
          id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
          slug TEXT UNIQUE NOT NULL,
          title TEXT NOT NULL,
          content JSONB,
          meta_description TEXT,
          published BOOLEAN DEFAULT false,
          created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
          updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
        );
      `
    },
    {
      name: 'blog_posts',
      sql: `
        CREATE TABLE IF NOT EXISTS blog_posts (
          id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
          slug TEXT UNIQUE NOT NULL,
          title TEXT NOT NULL,
          excerpt TEXT,
          content TEXT,
          author_id UUID REFERENCES profiles(id),
          featured_image TEXT,
          published BOOLEAN DEFAULT false,
          published_at TIMESTAMP WITH TIME ZONE,
          created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
          updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
        );
      `
    },
    {
      name: 'inquiries',
      sql: `
        CREATE TABLE IF NOT EXISTS inquiries (
          id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
          name TEXT NOT NULL,
          email TEXT NOT NULL,
          phone TEXT,
          company TEXT,
          message TEXT NOT NULL,
          source TEXT,
          status TEXT DEFAULT 'new',
          created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
        );
      `
    }
  ]
  
  const results = []
  for (const table of tables) {
    try {
      // Note: Direct SQL execution requires service role key
      // For now, we'll just return the SQL for manual execution
      results.push({
        table: table.name,
        status: 'SQL generated',
        sql: table.sql
      })
    } catch (error) {
      results.push({
        table: table.name,
        status: 'error',
        error: error
      })
    }
  }
  
  return results
}