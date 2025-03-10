import React from 'react';
import { Menu } from 'lucide-react';
import { menuItems } from './navigationData';
import DesktopMenuItem from './DesktopMenuItem';
import MobileMenu from './MobileMenu';
import { useMobileMenu } from '../../hooks/useMobileMenu';
import type { NavigationState } from './types';

const Navigation = () => {
  const { isOpen, toggleMenu, closeMenu } = useMobileMenu();
  const [state, setState] = React.useState<NavigationState>({
    activeDropdown: null,
    expandedMobileItems: [],
  });

  const handleToggleMobileItem = (label: string) => {
    setState((s) => ({
      ...s,
      expandedMobileItems: s.expandedMobileItems.includes(label)
        ? s.expandedMobileItems.filter((i) => i !== label)
        : [...s.expandedMobileItems, label],
    }));
  };

  return (
    <nav className="border-t border-gray-200">
      <div className="container mx-auto px-4">
        {/* Mobile Menu Button */}
        <div className="md:hidden flex justify-end h-14">
          <button
            onClick={toggleMenu}
            className="p-2 text-gray-700 hover:text-brand-brown transition-colors"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <ul className="flex items-center h-14 space-x-6">
            {menuItems.map((item, index) => (
              <li key={index}>
                <DesktopMenuItem
                  item={item}
                  isActive={state.activeDropdown === item.label}
                  onMouseEnter={() =>
                    setState((s) => ({ ...s, activeDropdown: item.label }))
                  }
                  onMouseLeave={() =>
                    setState((s) => ({ ...s, activeDropdown: null }))
                  }
                />
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu */}
        <MobileMenu
          isOpen={isOpen}
          items={menuItems}
          expandedItems={state.expandedMobileItems}
          onToggleItem={handleToggleMobileItem}
          onClose={closeMenu}
        />
      </div>
    </nav>
  );
};

export default Navigation;