import React from 'react';

interface MealTypeFilterProps {
  selectedType: string;
  onChange: (type: string) => void;
}

const MealTypeFilter: React.FC<MealTypeFilterProps> = ({ selectedType, onChange }) => {
  const mealTypes = [
    { value: 'all', label: 'All Meals', icon: '🍽️' },
    { value: 'breakfast', label: 'Breakfast', icon: '🍳' },
    { value: 'lunch', label: 'Lunch', icon: '🥗' },
    { value: 'dinner', label: 'Dinner', icon: '🍲' },
    { value: 'snack', label: 'Snacks', icon: '🥜' }
  ];

  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold mb-3 text-gray-800">Meal Type</h2>
      <div className="flex flex-wrap gap-2">
        {mealTypes.map((type) => (
          <button
            key={type.value}
            onClick={() => onChange(type.value)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedType === type.value 
                ? 'bg-teal-600 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <span className="mr-1">{type.icon}</span>
            {type.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MealTypeFilter;