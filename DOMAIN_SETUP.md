# Domain Setup Guide for bitnbolt.com

## Step 1: Vercel Account Setup

1. **Create/Login to Vercel Account**
   ```bash
   vercel login
   ```
   This will open your browser to authenticate with GitHub, GitLab, or email.

## Step 2: Deploy to Vercel

Once logged in, run:
```bash
vercel
```

When prompted:
- Set up and deploy: **Y**
- Which scope: Choose your account
- Link to existing project? **N** (create new)
- Project name: **bitnboltdotcom**
- Directory: **./** (current directory)
- Override settings? **N**

## Step 3: Add Custom Domain

After initial deployment:
```bash
vercel domains add bitnbolt.com
```

Or do it via dashboard:
1. Go to https://vercel.com/dashboard
2. Select your project
3. Go to Settings → Domains
4. Add `bitnbolt.com` and `www.bitnbolt.com`

## Step 4: Configure DNS

You'll need to update your domain's DNS settings. Where did you register bitnbolt.com?

### If using Namecheap:
Add these DNS records:
- **A Record**: `@` → `76.76.21.21`
- **CNAME**: `www` → `cname.vercel-dns.com`

### If using GoDaddy:
- **A Record**: `@` → `76.76.21.21`
- **CNAME**: `www` → `cname.vercel-dns.com`

### If using Cloudflare:
- **A Record**: `@` → `76.76.21.21` (Proxy disabled)
- **CNAME**: `www` → `cname.vercel-dns.com` (Proxy disabled)

### If using Google Domains:
- **A Record**: `@` → `76.76.21.21`
- **CNAME**: `www` → `cname.vercel-dns.com`

## Step 5: Add Environment Variables to Vercel

```bash
# Add all your Supabase credentials
vercel env add NEXT_PUBLIC_SUPABASE_URL
vercel env add NEXT_PUBLIC_SUPABASE_ANON_KEY
vercel env add SUPABASE_SERVICE_KEY
vercel env add DATABASE_URL
```

Or via dashboard:
1. Go to your project on Vercel
2. Settings → Environment Variables
3. Add each variable for Production, Preview, and Development

## Step 6: Deploy to Production

```bash
vercel --prod
```

## DNS Propagation

After updating DNS:
- Changes can take 5 minutes to 48 hours to propagate
- Check status at: https://dnschecker.org/#A/bitnbolt.com
- Vercel will automatically provision SSL certificates

## Alternative: Using Vercel Dashboard

If you prefer the web interface:

1. Go to https://vercel.com/new
2. Import your GitHub repository
3. Configure project:
   - Name: bitnboltdotcom
   - Framework: Next.js (auto-detected)
   - Root Directory: ./
   - Build Command: npm run build
   - Output Directory: .next
4. Add environment variables
5. Deploy
6. Add domain in Settings → Domains

## Verify Domain Connection

Once DNS propagates, verify:
```bash
# Check DNS
nslookup bitnbolt.com

# Check SSL
curl -I https://bitnbolt.com

# Check www redirect
curl -I https://www.bitnbolt.com
```

## Current Status

- [x] Vercel CLI installed
- [ ] Logged in to Vercel
- [ ] Project deployed to Vercel
- [ ] Domain added to project
- [ ] DNS configured
- [ ] SSL certificates provisioned
- [ ] Environment variables added
- [ ] Production deployment live