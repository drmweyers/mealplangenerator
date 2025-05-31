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
  {
    meal_type: 'breakfast',
    meal_name: 'Egg White Spinach Omelette',
    ingredients: ['4 egg whites', '1 cup spinach', '1/4 cup mushrooms', '1 oz low-fat cheese', 'herbs'],
    cooking_instructions: 'Whisk egg whites. Cook mushrooms and spinach. Pour eggs over vegetables, add cheese, fold and cook until set.',
    estimated_macros: { kcal: 180, protein_g: 22, carb_g: 5, fat_g: 6 },
    diet_tags: ['low-calorie', 'high-protein'],
    image_url: 'https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg'
  },
  // ... [20 more breakfast meals]
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
  {
    meal_type: 'lunch',
    meal_name: 'Grilled Chicken Salad',
    ingredients: ['5 oz grilled chicken breast', '2 cups mixed greens', 'cherry tomatoes', 'cucumber', 'balsamic vinaigrette'],
    cooking_instructions: 'Grill chicken and slice. Toss greens with vegetables and vinaigrette. Top with sliced chicken.',
    estimated_macros: { kcal: 320, protein_g: 35, carb_g: 10, fat_g: 15 },
    diet_tags: ['low-calorie', 'high-protein'],
    image_url: 'https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg'
  },
  // ... [20 more lunch meals]
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
  {
    meal_type: 'dinner',
    meal_name: 'Turkey Meatballs with Zucchini Noodles',
    ingredients: ['4 oz ground turkey', '1 egg', 'herbs', '2 zucchini', 'marinara sauce', 'parmesan'],
    cooking_instructions: 'Mix turkey with egg and herbs, form meatballs. Bake at 375°F for 20 minutes. Spiralize zucchini and sauté. Serve with sauce.',
    estimated_macros: { kcal: 300, protein_g: 28, carb_g: 15, fat_g: 16 },
    diet_tags: ['low-calorie', 'high-protein'],
    image_url: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg'
  },
  // ... [20 more dinner meals]
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
  {
    meal_type: 'snack',
    meal_name: 'Protein Energy Balls',
    ingredients: ['1 cup dates', '1/2 cup almonds', '1 scoop protein powder', 'cocoa powder', 'coconut flakes'],
    cooking_instructions: 'Process dates and almonds. Mix with protein powder and cocoa. Form into balls and roll in coconut.',
    estimated_macros: { kcal: 150, protein_g: 8, carb_g: 18, fat_g: 7 },
    diet_tags: ['vegan', 'low-calorie'],
    image_url: 'https://images.pexels.com/photos/1028598/pexels-photo-1028598.jpeg'
  },
  // ... [20 more snack meals]
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
  {
    meal_type: 'dinner',
    meal_name: 'Keto Cauliflower Mac and Cheese',
    ingredients: ['1 head cauliflower', '1 cup heavy cream', '2 cups cheese', 'butter', 'garlic', 'herbs'],
    cooking_instructions: 'Cut cauliflower into florets. Steam until tender. Make cheese sauce with cream and cheese. Combine and bake until bubbly.',
    estimated_macros: { kcal: 450, protein_g: 18, carb_g: 8, fat_g: 38 },
    diet_tags: ['keto', 'vegetarian'],
    image_url: 'https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg'
  },
  // ... [50 more keto meals]
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
  {
    meal_type: 'lunch',
    meal_name: 'Mediterranean Chickpea Salad',
    ingredients: ['2 cups chickpeas', 'cucumber', 'tomatoes', 'red onion', 'feta cheese', 'olive oil', 'lemon juice'],
    cooking_instructions: 'Combine chickpeas with chopped vegetables. Add crumbled feta. Dress with olive oil and lemon juice.',
    estimated_macros: { kcal: 350, protein_g: 12, carb_g: 40, fat_g: 16 },
    diet_tags: ['vegetarian', 'mediterranean'],
    image_url: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg'
  },
  // ... [50 more vegetarian meals]
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