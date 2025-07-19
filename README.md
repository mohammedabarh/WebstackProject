# EcoTrack - Sustainable Living Made Simple

EcoTrack is a comprehensive environmental impact tracking application built with React, TypeScript, and Tailwind CSS. Track your eco-friendly activities, connect with like-minded individuals, and make a positive impact on the environment.

## Features

- **Activity Tracking**: Log and monitor your environmental activities
- **Community Engagement**: Connect with other eco-conscious users
- **Impact Dashboard**: Visualize your environmental impact over time
- **Guidelines & Tips**: Learn sustainable living practices
- **User Profiles**: Personalized experience with user accounts
- **Responsive Design**: Works seamlessly on all devices

## Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Radix UI + Shadcn/ui
- **Routing**: React Router DOM
- **State Management**: React Query (TanStack Query)
- **Authentication**: Supabase Auth
- **Database**: Supabase PostgreSQL
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or bun package manager

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd eco-aware-clone-project
```

2. Install dependencies:
```bash
npm install
# or
bun install
```

3. Start the development server:
```bash
npm run dev
# or
bun dev
```

4. Open [http://localhost:8080](http://localhost:8080) in your browser.

## Deployment

### GitHub Pages (Recommended)

This project is configured for automatic deployment to GitHub Pages with proper SPA routing support:

1. **Enable GitHub Pages**: Go to your repository settings → Pages → Source: GitHub Actions
2. **Push to main branch**: The deployment workflow will run automatically
3. **Access your app**: Your app will be available at `https://yourusername.github.io/eco-aware-clone-project/`

The project includes:
- ✅ Automatic GitHub Actions workflow (`.github/workflows/deploy.yml`)
- ✅ Client-side routing support for GitHub Pages
- ✅ Proper 404 handling for SPA routes
- ✅ SEO-optimized meta tags
- ✅ All navigation uses React Router Links (no page reloads)

### Manual Deployment

To build for production:

```bash
npm run build
# or
bun run build
```

The `dist` folder contains the production build ready for deployment to any static hosting service.

### Other Hosting Platforms

- **Netlify**: Connect your GitHub repo for automatic deployments
- **Vercel**: Import your project for seamless deployments  
- **Surge.sh**: Simple static site hosting
- **Firebase Hosting**: Google's hosting solution

## Development

### Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Shadcn UI components
│   ├── Header.tsx      # Navigation header
│   ├── Footer.tsx      # Footer component
│   └── ...
├── pages/              # Page components
│   ├── Index.tsx       # Landing page
│   ├── Dashboard.tsx   # User dashboard
│   ├── Community.tsx   # Community page
│   └── ...
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── integrations/       # Third-party integrations
└── index.css          # Global styles & design system
```

### Design System

The project uses a comprehensive design system with semantic color tokens defined in `index.css` and `tailwind.config.ts`. Always use semantic tokens instead of hardcoded colors.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

For support and questions:
- Create an issue in this repository
- Check out the [Lovable documentation](https://docs.lovable.dev/)
- Join our community discussions