# TexEvo Website - Complete Project Structure

## 📁 File Organization

```
E:\Documents\Homework\Coding\TexEvo\
│
├── 📄 Configuration Files
│   ├── package.json              # Dependencies and scripts
│   ├── vite.config.js            # Vite build configuration
│   ├── tailwind.config.js        # Tailwind CSS configuration
│   ├── postcss.config.js         # PostCSS configuration
│   └── .gitignore                # Git ignore rules
│
├── 📄 Documentation
│   ├── README.md                 # Project overview
│   ├── GETTING_STARTED.md        # Quick start guide ⭐ START HERE
│   ├── CUSTOMIZATION_GUIDE.md    # How to customize everything
│   ├── IMAGES_GUIDE.md           # How to add real images
│   ├── DEPLOYMENT_GUIDE.md       # How to deploy to production
│   └── PROJECT_STRUCTURE.md      # This file
│
├── 📁 public/                    # Static assets
│   ├── vite.svg                  # Vite logo
│   └── images/                   # Your images go here
│       └── .gitkeep              # Keeps folder in git
│
├── 📄 index.html                 # HTML entry point
│
└── 📁 src/                       # Source code
    ├── main.jsx                  # React entry point
    ├── index.css                 # Global styles & CSS variables ⭐ IMPORTANT
    ├── App.jsx                   # Main website component ⭐ MAIN FILE
    └── components/
        └── Icons.jsx             # SVG icon components
```

## 📄 File Purposes

### Core Files (You'll Edit These)

#### `src/App.jsx` ⭐ MOST IMPORTANT
**What it is**: The main website component with all sections  
**What to edit**:
- Organization name (search "TexEvo")
- Tagline ("Reweave. Renew. Revive.")
- Team members (team array)
- Statistics (institutions array)
- Partners information
- All content text

#### `src/index.css` ⭐ IMPORTANT
**What it is**: Global styles and CSS variables  
**What to edit**:
- Colors (--emerald-primary, --coral-primary)
- Fonts (font-family imports)
- Spacing and shadows
- Typography scale

#### `src/components/Icons.jsx`
**What it is**: Professional SVG icons (replaced emojis)  
**What to edit**: Probably nothing, unless you want different icons

### Configuration Files (Usually Don't Edit)

#### `package.json`
**What it is**: Project dependencies and scripts  
**Edit if**: Adding new packages

#### `tailwind.config.js`
**What it is**: Tailwind CSS configuration  
**Edit if**: Adding custom colors to Tailwind

#### `vite.config.js`
**What it is**: Build tool configuration  
**Edit if**: Deploying to subdirectory

#### `postcss.config.js`
**What it is**: CSS processing configuration  
**Edit if**: Rarely needed

### Static Files

#### `public/images/`
**What it is**: Folder for your images  
**Add**: Team photos, partner logos, hero images

#### `index.html`
**What it is**: HTML template  
**Edit if**: Changing page title or meta tags

### Entry Files (Don't Edit)

#### `src/main.jsx`
**What it is**: React initialization  
**Edit**: Never (unless you know React well)

## 🎯 Common Editing Tasks

### Task: Change Organization Name
**Files to edit**: 
- `src/App.jsx` (search for "TexEvo")
- `README.md`
- `index.html` (page title)

### Task: Change Colors
**Files to edit**:
- `src/index.css` (CSS variables section)

### Task: Update Content
**Files to edit**:
- `src/App.jsx` (all sections)

### Task: Add Team Members
**Files to edit**:
- `src/App.jsx` (find the `team` array)

### Task: Add Images
**Files to edit**:
- Add images to `public/images/`
- Update `src/App.jsx` (replace Icon components)
- See `IMAGES_GUIDE.md`

### Task: Change Fonts
**Files to edit**:
- `src/index.css` (Google Fonts import)
- `tailwind.config.js` (font-family)

### Task: Deploy Website
**Files to read**:
- `DEPLOYMENT_GUIDE.md`

## 📊 File Sizes (Approximate)

