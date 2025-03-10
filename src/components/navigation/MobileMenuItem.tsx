import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { MenuItem } from './types';

interface MobileMenuItemProps {
  item: MenuItem;
  isExpanded: boolean;
  onToggle: () => void;
  onClose: () => void;
}

const MobileMenuItem: React.FC<MobileMenuItemProps> = ({
  item,
  isExpanded,
  onToggle,
  onClose,
}) => {
  const Icon = item.icon;
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (onClose) {
      onClose();
    }
    setTimeout(() => {
      navigate(item.href || '/');
    }, 150);
  };

  if (!item.items) {
    return (
      <Link
        to={item.href || '#'}
        className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-gray-50 
          active:bg-gray-100 transition-colors duration-200"
        onClick={handleClick}
      >
        {Icon && <Icon className="w-5 h-5 flex-shrink-0" />}
        <span>{item.label}</span>
      </Link>
    );
  }

  return (
    <div className="relative">
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full px-4 py-3 text-gray-700 
          hover:bg-gray-50 active:bg-gray-100 transition-colors duration-200"
        aria-expanded={isExpanded}
      >
        <div className="flex items-center space-x-3">
          {Icon && <Icon className="w-5 h-5 flex-shrink-0" />}
          <span>{item.label}</span>
        </div>
        <ChevronDown
          className={`w-5 h-5 flex-shrink-0 transition-transform duration-200 ${
            isExpanded ? 'rotate-180' : ''
          }`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-200 ease-in-out ${
          isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-gray-50 py-1">
          {item.items.map((subItem, index) => (
            <Link
              key={index}
              to={subItem.href || '#'}
              className="flex items-center space-x-3 px-8 py-3 text-gray-600 
                hover:text-brand-brown active:bg-gray-100 transition-colors duration-200"
              onClick={handleClick}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-current flex-shrink-0" />
              <span>{subItem.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileMenuItem;