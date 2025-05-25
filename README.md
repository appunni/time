# Digital Clock

A minimalist digital clock built with Vite, Tailwind CSS v4, and TypeScript.

## Demo

🕒 [Live Demo](https://appunni.github.io/time/)

## Technologies

- [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling
- [Tailwind CSS v4](https://tailwindcss.com/) - A utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org/) - JavaScript with syntax for types

## Features

- 24-hour digital clock display
- Date display with day, month, and year
- Responsive design
- Modern UI with backdrop blur effects
- Mobile-friendly interface
- No external dependencies for core functionality

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
│   └── style.css        # Tailwind imports
├── index.html           # Entry point
├── vite.config.ts       # Vite configuration
└── tsconfig.json        # TypeScript configuration
```

## Deployment

The project is automatically deployed to GitHub Pages using GitHub Actions workflow when changes are pushed to the main branch. The workflow:
1. Builds the project
2. Deploys to GitHub Pages
3. Makes it available at [https://appunni.github.io/time/](https://appunni.github.io/time/)

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to check [issues page](https://github.com/appunni/time/issues).

## License

MIT
