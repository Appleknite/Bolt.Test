import React, { useEffect } from 'react';
import { MenuItem } from './types';
import MobileMenuItem from './MobileMenuItem';

interface MobileMenuProps {
  isOpen: boolean;
  items: MenuItem[];
  expandedItems: string[];
  onToggleItem: (label: string) => void;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  items,
  expandedItems,
  onToggleItem,
  onClose,
}) => {
  useEffect(() => {
    if (isOpen) {
      const handleScroll = () => {
        onClose();
      };

      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-x-0 top-[134px] bg-white shadow-lg z-50 md:hidden max-h-[calc(100vh-134px)] overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation menu"
    >
      <div className="flex flex-col divide-y divide-gray-100">
        {items.map((item, index) => (
          <MobileMenuItem
            key={index}
            item={item}
            isExpanded={expandedItems.includes(item.label)}
            onToggle={() => onToggleItem(item.label)}
            onClose={onClose}
          />
        ))}
      </div>
    </div>
  );
};

export default MobileMenu;