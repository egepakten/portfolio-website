# How to Add Screenshots to Your Projects

## Option 1: Take a Screenshot and Save Locally (Recommended)

### Step 1: Take a Screenshot

1. Open your project: https://static-code-analyser-iota.vercel.app
2. Take a screenshot:
   - **Mac**: Press `Cmd + Shift + 4` then `Space` to capture the window
   - **Windows**: Press `Win + Shift + S`
3. Save it as: `python-static-code-analyzer.png`

### Step 2: Add to Your Portfolio

1. Save the screenshot in: `/Users/EgePakten/Desktop/portfolio-website/public/screenshots/`
2. Update the project in `src/components/Projects.jsx`:

```javascript
{
  title: "Python Static Code Analyzer",
  // ...
  demoImage: "/screenshots/python-static-code-analyzer.png",
  // ...
}
```

## Option 2: Use an External URL

If your screenshot is hosted elsewhere (Imgur, Cloudinary, etc.):

```javascript
demoImage: "https://your-image-host.com/screenshot.png",
```

## Current Setup

I've set up the image URL as:

```javascript
demoImage: "https://static-code-analyser-iota.vercel.app/og-image.png";
```

If this doesn't exist on your site, the system will automatically fall back to the purple gradient.

## Tips for Best Screenshots

1. **Resolution**: 1200x800px or higher
2. **Format**: PNG or JPG
3. **Content**: Show the main interface with key features
4. **File Size**: Keep under 500KB for fast loading
5. **Clean**: Close unnecessary browser extensions/toolbars

## Quick Command to Create Screenshot Folder

```bash
mkdir -p /Users/EgePakten/Desktop/portfolio-website/public/screenshots
```

Then just drag and drop your screenshot there!
