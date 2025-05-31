export interface Ingredient {
  name: string;
  amount: number;
  unit: string;
  description: string;
  image_url: string;
  image_filename: string;
}

export interface Meal {
  name: string;
  slug: string;
  description?: string;
  thumbnail_url: string;
  thumbnail_filename: string;
  image_url: string;
  image_filename: string;
  language_code: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  meal_type: 'breakfast' | 'lunch' | 'dinner' | 'snack';
  tags: string[];
  prep_time: number;
  ingredients: Ingredient[];
  created_at: string;
  updated_at: string;
}

export type DietType = 
  | 'balanced' 
  | 'high-protein' 
  | 'keto' 
  | 'vegetarian' 
  | 'vegan' 
  | 'paleo' 
  | 'mediterranean' 
  | 'intermittent-fasting';