# Digital Clock

A minimalist digital clock built with Vite, Tailwind CSS v4, and TypeScript, featuring a fully responsive design and modern UI effects.

## Demo

🕒 [Live Demo](https://appunni.github.io/time/)

## Features

- Fully responsive design across all device sizes
- Custom typography with Space Grotesk for digits and Inter for date
- Modern UI with backdrop blur and text glow effects
- 24-hour digital clock display
- Date display with day, month, and year
- Touch-optimized for mobile devices
- Landscape orientation support
- PWA-ready with safe area insets
- No external dependencies for core functionality
- Progressive enhancement for modern browsers

## Responsive Design

The clock adapts seamlessly to different screen sizes and orientations:

- Extra Small (< 375px)
  - Optimized layout for compact displays
  - Adjusted typography and spacing
  - Streamlined visual effects
  
- Mobile (375px - 640px)
  - Enhanced touch interactions
  - Optimized digit sizes
  - Touch-friendly spacing
  
- Tablet (640px - 768px)
  - Balanced viewing experience
  - Larger digits and improved spacing
  - Enhanced visual effects
  
- Desktop (> 768px)
  - Full-scale display
  - Maximum visual impact
  - Rich backdrop effects
  
- Landscape Mode
  - Orientation-specific optimizations
  - Adjusted vertical spacing
  - Optimized digit proportions

## Technologies

- [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling
- [Tailwind CSS v4](https://tailwindcss.com/) - A utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org/) - JavaScript with syntax for types
- Google Fonts (Space Grotesk & Inter)
- Custom Tailwind utilities for advanced effects

## Browser Support

- Modern browsers with CSS Grid and Backdrop Filter support
- Progressive enhancement for older browsers
- Touch-enabled devices fully supported
- PWA-compatible with safe area inset handling
- Optimized performance across devices

## Development

```bash
# Clone the repository
git clone https://github.com/appunni/time.git

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
.
├── src/
│   ├── main.ts          # Clock implementation
│   └── style.css        # Tailwind imports and custom utilities
├── index.html           # Entry point with font imports
├── vite.config.ts       # Vite configuration
└── tsconfig.json        # TypeScript configuration
```

## Technical Details

### Custom Utilities
- Responsive breakpoints including extra small (xs) devices
- Text glow effects via custom shadows
- Backdrop blur progressive enhancement
- PWA safe area inset handling

### Performance Optimizations
- Efficient DOM updates
- Hardware-accelerated animations
- Optimized font loading
- Touch event handling
- Responsive image scaling

## Deployment

The project is automatically deployed to GitHub Pages using GitHub Actions workflow when changes are pushed to the main branch. The workflow:
1. Builds the project
2. Deploys to GitHub Pages
3. Makes it available at [https://appunni.github.io/time/](https://appunni.github.io/time/)

## License

MIT
