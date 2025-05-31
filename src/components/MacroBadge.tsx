import React from 'react';

interface MacroBadgeProps {
  name: string;
  value: number;
  unit: string;
  className?: string;
}

const MacroBadge: React.FC<MacroBadgeProps> = ({ name, value, unit, className = '' }) => {
  const getBadgeColor = () => {
    switch (name.toLowerCase()) {
      case 'calories':
      case 'kcal':
        return 'bg-orange-100 text-orange-800';
      case 'protein':
        return 'bg-red-100 text-red-800';
      case 'carbs':
        return 'bg-yellow-100 text-yellow-800';
      case 'fat':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getBadgeColor()} ${className}`}>
      {name}: {value}{unit}
    </span>
  );
};

export default MacroBadge;