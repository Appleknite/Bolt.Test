import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/" className="hover:opacity-80 transition-opacity">
      <span className="text-3xl font-black tracking-wider text-brand-brown">
        QUICKPETRO
      </span>
    </Link>
  );
};

export default Logo;