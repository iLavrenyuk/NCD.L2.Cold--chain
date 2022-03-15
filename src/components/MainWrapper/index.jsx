import React, { useState } from 'react';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { routes } from '../../router/routes';
import { CreatePackage } from '../CreatePackage';
import { ChangeContract } from '../ChangeContract';
import { Outlet, useLocation } from 'react-router-dom';

export const MainWrapper = () => {
  const location = useLocation();
  const [isOpenForm, setIsOpenForm] = useState(false);

  return (
    <div className={location.pathname === routes.Shipment ? 'dark' : ''}>
      <ChangeContract />
      {isOpenForm ? <CreatePackage setIsOpenForm={setIsOpenForm} /> : null}
      <Header isOpenForm={isOpenForm} setIsOpenForm={setIsOpenForm} />
      <Outlet />
      <Footer />
    </div>
  );
};
