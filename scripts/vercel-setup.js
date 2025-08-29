#!/usr/bin/env node

/**
 * Automated Vercel Setup Script
 * This script guides you through the Vercel integration setup
 * and generates the required configuration automatically.
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 BitNBolt Vercel Setup Assistant');
console.log('=====================================\n');

// Helper function to run commands safely
function runCommand(command, description) {
  try {
    console.log(`📋 ${description}`);
    console.log(`💻 Running: ${command}`);
    const output = execSync(command, { encoding: 'utf-8', stdio: 'pipe' });
    console.log(`✅ Success!\n`);
    return output.trim();
  } catch (error) {
    console.log(`❌ Error: ${error.message}\n`);
    return null;
  }
}

// Helper function to extract JSON safely
function parseJSON(output, field) {
  try {
    const json = JSON.parse(output);
    return json[field] || null;
  } catch {
    return null;
  }
}

async function main() {
  console.log('🔍 Checking prerequisites...\n');
  
  // Check if Vercel CLI is installed
  const vercelVersion = runCommand('vercel --version', 'Checking Vercel CLI installation');
  if (!vercelVersion) {
    console.log('❌ Vercel CLI not found. Installing...\n');
    runCommand('npm install -g vercel@latest', 'Installing Vercel CLI');
  } else {
    console.log(`✅ Vercel CLI found: v${vercelVersion}\n`);
  }

  // Check if user is logged in
  console.log('🔐 Checking authentication...\n');
  const whoami = runCommand('vercel whoami', 'Checking authentication status');
  
  if (!whoami) {
    console.log('❌ Not logged in to Vercel.');
    console.log('📌 Please run: vercel login');
    console.log('   Then run this script again.\n');
    return;
  }
  
  console.log(`✅ Logged in as: ${whoami}\n`);

  // Get organization/team info
  console.log('🏢 Getting organization information...\n');
  const teamsOutput = runCommand('vercel teams ls --json', 'Fetching teams/organizations');
  
  let orgId = null;
  if (teamsOutput) {
    try {
      const teams = JSON.parse(teamsOutput);
      if (teams.length > 0) {
        orgId = teams[0].id;
        console.log(`✅ Organization ID: ${orgId}\n`);
      }
    } catch (e) {
      console.log('⚠️  Could not parse teams data. Using personal account.\n');
    }
  }

  // Link the project
  console.log('🔗 Linking project to Vercel...\n');
  const linkOutput = runCommand('vercel link --yes', 'Linking project');
  
  // Get project information
  console.log('📋 Getting project details...\n');
  const projectOutput = runCommand('vercel project ls --json', 'Fetching project information');
  
  let projectId = null;
  if (projectOutput) {
    try {
      const projects = JSON.parse(projectOutput);
      const currentProject = projects.find(p => p.name === 'bitnboltdotcom' || p.name.includes('bitnbolt'));
      if (currentProject) {
        projectId = currentProject.id;
        console.log(`✅ Project ID: ${projectId}\n`);
      }
    } catch (e) {
      console.log('⚠️  Could not parse project data.\n');
    }
  }

  // Generate GitHub Secrets configuration
  console.log('🔑 Generating GitHub Secrets configuration...\n');
  
  const secrets = {
    VERCEL_TOKEN: 'Get from: https://vercel.com/account/tokens',
    VERCEL_ORG_ID: orgId || 'Get from: vercel teams ls',
    VERCEL_PROJECT_ID: projectId || 'Get from: vercel project ls',
    VERCEL_PROJECT_ID_STAGING: projectId || 'Create staging project first',
    NEXT_PUBLIC_SUPABASE_URL: 'https://lmsgtsiwhwyuphllvyxu.supabase.co',
    NEXT_PUBLIC_SUPABASE_ANON_KEY: 'Get from Supabase dashboard',
    SUPABASE_URL_STAGING: 'Get staging Supabase URL',
    SUPABASE_ANON_KEY_STAGING: 'Get staging Supabase anon key'
  };

  // Write secrets to file
  const secretsPath = path.join(__dirname, 'github-secrets.txt');
  const secretsContent = Object.entries(secrets)
    .map(([key, value]) => `${key}=${value}`)
    .join('\n');
  
  fs.writeFileSync(secretsPath, secretsContent);
  console.log(`✅ GitHub secrets template saved to: ${secretsPath}\n`);

  // Generate Vercel environment variables setup
  console.log('🌍 Generating Vercel environment setup commands...\n');
  
  const envCommands = [
    '# Set up Vercel environment variables',
    '# Production environment',
    'vercel env add NEXT_PUBLIC_SUPABASE_URL production',
    'vercel env add NEXT_PUBLIC_SUPABASE_ANON_KEY production',
    '',
    '# Preview/Staging environment',
    'vercel env add NEXT_PUBLIC_SUPABASE_URL preview',
    'vercel env add NEXT_PUBLIC_SUPABASE_ANON_KEY preview',
    '',
    '# Development environment (optional)',
    'vercel env add NEXT_PUBLIC_SUPABASE_URL development',
    'vercel env add NEXT_PUBLIC_SUPABASE_ANON_KEY development'
  ];

  const envPath = path.join(__dirname, 'vercel-env-setup.sh');
  fs.writeFileSync(envPath, envCommands.join('\n'));
  console.log(`✅ Vercel environment setup saved to: ${envPath}\n`);

  // Generate deployment test
  console.log('🧪 Creating deployment test script...\n');
  const testScript = `#!/bin/bash
# Deployment test script
echo "🚀 Testing BitNBolt deployment pipeline"
echo "========================================"

echo "📋 Testing build locally..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Local build successful"
    echo "📤 Testing Vercel deployment..."
    vercel --prod
    
    if [ $? -eq 0 ]; then
        echo "✅ Deployment successful!"
        echo "🌐 Check your deployment at: https://bitnbolt.com"
    else
        echo "❌ Deployment failed"
        exit 1
    fi
else
    echo "❌ Local build failed"
    exit 1
fi
`;

  const testPath = path.join(__dirname, 'test-deployment.sh');
  fs.writeFileSync(testPath, testScript);
  fs.chmodSync(testPath, '755');
  console.log(`✅ Deployment test script saved to: ${testPath}\n`);

  // Generate summary report
  console.log('📊 Setup Summary');
  console.log('=================');
  console.log(`✅ Vercel CLI: Installed and authenticated`);
  console.log(`✅ User: ${whoami}`);
  console.log(`✅ Organization ID: ${orgId || 'Personal account'}`);
  console.log(`✅ Project ID: ${projectId || 'Check vercel project ls'}`);
  console.log(`✅ GitHub secrets template: ${secretsPath}`);
  console.log(`✅ Vercel env setup: ${envPath}`);
  console.log(`✅ Deployment test: ${testPath}\n`);

  console.log('🎯 Next Steps:');
  console.log('1. Get your Vercel API token from: https://vercel.com/account/tokens');
  console.log('2. Add GitHub secrets using the template generated');
  console.log('3. Run the Vercel environment setup commands');
  console.log('4. Test deployment with the test script');
  console.log('\n🚀 Your Vercel integration is ready to go!');
}

// Run the setup
main().catch(console.error);