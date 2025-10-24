'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import LandingPage from '@/components/LandingPage'
import EnhancedCalendarView from '@/components/EnhancedCalendarView'
import FavoritesView from '@/components/FavoritesView'
import HindiFestivals from '@/components/HindiFestivals'
import MarathiFestivals from '@/components/MarathiFestivals'
import HinduFestivals from '@/components/HinduFestivals'
import Profile from '@/components/Profile'
import { Calendar, Heart, Home, User, Sparkles } from 'lucide-react'

export default function HomePage() {
  const [showLanding, setShowLanding] = useState(true)
  const [activeTab, setActiveTab] = useState('calendar')
  const [isLoaded, setIsLoaded] = useState(false)
  const [favorites, setFavorites] = useState<Set<string>>(new Set())

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  const handleEnterApp = () => {
    setShowLanding(false)
  }

  const tabs = [
    { id: 'calendar', label: 'Calendar', icon: Calendar, color: 'text-saffron-600' },
    { id: 'favorites', label: 'Favorites', icon: Heart, color: 'text-rose-600' },
    { id: 'hindi', label: 'Hindi', icon: Sparkles, color: 'text-orange-600' },
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
      case 'hindi':
        return <HindiFestivals />
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
      case 'favorites': return '❤️'
      case 'hindi': return '🕉️'
      case 'marathi': return '🪔'
      case 'profile': return '👤'
      default: return '📅'
    }
  }

  // Show landing page on first visit
  if (showLanding && isLoaded) {
    return <LandingPage onEnter={handleEnterApp} />
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
                  India Festival Calendar
                </h1>
                <p className="text-sm text-orange-700 font-marathi">हिंदी और मराठी त्योहार • Hindi and Marathi</p>
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
