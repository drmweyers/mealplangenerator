import { supabase } from '../lib/supabase';
import { mockMealPlans } from '../data/mockData';

export async function migrateMealsToSupabase() {
  const meals = mockMealPlans.flatMap(plan => plan.meals);
  
  for (const meal of meals) {
    const { error } = await supabase
      .from('meals')
      .insert([{
        meal_type: meal.meal_type,
        meal_name: meal.meal_name,
        ingredients: meal.ingredients,
        cooking_instructions: meal.cooking_instructions,
        estimated_macros: meal.estimated_macros,
        diet_tags: meal.diet_tags,
        image_url: meal.image_url
      }]);
      
    if (error) {
      console.error('Error inserting meal:', error);
    }
  }
  
  console.log('Meals migration completed');
}