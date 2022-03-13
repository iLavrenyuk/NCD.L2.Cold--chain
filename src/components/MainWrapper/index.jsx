import React from 'react';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { routes } from '../../router/routes';
import { Outlet, useLocation } from 'react-router-dom';

export const MainWrapper = () => {
  const location = useLocation();

  return (
    <div className={location.pathname === routes.Shipment ? 'dark' : ''}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
