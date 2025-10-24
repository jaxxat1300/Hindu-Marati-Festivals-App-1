'use client'

import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, Search, Filter, Heart, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import FestivalDetail from './FestivalDetail'
import comprehensiveFestivalsData from '@/data/comprehensive-festivals.json'

interface Festival {
  id: string
  name: string
  nameDevanagari: string
  date: string
  category: string
  color: string
  tagline: string
  heroImage: string
  overview: any
  howToCelebrate: any[]
  recipes: any[]
  decorations: any[]
  shoppingList: any
}

export default function EnhancedCalendarView() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedFestival, setSelectedFestival] = useState<Festival | null>(null)
  const [favorites, setFavorites] = useState<Set<string>>(new Set())
  const [searchQuery, setSearchQuery] = useState('')
  const [filterCategory, setFilterCategory] = useState<string>('all')
  const [showFilters, setShowFilters] = useState(false)

  const festivals = comprehensiveFestivalsData as Festival[]

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ]

  const categories = ['all', 'religious', 'cultural', 'harvest']

  const toggleFavorite = (festivalId: string) => {
    const newFavorites = new Set(favorites)
    if (newFavorites.has(festivalId)) {
      newFavorites.delete(festivalId)
    } else {
      newFavorites.add(festivalId)
    }
    setFavorites(newFavorites)
  }

  const filteredFestivals = useMemo(() => {
    return festivals.filter(festival => {
      const matchesSearch = festival.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           festival.nameDevanagari.includes(searchQuery)
      const matchesCategory = filterCategory === 'all' || festival.category === filterCategory
      return matchesSearch && matchesCategory
    })
  }, [festivals, searchQuery, filterCategory])

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    const startingDayOfWeek = firstDay.getDay()

    const days = []
    
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null)
    }
    
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day)
    }
    
    return days
  }

  const getFestivalsForMonth = (date: Date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    
    return filteredFestivals.filter(festival => {
      const festivalDate = new Date(festival.date)
      return festivalDate.getFullYear() === year && festivalDate.getMonth() === month
    })
  }

  const getFestivalsForDay = (day: number) => {
    const year = currentDate.getFullYear()
    const month = currentDate.getMonth()
    const dayDate = new Date(year, month, day)
    
    return filteredFestivals.filter(festival => {
      const festivalDate = new Date(festival.date)
      return festivalDate.toDateString() === dayDate.toDateString()
    })
  }

  const isToday = (day: number) => {
    const today = new Date()
    const year = currentDate.getFullYear()
    const month = currentDate.getMonth()
    return today.getDate() === day && 
           today.getMonth() === month && 
           today.getFullYear() === year
  }

  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentDate(prev => {
      const newDate = new Date(prev)
      if (direction === 'prev') {
        newDate.setMonth(prev.getMonth() - 1)
      } else {
        newDate.setMonth(prev.getMonth() + 1)
      }
      return newDate
    })
  }

  const goToToday = () => {
    setCurrentDate(new Date())
  }

  const monthFestivals = getFestivalsForMonth(currentDate)

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'religious': return 'from-saffron-400 to-rose-400'
      case 'cultural': return 'from-green-400 to-teal-400'
      case 'harvest': return 'from-yellow-400 to-orange-400'
      default: return 'from-purple-400 to-pink-400'
    }
  }

  const getCategoryBadgeColor = (category: string) => {
    switch (category) {
      case 'religious': return 'bg-saffron-100 text-saffron-700 border-saffron-200'
      case 'cultural': return 'bg-green-100 text-green-700 border-green-200'
      case 'harvest': return 'bg-yellow-100 text-yellow-700 border-yellow-200'
      default: return 'bg-purple-100 text-purple-700 border-purple-200'
    }
  }

  return (
    <div className="space-y-4 pb-6">
      {/* Search and Filter Bar */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-3"
      >
        {/* Search Input */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search festivals..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-white border border-saffron-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-saffron-500 focus:border-transparent transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Filter Toggle and Category Chips */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
              showFilters ? 'bg-saffron-500 text-white' : 'bg-white border border-saffron-200 text-gray-700'
            }`}
          >
            <Filter className="w-4 h-4" />
            <span className="text-sm font-medium">Filter</span>
          </button>
          
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setFilterCategory(category)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                filterCategory === category
                  ? 'bg-gradient-to-r ' + getCategoryColor(category) + ' text-white shadow-md'
                  : 'bg-white border border-gray-200 text-gray-700 hover:border-saffron-300'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Month Navigation */}
      <Card className="border-saffron-100">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <Button
              variant="outline"
              size="icon"
              onClick={() => navigateMonth('prev')}
              className="border-saffron-200 hover:bg-saffron-50"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            
            <div className="text-center">
              <h3 className="text-xl font-semibold text-saffron-800">
                {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
              </h3>
              <button
                onClick={goToToday}
                className="text-sm text-saffron-600 hover:text-saffron-700 hover:underline mt-1"
              >
                Today
              </button>
            </div>
            
            <Button
              variant="outline"
              size="icon"
              onClick={() => navigateMonth('next')}
              className="border-saffron-200 hover:bg-saffron-50"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Calendar Grid */}
      <Card className="overflow-hidden border-saffron-100">
        <CardContent className="p-0">
          <div className="grid grid-cols-7 gap-px bg-gray-200">
            {/* Day Headers */}
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => (
              <motion.div 
                key={day} 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-gradient-to-b from-saffron-100 to-saffron-200 p-3 text-center text-sm font-semibold text-saffron-800"
              >
                {day}
              </motion.div>
            ))}
            
            {/* Calendar Days */}
            {getDaysInMonth(currentDate).map((day, index) => {
              if (!day) {
                return <div key={`empty-${index}`} className="bg-gray-50 p-2 min-h-[100px]" />
              }
              
              const dayFestivals = getFestivalsForDay(day)
              const isTodayDate = isToday(day)
              
              return (
                <motion.div
                  key={day}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.01 }}
                  whileHover={{ scale: 1.02 }}
                  className={`bg-white p-2 min-h-[100px] cursor-pointer transition-all ${
                    isTodayDate ? 'bg-gradient-to-br from-saffron-50 to-rose-50 ring-2 ring-saffron-400 ring-inset' : 'hover:bg-gray-50'
                  }`}
                  onClick={() => dayFestivals.length > 0 && setSelectedFestival(dayFestivals[0])}
                >
                  <div className={`text-sm font-medium mb-2 flex items-center justify-between ${
                    isTodayDate ? 'text-saffron-800 font-bold' : 'text-gray-700'
                  }`}>
                    <span>{day}</span>
                    {isTodayDate && (
                      <span className="w-2 h-2 bg-saffron-500 rounded-full animate-pulse"></span>
                    )}
                  </div>
                  
                  <div className="space-y-1">
                    {dayFestivals.slice(0, 2).map(festival => (
                      <motion.div
                        key={festival.id}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="relative"
                        onClick={(e) => {
                          e.stopPropagation()
                          setSelectedFestival(festival)
                        }}
                      >
                        <div 
                          className={`text-xs p-2 rounded-lg cursor-pointer transition-all shadow-sm hover:shadow-md`}
                          style={{ backgroundColor: festival.color + '20', borderLeft: `3px solid ${festival.color}` }}
                        >
                          <div className="flex items-center justify-between gap-1">
                            <span className="truncate font-medium text-gray-800">{festival.name}</span>
                            {favorites.has(festival.id) && (
                              <Heart className="w-3 h-3 fill-red-500 text-red-500 flex-shrink-0" />
                            )}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                    {dayFestivals.length > 2 && (
                      <div className="text-xs text-gray-500 font-medium px-2">
                        +{dayFestivals.length - 2} more
                      </div>
                    )}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </CardContent>
      </Card>

      {/* Month's Festivals List */}
      {monthFestivals.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-4"
        >
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-saffron-800">
              {monthFestivals.length} Festival{monthFestivals.length !== 1 ? 's' : ''} This Month
            </h3>
          </div>
          
          <div className="grid gap-4 md:grid-cols-2">
            {monthFestivals.map((festival, index) => (
              <motion.div
                key={festival.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="cursor-pointer"
                onClick={() => setSelectedFestival(festival)}
              >
                <Card className="overflow-hidden border-saffron-100 hover:shadow-xl transition-all">
                  <div className="relative h-40 overflow-hidden">
                    <img 
                      src={festival.heroImage} 
                      alt={festival.name}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    <div className="absolute top-2 right-2 flex gap-2">
                      <motion.button
                        whileTap={{ scale: 0.9 }}
                        onClick={(e) => {
                          e.stopPropagation()
                          toggleFavorite(festival.id)
                        }}
                        className="p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:scale-110 transition-transform"
                      >
                        <Heart 
                          className={`w-4 h-4 ${
                            favorites.has(festival.id) 
                              ? 'fill-red-500 text-red-500' 
                              : 'text-gray-700'
                          }`} 
                        />
                      </motion.button>
                    </div>
                    <div className="absolute bottom-2 left-2 right-2">
                      <h4 className="font-bold text-white text-lg drop-shadow-lg mb-1">
                        {festival.name}
                      </h4>
                      <p className="text-sm text-white/90 drop-shadow font-marathi">
                        {festival.nameDevanagari}
                      </p>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <CalendarIcon className="w-4 h-4 text-saffron-600" />
                      <span className="text-sm text-saffron-600 font-medium">
                        {new Date(festival.date).toLocaleDateString('en-US', { 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 line-clamp-2 mb-3">{festival.tagline}</p>
                    <div className="flex items-center gap-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getCategoryBadgeColor(festival.category)}`}>
                        {festival.category}
                      </span>
                      <span className="text-xs text-gray-500">
                        {festival.recipes.length} recipes
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {/* No Results Message */}
      {monthFestivals.length === 0 && (searchQuery || filterCategory !== 'all') && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-12"
        >
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">No festivals found</h3>
          <p className="text-gray-500 mb-4">Try adjusting your search or filters</p>
          <Button
            onClick={() => {
              setSearchQuery('')
              setFilterCategory('all')
            }}
            className="bg-gradient-to-r from-saffron-500 to-rose-500 text-white"
          >
            Clear Filters
          </Button>
        </motion.div>
      )}

      {/* Festival Detail Modal */}
      <AnimatePresence>
        {selectedFestival && (
          <FestivalDetail
            festival={selectedFestival}
            onClose={() => setSelectedFestival(null)}
            isFavorite={favorites.has(selectedFestival.id)}
            onToggleFavorite={() => toggleFavorite(selectedFestival.id)}
          />
        )}
      </AnimatePresence>
    </div>
  )
}

