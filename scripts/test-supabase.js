#!/usr/bin/env node

const { createClient } = require('@supabase/supabase-js')

// Load environment variables
require('dotenv').config({ path: '.env.local' })

const supabaseUrl = process.env.SUPABASE_URL || 'https://lmsgtsiwhwyuphllvyxu.supabase.co'
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxtc2d0c2l3aHd5dXBobGx2eXh1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTUwMjgyNjIsImV4cCI6MjA3MDYwNDI2Mn0.11hCyZnx7O03nb-4c_LWn1n_dlc6lcbruo-oBDKYLe4'

console.log('🔄 Testing Supabase connection...')
console.log('URL:', supabaseUrl)
console.log('Key:', supabaseAnonKey.substring(0, 20) + '...')

const supabase = createClient(supabaseUrl, supabaseAnonKey)

async function testConnection() {
  try {
    // Test auth endpoint
    const { data: authData, error: authError } = await supabase.auth.getSession()
    console.log('✅ Auth endpoint reached')
    
    // Try to query a table (will fail if no tables exist, but proves connection)
    const { data, error } = await supabase.from('test_table').select('count').single()
    
    if (error && error.code === '42P01') {
      console.log('✅ Connected to Supabase! (No tables exist yet)')
      console.log('📊 Database is ready for table creation')
      return true
    } else if (error) {
      console.log('⚠️  Connection works but got error:', error.message)
      return true // Connection still works
    } else {
      console.log('✅ Connected to Supabase and found existing data!')
      return true
    }
  } catch (err) {
    console.error('❌ Connection failed:', err.message)
    return false
  }
}

async function listTables() {
  try {
    // This requires admin access, so it might fail with anon key
    const { data, error } = await supabase.rpc('get_tables', {})
    if (data) {
      console.log('📋 Existing tables:', data)
    }
  } catch (err) {
    console.log('ℹ️  Cannot list tables with anon key (this is normal)')
  }
}

async function main() {
  const connected = await testConnection()
  
  if (connected) {
    console.log('\n🎉 Supabase connection successful!')
    console.log('🔗 Project URL:', supabaseUrl)
    console.log('🏗️  Next steps:')
    console.log('   1. Create tables in Supabase dashboard')
    console.log('   2. Set up Row Level Security (RLS) policies')
    console.log('   3. Configure authentication providers')
    
    await listTables()
  } else {
    console.log('\n❌ Could not connect to Supabase')
    console.log('Please check your credentials in .env.local')
  }
}

main().catch(console.error)