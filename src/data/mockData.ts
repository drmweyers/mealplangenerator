import { Meal } from '../types';

// Import JSON data directly
export const meals: Meal[] = [
  {
    "name": "Avocado Toast with Poached Eggs",
    "slug": "avocado-toast-with-poached-eggs",
    "thumbnail_url": "",
    "thumbnail_filename": "Avocado_Toast_with_Poached_Eggs.jpeg",
    "image_url": "",
    "image_filename": "Avocado_Toast_with_Poached_Eggs.jpeg",
    "language_code": "en",
    "calories": 420,
    "protein": 18,
    "carbs": 35,
    "fat": 28,
    "meal_type": "breakfast",
    "tags": ["healthy", "quick", "vegetarian"],
    "prep_time": 15,
    "ingredients": [
      {
        "name": "Sourdough Bread",
        "amount": 2.0,
        "unit": "slices",
        "description": "",
        "image_url": "",
        "image_filename": "Image-not-found.png"
      },
      {
        "name": "Avocado",
        "amount": 1.0,
        "unit": "whole",
        "description": "",
        "image_url": "",
        "image_filename": "Image-not-found.png"
      },
      {
        "name": "Eggs",
        "amount": 2.0,
        "unit": "item",
        "description": "",
        "image_url": "",
        "image_filename": "Image-not-found.png"
      },
      {
        "name": "Salt",
        "amount": 1.0,
        "unit": "to taste",
        "description": "",
        "image_url": "",
        "image_filename": "Image-not-found.png"
      },
      {
        "name": "Pepper",
        "amount": 1.0,
        "unit": "to taste",
        "description": "",
        "image_url": "",
        "image_filename": "Image-not-found.png"
      },
      {
        "name": "Chili Flakes",
        "amount": 0.25,
        "unit": "tsp",
        "description": "",
        "image_url": "",
        "image_filename": "Image-not-found.png"
      },
      {
        "name": "Lemon Juice",
        "amount": 1.0,
        "unit": "tsp",
        "description": "",
        "image_url": "",
        "image_filename": "Image-not-found.png"
      },
      {
        "name": "Olive Oil",
        "amount": 1.0,
        "unit": "tbsp",
        "description": "",
        "image_url": "",
        "image_filename": "Image-not-found.png"
      }
    ],
    "created_at": "2025-05-01T10:00:00Z",
    "updated_at": "2025-05-01T10:00:00Z"
  },
  // ... rest of the meals data
];

// Helper function to get a placeholder image URL based on meal type
export function getPlaceholderImage(mealType: string): string {
  switch (mealType) {
    case 'breakfast':
      return 'https://images.pexels.com/photos/1095550/pexels-photo-1095550.jpeg';
    case 'lunch':
      return 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg';
    case 'dinner':
      return 'https://images.pexels.com/photos/1438672/pexels-photo-1438672.jpeg';
    case 'snack':
      return 'https://images.pexels.com/photos/1028598/pexels-photo-1028598.jpeg';
    default:
      return 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg';
  }
}