```
Total Project Size: ~150MB (with node_modules)
Source Code Only: ~50KB

Breakdown:
- node_modules/: ~145MB (dependencies)
- src/: ~30KB
- public/: <1KB
- docs/: ~20KB
- config: <5KB
```

## 🔍 Finding Specific Content

### Navigation Menu Items
**Location**: `src/App.jsx`  
**Search for**: `['About', 'Impact', 'How It Works'`

### Hero Section
**Location**: `src/App.jsx`  
**Search for**: `Reweave. Renew. Revive`

### About Section
**Location**: `src/App.jsx`  
**Search for**: `id="about"`

### Team Section
**Location**: `src/App.jsx`  
**Search for**: `const team = [`

### Footer
**Location**: `src/App.jsx`  
**Search for**: `<footer`

### Colors
**Location**: `src/index.css`  
**Search for**: `:root {`

### Fonts
**Location**: `src/index.css`  
**Search for**: `@import url('https://fonts.google`

## 🎨 Design System Files

### Colors
**Defined in**: `src/index.css`  
**Used in**: `src/App.jsx`, `tailwind.config.js`

### Typography
**Defined in**: `src/index.css`  
**Font imports**: `src/index.css`  
**Font config**: `tailwind.config.js`

### Shadows
**Defined in**: `src/index.css`  
**Used in**: `src/App.jsx` (via CSS classes)

### Icons
**Defined in**: `src/components/Icons.jsx`  
**Used in**: `src/App.jsx`

## 📦 Dependencies

### Production Dependencies
- `react` - UI library
- `react-dom` - React DOM rendering

### Development Dependencies
- `vite` - Build tool & dev server
- `@vitejs/plugin-react` - React support for Vite
- `tailwindcss` - Utility-first CSS
- `autoprefixer` - CSS vendor prefixes
- `postcss` - CSS processing

## 🚀 Build Output

When you run `npm run build`, it creates:

```
dist/
├── index.html           # Optimized HTML
├── assets/
│   ├── index-[hash].js  # Bundled JavaScript
│   └── index-[hash].css # Bundled CSS
└── images/              # Your images (if any)
```

**Deploy**: Upload entire `dist/` folder to hosting

## 💾 Version Control

### Ignored Files (`.gitignore`)
- `node_modules/` - Dependencies (reinstall with npm install)
- `dist/` - Build output (regenerate with npm run build)
- `.env` - Environment variables (contains secrets)
- `.DS_Store` - Mac system files

### What to Commit
- ✅ All source code (`src/`)
- ✅ Configuration files
- ✅ Documentation
- ✅ `package.json` and `package-lock.json`
- ✅ Your images in `public/images/`

### What NOT to Commit
- ❌ `node_modules/`
- ❌ `dist/`
- ❌ `.env` files
- ❌ IDE-specific files

## 🎓 Learning Path

**New to React?** Edit these in order:

1. **Content only**: Edit text in `src/App.jsx`
2. **Colors**: Change colors in `src/index.css`
3. **Structure**: Rearrange sections in `src/App.jsx`
4. **Advanced**: Add new sections, components

## 🔧 Maintenance

### Keep Dependencies Updated
```bash
npm update
```

### Check for Security Issues
```bash
npm audit
npm audit fix
```

## 📱 Development Workflow

1. **Edit code** in `src/`
2. **Save file** (auto-reload in browser)
3. **Check browser** at http://localhost:5173
4. **Repeat**

## 🎯 Priority Files

If you're short on time, focus on these:

1. ⭐⭐⭐ `src/App.jsx` - All content
2. ⭐⭐⭐ `src/index.css` - Colors and styles
3. ⭐⭐ `public/images/` - Your images
4. ⭐ Documentation files - For reference

## 📚 Additional Resources

### Official Documentation
- [React](https://react.dev)
- [Vite](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)

### Tutorials Used
1. **Colors & Depth**: HSL color system, layering, shadows
2. **Typography**: Font hierarchy, sizing, emphasis

---

**Quick Reference**: Keep this file open while working on your project!

