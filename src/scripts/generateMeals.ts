import { supabase } from '../lib/supabase';
import type { Database } from '../types/supabase';

type Meal = Database['public']['Tables']['meals']['Insert'];

const breakfastMeals: Meal[] = [
  {
    meal_type: 'breakfast',
    meal_name: 'Greek Yogurt Parfait',
    ingredients: ['1 cup Greek yogurt', '1/2 cup mixed berries', '1/4 cup granola', '1 tbsp honey', 'chia seeds'],
    cooking_instructions: 'Layer yogurt, berries, and granola in a glass. Drizzle with honey and sprinkle chia seeds.',
    estimated_macros: { kcal: 300, protein_g: 20, carb_g: 35, fat_g: 8 },
    diet_tags: ['vegetarian', 'low-calorie'],
    image_url: 'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg'
  },
  // Add 19 more breakfast meals here...
];

const lunchMeals: Meal[] = [
  {
    meal_type: 'lunch',
    meal_name: 'Quinoa Buddha Bowl',
    ingredients: ['1 cup cooked quinoa', '1 cup roasted chickpeas', '2 cups mixed vegetables', '1/4 avocado', 'tahini dressing'],
    cooking_instructions: 'Arrange quinoa in bowl, top with roasted vegetables and chickpeas. Add sliced avocado and drizzle with tahini dressing.',
    estimated_macros: { kcal: 400, protein_g: 15, carb_g: 45, fat_g: 12 },
    diet_tags: ['vegan', 'low-calorie'],
    image_url: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg'
  },
  // Add 19 more lunch meals here...
];

const dinnerMeals: Meal[] = [
  {
    meal_type: 'dinner',
    meal_name: 'Baked Salmon with Asparagus',
    ingredients: ['6 oz salmon fillet', '1 bunch asparagus', '1 tbsp olive oil', 'lemon', 'garlic', 'herbs'],
    cooking_instructions: 'Preheat oven to 400°F. Season salmon and asparagus with olive oil, garlic, and herbs. Bake for 12-15 minutes.',
    estimated_macros: { kcal: 350, protein_g: 35, carb_g: 10, fat_g: 18 },
    diet_tags: ['low-calorie', 'high-protein'],
    image_url: 'https://images.pexels.com/photos/3655916/pexels-photo-3655916.jpeg'
  },
  // Add 19 more dinner meals here...
];

const snackMeals: Meal[] = [
  {
    meal_type: 'snack',
    meal_name: 'Apple with Almond Butter',
    ingredients: ['1 medium apple', '1 tbsp almond butter', 'cinnamon'],
    cooking_instructions: 'Slice apple and serve with almond butter. Sprinkle with cinnamon if desired.',
    estimated_macros: { kcal: 200, protein_g: 5, carb_g: 25, fat_g: 8 },
    diet_tags: ['vegan', 'low-calorie'],
    image_url: 'https://images.pexels.com/photos/1120575/pexels-photo-1120575.jpeg'
  },
  // Add 19 more snack meals here...
];

const ketoMeals: Meal[] = [
  {
    meal_type: 'lunch',
    meal_name: 'Keto Cobb Salad',
    ingredients: ['2 cups romaine lettuce', '2 hard-boiled eggs', '4 oz chicken breast', '2 slices bacon', '1/2 avocado', 'blue cheese', 'olive oil'],
    cooking_instructions: 'Chop lettuce and arrange in bowl. Top with sliced eggs, chicken, crumbled bacon, avocado, and blue cheese. Drizzle with olive oil.',
    estimated_macros: { kcal: 550, protein_g: 35, carb_g: 5, fat_g: 42 },
    diet_tags: ['keto', 'high-protein'],
    image_url: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg'
  },
  // Add 49 more keto meals here...
];

const vegetarianMeals: Meal[] = [
  {
    meal_type: 'dinner',
    meal_name: 'Stuffed Bell Peppers',
    ingredients: ['2 bell peppers', '1 cup quinoa', '1 cup black beans', 'corn', 'tomatoes', 'cheese', 'Mexican spices'],
    cooking_instructions: 'Cut peppers in half and remove seeds. Cook quinoa. Mix with beans, corn, and spices. Stuff peppers and top with cheese. Bake at 375°F for 25-30 minutes.',
    estimated_macros: { kcal: 380, protein_g: 15, carb_g: 45, fat_g: 12 },
    diet_tags: ['vegetarian', 'low-calorie'],
    image_url: 'https://images.pexels.com/photos/4193843/pexels-photo-4193843.jpeg'
  },
  // Add 49 more vegetarian meals here...
];

async function insertMeals() {
  const allMeals = [
    ...breakfastMeals,
    ...lunchMeals,
    ...dinnerMeals,
    ...snackMeals,
    ...ketoMeals,
    ...vegetarianMeals
  ];

  for (const meal of allMeals) {
    const { error } = await supabase
      .from('meals')
      .insert([meal]);

    if (error) {
      console.error(`Error inserting meal ${meal.meal_name}:`, error);
    } else {
      console.log(`Successfully inserted meal: ${meal.meal_name}`);
    }
  }
}

insertMeals()
  .then(() => console.log('✅ All meals inserted successfully'))
  .catch(error => console.error('❌ Error inserting meals:', error));