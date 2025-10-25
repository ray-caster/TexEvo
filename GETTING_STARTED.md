# Getting Started with TexEvo Website

Welcome! This guide will help you get your TexEvo website up and running in minutes.

## ✅ What's Included

Your TexEvo website comes with:

- ✅ **Modern React app** with Vite (fast development)
- ✅ **Tailwind CSS** for styling
- ✅ **Professional SVG icons** (no emojis!)
- ✅ **HSL color system** for easy customization
- ✅ **Proper typography hierarchy** following best practices
- ✅ **Depth and shadows** for modern UI design
- ✅ **Smooth animations** and scroll effects
- ✅ **Responsive design** (mobile, tablet, desktop)
- ✅ **Light mode only** (as requested)

## 🚀 Quick Start (3 steps)

### Step 1: Install Dependencies

Open your terminal in the project folder and run:

```bash
npm install
```

This will install all required packages (~2 minutes).

### Step 2: Start Development Server

```bash
npm run dev
```

### Step 3: Open in Browser

Open http://localhost:5173 in your browser.

🎉 **Done!** Your website is running!

## 📁 Project Structure

```
TexEvo/
├── public/              # Static files
│   └── images/          # Put your images here
├── src/
│   ├── components/
│   │   └── Icons.jsx    # SVG icon components
│   ├── App.jsx          # Main website component
│   ├── index.css        # Global styles & variables
│   └── main.jsx         # React entry point
├── index.html           # HTML template
├── package.json         # Dependencies
├── tailwind.config.js   # Tailwind configuration
└── vite.config.js       # Vite configuration
```

## 🎨 Design Principles Implemented

### 1. HSL Color System (Tutorial 1)

All colors use HSL format for easy customization:

```css
/* From src/index.css */
--emerald-primary: hsl(160, 84%, 39%);
--coral-primary: hsl(17, 64%, 58%);
```

**Benefits**:
- Easy to create color variations
- Just change lightness for shades
- Consistent color palette

### 2. Depth & Layers (Tutorial 1)

Three levels of background colors:
- `--bg-light`: Elevated elements (cards)
- `--bg-base`: Page background
- `--bg-dark`: Inset elements

**Plus shadows**:
- `--shadow-sm`: Small depth
- `--shadow-md`: Medium depth
- `--shadow-lg`: Large depth
- `--shadow-xl`: Extra large depth

### 3. Typography Hierarchy (Tutorial 2)

Proper text sizing and emphasis:
- **Primary text**: High contrast, important content
- **Secondary text**: Slightly muted, readable
- **Muted text**: Low emphasis, supplementary info

**Font scale**: Only use what you need
- Base: 16px (1rem)
- Small adjustments: ±2px
- Clear hierarchy without excess

## 🖼️ Adding Real Images

Currently using professional SVG icons. To add photos:

1. **Create image folders**:
```bash
mkdir public/images/team
mkdir public/images/partners
mkdir public/images/hero
```

2. **Add your images** to these folders

3. **Follow the guide**: See `IMAGES_GUIDE.md`

## ⚙️ Customization

### Change Colors (Easy!)

Edit `src/index.css`:

```css
:root {
  /* Change these values */
  --emerald-primary: hsl(160, 84%, 39%);  /* Your primary color */
  --coral-primary: hsl(17, 64%, 58%);     /* Your accent color */
}
```

### Update Content

Edit `src/App.jsx`:

- Search for `"TexEvo"` to update organization name
- Search for `"Reweave. Renew. Revive."` to update tagline
- Update the `team` array for team members
- Update the `institutions` array for progress tracking

**See `CUSTOMIZATION_GUIDE.md` for detailed instructions**

## 🚢 Deployment

Ready to go live?

**Easiest method (Vercel)**:

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

**Other options**: See `DEPLOYMENT_GUIDE.md`

## 📱 Testing

Your website is responsive! Test on:

- ✅ Mobile phones (responsive navigation)
- ✅ Tablets (adjusted layouts)
- ✅ Desktop (full experience)

**Test locally**:
1. Open DevTools (F12)
2. Click device toolbar icon
3. Select different devices

