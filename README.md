# 💪 Muscle Factory Website

A modern, responsive web application for Muscle Factory - your ultimate destination for fitness training and premium supplements. Built with React and powered by Vite for optimal performance.

![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=flat&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.2.0-646CFF?style=flat&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.3-38B2AC?style=flat&logo=tailwind-css&logoColor=white)
![License](https://img.shields.io/badge/License-Private-red?style=flat)

## 🌟 Features

- **🏋️ Training Programs**: Comprehensive workout plans and training services
- **💊 Supplement Store**: Full e-commerce functionality for premium supplements
- **🛒 Shopping Cart**: Complete shopping experience with cart management
- **📱 Responsive Design**: Fully optimized for mobile and desktop devices
- **🗺️ Location Services**: Interactive Google Maps integration
- **💬 WhatsApp Integration**: Direct communication channel for customer support
- **🔍 Advanced Filtering**: Search and filter products by category, price, and brand
- **📊 Product Sorting**: Sort supplements by popularity, price, and other criteria

## 🛠️ Tech Stack

### Frontend

- **React 18.2.0** - Modern JavaScript library for building user interfaces
- **React Router DOM 6.22.3** - Declarative routing for React applications
- **Vite 5.2.0** - Next generation frontend tooling for blazing fast development

### Styling & UI

- **Tailwind CSS 3.4.3** - Utility-first CSS framework
- **Tailwind CSS Animated 1.0.1** - Animation utilities for Tailwind
- **Heroicons React 2.1.3** - Beautiful hand-crafted SVG icons

### Additional Libraries

- **Google Map React 2.2.1** - React component for Google Maps integration
- **React Hook Media Query 1.1.1** - React hook for responsive design

### Development Tools

- **ESLint** - Code linting and quality assurance
- **PostCSS** - CSS post-processing
- **Autoprefixer** - CSS vendor prefixing

## 📁 Project Structure

```text
muscle-factory-website/
├── public/                     # Static assets
│   └── img/                   # Image resources
│       ├── entrenamientos/    # Training-related images
│       ├── musclefactory/     # Brand assets and videos
│       └── suplements/        # Product images
├── src/
│   ├── components/            # Reusable UI components
│   │   ├── Header/           # Navigation header
│   │   ├── Footer/           # Site footer
│   │   ├── ShoppingCart/     # Cart functionality
│   │   ├── FilterBy/         # Product filtering
│   │   └── icons/            # Custom SVG icons
│   ├── pages/                # Application pages
│   │   ├── Inicio/           # Home page
│   │   ├── Entrenamientos/   # Training programs
│   │   ├── Suplementos/      # Supplements catalog
│   │   ├── Contacto/         # Contact information
│   │   └── Pedido/           # Order management
│   ├── context/              # React Context for state management
│   ├── utils/                # Utility functions
│   └── assets/               # React-specific assets
├── index.html                # Entry HTML file
├── package.json             # Dependencies and scripts
├── vite.config.js           # Vite configuration
└── tailwind.config.js       # Tailwind CSS configuration
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (version 16 or higher)
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/VictorWKey/muscle-factory-website.git
   cd muscle-factory-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Build for Production

```bash
npm run build
# or
yarn build
```

The built files will be generated in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
# or
yarn preview
```

## 📱 Pages & Features

### 🏠 Home (`/`)
- Hero section with promotional video
- Featured products and services
- Company overview and mission

### 🏋️ Training Programs (`/entrenamientos`)
- Comprehensive workout plans
- Professional trainer profiles
- Training schedule and booking

### 💊 Supplements (`/suplementos`)
- Complete product catalog
- Advanced filtering and sorting
- Detailed product information
- Shopping cart integration

### 📞 Contact (`/contacto`)
- Contact information
- Interactive Google Maps
- WhatsApp integration
- Business hours and location

### 🛒 Order Management (`/pedido`)
- Order summary and checkout
- Customer information forms
- Order tracking capabilities

## 🛍️ E-commerce Features

- **Product Catalog**: Browse through premium supplements with detailed descriptions
- **Shopping Cart**: Add, remove, and manage products in your cart
- **Product Filtering**: Filter by category, brand, price range
- **Product Sorting**: Sort by popularity, price, alphabetical order
- **Product Search**: Find products by name or description
- **Responsive Design**: Optimized shopping experience across all devices

## 🎨 Design System

The application uses a cohesive design system built with Tailwind CSS:

- **Color Palette**: Professional gym-themed colors
- **Typography**: Clean, readable fonts optimized for web
- **Components**: Reusable UI components for consistency
- **Animations**: Smooth transitions and micro-interactions
- **Responsive Grid**: Mobile-first responsive design approach

## 📊 Performance

- **Fast Loading**: Optimized with Vite for quick development and build times
- **Code Splitting**: Automatic code splitting for optimal loading
- **Image Optimization**: Properly sized and formatted images
- **Responsive Images**: Different image sizes for various screen resolutions

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is private and proprietary. All rights reserved.

## 📧 Contact

**Muscle Factory**
- Website: [Visit our website](https://muscle-factory-website.vercel.app)
- WhatsApp: Contact us directly through the website
- Email: Contact us through the contact form

---

⭐ **Star this repository if you found it helpful!**

Built with ❤️ by the Muscle Factory team using React + Vite