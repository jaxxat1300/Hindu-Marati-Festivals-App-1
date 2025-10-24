# 🪔 Hindu Marathi Festivals App

A modern, mobile-first Indian festival calendar application showcasing the beauty and richness of Hindu and Marathi festivals. Built with React, Next.js, and Tailwind CSS, featuring a contemporary Indian design aesthetic that celebrates our cultural heritage.

![Festival App Banner](https://images.unsplash.com/photo-1604964432806-254d07c11f32?w=1200&h=300&fit=crop)

## ✨ Features

### 📅 Interactive Calendar
- **Monthly calendar view** with festivals marked on their dates
- **Smooth month navigation** with quick jump to today
- **Visual indicators** for current day and upcoming festivals
- **Color-coded categories**: Religious, Cultural, and Harvest festivals

### 🎉 Comprehensive Festival Details
Each festival includes rich, detailed information presented in beautiful tabs:

#### Overview
- Brief introduction and tagline
- Detailed history and origins
- Cultural and spiritual significance
- Duration and regional information

#### How to Celebrate
- **Step-by-step celebration guide** for beginners
- Time estimates for each step
- Difficulty levels
- Modern adaptations for diaspora celebrations

#### Recipes
- **5+ traditional recipes** per major festival
- Detailed ingredients and instructions
- Cooking time and difficulty levels
- Pro tips from experienced cooks
- Beautiful food photography

#### Decorations
- **DIY decoration guides** with materials list
- Step-by-step instructions
- Beginner-friendly tips
- Visual inspiration

#### Shopping List
- **Auto-generated checklist** based on celebrations
- Organized by category (Puja items, Food, Decorations)
- Interactive checkboxes to track purchases

### 💖 Favorites System
- Save your favorite festivals
- Quick access from dedicated Favorites tab
- Visual indicators throughout the app
- Persistent across sessions

### 🔍 Search & Filter
- **Real-time search** by festival name (English or Devanagari)
- **Category filters**: All, Religious, Cultural, Harvest
- Responsive filtering in calendar and list views
- Clear results messaging

### 🎨 Modern Indian Design Aesthetic
- **Color palette inspired by Indian textiles**: Saffron, turmeric yellow, deep reds, peacock blues, gold accents
- **Devanagari typography** for authentic cultural representation
- **Subtle patterns**: Paisley and mandala background motifs
- **Gradient overlays** reminiscent of Indian sunsets
- **Glassmorphism effects** for modern depth
- **Smooth animations** and micro-interactions

### 📱 Mobile-First & Responsive
- **Optimized for phones** (320px - 428px width)
- **Touch-friendly interactions** (minimum 44x44px tap targets)
- **Bottom navigation bar** for easy thumb access
- **Swipeable interfaces** and intuitive gestures
- **Responsive design** that scales beautifully to tablets and desktops

### ♿ Accessibility
- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Focus visible indicators
- Reduced motion support for accessibility preferences
- High contrast color combinations

## 🎊 Festival Collection

The app includes comprehensive data for 6+ major festivals:

1. **Diwali** (दिवाळी) - Festival of Lights
2. **Holi** (होळी) - Festival of Colors
3. **Ganesh Chaturthi** (गणेश चतुर्थी) - Birth of Lord Ganesha
4. **Navratri** (नवरात्री) - Nine Nights of Divine Feminine
5. **Gudi Padwa** (गुढी पाडवा) - Marathi New Year
6. **Makar Sankranti** (मकर संक्रांति) - Harvest Festival

Each festival features:
- 3-5 detailed traditional recipes with full instructions
- Multiple decoration ideas with step-by-step guides
- Complete shopping lists
- Cultural context and modern celebration tips

## 🛠️ Technology Stack

- **Framework**: [Next.js 14](https://nextjs.org/) with React 18
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with custom Indian color palette
- **Animations**: [Framer Motion](https://www.framer.com/motion/) for smooth, delightful interactions
- **Icons**: [Lucide React](https://lucide.dev/) for consistent, beautiful icons
- **Typography**: Google Fonts (Inter + Noto Sans Devanagari)
- **UI Components**: Custom components with [shadcn/ui](https://ui.shadcn.com/) base
- **Language**: TypeScript for type safety

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd hindu-marathi-festivals-app

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Visit [http://localhost:3000](http://localhost:3000) to see the app in action!

## 📁 Project Structure

```
hindu-marathi-festivals-app/
├── app/
│   ├── globals.css          # Global styles with Indian design aesthetics
│   ├── layout.tsx            # Root layout with fonts
│   └── page.tsx              # Main app page with navigation
├── components/
│   ├── EnhancedCalendarView.tsx  # Main calendar component
│   ├── FestivalDetail.tsx    # Detailed festival view with tabs
│   ├── FavoritesView.tsx     # Favorites collection view
│   └── ui/                   # Reusable UI components
│       ├── button.tsx
│       └── card.tsx
├── data/
│   └── comprehensive-festivals.json  # Festival data with recipes & guides
├── lib/
│   └── utils.ts              # Utility functions
├── public/                   # Static assets
├── tailwind.config.js        # Tailwind configuration with custom colors
└── tsconfig.json             # TypeScript configuration
```

## 🎨 Design Philosophy

### Color Palette
- **Saffron** (#F59432): Primary brand color, representing spirituality
- **Rose** (#EC4899): Celebrations and joy
- **Gold** (#FBBF24): Prosperity and auspiciousness
- **Teal** (#14B8A6): Harmony and balance
- **Cream** (#FEF9E7): Warmth and tradition

### Typography
- **Primary**: Inter - Modern, clean, highly readable
- **Devanagari**: Noto Sans Devanagari - Authentic script representation

### Animations
- **Subtle and purposeful**: Enhance UX without overwhelming
- **Performance-optimized**: Using CSS transforms and opacity
- **Accessibility-aware**: Respects reduced motion preferences

## 🌟 Key Features Showcase

### Calendar Interaction
```typescript
// Smooth month navigation
const navigateMonth = (direction: 'prev' | 'next') => {
  setCurrentDate(prev => {
    const newDate = new Date(prev)
    direction === 'prev' 
      ? newDate.setMonth(prev.getMonth() - 1)
      : newDate.setMonth(prev.getMonth() + 1)
    return newDate
  })
}
```

### Real-time Search
```typescript
// Filter festivals by name or Devanagari script
const filteredFestivals = useMemo(() => {
  return festivals.filter(festival => {
    const matchesSearch = 
      festival.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      festival.nameDevanagari.includes(searchQuery)
    const matchesCategory = 
      filterCategory === 'all' || 
      festival.category === filterCategory
    return matchesSearch && matchesCategory
  })
}, [festivals, searchQuery, filterCategory])
```

## 📱 Mobile Optimization

The app is built mobile-first with specific optimizations:

- **Touch targets**: Minimum 44x44px for comfortable tapping
- **Responsive images**: Optimized loading with appropriate sizes
- **Bottom navigation**: Thumb-friendly navigation bar
- **Swipe gestures**: Natural mobile interactions
- **Performance**: Lazy loading and code splitting

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Add more festivals**: Expand the festival collection
2. **Add more recipes**: Include regional variations
3. **Improve translations**: Enhance Devanagari content
4. **Report bugs**: Open issues for any bugs found
5. **Suggest features**: Share ideas for improvements

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Festival data compiled from authentic cultural sources
- Images from [Unsplash](https://unsplash.com)
- Icons from [Lucide](https://lucide.dev)
- Typography from [Google Fonts](https://fonts.google.com)

## 💬 Support

For questions, suggestions, or issues:
- Open an issue on GitHub
- Email: support@example.com

---

Built with ❤️ to celebrate Indian culture and festivals.

**जय हिंद! 🇮🇳**
