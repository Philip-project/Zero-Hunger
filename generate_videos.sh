#!/bin/bash
mkdir -p public/videos

# Video 1: Community Kitchen - slow zoom & pan across the warm cooking kettles
ffmpeg -y -loop 1 -i src/assets/images/project_community_kitchen_1790673027388.jpg \
  -vf "scale=1280:720:force_original_aspect_ratio=increase,crop=1280:720,zoompan=z='min(zoom+0.0018,1.25)':x='iw*0.1+iw*0.4*(on/180)':y='ih*0.2':d=180:s=1280x720:fps=30" \
  -c:v libx264 -t 6 -pix_fmt yuv420p public/videos/community_kitchen.mp4

# Video 2: Fresh Meal Distribution - warm slow zoom into volunteers serving meals
ffmpeg -y -loop 1 -i src/assets/images/hero_community_meals_1790672974684.jpg \
  -vf "scale=1280:720:force_original_aspect_ratio=increase,crop=1280:720,zoompan=z='min(zoom+0.0016,1.22)':x='iw/2-(iw/zoom/2)':y='ih*0.3-(ih/zoom*0.3)':d=180:s=1280x720:fps=30" \
  -c:v libx264 -t 6 -pix_fmt yuv420p public/videos/meal_distribution.mp4

# Video 3: School Nutrition - gentle pan across smiling children receiving nutritious meals
ffmpeg -y -loop 1 -i src/assets/images/project_school_nutrition_1790672995041.jpg \
  -vf "scale=1280:720:force_original_aspect_ratio=increase,crop=1280:720,zoompan=z='min(zoom+0.0014,1.20)':x='iw*0.4*(1-on/180)':y='ih*0.25':d=180:s=1280x720:fps=30" \
  -c:v libx264 -t 6 -pix_fmt yuv420p public/videos/school_nutrition.mp4

echo "Videos generated successfully:"
ls -lh public/videos/
