#!/bin/bash
# Fix all versioned imports in components/ui folder

for file in src/components/ui/*.tsx src/components/ui/*.ts; do
  if [ -f "$file" ]; then
    # Remove version suffixes from all imports
    sed -i '' 's/@radix-ui\/react-\([a-z-]*\)@[0-9.]*/@radix-ui\/react-\1/g' "$file"
    sed -i '' 's/lucide-react@[0-9.]*/lucide-react/g' "$file"
    sed -i '' 's/class-variance-authority@[0-9.]*/class-variance-authority/g' "$file"
    echo "Fixed: $file"
  fi
done

echo "All imports fixed!"
