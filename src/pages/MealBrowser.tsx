import React, { useState, useMemo } from 'react';
import { FilterX } from 'lucide-react';
import { DietType, Meal } from '../types';
import { mockMealPlans } from '../data/mockData';
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
  
  // Extract all meals from the meal plans
  const allMeals = useMemo(() => {
    const meals: Meal[] = [];
    mockMealPlans.forEach(plan => {
      plan.meals.forEach(meal => {
        meals.push(meal);
      });
    });
    return meals;
  }, []);
  
  // Filter meals based on search term and filters
  const filteredMeals = useMemo(() => {
    return allMeals.filter(meal => {
      // Search term filter
      if (searchTerm && !meal.meal_name.toLowerCase().includes(searchTerm.toLowerCase()) && 
          !meal.ingredients.some(i => i.toLowerCase().includes(searchTerm.toLowerCase()))) {
        return false;
      }
      
      // Diet filter
      if (selectedDiet !== 'all' && !meal.diet_tags.includes(selectedDiet)) {
        return false;
      }
      
      // Meal type filter
      if (selectedMealType !== 'all' && meal.meal_type !== selectedMealType) {
        return false;
      }
      
      // Macro filters
      if (meal.estimated_macros.protein_g < minProtein) {
        return false;
      }
      
      if (meal.estimated_macros.kcal > maxCalories) {
        return false;
      }
      
      return true;
    });
  }, [allMeals, searchTerm, selectedDiet, selectedMealType, minProtein, maxCalories]);
  
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
              {filteredMeals.length} {filteredMeals.length === 1 ? 'Meal' : 'Meals'} Found
            </h2>
            {isFiltering && (
              <div className="text-sm text-gray-600 mt-1">
                <span>Showing results for your current filters</span>
              </div>
            )}
          </div>
          
          {filteredMeals.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredMeals.map((meal, index) => (
                <MealCard key={index} meal={meal} />
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