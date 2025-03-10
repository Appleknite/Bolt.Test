import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-[600px]">
      <img
        src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80"
        alt="Industrial Fluid System"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50">
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl font-bold mb-4">Welcome to PetroFlow Solutions</h1>
            <p className="text-2xl">Innovative Solutions for Fluid System Needs</p>
            <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-semibold">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;