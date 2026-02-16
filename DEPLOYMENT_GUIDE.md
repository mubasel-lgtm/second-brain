# Deployment Guide - Second Brain

## Option 1: Deploy to Vercel (Recommended - FREE)

### Step 1: Push to GitHub
```bash
# From your Mac Mini
cd /Users/mubasel/.openclaw/workspace/second-brain

# Create .gitignore
echo "node_modules" > .gitignore
echo ".next" >> .gitignore
echo "dist" >> .gitignore

# Initialize git
git init
git add .
git commit -m "Initial commit"

# Push to GitHub (create repo first on github.com)
git remote add origin https://github.com/YOUR_USERNAME/second-brain.git
git push -u origin main
```

### Step 2: Connect to Vercel
1. Go to https://vercel.com
2. Sign up with GitHub
3. Click "New Project"
4. Import your GitHub repo
5. Click "Deploy"

**Result:** Your app will be live at `https://second-brain-yourname.vercel.app`

---

## Option 2: Deploy to Railway (FREE)

```bash
# Install Railway CLI
npm install -g @railway/cli

# Login
railway login

# Deploy
cd /Users/mubasel/.openclaw/workspace/second-brain
railway init
railway up
```

---

## Option 3: Deploy to Render (FREE)

1. Go to https://render.com
2. Connect your GitHub repo
3. Select "Static Site"
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Click "Create Static Site"

---

## Current Status

✅ **App is built and ready** in `/Users/mubasel/.openclaw/workspace/second-brain/dist/`

The static files are generated and ready to deploy. Just need to:
1. Push to GitHub (or)
2. Connect to hosting platform

---

## Quick Test (Local)

To test locally first:
```bash
cd /Users/mubasel/.openclaw/workspace/second-brain
npx serve dist
```

Then open http://localhost:3000

---

## My Recommendation

**Use Vercel + GitHub:**
- Free forever
- Auto-deploys when you push code
- Global CDN (fast worldwide)
- Custom domain support
- Always online

---

## Files Ready for Deployment

✅ `dist/` - Static HTML/CSS/JS files
✅ `package.json` - Dependencies
✅ `vercel.json` - Vercel config
✅ `next.config.js` - NextJS config

Everything is ready - just need to authenticate and deploy!
