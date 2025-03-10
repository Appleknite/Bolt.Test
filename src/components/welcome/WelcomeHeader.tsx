import React from 'react';

const WelcomeHeader = () => {
  return (
    <div className="text-center mb-8">
      <h2 className="text-4xl font-black">
        Welcome to <span className="text-brand-brown tracking-wider">QUICKPETRO</span>
      </h2>
      <div className="w-24 h-1 bg-brand-brown mx-auto mt-4 rounded-full" />
    </div>
  );
};

export default WelcomeHeader;