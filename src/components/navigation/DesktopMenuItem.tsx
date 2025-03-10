import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { MenuItem } from './types';

interface DesktopMenuItemProps {
  item: MenuItem;
  isActive: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const DesktopMenuItem: React.FC<DesktopMenuItemProps> = ({
  item,
  isActive,
  onMouseEnter,
  onMouseLeave,
}) => {
  const Icon = item.icon;
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<number>();

  const handleMouseLeave = () => {
    timeoutRef.current = window.setTimeout(() => {
      onMouseLeave();
    }, 50);
  };

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    onMouseEnter();
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={dropdownRef}
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        to={item.href || '#'}
        className={`inline-flex items-center space-x-1 px-3 py-2 rounded-md transition-colors duration-200
          ${isActive ? 'text-brand-brown' : 'text-gray-700 hover:text-brand-brown'}`}
        onClick={(e) => {
          if (item.items) {
            e.preventDefault();
          }
        }}
        role="button"
        aria-haspopup={item.items ? 'true' : 'false'}
        aria-expanded={isActive}
      >
        {Icon && <Icon className="w-4 h-4" />}
        <span>{item.label}</span>
        {item.items && (
          <ChevronDown 
            className={`w-4 h-4 transition-transform duration-200 ${isActive ? 'rotate-180' : ''}`} 
          />
        )}
      </Link>

      {item.items && (
        <div
          className={`absolute top-full left-0 mt-1 w-48 bg-white shadow-lg rounded-md py-2 z-50
            transform transition-all duration-200 origin-top-left
            ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-1 pointer-events-none'}
          `}
          role="menu"
          style={{ minWidth: '12rem' }}
        >
          {item.items.map((subItem, index) => (
            <Link
              key={index}
              to={subItem.href || '#'}
              className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-gray-50 
                hover:text-brand-brown transition-colors duration-200 whitespace-nowrap"
              role="menuitem"
            >
              <ChevronRight className="w-4 h-4 flex-shrink-0" />
              <span>{subItem.label}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default DesktopMenuItem;