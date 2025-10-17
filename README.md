# 🪔 Hindu Marathi Festivals App

A beautiful, spiritual digital companion for Hindu and Marathi festivals. Built with Next.js, Tailwind CSS, and Framer Motion.

## ✨ Features

- **Festival Calendar**: Interactive monthly calendar showing all Hindu and Marathi festivals
- **Marathi Festivals**: Dedicated section for Maharashtra-specific celebrations
- **Hindu Festivals**: Comprehensive collection of pan-Indian Hindu festivals
- **Profile & Personalization**: Customize your experience with themes and Sai Baba Thursday blessings
- **Festival Details**: Rich information including history, foods, chants, and celebration guides
- **Responsive Design**: Beautiful UI that works on all devices
- **Spiritual Tone**: Calm, elegant design with Indian cultural elements

## 🎨 Design System

### Color Palette
- **Saffron**: `#f2730a` - Primary spiritual color
- **Rose**: `#ec4899` - Marathi festival theme
- **Teal**: `#14b8a6` - Hindu festival theme
- **Gold**: `#f59e0b` - Accent and spiritual elements
- **Cream**: `#fefdf8` - Background and soft elements

### Typography
- **Primary**: Inter (clean, modern sans-serif)
- **Marathi**: Noto Sans Devanagari (for festival names)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd hindu-marathi-festivals
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

## 📱 App Structure

```
app/
├── globals.css          # Global styles and Indian color palette
├── layout.tsx           # Root layout with fonts and metadata
└── page.tsx             # Main app with navigation

components/
├── ui/                  # Reusable UI components (Button, Card, etc.)
├── CalendarView.tsx     # Interactive festival calendar
├── MarathiFestivals.tsx # Marathi-specific festivals
├── HinduFestivals.tsx   # Hindu festivals
└── Profile.tsx          # User profile and Sai Baba Thursday

data/
├── festivals.json       # Comprehensive festival database
└── sai-baba-quotes.json # Thursday blessings and quotes

lib/
└── utils.ts             # Utility functions and helpers
```

## 🎯 Key Components

### Calendar View
- Monthly grid layout with festival indicators
- Color-coded festival types (Marathi/Hindu)
- Interactive festival details modal
- Upcoming festival highlights

### Festival Cards
- Beautiful gradient backgrounds
- Traditional food tags
- Chant and mantra sections
- Celebration guides for living abroad

### Sai Baba Thursday
- Special Thursday blessings
- Random quote generation
- Social sharing functionality
- Spiritual gradient design

## 🛠️ Technologies Used

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety and better development experience
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icon library

## 📊 Festival Data

The app includes 15+ festivals with comprehensive information:

- **Marathi Festivals**: Gudi Padwa, Pola
- **Hindu Festivals**: Diwali, Holi, Navratri, Dussehra, Ganesh Chaturthi, Krishna Janmashtami, Raksha Bandhan, Karva Chauth, Makar Sankranti, Rath Yatra, Onam, Baisakhi, Durga Puja

Each festival includes:
- Historical significance
- Traditional foods and recipes
- Chants and mantras
- Rituals and traditions
- Celebration guides for living abroad

## 🎨 Design Philosophy

The app follows a "Digital Festival Companion" approach:
- **Spiritual yet calm**: Peaceful colors and gentle animations
- **Culturally rich**: Authentic Indian elements and Marathi support
- **Minimal yet joyful**: Clean design with festive touches
- **Accessible**: Easy navigation and readable typography

## 📱 Responsive Design

- Mobile-first approach
- Touch-friendly navigation
- Optimized for all screen sizes
- Bottom tab navigation for mobile

## 🚀 Deployment

The app is ready for deployment on Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Hindu and Marathi communities for cultural guidance
- Sai Baba devotees for spiritual inspiration
- Open source community for amazing tools and libraries

---

**Jai Sai Ram!** 🕉️

May this app help you stay connected with your cultural roots and spiritual journey, no matter where you are in the world.
