import React from 'react';
import { routes } from './routes';
import { HomePage } from '../pages/HomePage';
import { ErrorPage } from '../pages/ErrorPage';
import { Route, Routes } from 'react-router-dom';
import { RequireAuth } from './roles/RequireAuth';
import { ReceiptPage } from '../pages/ReceiptPage';
import { ShipmentPage } from '../pages/ShipmentPage';
import { MainWrapper } from '../components/MainWrapper';

export const Router = () => {
  return (
    <Routes>
      <Route path={routes.Home} element={<MainWrapper />}>
        <Route index element={<HomePage />} />
        <Route path={routes.Shipment} element={<RequireAuth component={ShipmentPage} />} />
        <Route path={routes.Receipt} element={<RequireAuth component={ReceiptPage} />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
};
