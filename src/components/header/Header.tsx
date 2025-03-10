import React from 'react';
import Logo from './Logo';
import Navigation from '../navigation/Navigation';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Logo />
        </div>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;