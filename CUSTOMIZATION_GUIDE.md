# TexEvo Website Customization Guide

This guide explains how to customize your TexEvo website to match your brand and needs.

## Color Customization

All colors use the HSL color system for easy customization.

### Changing Brand Colors

**Location**: `src/index.css`

```css
:root {
  /* Change emerald (primary green) */
  --emerald-primary: hsl(160, 84%, 39%);  /* Change the values here */
  --emerald-dark: hsl(163, 94%, 24%);
  
  /* Change coral (accent color) */
  --coral-primary: hsl(17, 64%, 58%);     /* Change the values here */
}
```

**HSL Values Explained**:
- **H** (Hue): 0-360 (color on color wheel)
  - 0 = Red, 120 = Green, 240 = Blue
- **S** (Saturation): 0-100% (intensity)
  - 0% = Gray, 100% = Full color
- **L** (Lightness): 0-100% (brightness)
  - 0% = Black, 50% = Base, 100% = White

**Example Color Schemes**:

```css
/* Ocean Blue Theme */
--emerald-primary: hsl(200, 84%, 39%);
--emerald-dark: hsl(205, 94%, 24%);
--coral-primary: hsl(190, 64%, 58%);

/* Purple Passion Theme */
--emerald-primary: hsl(270, 84%, 39%);
--emerald-dark: hsl(275, 94%, 24%);
--coral-primary: hsl(320, 64%, 58%);

/* Forest Green Theme */
--emerald-primary: hsl(140, 84%, 35%);
--emerald-dark: hsl(145, 94%, 20%);
--coral-primary: hsl(30, 64%, 58%);
```

### Changing Background Colors

```css
:root {
  /* Background shades - adjust lightness */
  --bg-light: hsl(152, 20%, 98%);   /* Lightest */
  --bg-base: hsl(152, 15%, 95%);    /* Base */
  --bg-dark: hsl(152, 10%, 90%);    /* Darkest */
}
```

**Tip**: Keep saturation low (10-20%) for neutral backgrounds.

### Changing Text Colors

```css
:root {
  /* Text colors - adjust for contrast */
  --text-primary: hsl(163, 88%, 15%);    /* Main text - darkest */
  --text-secondary: hsl(163, 40%, 35%);  /* Secondary text */
  --text-muted: hsl(163, 20%, 50%);      /* Muted text - lightest */
}
```

## Typography Customization

### Changing Fonts

**Location**: `src/index.css` and `tailwind.config.js`

