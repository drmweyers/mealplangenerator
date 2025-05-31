import React from 'react';

interface DietTagProps {
  diet: string;
  size?: 'small' | 'medium';
  className?: string;
}

const DietTag: React.FC<DietTagProps> = ({ diet, size = 'medium', className = '' }) => {
  const getTagColor = () => {
    switch (diet.toLowerCase()) {
      case 'keto':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'vegan':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'vegetarian':
        return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      case 'paleo':
        return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'high-protein':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'mediterranean':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'balanced':
        return 'bg-teal-100 text-teal-800 border-teal-200';
      case 'intermittent-fasting':
        return 'bg-indigo-100 text-indigo-800 border-indigo-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const sizeClasses = size === 'small' 
    ? 'text-xs px-2 py-0.5' 
    : 'text-sm px-2.5 py-1';

  return (
    <span 
      className={`inline-flex items-center rounded-md font-medium border ${getTagColor()} ${sizeClasses} ${className}`}
    >
      {diet}
    </span>
  );
};

export default DietTag;