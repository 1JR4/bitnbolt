#!/usr/bin/env node

require('dotenv').config({ path: '.env.local' })

// Test 1: Supabase SDK connection (already working)
console.log('🔄 Testing Supabase SDK connection...')
const { createClient } = require('@supabase/supabase-js')
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY)

async function testSDK() {
  const { data, error } = await supabase.auth.getSession()
  if (!error) {
    console.log('✅ SDK connection successful!')
    return true
  } else {
    console.log('❌ SDK connection failed:', error.message)
    return false
  }
}

// Test 2: Direct database connection (requires pg package)
async function testDirectDB() {
  console.log('\n🔄 Testing direct database connection...')
  console.log('Database URL:', process.env.DATABASE_URL?.replace(/:[^@]*@/, ':****@'))
  
  try {
    // Try with native fetch to test the connection
    const url = new URL(process.env.DATABASE_URL)
    console.log('Host:', url.hostname)
    console.log('Port:', url.port)
    console.log('Database:', url.pathname.slice(1))
    console.log('User:', url.username)
    console.log('✅ Database URI parsed successfully!')
    
    // To actually test the connection, we'd need the pg package
    console.log('ℹ️  To test direct SQL connection, install: npm install pg')
    return true
  } catch (error) {
    console.log('❌ Invalid database URL:', error.message)
    return false
  }
}

async function main() {
  const sdkOk = await testSDK()
  const dbOk = await testDirectDB()
  
  if (sdkOk && dbOk) {
    console.log('\n🎉 All connections configured correctly!')
    console.log('You can now:')
    console.log('  - Use Supabase SDK for app development')
    console.log('  - Use direct SQL for migrations (install pg first)')
    console.log('  - Use ORMs like Prisma or Drizzle')
  }
}

main().catch(console.error)