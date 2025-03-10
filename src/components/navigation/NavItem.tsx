import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface NavItemProps {
  label: string;
  items?: string[];
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  isOpen?: boolean;
  icon?: LucideIcon;
  to?: string;
}

const NavItem: React.FC<NavItemProps> = ({ 
  label, 
  items, 
  onMouseEnter, 
  onMouseLeave, 
  isOpen,
  icon: Icon,
  to
}) => {
  const baseClasses = "flex items-center space-x-1 text-gray-700 hover:text-blue-800 transition-colors duration-200";
  
  if (!items) {
    const Component = to ? Link : 'a';
    return (
      <li>
        <Component 
          to={to} 
          href={!to ? "#" : undefined}
          className={baseClasses}
        >
          {Icon && <span className="w-4 h-4">{<Icon />}</span>}
          <span>{label}</span>
        </Component>
      </li>
    );
  }

  return (
    <li className="relative"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <button className={baseClasses}>
        <span>{label}</span>
        <ChevronDown className="h-4 w-4" />
      </button>
      
      {isOpen && (
        <div className="absolute top-full left-0 bg-white shadow-lg rounded-md py-2 w-48 z-50">
          {items.map((item, index) => (
            <a
              key={index}
              href="#"
              className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-800 transition-colors duration-200"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </li>
  );
};

export default NavItem;