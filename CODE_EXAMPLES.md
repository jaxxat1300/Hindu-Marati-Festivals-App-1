# 💻 Code Examples

## Key Implementation Snippets

### 1. Calendar Grid Component
```tsx
// Calendar grid with festival indicators
const getDaysInMonth = (date: Date) => {
  const year = date.getFullYear()
  const month = date.getMonth()
  const firstDay = new Date(year, month, 1)
  const lastDay = new Date(year, month + 1, 0)
  const daysInMonth = lastDay.getDate()
  const startingDayOfWeek = firstDay.getDay()

  const days = []
  
  // Add empty cells for days before the first day of the month
  for (let i = 0; i < startingDayOfWeek; i++) {
    days.push(null)
  }
  
  // Add days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    days.push(day)
  }
  
  return days
}
```

### 2. Festival Detail Card
```tsx
// Festival card with hover animations
<motion.div
  key={festival.id}
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: index * 0.1 }}
  whileHover={{ scale: 1.02 }}
  className="cursor-pointer"
  onClick={() => setSelectedFestival(festival)}
>
  <Card className="card-hover marathi-gradient border-rose-200">
    <CardHeader className="pb-3">
      <div className="flex items-start justify-between">
        <div>
          <CardTitle className="text-xl text-rose-800 mb-1">
            {festival.name}
          </CardTitle>
          <p className="text-lg text-rose-600 font-marathi">
            {festival.marathiName}
          </p>
        </div>
        <div className="flex items-center gap-1">
          <Star className="w-4 h-4 text-rose-500" />
          <span className="text-xs text-rose-600">Marathi</span>
        </div>
      </div>
    </CardHeader>
  </Card>
</motion.div>
```

### 3. Profile Page with Sai Baba Thursday
```tsx
// Sai Baba Thursday feature
{isThursday && (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 0.3 }}
  >
    <Card className="spiritual-gradient border-gold-200">
      <CardHeader>
        <CardTitle className="text-gold-800 flex items-center gap-2">
          <Heart className="w-5 h-5" />
          Sai Baba Thursday Blessing
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="bg-white/80 rounded-lg p-4">
          <blockquote className="text-gold-700 italic text-center mb-4">
            "{currentQuote.quote}"
          </blockquote>
          <p className="text-gold-600 text-sm text-center mb-4">
            {currentQuote.blessing}
          </p>
        </div>
      </CardContent>
    </Card>
  </motion.div>
)}
```

### 4. JSON Data Fetch
```tsx
// Festival data structure
interface Festival {
  id: string
  name: string
  marathiName: string
  type: string
  date: string
  description: string
  foods: string[]
  chants: string[]
  how_to_celebrate: string
  image_url: string
  region: string
  significance: string
  rituals: string[]
}

// Usage in component
const [festivals, setFestivals] = useState<Festival[]>(festivalsData)
const marathiFestivals = festivals.filter(festival => festival.type === 'Marathi')
```

### 5. Sample JSON Dataset
```json
{
  "id": "gudi-padwa",
  "name": "Gudi Padwa",
  "marathiName": "गुढी पाडवा",
  "type": "Marathi",
  "date": "2024-04-09",
  "description": "Gudi Padwa marks the beginning of the New Year according to the Hindu calendar. It symbolizes the victory of good over evil and the arrival of spring.",
  "foods": ["Puran Poli", "Shrikhand", "Aamras", "Sabudana Khichdi", "Coconut Barfi"],
  "chants": ["Om Namah Shivaya", "Ganpati Bappa Morya", "Jai Maharashtra"],
  "how_to_celebrate": "Decorate your home with a Gudi (flag), wear new clothes, prepare traditional Maharashtrian dishes, and visit temples. Outside India, you can celebrate by cooking traditional foods, decorating with rangoli, and connecting with the Marathi community.",
  "image_url": "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
  "region": "Maharashtra",
  "significance": "New Year celebration and spring festival",
  "rituals": ["Raising Gudi flag", "Oil bath", "Temple visits", "Family gatherings"]
}
```

### 6. Sai Baba Thursday Quotes
```json
[
  {
    "id": "1",
    "quote": "Jai Sai Ram! Trust in the divine timing of your life. Everything happens for a reason, and every challenge is an opportunity for growth.",
    "blessing": "May Sai Baba bless you with peace, prosperity, and spiritual growth this Thursday and always.",
    "image_url": "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
    "theme": "trust"
  }
]
```

### 7. Color Palette Implementation
```css
/* Tailwind config with Indian colors */
colors: {
  saffron: {
    50: '#fef7ed',
    100: '#fdedd3',
    200: '#fbd7a5',
    300: '#f8ba6d',
    400: '#f59432',
    500: '#f2730a',
    600: '#e35a05',
    700: '#bc4208',
    800: '#95350e',
    900: '#782d0f',
  },
  rose: {
    50: '#fdf2f8',
    100: '#fce7f3',
    200: '#fbcfe8',
    300: '#f9a8d4',
    400: '#f472b6',
    500: '#ec4899',
    600: '#db2777',
    700: '#be185d',
    800: '#9d174d',
    900: '#831843',
  }
}
```

### 8. Animation with Framer Motion
```tsx
// Page transitions
<motion.div
  key={activeTab}
  initial={{ opacity: 0, x: 20 }}
  animate={{ opacity: 1, x: 0 }}
  exit={{ opacity: 0, x: -20 }}
  transition={{ duration: 0.3 }}
>
  {renderContent()}
</motion.div>

// Card hover effects
<motion.div
  whileHover={{ scale: 1.05 }}
  className="cursor-pointer"
>
  <Card className="card-hover">
    {/* Card content */}
  </Card>
</motion.div>
```

### 9. Responsive Navigation
```tsx
// Bottom tab navigation
const tabs = [
  { id: 'calendar', label: 'Calendar', icon: Calendar },
  { id: 'marathi', label: 'Marathi', icon: Heart },
  { id: 'hindu', label: 'Hindu', icon: Home },
  { id: 'profile', label: 'Profile', icon: User },
]

// Tab rendering
{tabs.map((tab) => {
  const Icon = tab.icon
  const isActive = activeTab === tab.id
  
  return (
    <button
      key={tab.id}
      onClick={() => setActiveTab(tab.id)}
      className={`flex flex-col items-center py-2 px-3 rounded-lg transition-all duration-200 ${
        isActive 
          ? 'text-saffron-600 bg-saffron-50' 
          : 'text-gray-500 hover:text-saffron-500'
      }`}
    >
      <Icon className={`w-5 h-5 mb-1 ${isActive ? 'scale-110' : ''}`} />
      <span className="text-xs font-medium">{tab.label}</span>
    </button>
  )
})}
```

### 10. Utility Functions
```tsx
// Festival type colors
export function getFestivalTypeColor(type: string): string {
  switch (type) {
    case 'Marathi':
      return 'bg-rose-100 text-rose-800 border-rose-200'
    case 'Hindu':
      return 'bg-teal-100 text-teal-800 border-teal-200'
    default:
      return 'bg-gray-100 text-gray-800 border-gray-200'
  }
}

// Date formatting
export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

// Random Sai Baba quote
export function getRandomSaiBabaQuote(quotes: any[]) {
  return quotes[Math.floor(Math.random() * quotes.length)]
}
```

These code examples demonstrate the key implementation patterns used throughout the Hindu Marathi Festivals app, showcasing modern React patterns, TypeScript usage, and beautiful UI components.
