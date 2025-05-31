export interface Macros {
  kcal: number;
  protein_g: number;
  carb_g: number;
  fat_g: number;
}

export interface Meal {
  meal_type: 'breakfast' | 'lunch' | 'dinner' | 'snack';
  meal_name: string;
  ingredients: string[];
  cooking_instructions: string;
  estimated_macros: Macros;
  diet_tags: string[];
  image_url?: string;
  image_prompt?: string;
}

export interface DayPlan {
  day_plan_id: string;
  diet_tags: string[];
  total_kcal: number;
  meals: Meal[];
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