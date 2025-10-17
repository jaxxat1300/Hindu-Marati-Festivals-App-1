'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import CalendarView from '@/components/CalendarView'
import MarathiFestivals from '@/components/MarathiFestivals'
import HinduFestivals from '@/components/HinduFestivals'
import Profile from '@/components/Profile'
import { Calendar, Heart, Home, User } from 'lucide-react'

export default function HomePage() {
  const [activeTab, setActiveTab] = useState('calendar')

  const tabs = [
    { id: 'calendar', label: 'Calendar', icon: Calendar },
    { id: 'marathi', label: 'Marathi', icon: Heart },
    { id: 'hindu', label: 'Hindu', icon: Home },
    { id: 'profile', label: 'Profile', icon: User },
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-saffron-50 via-rose-50 to-teal-50">
      {/* Header */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/80 backdrop-blur-sm border-b border-saffron-200 sticky top-0 z-50"
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-2xl font-bold text-saffron-800 font-marathi">
                🪔 Hindu Marathi Festivals
              </h1>
              <p className="text-sm text-saffron-600 mt-1">
                Your Digital Festival Companion
              </p>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6 pb-20">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          {renderContent()}
        </motion.div>
      </main>

      {/* Bottom Navigation */}
      <motion.nav 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm border-t border-saffron-200 z-50"
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-around py-2">
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
          </div>
        </div>
      </motion.nav>
    </div>
  )
}
