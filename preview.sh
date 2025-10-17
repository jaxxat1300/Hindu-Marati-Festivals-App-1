#!/bin/bash

echo "🪔 Hindu Marathi Festivals App - Local Preview"
echo "============================================="

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
    echo "✅ Dependencies installed"
else
    echo "✅ Dependencies already installed"
fi

echo ""
echo "🚀 Starting development server..."
echo "📱 Your app will open at: http://localhost:3000"
echo ""
echo "🎯 Features to explore:"
echo "• Interactive Festival Calendar"
echo "• Marathi Festivals (Gudi Padwa, Pola)"
echo "• Hindu Festivals (Diwali, Holi, Navratri, etc.)"
echo "• Profile with Sai Baba Thursday blessings"
echo "• Beautiful animations and Marathi typography"
echo ""
echo "Press Ctrl+C to stop the server"
echo ""

# Start the development server
npm run dev
