import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Clock } from 'lucide-react';
import { Meal } from '../types';
import MacroBadge from './MacroBadge';
import DietTag from './DietTag';

interface MealCardProps {
  meal: Meal;
}

const MealCard: React.FC<MealCardProps> = ({ meal }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const getMealTypeIcon = () => {
    switch (meal.meal_type) {
      case 'breakfast':
        return '🍳';
      case 'lunch':
        return '🥗';
      case 'dinner':
        return '🍽️';
      case 'snack':
        return '🥜';
      default:
        return '🍽️';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
      {meal.image_url && (
        <div className="h-48 w-full overflow-hidden">
          <img 
            src={meal.image_url} 
            alt={meal.meal_name} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      )}
      
      <div className="p-4">
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-lg">{getMealTypeIcon()}</span>
              <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                {meal.meal_type}
              </span>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">{meal.meal_name}</h3>
          </div>
          <button 
            onClick={toggleExpand}
            className="p-1 rounded-full hover:bg-gray-100 transition-colors"
            aria-label={expanded ? "Collapse details" : "Expand details"}
          >
            {expanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
        </div>
        
        <div className="flex flex-wrap gap-2 mt-3 mb-3">
          <MacroBadge name="Calories" value={meal.estimated_macros.kcal} unit="kcal" />
          <MacroBadge name="Protein" value={meal.estimated_macros.protein_g} unit="g" />
          <MacroBadge name="Carbs" value={meal.estimated_macros.carb_g} unit="g" />
          <MacroBadge name="Fat" value={meal.estimated_macros.fat_g} unit="g" />
        </div>
        
        <div className="flex flex-wrap gap-1.5 mt-3">
          {meal.diet_tags.map((tag, index) => (
            <DietTag key={index} diet={tag} size="small" />
          ))}
        </div>
        
        {expanded && (
          <div className="mt-4 pt-4 border-t border-gray-100 animate-fadeIn">
            <div className="mb-4">
              <h4 className="font-medium text-gray-800 mb-2">Ingredients</h4>
              <ul className="list-disc pl-5 space-y-1">
                {meal.ingredients.map((ingredient, index) => (
                  <li key={index} className="text-gray-600">{ingredient}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <div className="flex items-center gap-1 mb-2">
                <Clock size={16} className="text-gray-500" />
                <h4 className="font-medium text-gray-800">Instructions</h4>
              </div>
              <p className="text-gray-600">{meal.cooking_instructions}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MealCard;