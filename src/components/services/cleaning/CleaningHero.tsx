import React from 'react';

const CleaningHero = () => {
  return (
    <div className="relative h-[400px]">
      <img
        src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80"
        alt="Industrial Cleaning System"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/60">
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl font-black mb-4">
              Thermal Fluid System Clean-Out with{' '}
              <span className="text-brand-brown">LEGA-11 & LEGA-36</span>
            </h1>
            <p className="text-xl text-gray-200">
              Professional cleaning solutions for optimal system performance
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CleaningHero;