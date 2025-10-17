# 🎨 Figma Wireframe Descriptions

## Overview
The Hindu Marathi Festivals App follows a mobile-first design approach with a spiritual, calm aesthetic. Each screen uses Indian-inspired color palettes and maintains consistent navigation patterns.

## 📱 Screen Layouts

### 1. Calendar Screen
**Layout**: Full-screen calendar grid with header and bottom navigation
- **Header**: App title "Hindu Marathi Festivals" with subtitle "Your Digital Festival Companion"
- **Month Navigation**: Left/right arrows with current month/year display
- **Calendar Grid**: 7x6 grid showing days with festival indicators
  - Festival days show colored dots (saffron for Hindu, rose for Marathi)
  - Today's date highlighted with saffron background
  - Festival names appear as small chips on festival days
- **This Month's Festivals**: Horizontal scrollable cards below calendar
- **Bottom Navigation**: 4 tabs (Calendar, Marathi, Hindu, Profile)

### 2. Marathi Festivals Screen
**Layout**: Grid of festival cards with header
- **Header**: "Marathi Festivals" with heart icon and description
- **Festival Cards**: 2-column grid on mobile, 3-column on tablet
  - Rose gradient background
  - Festival name in English and Marathi (Devanagari script)
  - Date, region, and description
  - Food tags as small chips
  - "Upcoming" badge for future festivals
- **Card Interaction**: Tap to open detailed modal

### 3. Hindu Festivals Screen
**Layout**: Similar to Marathi screen with teal color scheme
- **Header**: "Hindu Festivals" with home icon
- **Festival Cards**: Same grid layout as Marathi
  - Teal gradient background
  - Pan-India festival information
  - Regional significance indicators
- **Consistent interaction patterns**

### 4. Profile Screen
**Layout**: Vertical scroll with multiple sections
- **Profile Section**: 
  - Circular avatar with camera icon overlay
  - User name and description
  - Rose/gold gradient background
- **Theme Selection**: 2x2 grid of color options
  - Saffron, Rose, Teal, Gold themes
  - Visual color swatches with names
- **Sai Baba Thursday** (conditional):
  - Special card with spiritual gradient
  - Quote display with share button
  - "New Blessing" button for random quotes
- **App Information**: About section with feature list
- **Quick Actions**: Export calendar and share app buttons

### 5. Festival Detail Modal
**Layout**: Full-screen overlay with scrollable content
- **Header**: Festival name, Marathi name, date, close button
- **Content Sections**:
  - Description paragraph
  - Traditional Foods (grid of food items with icons)
  - Rituals & Traditions (list with spiritual icons)
  - Chants & Mantras (highlighted text blocks)
  - How to Celebrate (detailed instructions)
- **Background**: Semi-transparent overlay with centered modal

## 🎨 Design Elements

### Color Usage
- **Saffron**: Primary actions, headers, spiritual elements
- **Rose**: Marathi festivals, profile accents
- **Teal**: Hindu festivals, secondary actions
- **Gold**: Sai Baba features, premium elements
- **Cream**: Backgrounds, subtle highlights

### Typography Hierarchy
- **H1**: 3xl, bold, saffron-800 (screen titles)
- **H2**: 2xl, bold, theme colors (section titles)
- **H3**: xl, semibold, theme colors (card titles)
- **Body**: Base, regular, gray-700 (descriptions)
- **Marathi**: Noto Sans Devanagari for festival names

### Interactive Elements
- **Buttons**: Rounded corners, hover states, theme colors
- **Cards**: Subtle shadows, hover scale effects
- **Navigation**: Bottom tabs with active states
- **Modals**: Smooth slide-up animations

### Spacing & Layout
- **Container**: Max-width with responsive padding
- **Grid**: 2-column mobile, 3-column tablet/desktop
- **Spacing**: Consistent 4px, 6px, 8px scale
- **Margins**: 16px between sections, 24px for major sections

## 📱 Responsive Breakpoints
- **Mobile**: 320px - 768px (single column, bottom nav)
- **Tablet**: 768px - 1024px (2-3 columns, larger cards)
- **Desktop**: 1024px+ (3+ columns, side navigation possible)

## 🎭 Animation Guidelines
- **Page Transitions**: Fade in with slight upward movement
- **Card Hovers**: Scale to 102% with shadow increase
- **Modal Entry**: Scale from 90% to 100% with fade
- **Button Interactions**: Color transitions, scale feedback
- **Loading States**: Skeleton screens for content loading

## 🕉️ Spiritual Design Elements
- **Icons**: Lotus, diya, turmeric bowl, modak emojis
- **Gradients**: Soft, spiritual color transitions
- **Typography**: Clean, readable fonts with Marathi support
- **Layout**: Generous whitespace for calm feeling
- **Colors**: Warm, inviting Indian-inspired palette

This design system ensures a cohesive, culturally appropriate, and spiritually uplifting user experience across all screens and interactions.
