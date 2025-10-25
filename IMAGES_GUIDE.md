# Adding Real Images to TexEvo Website

This guide will help you replace the SVG icon placeholders with actual photos and images.

## Image Locations

The website currently uses SVG icon components located in `src/components/Icons.jsx`. Here's where you can add real images:

### 1. Hero Section Background
- **Location**: Hero section (top of page)
- **Recommended**: A high-quality photo of textiles, fabrics, or fashion items being sorted/recycled
- **Size**: 1920x1080px or larger
- **Format**: JPG or WebP for best performance

**How to add**:
```jsx
// In src/App.jsx, find the Hero Section and replace the pattern with:
<div 
  className="absolute inset-0 opacity-30"
  style={{
    transform: `translateY(${scrollY * 0.5}px)`,
    backgroundImage: `url('/images/hero-textiles.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }}
/>
```

### 2. About Section - Process Icons
- **Current**: SVG icons for Grow, Collect, Recycle
- **Replacement Options**:
  - Keep SVG icons (clean, scalable)
  - Replace with photos of actual process steps
  
**Recommended photos**:
- `grow.jpg`: Plants growing or sustainable materials
- `collect.jpg`: Clothes collection bins or donation events  
- `recycle.jpg`: Textile recycling machinery or process

**How to add**:
```jsx
// Create an images folder: public/images/
// Add your images: grow.jpg, collect.jpg, recycle.jpg

// Then replace in the About section:
<img 
  src="/images/grow.jpg" 
  alt="Growing sustainability"
  className="w-16 h-16 rounded-lg object-cover"
/>
```

### 3. Team Section - Profile Photos
- **Current**: SVG person icons
- **Recommended**: Professional headshots of team members
- **Size**: 400x400px (square)
- **Format**: JPG or WebP

**Folder structure**:
```
public/
  images/
    team/
      founder.jpg
      sarah-chen.jpg
      marcus-johnson.jpg
      elena-rodriguez.jpg
      david-kim.jpg
```

**How to add**:
```jsx
// Replace the PersonIcon components with:
<img 
  src="/images/team/founder.jpg"
  alt="Eucharist Darius Satya Suhargo"
  className="w-32 h-32 rounded-full object-cover shadow-2xl"
/>
```

### 4. Impact Statistics Section
- **Current**: SVG icons for waste, water, earth
- **Recommended**: Infographic-style images or keep icons
- **Alternative**: Use high-quality photos showing:
  - Textile waste piles
  - Water usage in textile production
  - Environmental impact

### 5. Partners Section
- **Recommended**: Partner company logos
- **Size**: 200x80px (landscape)
- **Format**: PNG with transparent background

**How to add**:
```jsx
<div className="flex justify-center mb-4">
  <img 
    src="/images/partners/pt-mitra-saruta.png"
    alt="PT Mitra Saruta"
    className="h-16 object-contain"
  />
</div>
```

## Quick Setup: Add All Images

1. **Create the images folder**:
```bash
mkdir -p public/images/team
mkdir -p public/images/partners
mkdir -p public/images/process
```

2. **Add your images** to these folders

3. **Update the components** to use real images instead of SVG icons

## Free Image Resources

If you need placeholder images while waiting for real photos:

- **Unsplash**: https://unsplash.com (search: "textiles", "recycling", "fashion", "sustainability")
- **Pexels**: https://pexels.com
- **Pixabay**: https://pixabay.com

## Image Optimization

Before adding images:

1. **Compress images**: Use https://tinypng.com or https://squoosh.app
2. **Convert to WebP**: Better compression, faster loading
3. **Use responsive images**: Different sizes for mobile/desktop

## Example: Converting Icons to Images

Here's a complete example of replacing the Founder's icon with a real photo:

```jsx
// Before (in src/App.jsx):
<div className="mb-6 transform group-hover:scale-110 transition-transform">
  <PersonIcon className="text-emerald-700" />
</div>

// After:
<div className="mb-6 transform group-hover:scale-110 transition-transform">
  <img 
    src="/images/team/founder.jpg"
    alt="Eucharist Darius Satya Suhargo - Founder & CEO"
    className="w-32 h-32 rounded-full object-cover shadow-2xl border-4 border-emerald-200"
  />
</div>
```

## Need Help?

If you need assistance replacing specific icons with images:

1. Identify which section needs images
2. Prepare your images (compress and optimize)
3. Place them in the `public/images/` folder
4. Update the corresponding component in `src/App.jsx`

The current SVG icons are professional and work well, so only replace them if you have high-quality photos that enhance the design!

