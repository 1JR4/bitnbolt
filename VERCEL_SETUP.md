# Vercel + GitHub + Supabase Integration Guide

## 🎯 Current Architecture

**Your deployment setup uses a sophisticated multi-stage pipeline:**

```
GitHub → GitHub Actions → Vercel → Supabase
   ↓            ↓           ↓         ↓
 Code      Build/Test    Deploy    Database
```

## ✅ What's Already Configured

### **1. Vercel Configuration** (`vercel.json`)
- ✅ **Next.js Framework**: Optimized builds
- ✅ **Security Headers**: Production-ready security
- ✅ **API Functions**: 10-second timeout limits
- ✅ **Regional Deployment**: US East (IAD1)
- ✅ **URL Management**: Redirects and rewrites

### **2. GitHub Actions Pipeline** (`.github/workflows/cd.yml`)
- ✅ **Multi-Environment**: Staging → Production
- ✅ **Automated Testing**: Full test suite
- ✅ **Rollback Strategy**: Automatic failure recovery
- ✅ **Release Management**: Tagged deployments
- ✅ **Team Notifications**: Slack integration

## 🔧 Required Setup Steps

### **Step 1: Get Vercel Credentials**

**A. Install Vercel CLI**
```bash
npm install -g vercel
vercel login
```

**B. Get Project IDs**
```bash
# Link your project
vercel link

# Get project details
vercel project ls
```

**C. Get Organization ID**
```bash
vercel teams ls
```

### **Step 2: Configure GitHub Secrets**

Add these to your GitHub repository secrets:
`https://github.com/1JR4/bitnbolt/settings/secrets/actions`

#### **Vercel Integration**
```
VERCEL_TOKEN=your-vercel-token-here
VERCEL_ORG_ID=your-org-id-here
VERCEL_PROJECT_ID=your-production-project-id
VERCEL_PROJECT_ID_STAGING=your-staging-project-id
```

#### **Supabase Integration** 
```
NEXT_PUBLIC_SUPABASE_URL=https://lmsgtsiwhwyuphllvyxu.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
SUPABASE_URL_STAGING=your-staging-supabase-url
SUPABASE_ANON_KEY_STAGING=your-staging-anon-key
```

#### **Optional: Notifications**
```
SLACK_WEBHOOK=your-slack-webhook-url
```

### **Step 3: Vercel Environment Variables**

**Option A: Via Vercel CLI**
```bash
# Production environment
vercel env add NEXT_PUBLIC_SUPABASE_URL production
vercel env add NEXT_PUBLIC_SUPABASE_ANON_KEY production

# Preview/staging environment  
vercel env add NEXT_PUBLIC_SUPABASE_URL preview
vercel env add NEXT_PUBLIC_SUPABASE_ANON_KEY preview
```

**Option B: Via Vercel Dashboard**
1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project
3. Go to Settings → Environment Variables
4. Add the Supabase variables for each environment

## 🚀 Deployment Workflows

### **Workflow 1: GitHub Actions (Current Setup)**

**Trigger:** Push to main branch
```bash
git push origin main
```

**Process:**
1. 🏗️ **Build Stage**: Install deps, run tests, build Next.js
2. 🧪 **Staging Deploy**: Deploy to Vercel staging environment
3. 🧪 **E2E Tests**: Run tests against staging
4. 🚀 **Production Deploy**: Deploy to Vercel production
5. ✅ **Smoke Tests**: Verify production deployment
6. 📦 **Release**: Create tagged GitHub release
7. 📢 **Notify**: Send Slack notification

**Rollback:** Automatic on failure

### **Workflow 2: Manual Production Deploy**

**Trigger:** Manual workflow dispatch
```bash
# Via GitHub UI: Actions → CD Pipeline → Run workflow → Production
```

### **Workflow 3: Vercel Preview (Auto)**

**Trigger:** Pull request creation
- ✅ **Automatic**: Vercel creates preview URL
- ✅ **Environment**: Uses preview environment variables
- ✅ **Testing**: Safe environment for testing changes

## 📊 Environment Configuration

### **Production Environment**
- **URL**: `https://bitnbolt.com`
- **Supabase**: Production database
- **Features**: All features enabled
- **Monitoring**: Full analytics and error tracking

### **Staging Environment**  
- **URL**: `https://staging.bitnbolt.com`
- **Supabase**: Staging database (isolated)
- **Features**: All features enabled for testing
- **Purpose**: Pre-production validation

### **Preview Environment**
- **URL**: `https://preview-xxx.vercel.app`
- **Supabase**: Development/staging database
- **Features**: Feature flags for testing
- **Purpose**: PR review and testing

## 🔐 Security & Best Practices

### **✅ Already Implemented**
- Environment-based configuration
- Secure header configuration
- No hardcoded credentials
- Automated rollback strategy

### **🎯 Recommendations**
- **Database Isolation**: Separate staging/production Supabase projects
- **Feature Flags**: Environment-based feature toggles
- **Monitoring**: Add error tracking (Sentry) integration
- **Performance**: Add Core Web Vitals monitoring

## 🚨 Common Issues & Solutions

### **Build Failing**
```bash
# Check environment variables
vercel env ls

# Test build locally
npm run build

# Check logs
vercel logs your-deployment-url
```

### **Supabase Connection Issues**
```bash
# Verify environment variables
echo $NEXT_PUBLIC_SUPABASE_URL
echo $NEXT_PUBLIC_SUPABASE_ANON_KEY

# Test connection
npm run dev
# Check browser console for connection errors
```

### **Deployment Stuck**
```bash
# Cancel current deployment
vercel --cancel

# Redeploy
vercel --prod
```

## 🔄 Alternative Integration Options

### **Option 1: Vercel Git Integration (Simpler)**
- **Pros**: Automatic deployments, preview URLs, simpler setup
- **Cons**: Less control over build process, no custom testing
- **Best for**: Simple projects, rapid iteration

### **Option 2: GitHub Actions (Current - More Control)**
- **Pros**: Custom build steps, multi-environment, testing pipeline
- **Cons**: More complex setup, requires maintenance
- **Best for**: Production apps, complex workflows

### **Option 3: Hybrid (Recommended)**
- **Preview**: Vercel handles PR previews automatically
- **Production**: GitHub Actions for controlled releases
- **Benefits**: Best of both worlds

## 📈 Monitoring & Observability

### **Built-in Vercel Analytics**
```bash
# Enable in vercel.json
{
  "analytics": {
    "enabled": true
  }
}
```

### **Custom Monitoring**
- **Performance**: Core Web Vitals tracking
- **Errors**: Sentry integration
- **Database**: Supabase dashboard monitoring
- **Uptime**: StatusPage or similar service

## 🎯 Next Steps

1. **Get Vercel Credentials**: Follow Step 1 above
2. **Configure GitHub Secrets**: Add all required secrets
3. **Test Deployment**: Push a small change to trigger pipeline
4. **Verify Integration**: Check staging → production flow
5. **Set up Monitoring**: Add error tracking and analytics

## 📞 Support Resources

- **Vercel Docs**: https://vercel.com/docs
- **Next.js + Vercel**: https://nextjs.org/learn/basics/deploying-nextjs-app
- **GitHub Actions**: https://docs.github.com/en/actions
- **Supabase + Vercel**: https://supabase.com/docs/guides/getting-started/quickstarts/nextjs

Your setup is **enterprise-grade** and follows industry best practices! 🚀