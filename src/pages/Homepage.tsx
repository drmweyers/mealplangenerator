import React from 'react';
import { ArrowRight, Apple, Dumbbell, Utensils } from 'lucide-react';
import { DietType } from '../types';
import DietTag from '../components/DietTag';

const Homepage: React.FC = () => {
  const dietTypes: DietType[] = [
    'keto', 
    'vegan', 
    'vegetarian', 
    'paleo', 
    'high-protein', 
    'mediterranean', 
    'balanced',
    'intermittent-fasting'
  ];
  
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-teal-50 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Healthy eating <span className="text-purple-600">simplified</span> for your fitness journey
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Discover delicious meal plans tailored to your dietary preferences and fitness goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#meal-browser" 
                  className="bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors flex items-center justify-center"
                >
                  Browse Meals
                  <ArrowRight size={18} className="ml-2" />
                </a>
                <a 
                  href="#about" 
                  className="bg-white text-purple-600 border border-purple-200 px-6 py-3 rounded-lg font-medium hover:bg-purple-50 transition-colors flex items-center justify-center"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg" 
                alt="Healthy meal prep" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Diet Types Section */}
      <section className="py-16 bg-white" id="diet-types">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Explore Diet Types</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Find meal plans tailored to your specific dietary preferences and requirements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {dietTypes.map((diet) => (
              <div 
                key={diet}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="h-48 bg-gradient-to-br from-purple-100 to-teal-100 flex items-center justify-center">
                  <span className="text-6xl">{
                    diet === 'keto' ? '🥑' :
                    diet === 'vegan' ? '🌱' :
                    diet === 'vegetarian' ? '🥗' :
                    diet === 'paleo' ? '🍖' :
                    diet === 'high-protein' ? '💪' :
                    diet === 'mediterranean' ? '🫒' :
                    diet === 'balanced' ? '⚖️' :
                    '⏱️' // intermittent-fasting
                  }</span>
                </div>
                <div className="p-6">
                  <div className="mb-3">
                    <DietTag diet={diet} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {diet.charAt(0).toUpperCase() + diet.slice(1).replace('-', ' ')}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {
                      diet === 'keto' ? 'Low-carb, high-fat meals designed to put your body in a state of ketosis.' :
                      diet === 'vegan' ? 'Plant-based meals with no animal products or byproducts.' :
                      diet === 'vegetarian' ? 'Meals focused on plant foods, dairy, and eggs without meat.' :
                      diet === 'paleo' ? 'Whole foods based on the diet of our hunter-gatherer ancestors.' :
                      diet === 'high-protein' ? 'Meals with extra protein to support muscle growth and recovery.' :
                      diet === 'mediterranean' ? 'Inspired by traditional foods of countries bordering the Mediterranean Sea.' :
                      diet === 'balanced' ? 'Well-rounded meals with balanced macronutrients for overall health.' :
                      'Timed eating patterns with periods of fasting to improve metabolism.'
                    }
                  </p>
                  <a 
                    href="#meal-browser" 
                    className="text-purple-600 font-medium hover:text-purple-800 transition-colors flex items-center"
                  >
                    Browse {diet.charAt(0).toUpperCase() + diet.slice(1).replace('-', ' ')} Meals
                    <ArrowRight size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-gray-50" id="features">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Meal Plans</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Discover how our meal plans can transform your approach to healthy eating.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <Apple className="text-purple-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Nutritionally Balanced</h3>
              <p className="text-gray-600">
                Every meal is carefully crafted to provide optimal nutrition with the right balance of macronutrients for your specific diet type.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                <Dumbbell className="text-teal-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Fitness Focused</h3>
              <p className="text-gray-600">
                Designed to complement your workout routine with meals that support your fitness goals, whether building muscle or improving endurance.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <Utensils className="text-orange-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Delicious Variety</h3>
              <p className="text-gray-600">
                Enjoy a wide range of flavorful meals that prove healthy eating doesn't have to be boring or repetitive.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-teal-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to transform your meal planning?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Start exploring our diverse collection of nutritious, delicious meal plans today.
          </p>
          <a 
            href="#meal-browser" 
            className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors inline-flex items-center"
          >
            Get Started
            <ArrowRight size={18} className="ml-2" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Homepage;