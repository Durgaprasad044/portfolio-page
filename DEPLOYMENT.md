# Vercel Deployment Guide

This guide will help you deploy your Next.js portfolio to Vercel.

## Prerequisites

- A GitHub account
- A Vercel account (sign up at [vercel.com](https://vercel.com))

## Deployment Steps

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Push your code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Import Project on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings

3. **Configure Build Settings**
   - Framework Preset: Next.js (auto-detected)
   - Build Command: `npm run build` (auto-detected)
   - Output Directory: `.next` (auto-detected)
   - Install Command: `npm install` (auto-detected)

4. **Deploy**
   - Click "Deploy"
   - Wait for the build to complete
   - Your site will be live at `https://your-project.vercel.app`

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

4. **For Production Deployment**
   ```bash
   vercel --prod
   ```

## Environment Variables

If you need to set environment variables:
- Go to your project settings on Vercel
- Navigate to "Environment Variables"
- Add your variables (e.g., API keys, database URLs)

## Custom Domain

1. Go to your project settings on Vercel
2. Navigate to "Domains"
3. Add your custom domain
4. Follow the DNS configuration instructions

## Build Configuration

The project includes:
- `vercel.json` - Vercel deployment configuration
- `next.config.mjs` - Next.js configuration with image optimization
- `package.json` - Contains all build scripts

## Troubleshooting

### Build Errors
- Check the build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Verify Node.js version compatibility (Vercel uses Node 18.x by default)

### Image Issues
- Images are optimized using Vercel's Image Optimization API
- Ensure image paths are correct in your components
- Check that images exist in the `public` folder

### TypeScript Errors
- TypeScript errors are ignored during build (configured in `next.config.mjs`)
- Fix TypeScript errors locally before deploying for better code quality

## Continuous Deployment

Once connected to GitHub:
- Every push to `main` branch triggers automatic deployment
- Pull requests get preview deployments automatically
- You can configure branch protection and deployment settings in Vercel dashboard

## Support

For more information, visit:
- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)



