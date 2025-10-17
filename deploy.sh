#!/bin/bash

echo "🪔 Hindu Marathi Festivals App - Quick Deploy Script"
echo "=================================================="

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "📦 Initializing Git repository..."
    git init
    echo "✅ Git repository initialized"
fi

# Add all files
echo "📁 Adding files to Git..."
git add .

# Check if there are changes to commit
if git diff --staged --quiet; then
    echo "ℹ️  No changes to commit"
else
    echo "💾 Committing changes..."
    git commit -m "Deploy Hindu Marathi Festivals App - $(date)"
    echo "✅ Changes committed"
fi

# Check if remote exists
if git remote get-url origin > /dev/null 2>&1; then
    echo "🚀 Pushing to GitHub..."
    git push origin main
    echo "✅ Pushed to GitHub successfully!"
    echo ""
    echo "🎉 Next Steps:"
    echo "1. Go to https://vercel.com"
    echo "2. Sign in with GitHub"
    echo "3. Click 'New Project'"
    echo "4. Import your repository"
    echo "5. Click 'Deploy'"
    echo ""
    echo "Your app will be live at: https://your-repo-name.vercel.app"
else
    echo "⚠️  No GitHub remote found. Please:"
    echo "1. Create a repository on GitHub.com"
    echo "2. Run: git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git"
    echo "3. Run this script again"
fi

echo ""
echo "🕉️  Jai Sai Ram! Your festival app is ready to deploy!"
