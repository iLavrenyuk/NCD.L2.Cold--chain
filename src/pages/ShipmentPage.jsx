import React from 'react';
import { BlockDelivery } from '../components/BlockDelivery';
import { TitleDelivery } from '../components/TitleDelivery';

export const ShipmentPage = () => {
  return (
    <>
      <TitleDelivery isDarkTheme />
      <BlockDelivery isDarkTheme />
    </>
  );
};
