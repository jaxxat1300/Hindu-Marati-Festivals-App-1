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
      <div className="min-h-screen minimalist-gradient flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <div className="text-4xl mb-4">🪔</div>
          <div className="text-xl font-semibold text-saffron-800 font-marathi">
            Loading Festival App...
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50 app-container">
      {/* Modern Clean Header */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100 shadow-sm"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="flex items-center gap-3"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-xl">🪔</span>
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Hindu Cultural Society
                </h1>
                <p className="text-xs text-gray-500">Festival Calendar</p>
              </div>
            </motion.div>
            
            <div className="hidden md:flex items-center gap-2 text-sm">
              <span className="px-3 py-1.5 bg-gradient-to-r from-purple-50 to-pink-50 text-purple-700 rounded-lg font-medium">
                🎓 College Club
              </span>
            </div>
          </div>
        </div>
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

      {/* Modern Bottom Navigation */}
      <motion.nav 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-2xl"
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex justify-around items-center h-16">
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
                      className="absolute inset-0 bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <div className="relative z-10">
                    <Icon className={`w-6 h-6 mb-1 transition-colors ${
                      isActive ? 'text-purple-600' : 'text-gray-400'
                    }`} />
                    <span className={`text-xs font-medium ${
                      isActive ? 'text-purple-600' : 'text-gray-500'
                    }`}>
                      {tab.label}
                    </span>
                  </div>
                </motion.button>
              )
            })}
          </div>
        </div>
      </motion.nav>
    </div>
  )
}
