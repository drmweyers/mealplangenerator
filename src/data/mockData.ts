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
    day_plan_id: "g8h9i0j1-k2l3-m4n5-o6p7-q8r9s0t1u2v3",
    diet_tags: ["balanced"],
    total_kcal: 2000,
    meals: [
      {
        meal_type: "breakfast",
        meal_name: "Whole Grain Breakfast Bowl",
        ingredients: ["1 cup cooked farro", "1 poached egg", "1/2 avocado", "1 cup sautéed kale", "2 tbsp pesto", "cherry tomatoes"],
        cooking_instructions: "Cook farro according to package instructions. Poach egg. Sauté kale with garlic. Assemble bowl with farro, top with kale, sliced avocado, poached egg, halved cherry tomatoes, and drizzle with pesto.",
        estimated_macros: { kcal: 450, protein_g: 20, carb_g: 45, fat_g: 25 },
        diet_tags: ["balanced"],
        image_url: "https://images.pexels.com/photos/1095550/pexels-photo-1095550.jpeg"
      },
      {
        meal_type: "dinner",
        meal_name: "Herb-Crusted Chicken Breast",
        ingredients: ["6 oz chicken breast", "2 tbsp mixed herbs", "1 cup roasted vegetables", "1/2 cup quinoa", "1 tbsp olive oil"],
        cooking_instructions: "Preheat oven to 400°F. Season chicken with herbs, salt, and pepper. Bake for 25 minutes. Cook quinoa. Roast vegetables with olive oil. Serve chicken over quinoa with vegetables.",
        estimated_macros: { kcal: 480, protein_g: 42, carb_g: 35, fat_g: 18 },
        diet_tags: ["balanced", "high-protein"],
        image_url: "https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg"
      }
    ]
  },
  {
    day_plan_id: "h9i0j1k2-l3m4-n5o6-p7q8-r9s0t1u2v3w4",
    diet_tags: ["vegetarian"],
    total_kcal: 2100,
    meals: [
      {
        meal_type: "breakfast",
        meal_name: "Ricotta Toast with Honey and Figs",
        ingredients: ["2 slices sourdough bread", "1/2 cup ricotta", "2 fresh figs", "2 tbsp honey", "1 tbsp pistachios", "fresh thyme"],
        cooking_instructions: "Toast bread until golden. Spread ricotta on toast. Slice figs and arrange on top. Drizzle with honey, sprinkle with chopped pistachios and thyme leaves.",
        estimated_macros: { kcal: 420, protein_g: 15, carb_g: 55, fat_g: 18 },
        diet_tags: ["vegetarian"],
        image_url: "https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg"
      },
      {
        meal_type: "dinner",
        meal_name: "Mushroom and Truffle Risotto",
        ingredients: ["1 cup arborio rice", "2 cups mixed mushrooms", "4 cups vegetable broth", "1/2 cup parmesan", "truffle oil", "fresh herbs"],
        cooking_instructions: "Sauté mushrooms. Cook rice with broth gradually. Stir in parmesan and truffle oil. Garnish with herbs.",
        estimated_macros: { kcal: 550, protein_g: 18, carb_g: 65, fat_g: 22 },
        diet_tags: ["vegetarian"],
        image_url: "https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg"
      }
    ]
  },
  {
    day_plan_id: "i0j1k2l3-m4n5-o6p7-q8r9-s0t1u2v3w4x5",
    diet_tags: ["high-protein"],
    total_kcal: 2200,
    meals: [
      {
        meal_type: "lunch",
        meal_name: "Asian-Style Tuna Poke Bowl",
        ingredients: ["6 oz sushi-grade tuna", "1 cup brown rice", "1 cup edamame", "1/2 avocado", "seaweed strips", "soy sauce", "sesame oil"],
        cooking_instructions: "Cube tuna. Cook rice. Steam edamame. Make dressing with soy sauce and sesame oil. Assemble bowl with rice, tuna, edamame, sliced avocado, and seaweed. Drizzle with dressing.",
        estimated_macros: { kcal: 550, protein_g: 40, carb_g: 45, fat_g: 25 },
        diet_tags: ["high-protein"],
        image_url: "https://images.pexels.com/photos/2323398/pexels-photo-2323398.jpeg"
      }
    ]
  },
  {
    day_plan_id: "j1k2l3m4-n5o6-p7q8-r9s0-t1u2v3w4x5y6",
    diet_tags: ["mediterranean"],
    total_kcal: 2000,
    meals: [
      {
        meal_type: "lunch",
        meal_name: "Greek Mezze Plate",
        ingredients: ["1/2 cup hummus", "4 falafels", "1/2 cup tzatziki", "mixed olives", "pita bread", "cucumber", "cherry tomatoes"],
        cooking_instructions: "Arrange hummus and tzatziki in bowls. Heat falafels. Cut pita into triangles. Arrange all components on a plate with vegetables and olives.",
        estimated_macros: { kcal: 480, protein_g: 15, carb_g: 50, fat_g: 25 },
        diet_tags: ["mediterranean", "vegetarian"],
        image_url: "https://images.pexels.com/photos/1618906/pexels-photo-1618906.jpeg"
      }
    ]
  },
  {
    day_plan_id: "fitness-plan-1",
    diet_tags: ["high-protein", "balanced"],
    total_kcal: 2200,
    meals: [
      {
        meal_type: "breakfast",
        meal_name: "Power Protein Oatmeal Bowl",
        ingredients: ["1 cup steel-cut oats", "2 scoops whey protein", "1 banana", "2 tbsp almond butter", "1 tbsp chia seeds", "1/2 cup mixed berries"],
        cooking_instructions: "Cook oats according to package. Stir in protein powder. Top with sliced banana, almond butter, chia seeds, and berries.",
        estimated_macros: { kcal: 480, protein_g: 35, carb_g: 55, fat_g: 16 },
        diet_tags: ["high-protein", "balanced"],
        image_url: "https://images.pexels.com/photos/1095550/pexels-photo-1095550.jpeg"
      },
      {
        meal_type: "lunch",
        meal_name: "Lean Turkey Buddha Bowl",
        ingredients: ["6 oz ground turkey", "1 cup quinoa", "2 cups mixed greens", "1/2 sweet potato", "1/4 avocado", "2 tbsp olive oil"],
        cooking_instructions: "Cook quinoa. Season and cook turkey. Roast sweet potato. Assemble bowl with greens, quinoa, turkey, and toppings.",
        estimated_macros: { kcal: 550, protein_g: 42, carb_g: 45, fat_g: 25 },
        diet_tags: ["high-protein", "balanced"],
        image_url: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg"
      }
    ]
  },
  {
    day_plan_id: "athlete-plan-1",
    diet_tags: ["high-protein", "balanced"],
    total_kcal: 2400,
    meals: [
      {
        meal_type: "breakfast",
        meal_name: "Muscle Building Breakfast Stack",
        ingredients: ["4 egg whites", "1 whole egg", "2 slices ezekiel bread", "1 cup spinach", "1/4 cup cottage cheese", "1 tbsp olive oil"],
        cooking_instructions: "Scramble eggs with spinach. Toast bread. Serve with cottage cheese on the side.",
        estimated_macros: { kcal: 420, protein_g: 38, carb_g: 30, fat_g: 18 },
        diet_tags: ["high-protein", "balanced"],
        image_url: "https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg"
      },
      {
        meal_type: "lunch",
        meal_name: "Grilled Chicken Power Bowl",
        ingredients: ["6 oz chicken breast", "1 cup brown rice", "1 cup broccoli", "1/2 cup chickpeas", "2 tbsp tahini", "lemon juice"],
        cooking_instructions: "Grill chicken. Cook rice. Steam broccoli. Mix tahini with lemon juice. Assemble bowl and drizzle with sauce.",
        estimated_macros: { kcal: 580, protein_g: 45, carb_g: 50, fat_g: 22 },
        diet_tags: ["high-protein", "balanced"],
        image_url: "https://images.pexels.com/photos/1234535/pexels-photo-1234535.jpeg"
      }
    ]
  },
  {
    day_plan_id: "endurance-plan-1",
    diet_tags: ["balanced", "high-protein"],
    total_kcal: 2300,
    meals: [
      {
        meal_type: "dinner",
        meal_name: "Wild-Caught Salmon Plate",
        ingredients: ["6 oz salmon fillet", "1 cup quinoa", "2 cups roasted vegetables", "1 tbsp olive oil", "fresh herbs", "lemon"],
        cooking_instructions: "Season salmon with herbs. Bake at 400°F for 12-15 minutes. Serve with quinoa and roasted vegetables.",
        estimated_macros: { kcal: 520, protein_g: 42, carb_g: 35, fat_g: 24 },
        diet_tags: ["high-protein", "balanced"],
        image_url: "https://images.pexels.com/photos/3655916/pexels-photo-3655916.jpeg"
      }
    ]
  }
];