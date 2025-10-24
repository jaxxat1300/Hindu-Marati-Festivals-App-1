# 🚀 Getting Started - Hindu Marathi Festivals App

## Quick Start (3 Minutes)

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Run Development Server
```bash
npm run dev
```

### Step 3: Open in Browser
Visit [http://localhost:3000](http://localhost:3000)

**That's it! The app is fully functional and ready to use!** 🎉

---

## 🎯 What You'll See

### Home Screen
- Beautiful festival gradient header with animated diya (🪔)
- Current month calendar with festivals highlighted
- Search bar at the top
- Category filter chips (All, Religious, Cultural, Harvest)
- Bottom navigation with 4 tabs

### Try These Actions:

1. **Tap any festival** on the calendar → Opens detailed view with 5 tabs
2. **Click a recipe card** → See full cooking instructions
3. **Tap the heart icon** → Save to favorites
4. **Go to Favorites tab** → See your saved collection
5. **Use search bar** → Type "Diwali" or "दिवाळी"
6. **Filter by category** → Tap "Religious" or "Harvest"
7. **Navigate months** → Use arrows or "Today" button

---

## 📱 Best Experience

### Recommended Testing:
1. **Mobile view**: Open DevTools (F12) → Toggle device toolbar → iPhone/Android
2. **Tablet view**: iPad Pro or similar
3. **Desktop view**: Full browser window

### Chrome DevTools:
```
1. Press F12 or Cmd+Option+I (Mac)
2. Click device toolbar icon (or Cmd+Shift+M)
3. Select "iPhone 12 Pro" or "Galaxy S20"
4. Interact with the app as on mobile
```

---

## 🎨 Key Features to Explore

### 1. Calendar Interaction
- Tap any date with a festival
- See color-coded categories
- Notice today's date highlighted
- Navigate between months

### 2. Festival Details
- Scroll through all 5 tabs
- Click recipe cards for full instructions
- Check decoration guides
- Use shopping list checkboxes

### 3. Search & Filter
- Type "Ganesh" → See instant results
- Type "गणेश" → Works in Devanagari too!
- Filter by Religious → See only religious festivals
- Clear filters → Return to all festivals

### 4. Favorites
- Heart icon appears on every festival
- Tap to save
- Go to Favorites tab (2nd icon)
- See your collection
- Tap heart again to remove

---

## 🛠️ Development Commands

```bash
# Development
npm run dev          # Start dev server (with hot reload)

# Production
npm run build        # Build for production
npm start            # Start production server

# Deployment
npm run export       # Export static site (optional)

# Code Quality
npm run lint         # Run ESLint
```

---

## 📂 Project Structure

```
Important Files:
├── app/
│   ├── page.tsx                 # Main app (navigation & state)
│   └── globals.css              # Global styles & animations
│
├── components/
│   ├── EnhancedCalendarView.tsx # Main calendar (search, filter, grid)
│   ├── FestivalDetail.tsx       # Detail modal (5 tabs)
│   └── FavoritesView.tsx        # Favorites collection
│
├── data/
│   └── comprehensive-festivals.json  # All festival data (6 festivals)
│
└── tailwind.config.js           # Custom colors & fonts
```

---

## 🎨 Customization Quick Tips

### Add a New Festival:
1. Open `data/comprehensive-festivals.json`
2. Copy an existing festival object
3. Modify the data (name, date, recipes, etc.)
4. Save → It appears automatically in the app!

### Change Colors:
Edit `tailwind.config.js`:
```javascript
colors: {
  saffron: {
    500: '#YOUR_COLOR', // Change primary color
  }
}
```

### Add More Recipes:
In `comprehensive-festivals.json`, add to the `recipes` array:
```json
{
  "id": "new-recipe",
  "name": "Recipe Name",
  "nameDevanagari": "रेसिपी",
  "difficulty": "Easy",
  "prepTime": "20 min",
  "ingredients": [...],
  "instructions": [...]
}
```

---

## 🌐 Deployment

### Deploy to Vercel (Easiest):
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow prompts
```

### Deploy to Netlify:
```bash
# Build
npm run build

# Upload 'out' folder to Netlify
# Or connect GitHub repo
```

### Deploy to GitHub Pages:
```bash
# Update next.config.js with your repo name
# Run export script
npm run export

# Push to GitHub
# Enable GitHub Pages in repo settings
```

---

## 📱 Testing Checklist

### Mobile Testing:
- [ ] Calendar grid is readable
- [ ] Tap targets are comfortable
- [ ] Bottom navigation is reachable
- [ ] Search input works smoothly
- [ ] Modal scrolling is smooth
- [ ] Images load properly

### Desktop Testing:
- [ ] Two-column layout for festival cards
- [ ] Hover effects work
- [ ] Search bar is prominent
- [ ] Calendar fills space nicely

### Feature Testing:
- [ ] Search works (English & Devanagari)
- [ ] Filters update calendar
- [ ] Favorites save/remove correctly
- [ ] All tabs load in detail view
- [ ] Recipe modal opens
- [ ] Shopping list checkboxes work
- [ ] Month navigation works
- [ ] Today button jumps to today

---

## 🐛 Troubleshooting

### Port Already in Use:
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill

# Or use different port
npm run dev -- -p 3001
```

### Styles Not Loading:
```bash
# Clear Next.js cache
rm -rf .next
npm run dev
```

### Build Errors:
```bash
# Clean install
rm -rf node_modules
rm package-lock.json
npm install
npm run build
```

---

## 💡 Usage Tips

### For Presentations:
1. Start on calendar view
2. Search for "Diwali" → Show instant results
3. Click Diwali → Show comprehensive details
4. Go through tabs → Highlight rich content
5. Show recipe with full instructions
6. Demonstrate favorites feature
7. Show responsive design (resize window)

### For Development:
1. Component is fully typed (TypeScript)
2. All data in JSON (easy to extend)
3. Tailwind for styling (no CSS files)
4. Framer Motion for animations
5. Mobile-first approach

### For Users:
1. Save favorites early
2. Use search for quick access
3. Check shopping lists a week ahead
4. Explore all tabs for full experience
5. Try both English and Devanagari search

---

## 🎉 You're All Set!

The app is **fully functional** with:
- ✅ 6 detailed festivals
- ✅ 25+ recipes with instructions
- ✅ Search, filter, and favorites
- ✅ Beautiful Indian design
- ✅ Mobile-optimized
- ✅ Production-ready

**Enjoy exploring Indian festivals! 🪔**

---

## 📚 Next Steps

1. **Explore**: Click around and discover features
2. **Customize**: Add more festivals or recipes
3. **Deploy**: Share with family and friends
4. **Contribute**: Add regional festivals
5. **Feedback**: Share your experience

---

**Need Help?**
- Check `README.md` for detailed documentation
- Check `FEATURES.md` for feature walkthrough
- Open an issue on GitHub
- Review code comments in components

**Happy Celebrating! 🎊**

