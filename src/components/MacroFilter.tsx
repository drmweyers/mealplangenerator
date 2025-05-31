import React from 'react';
import { Sliders } from 'lucide-react';

interface MacroFilterProps {
  minProtein: number;
  maxCalories: number;
  onMinProteinChange: (value: number) => void;
  onMaxCaloriesChange: (value: number) => void;
}

const MacroFilter: React.FC<MacroFilterProps> = ({
  minProtein,
  maxCalories,
  onMinProteinChange,
  onMaxCaloriesChange
}) => {
  return (
    <div className="mb-6 bg-gray-50 p-4 rounded-lg">
      <div className="flex items-center gap-2 mb-3">
        <Sliders size={18} className="text-gray-700" />
        <h2 className="text-lg font-semibold text-gray-800">Macro Filters</h2>
      </div>
      
      <div className="space-y-4">
        <div>
          <div className="flex justify-between mb-1">
            <label htmlFor="min-protein" className="text-sm font-medium text-gray-700">
              Min Protein: {minProtein}g
            </label>
            <span className="text-sm text-gray-500">{minProtein}g</span>
          </div>
          <input
            id="min-protein"
            type="range"
            min="0"
            max="50"
            step="5"
            value={minProtein}
            onChange={(e) => onMinProteinChange(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-red-600"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>0g</span>
            <span>50g</span>
          </div>
        </div>
        
        <div>
          <div className="flex justify-between mb-1">
            <label htmlFor="max-calories" className="text-sm font-medium text-gray-700">
              Max Calories: {maxCalories}kcal
            </label>
            <span className="text-sm text-gray-500">{maxCalories}kcal</span>
          </div>
          <input
            id="max-calories"
            type="range"
            min="300"
            max="1000"
            step="50"
            value={maxCalories}
            onChange={(e) => onMaxCaloriesChange(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-orange-600"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>300kcal</span>
            <span>1000kcal</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MacroFilter;