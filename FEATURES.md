# Portfolio Website Features Guide

## 🎨 Visual Features

### 1. Animated Cursor Spotlight

- A beautiful radial gradient follows your cursor across the entire page
- Creates an immersive, interactive experience
- Subtle and non-intrusive design

### 2. Glassmorphism Design

- All cards feature a glass-like translucent effect
- Backdrop blur with subtle borders
- Modern, elegant appearance

### 3. Dark Navy Theme

- Primary: #0a192f (Navy Dark)
- Secondary: #112240 (Navy Light)
- Accent: #64ffda (Cyan) and #00d9ff (Teal)

## 📱 Sections Breakdown

### Hero Section

- **Animated Gradient Text**: Your name pulses with cyan/teal gradients
- **Floating CTAs**: Two buttons with hover animations
- **Decorative Elements**: Floating geometric shapes
- **Smooth Animations**: Fade-in effects on page load

### About Section (Terminal Style)

- **Typewriter Effect**: Text appears character by character
- **Terminal UI**: Mimics a real terminal with colored dots
- **Blinking Cursor**: Authentic terminal cursor animation
- **Stats Cards**: 3 animated statistics cards below

### Experience Section

- **Interactive Timeline**: Vertical timeline with animated dots
- **Expandable Cards**: Click to reveal achievements
- **Company Logos**: Emoji placeholders (replace with actual logos)
- **Tech Tags**: Bubble-style technology indicators
- **Smooth Transitions**: AnimatePresence handles expansions

### Projects Section

- **3D Tilt Effect**: Cards rotate slightly on hover
- **Glassmorphic Cards**: Semi-transparent with backdrop blur
- **Hover Overlays**: Shows GitHub and live demo links
- **Gradient Headers**: Each project has unique gradient
- **Tech Stack Display**: Technology badges at bottom

### Tech Stack Section

- **Grid Layout**: Responsive grid of technology cards
- **Hover Animations**: Cards lift and show proficiency
- **Circular Progress**: SVG circles animate to show skill level
- **Category Tags**: Organized by technology type
- **Icon-based**: Uses emoji icons (can be replaced with SVGs)

### Contact Section

- **Dual Layout**: Contact info + form side-by-side
- **Social Links**: Animated social media buttons
- **Form Validation**: Built-in HTML5 validation
- **Submit Animation**: Loading state with spinner
- **Status Feedback**: Success/error messages
- **Availability Status**: Shows online status

### Sidebar Navigation

- **Fixed Position**: Always visible on desktop
- **Active State**: Highlights current section
- **Smooth Scroll**: Animates to section on click
- **Icon-based**: Unique symbols for each section
- **Hover Tooltips**: Labels appear on hover
- **Mobile Hidden**: Only shows on large screens

## 🎭 Animations & Effects

### Framer Motion Animations

1. **Fade-in on Scroll**: `whileInView` triggers
2. **Stagger Effects**: Sequential animations
3. **Hover Interactions**: Scale, rotate, and lift effects
4. **Page Transitions**: Smooth enter/exit animations

### CSS Animations

1. **Gradient Animation**: Text color cycles
2. **Float Animation**: Elements bob up and down
3. **Glow Effect**: Pulsing shadow on buttons
4. **Shimmer Effect**: Moving gradient background
5. **Typewriter**: Expanding width animation

### Interactive Effects

1. **Cursor Tracking**: Spotlight follows mouse
2. **3D Transforms**: Cards tilt on hover
3. **Progress Bars**: Animate on view
4. **Scroll Detection**: Updates active nav item

## 🛠️ Customization Guide

### Change Your Information

1. **Hero Section** (`src/components/Hero.jsx`)

   - Line 13: Change "Your Name"
   - Line 16: Update tagline
   - Line 20-22: Edit bio

2. **About Section** (`src/components/About.jsx`)

   - Line 7-23: Edit terminal lines
   - Line 67-71: Update stats

3. **Experience** (`src/components/Experience.jsx`)

   - Line 9-47: Replace with your experience

4. **Projects** (`src/components/Projects.jsx`)

   - Line 9-65: Add your projects
   - Replace emoji with actual images

5. **Tech Stack** (`src/components/TechStack.jsx`)

   - Line 9-20: Update technologies and proficiency

6. **Contact** (`src/components/Contact.jsx`)
   - Line 51-54: Update social links
   - Line 19-28: Configure form submission

### Replace Emojis with Images

For project images:

```jsx
// Replace:
<div className="text-8xl">{project.image}</div>

// With:
<img src={project.image} alt={project.title} className="w-full h-full object-cover" />
```

For tech icons:

```jsx
// Replace:
<div className="text-5xl">{tech.icon}</div>

// With:
<img src={tech.icon} alt={tech.name} className="w-16 h-16" />
```

### Modify Colors

Edit `tailwind.config.js`:

```js
colors: {
  navy: {
    dark: '#YOUR_COLOR',
    light: '#YOUR_COLOR',
  },
  accent: {
    cyan: '#YOUR_COLOR',
    teal: '#YOUR_COLOR',
  },
},
```

### Add New Sections

1. Create component in `src/components/YourSection.jsx`
2. Import in `src/App.jsx`
3. Add to sidebar in `src/components/Sidebar.jsx`
4. Add section ID to your component

## 📱 Responsive Design

- **Desktop (lg)**: Full sidebar, multi-column grids
- **Tablet (md)**: 2-column layouts, simplified nav
- **Mobile**: Single column, burger menu alternative

## 🚀 Performance Tips

1. **Lazy Load Images**: Use React.lazy for heavy components
2. **Optimize Animations**: Reduce motion for accessibility
3. **Code Splitting**: Dynamic imports for sections
4. **Image Optimization**: Use WebP format, compress images
5. **Reduce Bundle Size**: Tree-shake unused Framer Motion features

## 🎯 Next Steps

1. **Add Real Content**: Replace placeholder text
2. **Upload Images**: Add project screenshots
3. **Configure Form**: Connect to email service (EmailJS, Formspree)
4. **Add Analytics**: Google Analytics or Plausible
5. **SEO Optimization**: Add meta tags, sitemap
6. **Deploy**: Vercel, Netlify, or GitHub Pages

## 🔧 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
```

## 📦 Key Dependencies

- **React 18**: UI library
- **Vite**: Build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **PostCSS**: CSS processing
- **Autoprefixer**: CSS vendor prefixing

## 🎨 Design Principles

1. **Minimalist**: Clean, uncluttered design
2. **Interactive**: Engaging hover effects
3. **Modern**: Latest design trends
4. **Accessible**: Keyboard navigation, semantic HTML
5. **Performant**: Optimized animations, lazy loading
6. **Responsive**: Works on all screen sizes

Enjoy your new portfolio! 🚀
