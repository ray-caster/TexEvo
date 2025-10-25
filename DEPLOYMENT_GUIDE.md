# TexEvo Website Deployment Guide

This guide will help you deploy your TexEvo website to production.

## Prerequisites

- Node.js 18+ installed
- Git installed
- A hosting account (Vercel, Netlify, or similar)

## Local Development

1. **Install dependencies**:
```bash
npm install
```

2. **Start development server**:
```bash
npm run dev
```

3. **View the website**:
Open http://localhost:5173 in your browser

## Building for Production

1. **Create production build**:
```bash
npm run build
```

This creates optimized files in the `dist/` folder.

2. **Preview production build** (optional):
```bash
npm run preview
```

## Deployment Options

### Option 1: Vercel (Recommended - Easiest)

1. **Install Vercel CLI**:
```bash
npm install -g vercel
```

2. **Deploy**:
```bash
vercel
```

3. **Follow the prompts**:
- Link to existing project or create new
- Confirm settings
- Deploy!

**Or use Vercel Dashboard**:
1. Go to https://vercel.com
2. Click "New Project"
3. Import your Git repository
4. Click "Deploy"

### Option 2: Netlify

1. **Install Netlify CLI**:
```bash
npm install -g netlify-cli
```

2. **Build and deploy**:
```bash
npm run build
netlify deploy --prod --dir=dist
```

**Or use Netlify Dashboard**:
1. Go to https://netlify.com
2. Drag and drop the `dist/` folder
3. Your site is live!

### Option 3: GitHub Pages

1. **Install gh-pages**:
```bash
npm install --save-dev gh-pages
```

2. **Update package.json**:
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  },
  "homepage": "https://yourusername.github.io/texevo"
}
```

3. **Update vite.config.js**:
```javascript
export default defineConfig({
  plugins: [react()],
  base: '/texevo/' // Replace with your repo name
})
```

4. **Deploy**:
```bash
npm run deploy
```

### Option 4: Traditional Web Hosting

1. **Build the project**:
```bash
npm run build
```

2. **Upload the `dist/` folder** to your web host via:
- FTP/SFTP
- cPanel File Manager
- Web host's dashboard

3. **Point your domain** to the uploaded files

## Environment Variables

If you need environment variables (API keys, etc.):

1. **Create `.env` file** (don't commit this!):
```env
VITE_API_KEY=your_api_key_here
VITE_CONTACT_EMAIL=info@texevo.org
```

2. **Use in your code**:
```javascript
const apiKey = import.meta.env.VITE_API_KEY;
```

3. **Add to hosting platform**:
- Vercel: Project Settings → Environment Variables
- Netlify: Site Settings → Build & Deploy → Environment

## Custom Domain

### Vercel:
1. Go to Project Settings → Domains
2. Add your domain
3. Update DNS records as instructed

### Netlify:
1. Go to Domain Settings → Custom Domains
2. Add your domain
3. Follow DNS configuration steps

## Performance Optimization

Your website is already optimized with:
- ✅ Minified CSS and JavaScript
- ✅ Tree-shaking (removes unused code)
- ✅ Code splitting
- ✅ Asset optimization

**Additional optimizations**:

1. **Enable compression** (hosting provider usually does this)
2. **Use a CDN** (Vercel/Netlify include this)
3. **Optimize images** before uploading (use WebP format)

## Monitoring

After deployment:

1. **Check Google PageSpeed Insights**:
   - https://pagespeed.web.dev
   - Aim for 90+ score

2. **Test on multiple devices**:
   - Mobile phones
   - Tablets
   - Desktop browsers

3. **Set up analytics**:
   - Google Analytics
   - Plausible
   - Umami

## Common Issues

### Issue: White screen after deployment
**Solution**: Check the browser console for errors. Usually a base URL issue.

```javascript
// In vite.config.js, try:
export default defineConfig({
  plugins: [react()],
  base: './' // Use relative paths
})
```

### Issue: Images not loading
**Solution**: Ensure images are in `public/` folder and paths start with `/`

```jsx
// Correct:
<img src="/images/logo.png" />

// Wrong:
<img src="./images/logo.png" />
```

### Issue: 404 on refresh
**Solution**: Configure hosting for SPA (Single Page Application)

**Vercel**: Auto-configured
**Netlify**: Add `public/_redirects` file:
```
/*    /index.html   200
```

## SSL Certificate

All modern hosting platforms provide free SSL certificates:
- ✅ Vercel: Automatic
- ✅ Netlify: Automatic
- ✅ GitHub Pages: Automatic

## Checklist Before Going Live

- [ ] Test all links and buttons
- [ ] Check mobile responsiveness
- [ ] Optimize all images
- [ ] Update contact information
- [ ] Test contact forms (if any)
- [ ] Set up domain name
- [ ] Enable SSL certificate
- [ ] Add analytics
- [ ] Test page load speed
- [ ] Check SEO meta tags
- [ ] Create sitemap.xml
- [ ] Test in multiple browsers

## Continuous Deployment

**Set up automatic deployments**:

1. **Connect Git repository** to Vercel/Netlify
2. **Every push to main branch** = automatic deployment
3. **Pull requests** = preview deployments

## Support

For deployment help:
- Vercel Docs: https://vercel.com/docs
- Netlify Docs: https://docs.netlify.com
- Vite Docs: https://vitejs.dev/guide/

## Quick Deploy Commands

```bash
# Development
npm run dev

# Production build
npm run build

# Preview production build
npm run preview

# Deploy to Vercel
vercel --prod

# Deploy to Netlify
netlify deploy --prod --dir=dist
```

Your TexEvo website is ready to make an impact! 🌱

