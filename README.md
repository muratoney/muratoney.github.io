# Personal Website


A modern, responsive personal website built with React, featuring a clean design and smooth animations. This website showcases Murat's skills as a developer and photographer.

## Features

- **Modern React Architecture**: Built with React 18 and functional components
- **Responsive Design**: Fully responsive across all devices
- **Smooth Animations**: CSS animations and transitions for enhanced UX
- **Interactive Components**: 
  - Mobile-friendly navigation with hamburger menu
  - Contact form with validation
  - Photography gallery with filtering
  - Project showcase with technology tags
- **Routing**: Client-side routing with React Router
- **Performance Optimized**: Efficient component structure and lazy loading ready

## Pages

1. **Home**: Hero section, about me, skills, and contact form
2. **Projects**: Showcase of development projects with technology stacks
3. **Photography**: Photo gallery with category filtering and equipment list

## Technologies Used

- **Frontend**: React 18, React Router DOM
- **Styling**: CSS3 with modern features (Grid, Flexbox, CSS Variables)
- **Icons**: Font Awesome 6
- **Fonts**: Inter (Google Fonts)
- **Build Tool**: Create React App

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository** (if you have the files locally, skip this step):
   ```bash
   git clone <repository-url>
   cd murat-website
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm start
   ```

4. **Open your browser** and navigate to `http://localhost:3000`

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (not recommended)

## Project Structure

```
src/
├── components/
│   ├── Navbar.js          # Navigation component
│   └── Navbar.css         # Navigation styles
├── pages/
│   ├── Home.js            # Home page component
│   ├── Home.css           # Home page styles
│   ├── Projects.js        # Projects page component
│   ├── Projects.css       # Projects page styles
│   ├── Photography.js     # Photography page component
│   └── Photography.css    # Photography page styles
├── App.js                 # Main app component
├── App.css                # Global styles
├── index.js               # App entry point
└── index.css              # Base styles
```

## Customization

### Content Updates

1. **Personal Information**: Update content in the respective page components
2. **Projects**: Modify the `projects` array in `src/pages/Projects.js`
3. **Photography**: Update the `photos` array in `src/pages/Photography.js`
4. **Contact Information**: Edit contact details in `src/pages/Home.js`

### Styling

- **Colors**: Update CSS custom properties in the respective CSS files
- **Layout**: Modify grid and flexbox properties in the CSS files
- **Animations**: Adjust transition and animation properties

### Adding New Pages

1. Create a new component in the `src/pages/` directory
2. Add the route in `src/App.js`
3. Create corresponding CSS file
4. Update navigation in `src/components/Navbar.js`

## Deployment

### Build for Production

```bash
npm run build
```

This creates a `build` folder with optimized production files.

### Deploy Options

- **Netlify**: Drag and drop the `build` folder
- **Vercel**: Connect your repository for automatic deployments
- **GitHub Pages**: Use `gh-pages` package
- **AWS S3**: Upload build files to S3 bucket

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Features

- Optimized component structure
- Efficient re-rendering with React hooks
- CSS animations for smooth interactions
- Responsive images and lazy loading ready
- Minimal bundle size

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

For questions or support, please reach out through the contact form on the website.

---

**Note**: This is a React conversion of the original HTML/CSS/JavaScript website. All functionality has been preserved and enhanced with modern React patterns. 
