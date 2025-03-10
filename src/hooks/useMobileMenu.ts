import { useState, useCallback } from 'react';
import { useLocation } from 'react-router-dom';

export const useMobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  // Close menu on route change
  useState(() => {
    closeMenu();
  }, [location, closeMenu]);

  return {
    isOpen,
    toggleMenu,
    closeMenu
  };
};