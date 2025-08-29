# Supabase + GitHub Integration Setup Guide

## 🔧 Current Status
- ✅ **Supabase Client**: Configured with environment variables
- ✅ **Security**: Hardcoded credentials removed
- ✅ **GitHub Actions**: Workflow created for automated deployment
- ✅ **Local Development**: Supabase CLI configured

## 📋 Required GitHub Secrets

Add these secrets in your GitHub repository settings (Settings → Secrets and variables → Actions):

### **Required Secrets**
```
NEXT_PUBLIC_SUPABASE_URL=https://lmsgtsiwhwyuphllvyxu.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
SUPABASE_PROJECT_REF=lmsgtsiwhwyuphllvyxu
SUPABASE_ACCESS_TOKEN=your-access-token-here
```

### **How to Get These Values**

1. **NEXT_PUBLIC_SUPABASE_URL & NEXT_PUBLIC_SUPABASE_ANON_KEY**
   - Go to [Supabase Dashboard](https://app.supabase.com/project/lmsgtsiwhwyuphllvyxu/settings/api)
   - Copy from "Project API keys" section

2. **SUPABASE_PROJECT_REF**
   - Your project reference: `lmsgtsiwhwyuphllvyxu` (from URL)

3. **SUPABASE_ACCESS_TOKEN**
   - Go to [Supabase Access Tokens](https://app.supabase.com/account/tokens)
   - Generate new token with appropriate permissions

## 🚀 GitHub Integration Benefits

### **What Happens on Push to Main:**
1. ✅ **Automated Build**: Tests Next.js build with Supabase connection
2. ✅ **Database Migrations**: Pushes schema changes to Supabase
3. ✅ **Environment Sync**: Uses secure GitHub secrets
4. ✅ **Zero Downtime**: Manages deployments safely

### **What Happens on Pull Requests:**
1. 🔍 **Build Validation**: Ensures code compiles with Supabase
2. 🔍 **Migration Dry-Run**: Validates schema changes
3. 🔍 **No Live Changes**: Safe testing without affecting production

## 🏠 Local Development Setup

### **1. Environment Configuration**
```bash
# Copy environment template
cp .env.example .env.local

# Add your actual Supabase credentials
NEXT_PUBLIC_SUPABASE_URL=https://lmsgtsiwhwyuphllvyxu.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-actual-anon-key
```

### **2. Supabase CLI Setup**
```bash
# Install Supabase CLI (if not already installed)
npm install -g supabase

# Link to your project
supabase link --project-ref lmsgtsiwhwyuphllvyxu

# Pull current database schema
supabase db pull

# Start local development
npm run dev
```

### **3. Database Schema Management**
```bash
# Create a new migration
supabase migration new create_initial_tables

# Push migrations to remote
supabase db push

# Reset local database (development only)
supabase db reset
```

## 🗄️ Database Schema

Current schema includes:
- **profiles**: User profile data
- **pages**: Dynamic page content
- **blog_posts**: Blog content management
- **inquiries**: Contact form submissions

## 🔐 Security Best Practices

### **✅ Implemented**
- Environment variable configuration
- No hardcoded credentials in code
- GitHub secrets for CI/CD
- Proper error handling for missing env vars

### **🔄 Recommended Next Steps**
- Enable Row Level Security (RLS) on all tables
- Set up proper authentication middleware
- Configure CORS for production domain
- Add database backups automation

## 🚨 Important Notes

1. **Never commit `.env.local`** - Contains sensitive credentials
2. **Rotate keys regularly** - Update GitHub secrets when keys change
3. **Monitor usage** - Track API usage in Supabase dashboard
4. **Test migrations** - Always test schema changes in development first

## 🆘 Troubleshooting

### **Build Fails with Supabase Error**
```bash
# Check environment variables are set
echo $NEXT_PUBLIC_SUPABASE_URL
echo $NEXT_PUBLIC_SUPABASE_ANON_KEY

# Test connection locally
npm run dev
# Check browser console for errors
```

### **GitHub Actions Failing**
1. Verify all secrets are set in GitHub
2. Check Supabase project permissions
3. Review workflow logs for specific errors
4. Ensure project reference matches exactly

### **Database Migration Issues**
```bash
# Check current migration status
supabase migration list

# Repair broken migrations
supabase migration repair <timestamp>

# Reset and reapply (development only)
supabase db reset
```

## 📞 Support

- **Supabase Docs**: https://supabase.com/docs
- **GitHub Actions**: https://docs.github.com/en/actions
- **Next.js + Supabase**: https://supabase.com/docs/guides/getting-started/quickstarts/nextjs