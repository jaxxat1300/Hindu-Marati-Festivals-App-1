#!/bin/bash

echo "🪔 Hindu Marathi Festivals App - GitHub Deployment"
echo "=================================================="

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "📦 Initializing Git repository..."
    git init
    echo "✅ Git repository initialized"
fi

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
    echo "✅ Dependencies installed"
fi

# Build the project
echo "🔨 Building the project..."
npm run build
echo "✅ Project built successfully"

# Create .nojekyll file for GitHub Pages
echo "📄 Creating .nojekyll file..."
touch out/.nojekyll
echo "✅ .nojekyll file created"

# Add all files to git
echo "📁 Adding files to Git..."
git add .

# Commit changes
echo "💾 Committing changes..."
git commit -m "Deploy Hindu Marathi Festivals App - $(date)"
echo "✅ Changes committed"

# Check if remote exists
if git remote get-url origin > /dev/null 2>&1; then
    echo "🚀 Pushing to GitHub..."
    git push origin main
    echo "✅ Pushed to GitHub successfully!"
    echo ""
    echo "🎉 Next Steps:"
    echo "1. Go to your GitHub repository"
    echo "2. Go to Settings → Pages"
    echo "3. Source: Deploy from a branch"
    echo "4. Branch: main, folder: /out"
    echo "5. Click Save"
    echo ""
    echo "Your app will be live at: https://YOUR_USERNAME.github.io/REPO_NAME"
else
    echo "⚠️  No GitHub remote found. Please:"
    echo "1. Create a repository on GitHub.com"
    echo "2. Run: git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git"
    echo "3. Run this script again"
fi

echo ""
echo "🕉️  Jai Sai Ram! Your festival app is ready for GitHub Pages!"
