import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-[250px] md:h-[350px] lg:h-[450px]">
      <img
        src="https://images.unsplash.com/photo-1590959651373-a3db0f38a961?auto=format&fit=crop&q=80"
        alt="Industrial Manufacturing Facility"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-black/50">
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Welcome to <span className="text-brand-brown">QUICKPETRO</span>
            </h1>
            <p className="text-xl md:text-2xl">Expert Solutions for Thermal Fluid Systems</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;