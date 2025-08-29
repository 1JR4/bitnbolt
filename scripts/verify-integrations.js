#!/usr/bin/env node

/**
 * Integration Verification Script
 * Tests all integrations and reports status
 */

const { execSync } = require('child_process');
const https = require('https');
const fs = require('fs');

// Helper functions
function runCommand(command, silent = true) {
  try {
    return execSync(command, { encoding: 'utf-8', stdio: silent ? 'pipe' : 'inherit' }).trim();
  } catch (error) {
    return null;
  }
}

function checkUrl(url) {
  return new Promise((resolve) => {
    const request = https.get(url, (response) => {
      resolve({
        status: response.statusCode,
        ok: response.statusCode >= 200 && response.statusCode < 300
      });
    });
    
    request.on('error', () => {
      resolve({ status: null, ok: false });
    });
    
    request.setTimeout(10000, () => {
      request.destroy();
      resolve({ status: null, ok: false });
    });
  });
}

async function main() {
  console.log('🔍 BitNBolt Integration Verification');
  console.log('====================================\n');

  const results = {
    environment: { status: '⏳', details: [] },
    github: { status: '⏳', details: [] },
    vercel: { status: '⏳', details: [] },
    supabase: { status: '⏳', details: [] },
    deployment: { status: '⏳', details: [] }
  };

  // 1. Environment Check
  console.log('📋 Checking Environment...');
  
  // Check Node.js version
  const nodeVersion = process.version;
  const majorVersion = parseInt(nodeVersion.split('.')[0].substring(1));
  if (majorVersion >= 18) {
    results.environment.details.push(`✅ Node.js: ${nodeVersion}`);
  } else {
    results.environment.details.push(`❌ Node.js: ${nodeVersion} (18+ required)`);
    results.environment.status = '❌';
  }

  // Check package.json
  if (fs.existsSync('package.json')) {
    const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    results.environment.details.push(`✅ Project: ${pkg.name}`);
    results.environment.details.push(`✅ Next.js: ${pkg.dependencies.next || 'Not found'}`);
  } else {
    results.environment.details.push('❌ package.json not found');
    results.environment.status = '❌';
  }

  // Check environment files
  if (fs.existsSync('.env.local')) {
    results.environment.details.push('✅ .env.local exists');
  } else {
    results.environment.details.push('⚠️  .env.local missing (copy from .env.example)');
  }

  if (results.environment.status !== '❌') {
    results.environment.status = '✅';
  }

  // 2. GitHub Integration Check
  console.log('📋 Checking GitHub Integration...');
  
  // Check if in git repository
  const gitStatus = runCommand('git status --porcelain');
  if (gitStatus !== null) {
    results.github.details.push('✅ Git repository detected');
    
    // Check remote
    const remote = runCommand('git remote get-url origin');
    if (remote && remote.includes('github.com')) {
      results.github.details.push(`✅ GitHub remote: ${remote}`);
      
      // Check GitHub Actions
      if (fs.existsSync('.github/workflows')) {
        const workflows = fs.readdirSync('.github/workflows');
        results.github.details.push(`✅ GitHub Actions: ${workflows.length} workflows`);
      } else {
        results.github.details.push('❌ GitHub Actions workflows missing');
      }
    } else {
      results.github.details.push('❌ GitHub remote not configured');
    }
    
    results.github.status = '✅';
  } else {
    results.github.details.push('❌ Not a git repository');
    results.github.status = '❌';
  }

  // 3. Vercel Integration Check
  console.log('📋 Checking Vercel Integration...');
  
  // Check Vercel CLI
  const vercelVersion = runCommand('vercel --version');
  if (vercelVersion) {
    results.vercel.details.push(`✅ Vercel CLI: ${vercelVersion}`);
    
    // Check authentication
    const whoami = runCommand('vercel whoami');
    if (whoami) {
      results.vercel.details.push(`✅ Authenticated as: ${whoami}`);
      
      // Check project linking
      if (fs.existsSync('.vercel/project.json')) {
        const vercelProject = JSON.parse(fs.readFileSync('.vercel/project.json', 'utf8'));
        results.vercel.details.push(`✅ Linked to project: ${vercelProject.projectId}`);
        results.vercel.details.push(`✅ Organization: ${vercelProject.orgId}`);
      } else {
        results.vercel.details.push('⚠️  Project not linked (run: vercel link)');
      }
      
      results.vercel.status = '✅';
    } else {
      results.vercel.details.push('❌ Not authenticated (run: vercel login)');
      results.vercel.status = '❌';
    }
  } else {
    results.vercel.details.push('❌ Vercel CLI not installed');
    results.vercel.status = '❌';
  }

  // Check vercel.json
  if (fs.existsSync('vercel.json')) {
    results.vercel.details.push('✅ vercel.json configuration found');
  } else {
    results.vercel.details.push('❌ vercel.json missing');
  }

  // 4. Supabase Integration Check
  console.log('📋 Checking Supabase Integration...');
  
  // Check Supabase CLI
  const supabaseVersion = runCommand('supabase --version');
  if (supabaseVersion) {
    results.supabase.details.push(`✅ Supabase CLI: ${supabaseVersion}`);
  } else {
    results.supabase.details.push('⚠️  Supabase CLI not installed (optional)');
  }

  // Check Supabase configuration
  if (fs.existsSync('supabase/config.toml')) {
    results.supabase.details.push('✅ Supabase config found');
  } else {
    results.supabase.details.push('⚠️  Local Supabase config missing');
  }

  // Check environment variables
  if (fs.existsSync('.env.local')) {
    const envContent = fs.readFileSync('.env.local', 'utf8');
    if (envContent.includes('NEXT_PUBLIC_SUPABASE_URL')) {
      results.supabase.details.push('✅ Supabase URL configured');
    } else {
      results.supabase.details.push('❌ NEXT_PUBLIC_SUPABASE_URL missing');
    }
    
    if (envContent.includes('NEXT_PUBLIC_SUPABASE_ANON_KEY')) {
      results.supabase.details.push('✅ Supabase anon key configured');
    } else {
      results.supabase.details.push('❌ NEXT_PUBLIC_SUPABASE_ANON_KEY missing');
    }
  }

  // Test Supabase connection (if configured)
  try {
    require('dotenv').config({ path: '.env.local' });
    if (process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
      const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
      const response = await checkUrl(supabaseUrl);
      if (response.ok) {
        results.supabase.details.push('✅ Supabase URL accessible');
        results.supabase.status = '✅';
      } else {
        results.supabase.details.push(`❌ Supabase URL not accessible (${response.status})`);
        results.supabase.status = '❌';
      }
    } else {
      results.supabase.status = '⚠️';
    }
  } catch (error) {
    results.supabase.details.push(`❌ Connection test failed: ${error.message}`);
    results.supabase.status = '❌';
  }

  // 5. Deployment Check
  console.log('📋 Checking Deployment Status...');
  
  // Test build
  console.log('   Testing build...');
  const buildResult = runCommand('npm run build', true);
  if (buildResult !== null) {
    results.deployment.details.push('✅ Build successful');
  } else {
    results.deployment.details.push('❌ Build failed');
    results.deployment.status = '❌';
  }

  // Check production URLs
  const urls = [
    { name: 'Production', url: 'https://bitnbolt.com' },
    { name: 'Staging', url: 'https://staging.bitnbolt.com' }
  ];

  for (const site of urls) {
    console.log(`   Testing ${site.name}...`);
    const response = await checkUrl(site.url);
    if (response.ok) {
      results.deployment.details.push(`✅ ${site.name}: ${site.url} (${response.status})`);
    } else {
      results.deployment.details.push(`❌ ${site.name}: ${site.url} (${response.status || 'unreachable'})`);
    }
  }

  if (results.deployment.status !== '❌') {
    results.deployment.status = '✅';
  }

  // Generate Report
  console.log('\n📊 Integration Status Report');
  console.log('============================\n');

  const sections = [
    { name: 'Environment', key: 'environment' },
    { name: 'GitHub', key: 'github' },
    { name: 'Vercel', key: 'vercel' },
    { name: 'Supabase', key: 'supabase' },
    { name: 'Deployment', key: 'deployment' }
  ];

  sections.forEach(section => {
    console.log(`${section.name}: ${results[section.key].status}`);
    results[section.key].details.forEach(detail => {
      console.log(`  ${detail}`);
    });
    console.log('');
  });

  // Overall status
  const allStatuses = Object.values(results).map(r => r.status);
  const hasErrors = allStatuses.includes('❌');
  const hasWarnings = allStatuses.includes('⚠️');

  console.log('🎯 Overall Status');
  console.log('=================');
  
  if (hasErrors) {
    console.log('❌ Issues found - check details above');
    process.exit(1);
  } else if (hasWarnings) {
    console.log('⚠️  Minor issues - mostly ready for deployment');
  } else {
    console.log('✅ All integrations ready!');
  }

  console.log('\n📚 Next Steps:');
  if (hasErrors || hasWarnings) {
    console.log('1. Fix the issues listed above');
    console.log('2. Run this script again to verify');
  }
  console.log('3. Run: ./scripts/test-deployment.sh');
  console.log('4. Push to GitHub to trigger CI/CD');
}

main().catch(console.error);