import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

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

export function getFestivalIcon(type: string): string {
  switch (type) {
    case 'Marathi':
      return '🪔'
    case 'Hindu':
      return '🕉️'
    default:
      return '🎉'
  }
}

export function isToday(date: string): boolean {
  const today = new Date()
  const festivalDate = new Date(date)
  return today.toDateString() === festivalDate.toDateString()
}

export function isUpcoming(date: string): boolean {
  const today = new Date()
  const festivalDate = new Date(date)
  return festivalDate > today
}

export function getRandomSaiBabaQuote(quotes: any[]) {
  return quotes[Math.floor(Math.random() * quotes.length)]
}
