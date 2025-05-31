import React, { useState, useEffect } from 'react';
import { FilterX } from 'lucide-react';
import { DietType, Meal } from '../types';
import { supabase } from '../lib/supabase';
import SearchBar from '../components/SearchBar';
import DietFilter from '../components/DietFilter';
import MealTypeFilter from '../components/MealTypeFilter';
import MacroFilter from '../components/MacroFilter';
import MealCard from '../components/MealCard';

const MealBrowser: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDiet, setSelectedDiet] = useState<DietType | 'all'>('all');
  const [selectedMealType, setSelectedMealType] = useState('all');
  const [minProtein, setMinProtein] = useState(0);
  const [maxCalories, setMaxCalories] = useState(1000);
  const [meals, setMeals] = useState<Meal[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    fetchMeals();
  }, [searchTerm, selectedDiet, selectedMealType, minProtein, maxCalories]);

  const fetchMeals = async () => {
    try {
      setLoading(true);
      let query = supabase
        .from('meals')
        .select('*');

      // Apply meal type filter
      if (selectedMealType !== 'all') {
        query = query.eq('meal_type', selectedMealType);
      }

      // Apply diet filter
      if (selectedDiet !== 'all') {
        query = query.contains('diet_tags', [selectedDiet]);
      }

      // Apply macro filters using PostgREST filter
      query = query.gte('estimated_macros->protein_g', minProtein)
                  .lte('estimated_macros->kcal', maxCalories);

      // Apply search term
      if (searchTerm) {
        query = query.or(`meal_name.ilike.%${searchTerm}%,ingredients.cs.{${searchTerm}}`);
      }

      const { data, error: fetchError } = await query;

      if (fetchError) {
        throw new Error(fetchError.message);
      }

      setMeals(data || []);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred while fetching meals');
      setMeals([]);
    } finally {
      setLoading(false);
    }
  };
  
  const resetFilters = () => {
    setSearchTerm('');
    setSelectedDiet('all');
    setSelectedMealType('all');
    setMinProtein(0);
    setMaxCalories(1000);
  };
  
  const isFiltering = searchTerm || selectedDiet !== 'all' || selectedMealType !== 'all' || 
                      minProtein > 0 || maxCalories < 1000;
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="lg:flex lg:gap-6">
        {/* Sidebar filters */}
        <div className="lg:w-1/4 mb-6 lg:mb-0">
          <div className="bg-white p-4 rounded-lg shadow-sm sticky top-4">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-800">Filters</h2>
              {isFiltering && (
                <button 
                  onClick={resetFilters}
                  className="flex items-center text-sm text-purple-600 hover:text-purple-800 transition-colors"
                >
                  <FilterX size={16} className="mr-1" />
                  Reset
                </button>
              )}
            </div>
            
            <SearchBar 
              searchTerm={searchTerm} 
              onSearchChange={setSearchTerm} 
            />
            
            <DietFilter 
              selectedDiet={selectedDiet} 
              onChange={setSelectedDiet} 
            />
            
            <MealTypeFilter 
              selectedType={selectedMealType} 
              onChange={setSelectedMealType} 
            />
            
            <MacroFilter 
              minProtein={minProtein}
              maxCalories={maxCalories}
              onMinProteinChange={setMinProtein}
              onMaxCaloriesChange={setMaxCalories}
            />
          </div>
        </div>
        
        {/* Meal grid */}
        <div className="lg:w-3/4">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-800">
              {loading ? 'Loading meals...' : `${meals.length} ${meals.length === 1 ? 'Meal' : 'Meals'} Found`}
            </h2>
            {isFiltering && (
              <div className="text-sm text-gray-600 mt-1">
                <span>Showing results for your current filters</span>
              </div>
            )}
          </div>
          
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-lg mb-6">
              <p>{error}</p>
            </div>
          )}
          
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-gray-100 h-96 rounded-lg animate-pulse" />
              ))}
            </div>
          ) : meals.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {meals.map((meal) => (
                <MealCard key={meal.id} meal={meal} />
              ))}
            </div>
          ) : (
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">No meals found</h3>
              <p className="text-gray-600 mb-4">Try adjusting your filters to find more meals.</p>
              <button 
                onClick={resetFilters}
                className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MealBrowser;