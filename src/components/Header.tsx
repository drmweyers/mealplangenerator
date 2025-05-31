import React from 'react';
import { UtensilsCrossed } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-purple-600 to-teal-500 text-white">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="flex items-center">
            <UtensilsCrossed size={32} className="mr-3" />
            <h1 className="text-2xl font-bold">FitMeal Planner</h1>
          </div>
          
          <div className="mt-4 md:mt-0">
            <nav className="flex space-x-6">
              <a href="#" className="font-medium hover:text-white/80 transition-colors">Home</a>
              <a href="#" className="font-medium hover:text-white/80 transition-colors">Meal Plans</a>
              <a href="#" className="font-medium hover:text-white/80 transition-colors">About</a>
            </nav>
          </div>
        </div>
        
        <div className="mt-8 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Find Your Perfect Meal Plan</h2>
          <p className="text-white/90 text-lg">
            Browse through our collection of healthy, delicious meal plans tailored to your dietary preferences and fitness goals.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;