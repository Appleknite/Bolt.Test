import React, { useState } from 'react';
import { Droplet, ChevronDown, Settings, Info, Phone } from 'lucide-react';

const Header = () => {
  const [productsOpen, setProductsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-2">
            <Droplet className="h-10 w-10 text-blue-600" />
            <span className="text-2xl font-bold text-gray-800">PetroFlow Solutions</span>
          </div>
        </div>
        
        <nav className="border-t">
          <ul className="flex items-center h-14 space-x-8">
            <li className="relative group">
              <button
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-600"
                onMouseEnter={() => setProductsOpen(true)}
                onMouseLeave={() => setProductsOpen(false)}
              >
                <span>Products</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              {productsOpen && (
                <div className="absolute top-full left-0 bg-white shadow-lg rounded-md py-2 w-48">
                  <a href="#" className="block px-4 py-2 hover:bg-blue-50">Flushing Fluid</a>
                  <a href="#" className="block px-4 py-2 hover:bg-blue-50">System Cleaner</a>
                </div>
              )}
            </li>
            <li className="relative group">
              <button
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-600"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <span>Services</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 bg-white shadow-lg rounded-md py-2 w-48">
                  <a href="#" className="block px-4 py-2 hover:bg-blue-50">Design</a>
                  <a href="#" className="block px-4 py-2 hover:bg-blue-50">Cleaning</a>
                  <a href="#" className="block px-4 py-2 hover:bg-blue-50">Testing</a>
                  <a href="#" className="block px-4 py-2 hover:bg-blue-50">Filter System</a>
                </div>
              )}
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-blue-600 flex items-center space-x-1">
                <Settings className="h-4 w-4" />
                <span>Technical Information</span>
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-blue-600 flex items-center space-x-1">
                <Info className="h-4 w-4" />
                <span>About Us</span>
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-blue-600 flex items-center space-x-1">
                <Phone className="h-4 w-4" />
                <span>Contact Us</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;