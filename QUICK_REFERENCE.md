# TexEvo Website - Quick Reference Card

## 🚀 Getting Started (3 Commands)

```bash
npm install          # Install dependencies (first time only)
npm run dev          # Start development server
# Open: http://localhost:5173
```

## 📝 Most Common Edits

### 1. Change Colors (2 minutes)
**File**: `src/index.css`
```css
:root {
  --emerald-primary: hsl(160, 84%, 39%);  /* Change these */
  --coral-primary: hsl(17, 64%, 58%);
}
```

### 2. Update Organization Name (5 minutes)
**File**: `src/App.jsx`
- Search: `TexEvo`
- Replace with: Your organization name

### 3. Change Tagline (1 minute)
**File**: `src/App.jsx`
- Search: `Reweave. Renew. Revive.`
- Replace with: Your tagline

### 4. Update Team Members (10 minutes)
**File**: `src/App.jsx`
```javascript
const team = [
  { 
    name: 'Your Name', 
    role: 'Your Role', 
    quote: 'Your quote' 
  },
  { name: 'Member 2', role: 'Role 2' },
  // Add more...
];
```

### 5. Add Your Logo (5 minutes)
1. Save logo as `public/logo.png`
2. **File**: `src/App.jsx`, find:
```jsx
<h1>TexEvo</h1>
```
3. Replace with:
```jsx
<img src="/logo.png" alt="TexEvo" className="h-8" />
```

## 🎨 Design System

### Colors (HSL Format)
| Variable | Purpose | Default |
|----------|---------|---------|
| `--emerald-primary` | Main brand color | Green |
| `--coral-primary` | Accent color | Coral |
| `--bg-light` | Elevated elements | Very light |
| `--bg-base` | Page background | Light |
| `--bg-dark` | Sunken elements | Light gray |
| `--text-primary` | Headlines | Dark |
| `--text-secondary` | Body text | Medium |
| `--text-muted` | Labels | Light |

### Shadows
| Variable | Use Case |
|----------|----------|
| `--shadow-sm` | Subtle elevation |
| `--shadow-md` | Cards |
| `--shadow-lg` | Modals, dropdowns |
| `--shadow-xl` | Major elements |

### Typography
| Variable | Size | Use |
|----------|------|-----|
| `--text-sm` | 14px | Small text |
| `--text-base` | 16px | Body text |
| `--text-lg` | 18px | Large body |
| `--text-2xl` | 24px | Subheadings |
| `--text-5xl` | 48px | Page titles |

## 📁 Key Files

| File | What It Does | Edit? |
|------|--------------|-------|
| `src/App.jsx` | Main website content | ✅ Yes |
| `src/index.css` | Colors & styles | ✅ Yes |
| `src/components/Icons.jsx` | SVG icons | ❌ No |
| `package.json` | Dependencies | ⚠️ Rarely |
| `tailwind.config.js` | Tailwind config | ⚠️ Advanced |

## 🎯 Common Tasks

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Build for Production
```bash
npm run build
# Output in dist/ folder
```

### Add Real Images
1. Create folders:
```bash
mkdir public/images/team
mkdir public/images/partners
```
2. Add your images
3. See `IMAGES_GUIDE.md`

### Change Fonts
**File**: `src/index.css`
```css
@import url('https://fonts.googleapis.com/css2?family=Your+Font');
```
**File**: `tailwind.config.js`
```javascript
fontFamily: {
  sans: ['Your Font', 'sans-serif'],
}
```

## 🔧 Troubleshooting

### Port 5173 in use?
```bash
npm run dev -- --port 3000
```

### Changes not showing?
1. Save the file (Ctrl+S)
2. Check terminal for errors
3. Refresh browser (Ctrl+R)
4. Hard refresh (Ctrl+Shift+R)

### Dependencies error?
```bash
rm -rf node_modules
npm install
```

## 📊 Section IDs (for navigation)

| Section | ID | Link |
|---------|----|----- |
| About | `about` | `#about` |
| Impact | `impact` | `#impact` |
| How It Works | `how-it-works` | `#how-it-works` |
| Progress | `progress` | `#progress` |
| Partners | `partners` | `#partners` |
| Team | `team` | `#team` |
| Join Us | `join-us` | `#join-us` |

## 🎨 Tutorial Principles Applied

### Tutorial 1: Colors & Depth ✅
- ✅ HSL color system (easy to modify)
- ✅ Three-layer backgrounds (light, base, dark)
- ✅ Four shadow levels (sm, md, lg, xl)
- ✅ Gradient overlays for depth
- ✅ Inset shadows for sunken elements

### Tutorial 2: Typography ✅
- ✅ Minimal font scale (only what's needed)
- ✅ Size + Weight + Color for hierarchy
- ✅ Primary, secondary, muted text colors
- ✅ Proper line heights
- ✅ Professional font pairing

## 💡 Quick Tips

1. **Test mobile first** - Most users are on phones
2. **Use CSS variables** - Easier to maintain
3. **Keep backups** - Copy files before major changes
4. **Check browser console** - Press F12 for errors
5. **Commit often** - Use git to save progress

## 📚 Full Documentation

| Guide | What It Covers |
|-------|----------------|
| `GETTING_STARTED.md` | Complete setup guide |
| `CUSTOMIZATION_GUIDE.md` | Change everything |
| `IMAGES_GUIDE.md` | Add real photos |
| `DEPLOYMENT_GUIDE.md` | Go live |
| `PROJECT_STRUCTURE.md` | File organization |

## ⌨️ Keyboard Shortcuts (VS Code)

| Action | Shortcut |
|--------|----------|
| Save file | `Ctrl+S` |
| Find in file | `Ctrl+F` |
| Find in all files | `Ctrl+Shift+F` |
| Replace | `Ctrl+H` |
| Format code | `Shift+Alt+F` |
| Open terminal | `Ctrl+`` |

## 🎯 30-Minute Customization Checklist

- [ ] Install dependencies (5 min)
- [ ] Start dev server (1 min)
- [ ] Change colors (3 min)
- [ ] Update organization name (3 min)
- [ ] Update tagline (2 min)
- [ ] Update contact info (3 min)
- [ ] Update team members (5 min)
- [ ] Update statistics (3 min)
- [ ] Test on mobile (5 min)

**Result**: Personalized website in 30 minutes!

## 🚀 Production Checklist

Before deploying:
- [ ] All content updated
- [ ] Colors match brand
- [ ] Contact info correct
- [ ] Team photos added (optional)
- [ ] Tested on mobile
- [ ] Tested in Chrome, Firefox, Safari
- [ ] Social media links work
- [ ] All buttons work
- [ ] Spell-check complete

## 📞 Getting Help

1. **Check guides** in project folder
2. **Browser console** (F12) for errors
3. **Terminal output** for build errors
4. **Google the error** message
5. **Check React docs**: https://react.dev

## 🎉 You're All Set!

Your TexEvo website includes:
- ✅ Professional design
- ✅ Modern animations
- ✅ Responsive layout
- ✅ Easy to customize
- ✅ Ready to deploy
- ✅ No emojis (proper icons!)
- ✅ Light mode only
- ✅ Tutorial principles applied

**Now**: Customize and deploy! 🚀

---

**Print this page** for quick reference while coding!

