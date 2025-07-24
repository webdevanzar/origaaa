# Origa - Modern Next.js Project

A modern Next.js 15 application with TypeScript, Turbopack, and a well-organized src folder structure.

## 🚀 Features

- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Turbopack** for faster development builds
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Modern folder structure** with src organization

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── services/          # Service pages
├── components/            # React components
│   ├── shared/           # Shared/reusable components
│   │   ├── Card.tsx
│   │   ├── Modal.tsx
│   │   ├── MotionDiv.tsx
│   │   ├── SonnerProvider.tsx
│   │   └── TypingEffect.tsx
│   ├── ui/               # UI components
│   │   └── Robot.tsx
│   ├── About.tsx
│   ├── Banner.tsx
│   ├── Blogs.tsx
│   ├── ClientLogo.tsx
│   ├── Contact.tsx
│   ├── Features.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Industries.tsx
│   ├── Navbar.tsx
│   ├── Services.tsx
│   ├── Stat.tsx
│   ├── Testimonial.tsx
│   └── Whatsapp.tsx
├── lib/                  # Library code and constants
│   └── index.ts         # Exported constants and utilities
├── types/               # TypeScript type definitions
└── utils/               # Utility functions
    └── cn.ts           # Class name utility
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd origa
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

## 📝 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🔧 Configuration

### Next.js Config
- Turbopack enabled for faster development
- SVG support configured
- Image optimization settings

### TypeScript
- Strict mode enabled
- Path aliases configured (`@/*` points to `src/*`)
- Modern module resolution

### Tailwind CSS
- Custom color palette
- Custom animations
- Optimized for src folder structure

## 🎨 Styling

The project uses Tailwind CSS with custom configurations:

- **Custom Colors**: `btn` (#25ab79), `btnEnd` (#9c7a3d)
- **Custom Animations**: Infinite scroll animation
- **Responsive Design**: Mobile-first approach

## 📱 Components

### Main Components
- **Hero**: Landing section with call-to-action
- **About**: Company information section
- **Services**: Service offerings display
- **Features**: Key features showcase
- **Contact**: Contact form and information
- **Footer**: Site footer with links

### Shared Components
- **Card**: Reusable card component
- **Modal**: Modal dialog component
- **MotionDiv**: Framer Motion wrapper
- **SonnerProvider**: Toast notifications
- **TypingEffect**: Animated typing effect

## 🚀 Deployment

The project is ready for deployment on Vercel, Netlify, or any other platform that supports Next.js.

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

## 📄 License

This project is licensed under the MIT License.
