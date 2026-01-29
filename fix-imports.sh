#!/bin/bash

# Navigate to the repo
cd /Users/stephanietharp/Downloads/brainopedia-clean

# Find all .tsx files and remove the broken import lines
find src/ -name "*.tsx" -type f -exec sed -i '' "/import.*from '\/images\//d" {} +

echo "✅ All broken image imports removed!"
echo "Now run: git add . && git commit -m 'Remove broken image imports' && git push origin main"
