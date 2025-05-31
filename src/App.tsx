import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import MealBrowser from './pages/MealBrowser';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow">
        <Homepage />
        <div id="meal-browser" className="py-12 bg-white">
          <div className="container mx-auto px-4 mb-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-2">Browse Our Meal Collection</h2>
            <p className="text-center text-gray-700 max-w-2xl mx-auto">
              Find the perfect meals for your diet type, preferences, and nutritional needs.
            </p>
          </div>
          <MealBrowser />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;