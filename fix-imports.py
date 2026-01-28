#!/usr/bin/env python3
"""
Brainopedia Import Fixer
Converts figma:asset imports to /images/ imports
Run this in your local GitHub folder
"""

import os
import re

def fix_file(filepath):
    """Convert figma:asset to /images/ in one file"""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has figma:asset imports
        if 'figma:asset' not in content:
            return False
        
        # Replace figma:asset with /images/
        new_content = content.replace("from 'figma:asset/", "from '/images/")
        new_content = new_content.replace('from "figma:asset/', 'from "/images/')
        
        # Write back
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        
        return True
    except Exception as e:
        print(f"Error processing {filepath}: {e}")
        return False

def main():
    # Get the directory where script is run
    base_dir = os.getcwd()
    
    print("🔍 Searching for files with figma:asset imports...")
    print(f"📁 Starting from: {base_dir}")
    print()
    
    fixed_count = 0
    
    # Walk through src directory
    src_dir = os.path.join(base_dir, 'src')
    
    if not os.path.exists(src_dir):
        print("❌ ERROR: No 'src' folder found!")
        print(f"   Make sure you're running this from: /Users/stephanietharp/Downloads/brainopedia-clean")
        return
    
    for root, dirs, files in os.walk(src_dir):
        for file in files:
            if file.endswith('.tsx') or file.endswith('.ts'):
                filepath = os.path.join(root, file)
                if fix_file(filepath):
                    print(f"✅ Fixed: {filepath}")
                    fixed_count += 1
    
    print()
    print(f"✨ Done! Fixed {fixed_count} files")
    print()
    print("Next steps:")
    print("1. git add .")
    print("2. git commit -m 'Fix: Convert figma:asset to /images/ imports'")
    print("3. git push origin main")

if __name__ == '__main__':
    main()
