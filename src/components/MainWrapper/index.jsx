import React from 'react';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { Outlet } from 'react-router-dom';

export const MainWrapper = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
