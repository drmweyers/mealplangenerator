import { DayPlan } from '../types';

// Mock data for development
export const mockMealPlans: DayPlan[] = [
  {
    day_plan_id: "e9a8d6cb-d271-4f5a-9c58-f0a4e971b863",
    diet_tags: ["keto"],
    total_kcal: 1900,
    meals: [
      {
        meal_type: "breakfast",
        meal_name: "Spinach & Cheese Egg Cups",
        ingredients: ["3 eggs", "30g grated cheddar", "½ cup spinach", "salt", "pepper"],
        cooking_instructions: "Preheat oven to 350°F (175°C). Grease a muffin tin. Whisk eggs in a bowl. Chop spinach finely. Mix eggs, cheese, and spinach. Season with salt and pepper. Pour mixture into muffin cups, filling each about 2/3 full. Bake for 15-18 minutes until set and slightly golden. Let cool for 5 minutes before removing from tin.",
        estimated_macros: { kcal: 480, protein_g: 32, carb_g: 6, fat_g: 36 },
        diet_tags: ["keto", "high-protein", "vegetarian"],
        image_url: "https://images.pexels.com/photos/4144234/pexels-photo-4144234.jpeg"
      },
      {
        meal_type: "lunch",
        meal_name: "Avocado Salmon Salad",
        ingredients: ["4 oz grilled salmon", "2 cups mixed greens", "1/2 avocado, sliced", "1 tbsp olive oil", "1 tsp lemon juice", "salt and pepper to taste"],
        cooking_instructions: "Season salmon fillet with salt and pepper. Grill for 4 minutes per side until cooked through. Let cool slightly. In a bowl, toss mixed greens with olive oil and lemon juice. Place greens on a plate, top with salmon pieces and avocado slices. Season with additional salt and pepper if desired.",
        estimated_macros: { kcal: 520, protein_g: 35, carb_g: 8, fat_g: 38 },
        diet_tags: ["keto", "paleo"],
        image_url: "https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg"
      },
      {
        meal_type: "dinner",
        meal_name: "Garlic Butter Steak with Roasted Asparagus",
        ingredients: ["6 oz ribeye steak", "2 tbsp butter", "2 cloves garlic, minced", "10 asparagus spears", "1 tbsp olive oil", "salt and pepper"],
        cooking_instructions: "Preheat oven to 425°F. Season steak with salt and pepper. Heat a cast-iron skillet over high heat. Cook steak 3-4 minutes per side for medium-rare. During last minute, add butter and garlic, basting steak with the mixture. Let rest. Toss asparagus with olive oil, salt, and pepper. Roast for 10-12 minutes until tender. Serve steak with asparagus and drizzle with remaining garlic butter.",
        estimated_macros: { kcal: 650, protein_g: 45, carb_g: 7, fat_g: 48 },
        diet_tags: ["keto", "paleo"],
        image_url: "https://images.pexels.com/photos/1639561/pexels-photo-1639561.jpeg"
      },
      {
        meal_type: "snack",
        meal_name: "Spiced Almonds & Cheese",
        ingredients: ["1/4 cup almonds", "1 oz aged cheddar", "1/4 tsp paprika", "pinch of salt"],
        cooking_instructions: "In a small dry skillet, toast almonds over medium heat for 3-4 minutes until fragrant. Toss with paprika and salt while still warm. Let cool. Cut cheese into small cubes. Serve together as a snack.",
        estimated_macros: { kcal: 250, protein_g: 12, carb_g: 4, fat_g: 21 },
        diet_tags: ["keto", "vegetarian"],
        image_url: "https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg"
      }
    ]
  },
  {
    day_plan_id: "f7b9d2e4-c182-4a6b-b047-d9e3a8c5f741",
    diet_tags: ["vegan"],
    total_kcal: 2100,
    meals: [
      {
        meal_type: "breakfast",
        meal_name: "Berry Almond Overnight Oats",
        ingredients: ["1/2 cup rolled oats", "1 cup almond milk", "1 tbsp chia seeds", "1 tbsp maple syrup", "1/2 cup mixed berries", "2 tbsp sliced almonds"],
        cooking_instructions: "In a jar, combine oats, almond milk, chia seeds, and maple syrup. Stir well, seal, and refrigerate overnight. In the morning, top with mixed berries and sliced almonds before serving.",
        estimated_macros: { kcal: 420, protein_g: 12, carb_g: 65, fat_g: 14 },
        diet_tags: ["vegan", "vegetarian"],
        image_url: "https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg"
      },
      {
        meal_type: "lunch",
        meal_name: "Mediterranean Quinoa Bowl",
        ingredients: ["3/4 cup cooked quinoa", "1/2 cup chickpeas", "1/4 cup diced cucumber", "1/4 cup diced tomatoes", "2 tbsp kalamata olives", "2 tbsp tahini dressing", "fresh herbs"],
        cooking_instructions: "Layer cooked quinoa in a bowl. Top with chickpeas, cucumber, tomatoes, and olives. Drizzle with tahini dressing (made from 2 tbsp tahini, 1 tbsp lemon juice, 1 tbsp water, pinch of salt). Garnish with fresh herbs like parsley or mint.",
        estimated_macros: { kcal: 480, protein_g: 18, carb_g: 72, fat_g: 16 },
        diet_tags: ["vegan", "vegetarian", "mediterranean"],
        image_url: "https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg"
      },
      {
        meal_type: "dinner",
        meal_name: "Coconut Curry Vegetable Stir-Fry",
        ingredients: ["1 block firm tofu, cubed", "1 cup broccoli florets", "1 red bell pepper, sliced", "1/2 cup snap peas", "1/3 cup coconut milk", "2 tbsp curry paste", "1 tbsp soy sauce", "1 tsp maple syrup", "fresh lime"],
        cooking_instructions: "Press tofu to remove excess water, then cube. In a wok, stir-fry tofu until golden. Add vegetables and cook until tender-crisp. In a small bowl, mix coconut milk, curry paste, soy sauce, and maple syrup. Pour sauce over tofu and vegetables, simmer for 3-4 minutes. Serve with a squeeze of lime.",
        estimated_macros: { kcal: 520, protein_g: 25, carb_g: 38, fat_g: 32 },
        diet_tags: ["vegan", "vegetarian"],
        image_url: "https://images.pexels.com/photos/723198/pexels-photo-723198.jpeg"
      },
      {
        meal_type: "snack",
        meal_name: "Spiced Roasted Chickpeas",
        ingredients: ["1/2 cup chickpeas", "1 tsp olive oil", "1/4 tsp cumin", "1/4 tsp paprika", "1/8 tsp garlic powder", "pinch of salt"],
        cooking_instructions: "Preheat oven to 400°F. Drain and rinse chickpeas, pat dry. Toss with olive oil and spices. Spread on baking sheet and roast for 25-30 minutes, stirring halfway, until crispy. Let cool before eating.",
        estimated_macros: { kcal: 180, protein_g: 9, carb_g: 20, fat_g: 8 },
        diet_tags: ["vegan", "vegetarian"],
        image_url: "https://images.pexels.com/photos/5848182/pexels-photo-5848182.jpeg"
      }
    ]
  },
  {
    day_plan_id: "c5e7f9a2-b384-4d1c-9e6f-2a8b3c4d5e6f",
    diet_tags: ["mediterranean"],
    total_kcal: 2000,
    meals: [
      {
        meal_type: "breakfast",
        meal_name: "Greek Yogurt Parfait with Honey & Figs",
        ingredients: ["1 cup Greek yogurt", "2 fresh figs, quartered", "2 tbsp honey", "1/4 cup granola", "1 tbsp pistachios, chopped"],
        cooking_instructions: "Layer half the yogurt in a glass. Add half the granola and figs. Drizzle with half the honey. Repeat layers. Top with chopped pistachios. Serve immediately while granola is still crunchy.",
        estimated_macros: { kcal: 380, protein_g: 20, carb_g: 45, fat_g: 15 },
        diet_tags: ["mediterranean", "vegetarian"],
        image_url: "https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg"
      },
      {
        meal_type: "lunch",
        meal_name: "Grilled Halloumi & Vegetable Skewers",
        ingredients: ["200g halloumi cheese", "1 zucchini", "1 red onion", "12 cherry tomatoes", "2 tbsp olive oil", "1 tbsp oregano", "1 lemon"],
        cooking_instructions: "Cut halloumi and vegetables into chunks. Thread onto skewers alternating ingredients. Brush with olive oil and sprinkle with oregano. Grill for 2-3 minutes per side until cheese is golden and vegetables are tender. Squeeze fresh lemon juice over before serving.",
        estimated_macros: { kcal: 450, protein_g: 22, carb_g: 15, fat_g: 35 },
        diet_tags: ["mediterranean", "vegetarian"],
        image_url: "https://images.pexels.com/photos/1618906/pexels-photo-1618906.jpeg"
      },
      {
        meal_type: "dinner",
        meal_name: "Herb-Crusted Sea Bass with Roasted Mediterranean Vegetables",
        ingredients: ["6 oz sea bass fillet", "2 tbsp fresh herbs (parsley, dill, oregano)", "1 cup mixed vegetables (eggplant, peppers, tomatoes)", "2 tbsp olive oil", "2 cloves garlic", "1 lemon"],
        cooking_instructions: "Preheat oven to 400°F. Toss vegetables with 1 tbsp olive oil, garlic, and herbs. Roast for 20 minutes. Mix remaining herbs with breadcrumbs. Season fish, coat with herb mixture. Place on top of vegetables, drizzle with remaining oil. Bake 12-15 minutes until fish flakes easily.",
        estimated_macros: { kcal: 420, protein_g: 35, carb_g: 20, fat_g: 25 },
        diet_tags: ["mediterranean"],
        image_url: "https://images.pexels.com/photos/3655916/pexels-photo-3655916.jpeg"
      },
      {
        meal_type: "snack",
        meal_name: "Marinated Olives with Citrus and Herbs",
        ingredients: ["1 cup mixed olives", "1 orange, zested", "2 sprigs fresh rosemary", "2 cloves garlic", "2 tbsp olive oil"],
        cooking_instructions: "Warm olive oil in a small pan. Add garlic and rosemary, cook for 1 minute until fragrant. Add olives and orange zest, toss to coat. Let marinate for at least 30 minutes before serving. Can be stored in an airtight container for up to 1 week.",
        estimated_macros: { kcal: 200, protein_g: 2, carb_g: 5, fat_g: 20 },
        diet_tags: ["mediterranean", "vegan", "vegetarian"],
        image_url: "https://images.pexels.com/photos/4198566/pexels-photo-4198566.jpeg"
      }
    ]
  },
  {
    day_plan_id: "d4e8c7b6-a293-4f5e-8d7c-9b8a7c6d5e4f",
    diet_tags: ["high-protein"],
    total_kcal: 2200,
    meals: [
      {
        meal_type: "breakfast",
        meal_name: "Protein Power Pancakes",
        ingredients: ["1 scoop vanilla protein powder", "1 banana", "2 eggs", "1/4 cup oats", "1 tbsp Greek yogurt", "1/2 tsp cinnamon"],
        cooking_instructions: "Blend all ingredients until smooth. Heat non-stick pan over medium heat. Pour batter to form pancakes. Cook until bubbles form, flip and cook other side until golden. Top with extra Greek yogurt and banana slices if desired.",
        estimated_macros: { kcal: 400, protein_g: 35, carb_g: 45, fat_g: 12 },
        diet_tags: ["high-protein"],
        image_url: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg"
      },
      {
        meal_type: "lunch",
        meal_name: "Turkey Quinoa Power Bowl",
        ingredients: ["6 oz ground turkey", "1 cup cooked quinoa", "1 cup roasted broccoli", "1/2 cup cherry tomatoes", "1/4 avocado", "2 tbsp hummus"],
        cooking_instructions: "Season and cook ground turkey until browned. Arrange quinoa in bowl, top with turkey, roasted broccoli, tomatoes, and avocado. Dollop with hummus and serve.",
        estimated_macros: { kcal: 550, protein_g: 45, carb_g: 35, fat_g: 25 },
        diet_tags: ["high-protein"],
        image_url: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg"
      },
      {
        meal_type: "dinner",
        meal_name: "Grilled Chicken with Sweet Potato Mash",
        ingredients: ["8 oz chicken breast", "1 large sweet potato", "2 cups spinach", "2 tbsp Greek yogurt", "1 tbsp olive oil", "herbs and spices"],
        cooking_instructions: "Season chicken with herbs and spices. Grill until cooked through. Peel and cube sweet potato, boil until tender. Mash with Greek yogurt. Sauté spinach in olive oil. Serve chicken over sweet potato mash with spinach.",
        estimated_macros: { kcal: 520, protein_g: 50, carb_g: 40, fat_g: 20 },
        diet_tags: ["high-protein"],
        image_url: "https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg"
      },
      {
        meal_type: "snack",
        meal_name: "Protein Energy Balls",
        ingredients: ["1 scoop protein powder", "1/2 cup oats", "2 tbsp peanut butter", "1 tbsp honey", "1 tbsp chia seeds", "splash of almond milk"],
        cooking_instructions: "Mix protein powder, oats, and chia seeds. Add peanut butter and honey. Add almond milk gradually until mixture holds together. Roll into balls. Refrigerate for at least 30 minutes before serving.",
        estimated_macros: { kcal: 280, protein_g: 20, carb_g: 25, fat_g: 12 },
        diet_tags: ["high-protein", "vegetarian"],
        image_url: "https://images.pexels.com/photos/1028598/pexels-photo-1028598.jpeg"
      }
    ]
  },
  {
    day_plan_id: "b3a2c1d4-e5f6-4a7b-8c9d-0e1f2a3b4c5d",
    diet_tags: ["paleo"],
    total_kcal: 1950,
    meals: [
      {
        meal_type: "breakfast",
        meal_name: "Sweet Potato Hash with Eggs",
        ingredients: ["1 medium sweet potato", "2 eggs", "1/4 onion", "1 bell pepper", "2 tbsp coconut oil", "fresh herbs"],
        cooking_instructions: "Dice sweet potato, onion, and pepper. Heat coconut oil, cook sweet potato until almost tender. Add onion and pepper, cook until vegetables are soft. Create wells in the hash, crack eggs into them. Cover and cook until eggs are set.",
        estimated_macros: { kcal: 420, protein_g: 16, carb_g: 35, fat_g: 28 },
        diet_tags: ["paleo"],
        image_url: "https://images.pexels.com/photos/3850838/pexels-photo-3850838.jpeg"
      },
      {
        meal_type: "lunch",
        meal_name: "Grilled Chicken Cobb Salad",
        ingredients: ["6 oz grilled chicken", "2 cups mixed greens", "1 hard-boiled egg", "1/2 avocado", "4 cherry tomatoes", "2 tbsp olive oil", "1 tbsp balsamic vinegar"],
        cooking_instructions: "Grill chicken breast, let rest, then slice. Arrange greens on plate. Top with sliced chicken, quartered egg, sliced avocado, and tomatoes. Whisk olive oil and vinegar, drizzle over salad.",
        estimated_macros: { kcal: 480, protein_g: 40, carb_g: 12, fat_g: 32 },
        diet_tags: ["paleo"],
        image_url: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg"
      },
      {
        meal_type: "dinner",
        meal_name: "Herb-Crusted Salmon with Roasted Vegetables",
        ingredients: ["6 oz salmon fillet", "2 cups mixed vegetables", "2 tbsp olive oil", "fresh herbs", "1 lemon", "sea salt"],
        cooking_instructions: "Preheat oven to 400°F. Toss vegetables with 1 tbsp olive oil and herbs. Roast for 20 minutes. Season salmon with herbs and salt. Place on baking sheet, drizzle with remaining oil. Roast 12-15 minutes until cooked through. Serve with lemon wedges.",
        estimated_macros: { kcal: 450, protein_g: 35, carb_g: 20, fat_g: 30 },
        diet_tags: ["paleo"],
        image_url: "https://images.pexels.com/photos/3655916/pexels-photo-3655916.jpeg"
      },
      {
        meal_type: "snack",
        meal_name: "Trail Mix",
        ingredients: ["1/4 cup mixed nuts", "2 tbsp pumpkin seeds", "1 tbsp dried cranberries", "1 tbsp coconut flakes"],
        cooking_instructions: "Mix all ingredients in a bowl. Store in an airtight container.",
        estimated_macros: { kcal: 200, protein_g: 8, carb_g: 12, fat_g: 16 },
        diet_tags: ["paleo", "vegan"],
        image_url: "https://images.pexels.com/photos/1508666/pexels-photo-1508666.jpeg"
      }
    ]
  }
];