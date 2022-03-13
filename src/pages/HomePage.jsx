import React from 'react';
import { BlockCall } from '../components/BlockCall';
import { BlockTitle } from '../components/BlockTitle';
import { BlockAbout } from '../components/BlockAbout';
import { HowItWorks } from '../components/HowItWorks';
import { BlockFeature } from '../components/BlockFeature';
import { BlockLocation } from '../components/BlockLocation';

export const HomePage = () => {
  return (
    <>
      <BlockTitle />
      <BlockAbout />
      <HowItWorks />
      <BlockFeature />
      <BlockLocation />
      <BlockCall />
    </>
  );
};
