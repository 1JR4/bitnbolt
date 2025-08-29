#!/bin/bash

# BitNBolt Complete Integration Setup Script
# This script guides you through setting up all integrations

set -e

echo "🚀 BitNBolt Complete Integration Setup"
echo "======================================"
echo ""

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Helper functions
log_info() {
    echo -e "${BLUE}ℹ️  $1${NC}"
}

log_success() {
    echo -e "${GREEN}✅ $1${NC}"
}

log_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

log_error() {
    echo -e "${RED}❌ $1${NC}"
}

# Check prerequisites
log_info "Checking prerequisites..."

# Check Node.js
if ! command -v node &> /dev/null; then
    log_error "Node.js not found. Please install Node.js 18+ first."
    exit 1
fi

NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    log_error "Node.js 18+ required. Current version: $(node -v)"
    exit 1
fi

log_success "Node.js $(node -v) found"

# Check npm
if ! command -v npm &> /dev/null; then
    log_error "npm not found"
    exit 1
fi

log_success "npm $(npm -v) found"

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    log_error "package.json not found. Please run this script from the project root."
    exit 1
fi

if ! grep -q "bitnboltdotcom" package.json; then
    log_error "This doesn't appear to be the BitNBolt project directory."
    exit 1
fi

log_success "Project directory verified"

echo ""
log_info "Setting up integrations..."

# 1. Install/check Vercel CLI
echo ""
log_info "Step 1: Vercel CLI Setup"
echo "========================"

if ! command -v vercel &> /dev/null; then
    log_warning "Vercel CLI not found. Installing..."
    npm install -g vercel@latest
    log_success "Vercel CLI installed"
else
    log_success "Vercel CLI found: $(vercel --version)"
fi

# Check Vercel authentication
if ! vercel whoami &> /dev/null; then
    log_warning "Not authenticated with Vercel"
    echo ""
    echo "Please run the following command to login:"
    echo "vercel login"
    echo ""
    echo "After logging in, run this script again."
    exit 1
fi

VERCEL_USER=$(vercel whoami)
log_success "Authenticated as: $VERCEL_USER"

# 2. Install/check Supabase CLI
echo ""
log_info "Step 2: Supabase CLI Setup"
echo "=========================="

if ! command -v supabase &> /dev/null; then
    log_warning "Supabase CLI not found. Installing..."
    npm install -g supabase@latest
    log_success "Supabase CLI installed"
else
    log_success "Supabase CLI found: $(supabase --version)"
fi

# 3. Run Vercel setup
echo ""
log_info "Step 3: Running Vercel Integration"
echo "=================================="

node scripts/vercel-setup.js

# 4. Check environment files
echo ""
log_info "Step 4: Environment Configuration"
echo "================================="

if [ ! -f ".env.local" ]; then
    log_warning ".env.local not found. Creating from template..."
    cp .env.example .env.local
    log_success ".env.local created"
    echo ""
    echo "📝 Please edit .env.local and add your actual credentials:"
    echo "   - NEXT_PUBLIC_SUPABASE_URL"
    echo "   - NEXT_PUBLIC_SUPABASE_ANON_KEY"
    echo ""
else
    log_success ".env.local exists"
fi

# 5. Test build
echo ""
log_info "Step 5: Testing Build"
echo "===================="

log_info "Running build test..."
if npm run build > /dev/null 2>&1; then
    log_success "Build test passed"
else
    log_error "Build test failed. Check your environment variables."
    echo "Common issues:"
    echo "- Missing NEXT_PUBLIC_SUPABASE_URL in .env.local"
    echo "- Missing NEXT_PUBLIC_SUPABASE_ANON_KEY in .env.local"
    echo "- Network connectivity to Supabase"
fi

# 6. Generate setup summary
echo ""
log_info "Step 6: Setup Summary"
echo "===================="

echo ""
echo "🎯 Integration Status:"
echo "======================"
echo "✅ Node.js: $(node -v)"
echo "✅ npm: $(npm -v)"
echo "✅ Vercel CLI: $(vercel --version)"
echo "✅ Supabase CLI: $(supabase --version 2>/dev/null || echo 'Not installed')"
echo "✅ Vercel User: $VERCEL_USER"
echo "✅ Project: bitnboltdotcom"

echo ""
echo "📋 Generated Files:"
echo "==================="
echo "✅ scripts/github-secrets.txt - GitHub repository secrets"
echo "✅ scripts/vercel-env-setup.sh - Vercel environment variables"
echo "✅ scripts/test-deployment.sh - Deployment test script"

echo ""
echo "🚀 Next Manual Steps:"
echo "====================="
echo "1. 🔑 Add GitHub Secrets:"
echo "   → Go to: https://github.com/1JR4/bitnbolt/settings/secrets/actions"
echo "   → Use values from: scripts/github-secrets.txt"
echo ""
echo "2. 🌍 Set Vercel Environment Variables:"
echo "   → Run commands from: scripts/vercel-env-setup.sh"
echo "   → Or use Vercel dashboard: https://vercel.com/dashboard"
echo ""
echo "3. 🧪 Test Deployment:"
echo "   → Run: ./scripts/test-deployment.sh"
echo "   → Or push to GitHub to trigger CI/CD"
echo ""
echo "4. 📝 Update .env.local:"
echo "   → Add your actual Supabase credentials"
echo "   → Test with: npm run dev"

echo ""
log_success "Setup complete! Check the manual steps above."
echo ""
echo "📚 For detailed instructions, see:"
echo "   - VERCEL_SETUP.md"
echo "   - SUPABASE_SETUP.md"
echo ""