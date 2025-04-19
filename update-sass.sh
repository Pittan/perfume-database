#!/bin/bash

# Find all SASS files except constants.sass
SASS_FILES=$(find /Users/pittan/Dev/perfume-database/src/app -name "*.sass" | grep -v "constants.sass")

for file in $SASS_FILES; do
  echo "Processing $file..."
  
  # Check if file contains lighten or darken functions
  if grep -q "lighten\|darken" "$file"; then
    HAS_COLOR=true
  else
    HAS_COLOR=false
  fi
  
  # Create a temporary file
  temp_file=$(mktemp)
  
  # Update @import to @use
  if grep -q "@import '../../constants'" "$file"; then
    # Start with @use directive
    if [ "$HAS_COLOR" = true ]; then
      echo "@use '../../constants' as c" > "$temp_file"
      echo "@use 'sass:color'" >> "$temp_file"
      echo "" >> "$temp_file"
    else
      echo "@use '../../constants' as c" > "$temp_file"
      echo "" >> "$temp_file"
    fi
    
    # Add rest of file, skipping the original import line
    grep -v "@import '../../constants'" "$file" >> "$temp_file"
  elif grep -q "@import '../constants'" "$file"; then
    # Handle one level up constants
    if [ "$HAS_COLOR" = true ]; then
      echo "@use '../constants' as c" > "$temp_file"
      echo "@use 'sass:color'" >> "$temp_file"
      echo "" >> "$temp_file"
    else
      echo "@use '../constants' as c" > "$temp_file"
      echo "" >> "$temp_file"
    fi
    
    # Add rest of file, skipping the original import line
    grep -v "@import '../constants'" "$file" >> "$temp_file"
  elif grep -q "@import './constants'" "$file"; then
    # Handle same level constants
    if [ "$HAS_COLOR" = true ]; then
      echo "@use './constants' as c" > "$temp_file" 
      echo "@use 'sass:color'" >> "$temp_file"
      echo "" >> "$temp_file"
    else
      echo "@use './constants' as c" > "$temp_file"
      echo "" >> "$temp_file"
    fi
    
    # Add rest of file, skipping the original import line
    grep -v "@import './constants'" "$file" >> "$temp_file"
  else
    # No constants import, just copy file
    cat "$file" > "$temp_file"
  fi
  
  # Replace media-query includes
  sed -i '' 's/@include media-query/@include c.media-query/g' "$temp_file"
  
  # Replace constant references
  sed -i '' 's/\$header-height-sm/c.\$header-height-sm/g' "$temp_file"
  sed -i '' 's/\$header-height-md/c.\$header-height-md/g' "$temp_file"
  sed -i '' 's/\$header-height-lg/c.\$header-height-lg/g' "$temp_file"
  sed -i '' 's/\$app-nav-width-sm/c.\$app-nav-width-sm/g' "$temp_file"
  sed -i '' 's/\$app-nav-width-md/c.\$app-nav-width-md/g' "$temp_file"
  sed -i '' 's/\$app-nav-width-lg/c.\$app-nav-width-lg/g' "$temp_file"
  
  # Replace lighten and darken functions
  # lighten(#EAECF0, 3deg) -> color.adjust(#EAECF0, $lightness: 3%)
  sed -i '' 's/lighten(\([^,]*\), \([0-9]*\)deg)/color.adjust(\1, $lightness: \2%)/g' "$temp_file"
  
  # darken(#EAECF0, 3deg) -> color.adjust(#EAECF0, $lightness: -3%)
  sed -i '' 's/darken(\([^,]*\), \([0-9]*\)deg)/color.adjust(\1, $lightness: -\2%)/g' "$temp_file"
  
  # Move temporary file to original
  mv "$temp_file" "$file"
done

echo "All SASS files have been updated successfully!"