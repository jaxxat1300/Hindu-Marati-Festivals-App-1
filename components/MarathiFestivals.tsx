'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Heart, Calendar, MapPin, Star } from 'lucide-react'
import { formatDate, isUpcoming } from '@/lib/utils'
import festivalsData from '@/data/festivals.json'

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

export default function MarathiFestivals() {
  const [selectedFestival, setSelectedFestival] = useState<Festival | null>(null)
  const marathiFestivals = festivalsData.filter(festival => festival.type === 'Marathi')

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <Heart className="w-8 h-8 text-rose-600" />
          <h2 className="text-3xl font-bold text-rose-800">
            Marathi Festivals
          </h2>
        </div>
        <p className="text-rose-600 max-w-2xl mx-auto">
          Celebrate the rich cultural heritage of Maharashtra with these beautiful festivals
        </p>
      </motion.div>

      {/* Festivals Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {marathiFestivals.map((festival, index) => (
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
              
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-rose-700">
                  <Calendar className="w-4 h-4" />
                  <span>{formatDate(festival.date)}</span>
                  {isUpcoming(festival.date) && (
                    <span className="px-2 py-1 bg-rose-100 text-rose-800 rounded-full text-xs">
                      Upcoming
                    </span>
                  )}
                </div>
                
                <div className="flex items-center gap-2 text-sm text-rose-700">
                  <MapPin className="w-4 h-4" />
                  <span>{festival.region}</span>
                </div>
                
                <p className="text-sm text-gray-700 line-clamp-3">
                  {festival.description}
                </p>
                
                <div className="flex flex-wrap gap-1">
                  {festival.foods.slice(0, 3).map((food, foodIndex) => (
                    <span key={foodIndex} className="px-2 py-1 bg-rose-100 text-rose-800 rounded-full text-xs">
                      {food}
                    </span>
                  ))}
                  {festival.foods.length > 3 && (
                    <span className="px-2 py-1 bg-rose-100 text-rose-800 rounded-full text-xs">
                      +{festival.foods.length - 3}
                    </span>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Festival Detail Modal */}
      {selectedFestival && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedFestival(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-rose-800">{selectedFestival.name}</h3>
                  <p className="text-lg text-rose-600 font-marathi">{selectedFestival.marathiName}</p>
                  <p className="text-sm text-gray-600">{formatDate(selectedFestival.date)}</p>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setSelectedFestival(null)}
                >
                  ×
                </Button>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-rose-800 mb-2">Significance</h4>
                  <p className="text-gray-700">{selectedFestival.significance}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-rose-800 mb-2">Traditional Foods</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {selectedFestival.foods.map((food, index) => (
                      <div key={index} className="flex items-center gap-2 p-2 bg-rose-50 rounded-lg">
                        <span className="text-rose-600">🍽️</span>
                        <span className="text-sm text-rose-800">{food}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-rose-800 mb-2">Rituals & Traditions</h4>
                  <div className="space-y-2">
                    {selectedFestival.rituals.map((ritual, index) => (
                      <div key={index} className="flex items-center gap-2 p-2 bg-rose-50 rounded-lg">
                        <span className="text-rose-600">🕉️</span>
                        <span className="text-sm text-rose-800">{ritual}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-rose-800 mb-2">Chants & Mantras</h4>
                  <div className="space-y-2">
                    {selectedFestival.chants.map((chant, index) => (
                      <p key={index} className="mantra-text text-rose-700 bg-rose-50 p-3 rounded-lg">
                        {chant}
                      </p>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-rose-800 mb-2">How to Celebrate</h4>
                  <p className="text-gray-700">{selectedFestival.how_to_celebrate}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}
