import React from 'react';
import { DietType } from '../types';

interface DietFilterProps {
  selectedDiet: DietType | 'all';
  onChange: (diet: DietType | 'all') => void;
}

const DietFilter: React.FC<DietFilterProps> = ({ selectedDiet, onChange }) => {
  const diets: Array<DietType | 'all'> = [
    'all',
    'balanced',
    'high-protein',
    'keto',
    'vegetarian',
    'vegan',
    'paleo',
    'mediterranean',
    'intermittent-fasting'
  ];

  const getDietIcon = (diet: string): string => {
    switch (diet) {
      case 'keto': return '🥑';
      case 'vegan': return '🌱';
      case 'vegetarian': return '🥗';
      case 'paleo': return '🍖';
      case 'high-protein': return '💪';
      case 'mediterranean': return '🫒';
      case 'balanced': return '⚖️';
      case 'intermittent-fasting': return '⏱️';
      default: return '🍽️'; // all
    }
  };

  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold mb-3 text-gray-800">Diet Types</h2>
      <div className="flex flex-wrap gap-2">
        {diets.map((diet) => (
          <button
            key={diet}
            onClick={() => onChange(diet)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedDiet === diet 
                ? 'bg-purple-600 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <span className="mr-1">{getDietIcon(diet)}</span>
            {diet === 'all' ? 'All Diets' : diet.charAt(0).toUpperCase() + diet.slice(1).replace('-', ' ')}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DietFilter;