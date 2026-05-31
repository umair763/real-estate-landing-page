# EstatePro - Premium Real Estate Landing Page

A high-end, cinematic real estate landing page built with React, featuring premium UI/UX design, smooth animations, and modern glassmorphism effects.

## 🌟 Features

- **Cinematic Dark Theme**: Immersive dark theme with glassmorphism effects and mesh overlays
- **Smooth Animations**: Powered by Framer Motion for seamless transitions and interactions
- **Premium Pagination**: Reusable pagination component with cinematic styling
- **Property Listings**: Multiple pages for Buy, Rent, Sell, and Investment properties
- **Hero Section**: Stunning hero with mesh overlays and glow effects
- **Testimonials**: Infinite scrolling testimonials with fade blur effects
- **Responsive Design**: Fully responsive across all devices
- **Modern UI Components**: Property cards, navigation bar, filters, and more
- **Interactive Elements**: Hover effects, dropdowns, and smooth scrolling

## 🚀 Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Framer Motion** - Animation library
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library
- **React Router DOM** - Client-side routing

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/real-estate-landing-page.git
cd real-estate-landing-page

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
real-estate-landing-page/
├── src/
│   ├── components/
│   │   ├── featured.properties.jsx    # Featured properties with pagination
│   │   ├── hero.section.jsx            # Hero section with mesh overlays
│   │   ├── navigation.bar.jsx         # Navigation with dropdowns
│   │   ├── pagination.jsx             # Reusable pagination component
│   │   ├── property.card.jsx          # Property card component
│   │   ├── testimonials.section.jsx   # Testimonials with infinite scroll
│   │   └── mesh.overlay.jsx           # Mesh overlay effect
│   ├── pages/
│   │   ├── landing.page.jsx           # Landing page
│   │   ├── buy.page.jsx               # Buy properties page
│   │   ├── rent.page.jsx              # Rent properties page
│   │   ├── sell.page.jsx              # Sell properties page
│   │   └── investment.page.jsx        # Investment opportunities page
│   ├── layout/
│   │   └── main.layout.jsx            # Main layout wrapper
│   ├── routes/
│   │   └── app.routes.jsx             # Route configuration
│   ├── App.jsx                        # Main app component
│   └── main.jsx                       # Entry point
├── public/                            # Static assets
├── index.html                         # HTML template
├── package.json                       # Dependencies
└── vite.config.js                     # Vite configuration
```

## 🎨 Design System

### Color Palette

- **Primary**: Dark zinc/gray tones (#555555, zinc-900, black)
- **Accent**: Purple, pink, blue, amber for glow effects
- **Text**: White and gray-400 for hierarchy

### Effects

- **Glassmorphism**: backdrop-blur, bg-black/40, border-white/20
- **Glow Effects**: blur-[120px], opacity-0.10
- **Mesh Overlays**: Custom mesh pattern overlay
- **Transitions**: duration-300, duration-600, duration-800

### Components

- **PropertyCard**: Displays property with image, price, location, beds, baths, sqft
- **Pagination**: Premium pagination with chevron icons and glassmorphism
- **NavigationBar**: Responsive navigation with dropdown menus
- **HeroSection**: Cinematic hero with search and mesh overlays
- **TestimonialsSection**: Infinite scrolling testimonials with fade blur

## 📄 Pages

### Landing Page

- Hero section with search functionality
- Featured properties with pagination (9 properties, 6 per page)
- Testimonials section with infinite scrolling
- Call-to-action sections

### Buy Page

- Property listings with filters (Price Range, Property Type, Bedrooms)
- Pagination for browsing properties
- Sort functionality

### Rent Page

- Rental listings with filters (Monthly Budget, Amenities, Availability)
- Pagination for browsing rentals
- Sort functionality

### Sell Page

- Property listings for sellers
- Filters (Property Type, Unit Type)
- Pagination for browsing properties

### Investment Page

- Investment opportunities with ROI information
- ROI calculator
- Investment categories
- Pagination for browsing opportunities

## 🔧 Key Features Implementation

### Pagination System

- Reusable Pagination component
- State management with currentPage and totalPages
- Smooth scroll to top on page change
- Glassmorphism styling with lucide icons
- Active/inactive states with hover effects

### Animations

- Framer Motion for all animations
- Initial animations (opacity, y-translate)
- Hover effects (scale, border color)
- Smooth transitions (duration-300 to duration-800)
- Staggered animations for lists

### Responsive Design

- Mobile-first approach
- Responsive grid layouts
- Mobile navigation menu
- Adaptive typography and spacing

## 🎯 Future Enhancements

- [ ] Backend integration with API
- [ ] User authentication system
- [ ] Property search and filtering
- [ ] User dashboard
- [ ] Property comparison feature
- [ ] Virtual property tours
- [ ] Contact form integration
- [ ] Multi-language support
- [ ] Dark/Light theme toggle
- [ ] Advanced filtering options

## 📝 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

Built with ❤️ for modern real estate experiences

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

**Note**: This is a frontend-only project. Backend integration is planned for future development.
