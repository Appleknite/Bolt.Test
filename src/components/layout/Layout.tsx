import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../header/Header';
import Footer from '../Footer';
import { useScrollToTop } from '../../hooks/useScrollToTop';

const Layout = () => {
  useScrollToTop();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;