1. **Choose fonts** from [Google Fonts](https://fonts.google.com)

2. **Update the import** in `src/index.css`:
```css
/* Replace this line: */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap');

/* With your fonts, for example: */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Merriweather:ital,wght@0,400;0,700;1,400&display=swap');
```

3. **Update font-family** in `tailwind.config.js`:
```javascript
fontFamily: {
  sans: ['Poppins', 'system-ui', '-apple-system', 'sans-serif'],
  serif: ['Merriweather', 'Georgia', 'serif'],
},
```

### Changing Font Sizes

**Location**: `src/index.css`

```css
:root {
  /* Adjust these values */
  --text-base: 1rem;     /* 16px - base size */
  --text-lg: 1.125rem;   /* 18px */
  --text-xl: 1.25rem;    /* 20px */
  --text-2xl: 1.5rem;    /* 24px */
  --text-3xl: 1.875rem;  /* 30px */
  --text-4xl: 2.25rem;   /* 36px */
  --text-5xl: 3rem;      /* 48px */
  /* ... etc */
}
```

**Example - Larger text**:
```css
:root {
  --text-base: 1.125rem;  /* 18px instead of 16px */
  --text-5xl: 3.5rem;     /* 56px instead of 48px */
}
```

## Content Customization

### Updating Text Content

**Location**: `src/App.jsx`

Search for and replace:

1. **Organization name**: Search for `TexEvo`
2. **Tagline**: Find `"Reweave. Renew. Revive."`
3. **Mission statement**: Find the About section
4. **Contact info**: Find the Footer section

### Adding/Removing Team Members

**Location**: `src/App.jsx` - Find the `team` array

```javascript
const team = [
  { 
    name: 'Your Name Here', 
    role: 'Your Role', 
    quote: 'Your inspiring quote' 
  },
  { name: 'Team Member 2', role: 'Role 2' },
  // Add more members...
];
```

### Updating Statistics

**Location**: `src/App.jsx` - Find impact sections

```javascript
// Impact statistics
{ value: '92M', label: 'Your metric here' }

// Progress tracking
const institutions = [
  { name: 'Your Institution', donated: 847, type: 'school' },
  // Add more...
];
```

## Layout Customization

### Changing Section Order

**Location**: `src/App.jsx`

Sections are in this order:
1. Navigation
2. Hero
3. About
4. Impact
5. How It Works
6. Progress
7. Partners
8. Team
9. Growing Impact
10. Join Us
11. Footer

**To reorder**: Cut and paste entire `<section>` blocks

### Removing Sections

Find the section you want to remove and delete it:

```jsx
{/* You can comment out sections like this */}
{/* <section id="partners">...</section> */}

// Or delete them entirely
```

### Adding New Sections

Copy an existing section and modify:

```jsx
<section id="your-new-section" className="py-24 px-6">
  <div className="max-w-7xl mx-auto">
    <h2 style={{ 
      fontSize: 'var(--text-5xl)', 
      fontWeight: 'var(--font-bold)',
      color: 'var(--text-primary)'
    }}>
      Your Section Title
    </h2>
    {/* Your content here */}
  </div>
</section>
```

## Navigation Customization

**Location**: `src/App.jsx` - Find the `<nav>` section

```jsx
{['About', 'Impact', 'How It Works', 'Progress', 'Team', 'Join Us'].map(item => (
  // Replace with your menu items
))}
```

**Add/remove menu items**:
```jsx
{['Home', 'About', 'Services', 'Contact'].map(item => (
  // Your navigation items
))}
```

## Button Customization

### Button Styles

**Location**: `src/index.css`

```css
.btn-primary {
  background: var(--coral-primary);
  /* Modify padding, border-radius, etc. */
  padding: 1rem 2rem;
  border-radius: 9999px; /* Fully rounded */
}
```

**Change to square buttons**:
```css
.btn-primary {
  border-radius: 0.5rem; /* 8px rounded corners */
}
```

### Button Text

**Location**: `src/App.jsx`

Search for button text:
- "Join Us"
- "Donate Now"
- "Join TexEvo Team"
- "Donate Clothes"

## Animation Customization

### Adjusting Animation Speed

**Location**: `src/index.css`

```css
/* Floating animation speed */
@keyframes float {
  /* Change duration in App.jsx: */
  /* animation: float 6s ease-in-out infinite; */
  /* Try 3s for faster, 10s for slower */
}

/* Fade-in speed */
.fade-in-section {
  transition: opacity 1s ease-out; /* Change 1s to 0.5s or 2s */
}
```

### Disabling Animations

**Location**: `src/index.css`

```css
/* Add this to disable all animations */
* {
  animation: none !important;
  transition: none !important;
}
```

## Shadow Customization

**Location**: `src/index.css`

```css
:root {
  /* Adjust shadow opacity and size */
  --shadow-sm: 
    0 1px 2px 0 hsl(163, 88%, 15%, 0.05);  /* Make lighter/darker */
  
  --shadow-md:
    0 4px 6px -1px hsl(163, 88%, 15%, 0.1); /* Adjust size */
}
```

**Remove all shadows**:
```css
:root {
  --shadow-sm: none;
  --shadow-md: none;
  --shadow-lg: none;
  --shadow-xl: none;
}
```

## Responsive Design

### Adjusting Breakpoints

**Location**: `tailwind.config.js`

```javascript
theme: {
  screens: {
    'sm': '640px',
    'md': '768px',   // Tablet breakpoint
    'lg': '1024px',  // Desktop breakpoint
    'xl': '1280px',
  }
}
```

### Mobile-Specific Changes

**Location**: `src/App.jsx`

Find classes like:
- `md:grid-cols-2` - 2 columns on medium+ screens
- `md:flex` - Flex on medium+ screens
- `hidden md:flex` - Hidden on mobile, visible on desktop

## Social Media Links

**Location**: `src/App.jsx` - Footer section

```jsx
{['facebook', 'twitter', 'instagram', 'tiktok'].map((platform, i) => (
  // Wrap in <a> tag for actual links
  <a href="https://facebook.com/yourpage" target="_blank">
    <SocialIcon platform={platform} />
  </a>
))}
```

## Quick Customization Checklist

- [ ] Change brand colors (emerald, coral)
- [ ] Update organization name
- [ ] Replace tagline
- [ ] Update team members
- [ ] Update contact information
- [ ] Update statistics/metrics
- [ ] Change fonts (optional)
- [ ] Add real images (see IMAGES_GUIDE.md)
- [ ] Update social media links
- [ ] Adjust section order (optional)
- [ ] Test on mobile devices

## Need Help?

Common customization questions:

1. **"How do I make everything bigger?"**
   - Increase `--text-base` in `src/index.css`

2. **"How do I change the green color?"**
   - Change `--emerald-primary` in `src/index.css`

3. **"How do I add more team members?"**
   - Add entries to the `team` array in `src/App.jsx`

4. **"How do I remove a section?"**
   - Delete or comment out the `<section>` in `src/App.jsx`

Happy customizing! 🎨

