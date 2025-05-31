import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Clock } from 'lucide-react';
import { Meal } from '../types';
import MacroBadge from './MacroBadge';
import DietTag from './DietTag';
import { getPlaceholderImage } from '../data/mockData';

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

  const imageUrl = meal.image_url || getPlaceholderImage(meal.meal_type);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="h-48 w-full overflow-hidden">
        <img 
          src={imageUrl}
          alt={meal.name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      
      <div className="p-4">
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-lg">{getMealTypeIcon()}</span>
              <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                {meal.meal_type}
              </span>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">{meal.name}</h3>
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
          <MacroBadge name="Calories" value={meal.calories} unit="kcal" />
          <MacroBadge name="Protein" value={meal.protein} unit="g" />
          <MacroBadge name="Carbs" value={meal.carbs} unit="g" />
          <MacroBadge name="Fat" value={meal.fat} unit="g" />
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-600 mt-2">
          <Clock size={16} />
          <span>{meal.prep_time} min prep time</span>
        </div>
        
        <div className="flex flex-wrap gap-1.5 mt-3">
          {meal.tags.map((tag, index) => (
            <DietTag key={index} diet={tag} size="small" />
          ))}
        </div>
        
        {expanded && (
          <div className="mt-4 pt-4 border-t border-gray-100 animate-fadeIn">
            {meal.description && (
              <p className="text-gray-600 mb-4">{meal.description}</p>
            )}
            <div className="mb-4">
              <h4 className="font-medium text-gray-800 mb-2">Ingredients</h4>
              <ul className="list-disc pl-5 space-y-1">
                {meal.ingredients.map((ingredient, index) => (
                  <li key={index} className="text-gray-600">
                    {ingredient.amount} {ingredient.unit} {ingredient.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MealCard;