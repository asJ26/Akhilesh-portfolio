# Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features a clean design, dark mode support, and smooth animations.

Live Demo: [https://asj26.github.io/Akhilesh-portfolio/](https://asj26.github.io/Akhilesh-portfolio/)

## Features

- 🌓 Dark/Light mode support
- 🎨 Modern and clean design
- 📱 Fully responsive
- ⚡ Fast performance
- 🔄 Smooth animations
- 🎯 SEO optimized
- 🚀 Automated GitHub Pages deployment

## Technologies Used

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Deployment**: GitHub Pages
- **CI/CD**: GitHub Actions

## Prerequisites

- Node.js 18 or later
- npm or yarn
- Git

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/asJ26/Akhilesh-portfolio.git
   cd Akhilesh-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── public/              # Static assets
│   ├── images/         # Image files
│   └── ...
├── src/
│   ├── app/            # Next.js app directory
│   ├── components/     # React components
│   │   ├── home/      # Home page components
│   │   ├── layout/    # Layout components
│   │   └── ui/        # Reusable UI components
│   ├── constants/     # Constants and static data
│   ├── context/       # React context providers
│   ├── hooks/         # Custom React hooks
│   ├── lib/           # Utility functions
│   ├── styles/        # Global styles
│   ├── types/         # TypeScript type definitions
│   └── utils/         # Helper functions
└── ...config files
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Deployment

The website is automatically deployed to GitHub Pages using GitHub Actions. The deployment workflow is triggered whenever changes are pushed to the main branch.

To deploy manually:

1. Build the project:
   ```bash
   npm run build
   ```

2. Push changes to GitHub:
   ```bash
   git add .
   git commit -m "Your commit message"
   git push
   ```

3. The GitHub Actions workflow will automatically deploy your changes.

## Making Changes

You can make changes in two ways:

1. **Locally**:
   - Clone the repository
   - Create a new branch
   - Make changes
   - Push to GitHub
   - Create a pull request

2. **Directly on GitHub**:
   - Navigate to the file you want to edit
   - Click the pencil icon
   - Make your changes
   - Commit directly to the main branch

## Customization

1. **Content**: Update the content in `src/constants/` directory
2. **Styling**: Modify `tailwind.config.js` and `src/app/globals.css`
3. **Components**: Edit or add components in `src/components/`
4. **Images**: Add images to `public/images/`

## Contributing

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Create a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

Akhilesh Jadhav
- GitHub: [@asJ26](https://github.com/asJ26)
- LinkedIn: [Akhilesh Jadhav]([https://www.linkedin.com/in/akhilesh-jadhav-data/](https://www.linkedin.com/in/akhilesh-s-jadhav/))
- Medium: [@akhileshjadhav]([https://medium.com/@akhileshjadhav](https://medium.com/@akhileshjadhav26))
