# Stefan Radev CV Website - Claude Code Memory

## Project Overview
React CV/Portfolio website built with:
- **Framework**: React 19 + TypeScript + Vite
- **UI Library**: Mantine v8
- **Icons**: Tabler Icons
- **Styling**: CSS-in-JS with Mantine
- **Deployment**: Vercel
- **Repository**: https://github.com/StefanRadev91/StefanRadevSite

## Project Structure
```
cv-website/
├── src/
│   ├── components/
│   │   ├── Footer.tsx          # Contact info + social links
│   │   ├── HeroSection.tsx     # Main intro section with theme toggle
│   │   ├── AboutSection.tsx    # About me content
│   │   ├── PortfolioSection.tsx # Portfolio/work examples
│   │   └── BlogSection.tsx     # Articles/blog posts
│   ├── assets/                 # Images, logos, and PDF files
│   │   ├── StefanR.pdf         # CV file for download
│   │   └── [various images]    # Logo images and profile photo
│   ├── App.tsx                 # Main app component
│   └── main.tsx               # Entry point
├── package.json
└── vite.config.ts
```

## Available Scripts
```bash
npm run dev        # Start development server
npm run build      # Build for production (runs tsc -b && vite build)
npm run lint       # Run ESLint
npm run preview    # Preview production build
```

## Recent Changes
- **Header Removal & Simplification** (Latest):
  - Removed Header component entirely
  - Site now starts directly from Hero section
  - Theme toggle moved to top-right corner of Hero section
  - Cleaner, more modern single-page design

- **Blog/Articles Section Added**:
  - New BlogSection.tsx component with two article cards
  - Social media-style previews for external articles
  - Responsive two-column layout (mobile stacks vertically)

- **Enhanced Mobile Responsiveness**:
  - Buttons (Download CV, Get in touch) centered on mobile
  - Stats icons (experience, leadership, skills) centered on mobile
  - Desktop layouts preserve left alignment
  - Used separate components for mobile/desktop with `visibleFrom="md"` and `hiddenFrom="md"`

- **Scroll Animations**:
  - Added smooth scroll-triggered animations to all sections
  - `IntersectionObserver` implementation with fade-in and slide-up effects
  - 0.8s transition duration with easing

- **CV Download Functionality**:
  - Local PDF file (`StefanR.pdf`) integrated for download
  - Direct download instead of external link
  - File automatically named `Stefan_Radev_CV.pdf` on download

## Key Components Details

### HeroSection.tsx
- **Full-height landing section** with profile photo and introduction
- **Theme toggle** in top-right corner (replaces old header)
- **Responsive buttons**: Centered on mobile, left-aligned on desktop
- **Stats icons**: Experience, leadership, skills, CI/CD - centered on mobile
- **Scroll animation**: Fade-in effect on page load

### AboutSection.tsx
- **Mission and Specializations**: Two-column cards on desktop
- **Technical Skills**: Star rating system for different technologies
- **Certifications and Interests**: Additional information cards
- **Scroll animation**: Appears when scrolling into view

### PortfolioSection.tsx
- **Project showcase**: 4 main automation projects
- **Visual cards**: Each with image, description, technologies, and results
- **Responsive grid**: 2 columns on desktop, single column on mobile

### BlogSection.tsx (New)
- **Articles section**: Two featured articles in social media card style
- **External links**: webcafe.bg article and Ministry of Testing article
- **Hover effects**: Cards lift slightly on hover
- **Responsive**: Side-by-side on desktop, stacked on mobile

### Footer.tsx  
- **Contact information**: Email, phone, location, social links
- **Responsive**: Two-column on desktop, single column on mobile
- **Social media integration**: LinkedIn, GitHub, email, phone

## Technical Implementation

### Responsive Design
- Uses Mantine's `visibleFrom="md"` and `hiddenFrom="md"` props
- Breakpoint: 768px (md)
- Separate components for mobile/desktop layouts where needed

### Animations
- **IntersectionObserver** for scroll-triggered animations
- **Transform**: `translateY(50px)` to `translateY(0)`
- **Opacity**: `0` to `1` transitions
- **Timing**: 0.8s ease-out transitions

### Color Scheme
- **Dark/Light mode toggle** available in Hero section
- **Dynamic theming** with Mantine color scheme
- **Smooth transitions** between themes

## Development Notes
- **TypeScript strict mode** enabled
- **ESLint configured** for React + TypeScript
- **No unused imports** - project cleaned for deployment
- **Optimized build** - removed unused files and dependencies
- **Vercel deployment ready** - all assets properly bundled

## File Management
- **Removed unused files**: Header.tsx, App.css, react.svg
- **Optimized assets**: Only necessary images and files included
- **PDF integration**: Local CV file for reliable downloads

## Common Issues
- Ensure proper import paths for assets
- Test responsive breakpoints across devices
- Verify scroll animations work on different screen sizes
- Check theme toggle functionality in both modes

## Owner Details
- **Name**: Stefan Radev
- **Role**: QA Team Lead & Automation Engineer
- **Email**: stefan.radev91@gmail.com
- **Phone**: +359 897 269 135
- **Location**: Sofia, Bulgaria
- **LinkedIn**: https://linkedin.com/in/stefan-radev
- **GitHub**: https://github.com/StefanRadev91