## 🔧 Development Commands

```bash
# Start development server (with hot reload)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📚 Documentation

- **CUSTOMIZATION_GUIDE.md**: Change colors, fonts, content
- **IMAGES_GUIDE.md**: Add real photos and images
- **DEPLOYMENT_GUIDE.md**: Deploy to production
- **README.md**: Project overview

## 🎯 Key Features

### Navigation
- Fixed navigation with blur effect
- Smooth scroll to sections
- Hover effects on menu items

### Hero Section
- Parallax scrolling effect
- Gradient background with depth
- Floating decorative elements
- Clear call-to-action buttons

### About Section
- Vision & Mission cards with depth
- Interactive process icons
- Proper text hierarchy

### Impact Statistics
- Three key metrics highlighted
- Color-coded with gradients
- Hover effects for engagement

### How It Works
- Numbered steps with badges
- Clear process visualization
- Elevated cards with shadows

### Progress Tracking
- Animated progress bars
- Shimmer effect on progress
- Institution icons (school, hotel, building)

### Partners Section
- Clean card design
- Easy to add/remove partners

### Team Section
- Elevated founder card
- Grid layout for team members
- Professional presentation

### Growing Impact
- Glass-morphism cards
- White text on gradient background
- Impressive statistics display

### Join the Movement
- Clear call-to-action
- Raffle incentive highlighted
- Multiple engagement options

### Footer
- Contact information with icons
- Social media buttons
- Professional styling

## 🎨 Design Features

### Color System
- HSL-based for easy adjustment
- Light mode optimized
- Accessible contrast ratios

### Typography
- Inter for body text (clean, readable)
- Playfair Display for headings (elegant)
- Proper size hierarchy
- Optimal line heights

### Depth & Shadows
- 4 levels of elevation
- Inset shadows for sunken elements
- Consistent shadow system

### Animations
- Smooth fade-in on scroll
- Hover transformations
- Floating elements
- Progress bar animations
- Shimmer effects

### Responsive Design
- Mobile-first approach
- Flexible grid layouts
- Touch-friendly buttons
- Optimized images

## ✨ Best Practices Implemented

- ✅ Semantic HTML
- ✅ Accessible color contrast
- ✅ Responsive images
- ✅ Performance optimized
- ✅ Clean code structure
- ✅ Reusable components
- ✅ CSS variables for theming
- ✅ Modern React patterns

## 🐛 Troubleshooting

### Port already in use?
```bash
# Kill the process or use different port
npm run dev -- --port 3000
```

### Dependencies not installing?
```bash
# Clear cache and reinstall
rm -rf node_modules
npm install
```

### Build errors?
```bash
# Check Node.js version (should be 18+)
node --version

# Update if needed
```

## 📞 Need Help?

1. Check the guides:
   - CUSTOMIZATION_GUIDE.md
   - IMAGES_GUIDE.md
   - DEPLOYMENT_GUIDE.md

2. Common issues:
   - Most problems are in `src/App.jsx` or `src/index.css`
   - Check browser console for errors (F12)
   - Restart dev server if needed

## 🎉 What's Next?

1. **Customize colors** to match your brand
2. **Update content** with your information
3. **Add real images** of your team and work
4. **Test on different devices**
5. **Deploy to production**

## 💡 Pro Tips

1. **Use HSL colors**: Easy to create variations
2. **Keep it consistent**: Use the CSS variables
3. **Test mobile first**: Most visitors use phones
4. **Optimize images**: Use WebP format, compress files
5. **Keep it simple**: Don't add too many animations

## 🌟 Your Website Features

Based on the tutorials:

### Tutorial 1: Colors & Depth ✅
- HSL color system implemented
- Three-layer background system
- Four levels of shadows
- Proper depth hierarchy
- Gradient backgrounds with overlay

### Tutorial 2: Typography ✅
- Proper font scale (only what's needed)
- Clear visual hierarchy
- Size + weight + color for emphasis
- Optimal line heights
- Professional font pairing

---

**Ready to make an impact?** Start customizing and deploy your TexEvo website today! 🌱

*Questions? Check the other guides or the inline comments in the code.*

