import { migrateMealsToSupabase } from '../utils/migrateMeals';

async function main() {
  try {
    await migrateMealsToSupabase();
    console.log('✅ Meals successfully migrated to Supabase');
  } catch (error) {
    console.error('❌ Error migrating meals:', error);
    process.exit(1);
  }
}

main();