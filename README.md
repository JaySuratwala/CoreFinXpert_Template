# CoreFinXpert Template

Website Link is on this [click](https://jaysuratwala.github.io/CoreFinXpert_Template/).

This is a portfolio website template for **CoreFinXpert**, designed with Next.js and deployed to GitHub Pages. It is built to showcase projects and professional work with smooth animations, interactive features, and modern UI components. This template is customizable to suit any professional portfolio needs.

## Features

- **Next.js Framework**: Optimized for production with static site generation.
- **Responsive Layout**: Designed to be mobile-friendly and responsive across all devices.
- **Interactive UI Components**: Custom animations, smooth transitions, and UI elements powered by React and Three.js.
- **TailwindCSS**: Utility-first CSS framework for fast and responsive styling.
- **TypeScript Support**: Ensuring type safety and better developer experience.
- **GitHub Pages Deployment**: Easily deployable using GitHub Pages or any other hosting platform.
  
## Installation

To run this project locally, follow these steps:

### Prerequisites

- Node.js (>=16.x)
- npm or yarn

### Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/JaySuratwala/CoreFinXpert_Template.git
   cd CoreFinXpert_Template
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Visit the app**:
   Open `http://localhost:3000` in your browser to view the application.

## Deployment

This project is set up to deploy to GitHub Pages, follow these steps to deploy:

1. **Build the app**:
   ```bash
   npm run build
   ```

2. **Export the static files**:
   ```bash
   npm run export
   ```

3. **Deploy to GitHub Pages**:
   ```bash
   npm run deploy
   ```

   Ensure that your repository is set up with GitHub Pages, and the static files will be deployed under your specified repository path (e.g., `https://<username>.github.io/<repo-name>`).

## Configuration

- `next.config.js`: This file contains all the custom configurations like `basePath`, `trailingSlash`, and `output` settings for GitHub Pages.
  
- `package.json`: Contains the scripts for building, exporting, and deploying the project.

## Troubleshooting

- If you encounter a **404 page not found** error after deployment, make sure that your `basePath` is correctly set in `next.config.js` to match the repository name.
  
- To resolve potential issues with missing dependencies or build errors, ensure you have installed the required packages and have an up-to-date version of `npm` or `yarn`.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```

Feel free to modify it as needed!
