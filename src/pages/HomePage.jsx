import React from 'react';
import { Header } from '../components/Header';
import { Decoration } from '../components/Decoration';
import { BlockTitle } from '../components/BlockTitle';

export const HomePage = () => {
  return (
    <header className="relative w-full bg-gray-100">
      <Decoration />
      <div className="container mx-auto px-[10px] md:px-[30px] lg:pl-[31px] lg:pr-[30px] xl:pl-[77px] xl:pr-[76px] 2xl:px-20 pt-12">
        <Header />
        <BlockTitle />
      </div>
    </header>
  );
};
