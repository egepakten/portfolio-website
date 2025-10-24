# How to Add Demo Images to Your Projects

## Current State

Your projects currently show colorful gradient placeholders with "Demo Preview" text. These act as beautiful placeholders until you add actual screenshots.

## Adding Demo Images

### Option 1: Using Local Images (Recommended)

1. **Create a screenshots folder** in your `public` directory:

   ```
   portfolio-website/
   └── public/
       └── screenshots/
           ├── ai-saas-platform.png
           ├── ecommerce-dashboard.png
           └── social-media-app.png
   ```

2. **Update the project in `src/components/Projects.jsx`:**
   ```javascript
   {
     title: "AI SaaS Platform",
     // ... other fields ...
     demoImage: "/screenshots/ai-saas-platform.png",  // ← Change this line
     demoGradient: "from-purple-500 via-pink-500 to-rose-500",
   }
   ```

### Option 2: Using External URLs

If your images are hosted elsewhere (like Imgur, Cloudinary, etc.):

```javascript
{
  title: "AI SaaS Platform",
  // ... other fields ...
  demoImage: "https://your-domain.com/images/demo.png",  // ← Use full URL
  demoGradient: "from-purple-500 via-pink-500 to-rose-500",
}
```

### Option 3: Interactive Login Demo

Show a live login interface demo (inspired by [WiseUni](https://www.wiseuni.co.uk/)):

```javascript
{
  title: "E-Commerce Dashboard",
  // ... other fields ...
  demoImage: null,  // ← Keep as null
  demoGradient: "from-cyan-500 via-blue-500 to-indigo-500",
  demoType: "login",  // ← Add this to show login interface
  demoUrl: "https://www.wiseuni.co.uk/",  // ← Optional: reference URL
}
```

This will display an interactive login form with:

- Email/Username input field
- Password input field
- Sign In button
- Remember me checkbox
- Forgot password link

### Option 4: Keep Gradients

If you prefer the gradient style, simply leave `demoImage: null` and customize the gradient:

```javascript
{
  title: "AI SaaS Platform",
  // ... other fields ...
  demoImage: null,  // ← Keep as null
  demoGradient: "from-blue-500 via-purple-500 to-pink-500",  // ← Customize colors
}
```

## Tips for Best Results

### Screenshot Recommendations

- **Dimensions**: 800x600px or 1200x900px (4:3 aspect ratio works best)
- **Format**: PNG or JPG
- **File size**: Keep under 500KB for fast loading
- **Content**: Show the main interface or most impressive feature

### Taking Screenshots

1. Open your project in the browser
2. Set browser window to ~1200px wide
3. Use browser dev tools or native screenshot tool
4. Crop to show the most important part
5. Optimize with tools like TinyPNG or Squoosh

### Tools to Create Better Demos

- **Mockup generators**: Place your screenshot in device mockups
- **Screen recording**: Convert to GIF with tools like Gifox or LICEcap
- **Design tools**: Use Figma/Photoshop to add annotations or highlights

## Example Projects Array

```javascript
const projects = [
  {
    title: "AI SaaS Platform",
    description: "A cutting-edge SaaS platform...",
    code: `// Your code here`,
    demoImage: "/screenshots/ai-platform.png", // ← Add your image
    demoGradient: "from-purple-500 via-pink-500 to-rose-500",
    technologies: ["Next.js", "OpenAI", "Prisma", "PostgreSQL"],
    liveLink: "https://your-project.com",
    githubLink: "https://github.com/yourusername/project",
    status: "PRODUCTION",
    year: "2025",
  },
  // ... more projects
];
```

## Interactive Project Cards

Your project cards are now **fully clickable**! Here's how they work:

### Main Click Action

- **Clicking anywhere on the card** → Opens the live demo URL in a new tab
- The cursor changes to a pointer on hover to indicate it's clickable

### Individual Buttons

- **External link icon** (top right) → Opens the live demo
- **GitHub icon** (top right) → Opens the GitHub repository
- These buttons work independently of the main card click

### Updating Links

Replace the placeholder URLs with your actual project links:

```javascript
{
  title: "AI SaaS Platform",
  // ... other fields ...
  liveLink: "https://your-project-demo.com",     // ← Your live demo URL
  githubLink: "https://github.com/you/repo",     // ← Your GitHub repo URL
}
```

**Currently set to:** `https://github.com/egepakten` (your GitHub profile)

## Quick Start

1. Take screenshots of your 6 projects
2. Save them in `public/screenshots/`
3. Update each project's `demoImage` field
4. Update `liveLink` and `githubLink` with your actual URLs
5. Save the file and refresh your browser

That's it! Your demos will now show real project screenshots and link to your live projects.
