// Import JSON data directly
import mealsData from './meals.JSON' assert { type: 'json' };
import { Meal } from '../types';

export const meals: Meal[] = mealsData;

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