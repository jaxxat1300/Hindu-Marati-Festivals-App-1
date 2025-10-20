'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import CalendarView from '@/components/CalendarView'
import MarathiFestivals from '@/components/MarathiFestivals'
import HinduFestivals from '@/components/HinduFestivals'
import Profile from '@/components/Profile'
import { Calendar, Heart, Home, User, Sparkles } from 'lucide-react'

export default function HomePage() {
  const [activeTab, setActiveTab] = useState('calendar')
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const tabs = [
    { id: 'calendar', label: 'Calendar', icon: Calendar, color: 'text-saffron-600' },
    { id: 'marathi', label: 'Marathi', icon: Heart, color: 'text-rose-600' },
    { id: 'hindu', label: 'Hindu', icon: Home, color: 'text-teal-600' },
    { id: 'profile', label: 'Profile', icon: User, color: 'text-gold-600' },
  ]

  const renderContent = () => {
    switch (activeTab) {
      case 'calendar':
        return <CalendarView />
      case 'marathi':
        return <MarathiFestivals />
      case 'hindu':
        return <HinduFestivals />
      case 'profile':
        return <Profile />
      default:
        return <CalendarView />
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
    <div className="min-h-screen minimalist-gradient app-container">
      {/* Header with Indian Charm */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="app-header sticky top-0 z-50 festival-decoration"
      >
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-center">
            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="flex items-center justify-center gap-2 mb-1"
              >
                <span className="text-2xl">🪔</span>
                <h1 className="text-xl font-bold text-saffron-800 font-marathi">
                  Hindu Marathi Festivals
                </h1>
                <span className="text-2xl">🕉️</span>
              </motion.div>
              <p className="text-sm text-saffron-600">
                Your Digital Festival Companion
              </p>
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

      {/* Bottom Navigation with Enhanced Design */}
      <motion.nav 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="app-nav fixed bottom-0 left-0 right-0 z-50"
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-around py-2">
            {tabs.map((tab) => {
              const Icon = tab.icon
              const isActive = activeTab === tab.id
              
              return (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`touch-button flex flex-col items-center py-2 px-3 rounded-xl transition-all duration-300 ${
                    isActive 
                      ? `${tab.color} bg-white shadow-lg border border-saffron-200` 
                      : 'text-gray-500 hover:text-saffron-500'
                  }`}
                >
                  <div className="relative">
                    <Icon className={`w-5 h-5 mb-1 transition-all duration-200 ${
                      isActive ? 'scale-110' : ''
                    }`} />
                    {isActive && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute -top-1 -right-1 w-2 h-2 bg-saffron-500 rounded-full"
                      />
                    )}
                  </div>
                  <span className={`text-xs font-medium transition-all duration-200 ${
                    isActive ? 'text-saffron-700' : ''
                  }`}>
                    {tab.label}
                  </span>
                </motion.button>
              )
            })}
          </div>
        </div>
      </motion.nav>

      {/* Floating Action Button for Quick Access */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-20 right-4 w-12 h-12 bg-saffron-500 text-white rounded-full shadow-lg diya-glow flex items-center justify-center z-40"
        onClick={() => setActiveTab('calendar')}
      >
        <Sparkles className="w-6 h-6" />
      </motion.button>
    </div>
  )
}
