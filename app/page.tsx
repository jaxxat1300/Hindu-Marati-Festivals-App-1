'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import EnhancedCalendarView from '@/components/EnhancedCalendarView'
import FavoritesView from '@/components/FavoritesView'
import MarathiFestivals from '@/components/MarathiFestivals'
import HinduFestivals from '@/components/HinduFestivals'
import Profile from '@/components/Profile'
import { Calendar, Heart, Home, User, Sparkles } from 'lucide-react'

export default function HomePage() {
  const [activeTab, setActiveTab] = useState('calendar')
  const [isLoaded, setIsLoaded] = useState(false)
  const [favorites, setFavorites] = useState<Set<string>>(new Set())

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const tabs = [
    { id: 'calendar', label: 'Calendar', icon: Calendar, color: 'text-saffron-600' },
    { id: 'favorites', label: 'Favorites', icon: Heart, color: 'text-rose-600' },
    { id: 'marathi', label: 'Marathi', icon: Home, color: 'text-teal-600' },
    { id: 'profile', label: 'Profile', icon: User, color: 'text-gold-600' },
  ]

  const toggleFavorite = (festivalId: string) => {
    const newFavorites = new Set(favorites)
    if (newFavorites.has(festivalId)) {
      newFavorites.delete(festivalId)
    } else {
      newFavorites.add(festivalId)
    }
    setFavorites(newFavorites)
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'calendar':
        return <EnhancedCalendarView />
      case 'favorites':
        return <FavoritesView favorites={favorites} onToggleFavorite={toggleFavorite} />
      case 'marathi':
        return <MarathiFestivals />
      case 'profile':
        return <Profile />
      default:
        return <EnhancedCalendarView />
    }
  }

  const getTabIcon = (tabId: string) => {
    switch (tabId) {
      case 'calendar': return '📅'
      case 'marathi': return '🪔'
      case 'hindu': return '🕉️'
      case 'profile': return '👤'
      default: return '📅'
    }
  }

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50 flex items-center justify-center relative overflow-hidden">
        {/* Animated Mandala Background */}
        <div className="absolute inset-0 opacity-10">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/4 left-1/4 w-64 h-64 border-8 border-orange-500 rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-1/4 right-1/4 w-48 h-48 border-8 border-red-500 rounded-full"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center z-10 relative"
        >
          {/* Animated Diya */}
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-8xl mb-6 filter drop-shadow-2xl"
          >
            🪔
          </motion.div>

          {/* Festival Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl font-bold mb-3 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent"
          >
            Hindu Cultural Society
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xl text-orange-700 font-marathi mb-8"
          >
            त्योहारांचे दर्शन
          </motion.p>

          {/* Animated Dots */}
          <div className="flex justify-center gap-3">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                animate={{
                  scale: [1, 1.5, 1],
                  backgroundColor: ['#ea580c', '#dc2626', '#ea580c']
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.2
                }}
                className="w-3 h-3 rounded-full bg-orange-600"
              />
            ))}
          </div>

          {/* Decorative Elements */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-8 flex justify-center gap-4 text-3xl"
          >
            <motion.span animate={{ rotate: [0, 360] }} transition={{ duration: 3, repeat: Infinity }}>
              🌺
            </motion.span>
            <motion.span animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }}>
              ✨
            </motion.span>
            <motion.span animate={{ rotate: [0, -360] }} transition={{ duration: 3, repeat: Infinity }}>
              🌼
            </motion.span>
          </motion.div>
        </motion.div>

        {/* Bottom Decoration */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-orange-100 to-transparent" />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50 app-container relative">
      {/* Decorative Pattern Overlay */}
      <div className="fixed inset-0 opacity-5 pointer-events-none" style={{
        backgroundImage: `radial-gradient(circle at 20% 50%, transparent 20%, rgba(234, 88, 12, 0.3) 21%, transparent 22%),
                         radial-gradient(circle at 80% 80%, transparent 20%, rgba(220, 38, 38, 0.3) 21%, transparent 22%)`
      }} />

      {/* Festive Header */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b-4 border-orange-200 shadow-lg"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="flex items-center gap-4"
            >
              <motion.div 
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="w-14 h-14 bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-xl"
              >
                <span className="text-2xl">🪔</span>
              </motion.div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent">
                  Hindu Cultural Society
                </h1>
                <p className="text-sm text-orange-700 font-marathi">त्योहार कॅलेंडर • Festival Calendar</p>
              </div>
            </motion.div>
            
            <div className="hidden md:flex items-center gap-3">
              <div className="flex gap-3 text-3xl">
                <motion.span 
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0]
                  }} 
                  transition={{ duration: 2, repeat: Infinity }}
                  className="filter drop-shadow-lg"
                >
                  🪔
                </motion.span>
                <motion.span animate={{ rotate: [0, 360] }} transition={{ duration: 4, repeat: Infinity }}>🌺</motion.span>
                <motion.span animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }}>✨</motion.span>
              </div>
            </div>
          </div>
        </div>
        {/* Decorative Border */}
        <div className="h-1 bg-gradient-to-r from-orange-400 via-red-400 to-pink-400" />
      </motion.header>

      {/* Main Content */}
      <main className="app-content container mx-auto px-4 py-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="min-h-[calc(100vh-140px)]"
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Festive Bottom Navigation */}
      <motion.nav 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-t-4 border-orange-200 shadow-2xl"
      >
        <div className="h-1 bg-gradient-to-r from-orange-400 via-red-400 to-pink-400" />
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex justify-around items-center h-20">
            {tabs.map((tab) => {
              const Icon = tab.icon
              const isActive = activeTab === tab.id
              
              return (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative flex flex-col items-center justify-center py-2 px-4 rounded-2xl transition-all duration-200"
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-gradient-to-r from-orange-100 via-yellow-100 to-red-100 rounded-2xl border-2 border-orange-300"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <div className="relative z-10">
                    <Icon className={`w-6 h-6 mb-1 transition-colors ${
                      isActive ? 'text-orange-600' : 'text-gray-400'
                    }`} />
                    <span className={`text-xs font-semibold ${
                      isActive ? 'text-orange-700' : 'text-gray-500'
                    }`}>
                      {tab.label}
                    </span>
                  </div>
                  {isActive && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute -top-1 right-2 text-xs"
                    >
                      ✨
                    </motion.div>
                  )}
                </motion.button>
              )
            })}
          </div>
        </div>
      </motion.nav>
    </div>
  )
}
