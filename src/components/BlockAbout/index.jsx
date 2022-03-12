import React from 'react';
import { Link } from 'react-router-dom';
import { Decoration } from '../Decoration';
import { anchorRoutes, routes } from '../../router/routes';

export const BlockAbout = () => {
  return (
    <section id={anchorRoutes.About} className="relative bg-gray-100 pt-[90px] lg:pt-[111px] xl:pt-[100px]">
      <Decoration />
      <div className="relative z-20 flex flex-col items-center">
        <p className="text-center text-2xl xl:text-[28px] 2xl:text-[35px] font-bold">What is NEAR Cold chain?</p>
        <p className="text-center text-base 2xl:text-xl font-medium text-gray-400 w-[301px] md:w-[439px] 2xl:w-[545px] mt-4">
          Service that allows you to make a packages with controlled temperature. Our tracks have a special tech to
          control temperature in all boxes and slots.
        </p>
        <Link
          to={routes.Shipment}
          className="flex justify-center items-center text-lg font-bold w-[214px] h-[53px] mt-[34px] rounded-[10px] bg-green-400 hover:bg-green-500 transform active:scale-95 duration-100"
        >
          Send a package
        </Link>
        <img
          src={require('../../assets/img/track.png')}
          alt=""
          className="my-[51px] w-[300px] h-[160px] md:w-[394px] md:h-[210px] lg:w-[473px] lg:h-[253px] xl:w-[585px] xl:h-[312px] 2xl:w-[744px] 2xl:h-[397px]"
        />
      </div>
    </section>
  );
};
