import React from 'react';
import { Link } from 'react-router-dom';
import { Decoration } from '../Decoration';
import { HashLink } from 'react-router-hash-link';
import { hashRoutes, routes } from '../../router/routes';

export const BlockTitle = () => {
  return (
    <header className="relative w-full bg-gray-100">
      <Decoration />
      <div className="container mx-auto px-[10px] md:px-[30px] lg:pl-[31px] lg:pr-[30px] xl:pl-[77px] xl:pr-[76px] 2xl:px-20 pt-12">
        <div className="relative mt-[54px] md:mt-[70px] lg:mt-[33px] w-full lg:flex flex-col lg:flex-row items-center">
          <div className="relative z-20 w-full lg:w-1/2 lg:pl-10">
            <div className="text-center lg:text-left">
              <p className="text-[30px] xl:text-[40px] 2xl:text-[50px] font-bold lg:leading-[37px] xl:leading-[49px]">
                Do you want to send a <br /> cold chain package?
              </p>
              <p className="mt-4 md:mt-[15px] mx-auto lg:mx-0 w-[258px] md:w-[405px] 2xl:w-[545px] md:text-base 2xl:text-xl font-medium text-gray-400 leading-[30px]">
                Pay 10 NEAR a new delivery to start it, select the account to pay when the delivery is made.
              </p>

              <div className="mt-[34px] flex-col md:flex md:flex-row items-center justify-center lg:justify-start">
                <Link
                  to={routes.Shipment}
                  className="flex justify-center items-center w-[214px] h-[53px] rounded-[10px] bg-blue-300 hover:bg-blue-400 transform active:scale-95 duration-100 text-lg font-bold"
                >
                  Send a package
                </Link>
                <HashLink
                  smooth
                  to={hashRoutes.About}
                  className="mt-4 md:mt-0 md:ml-10 block text-lg font-bold text-green-400 hover:text-green-500"
                >
                  Learn more
                </HashLink>
              </div>
            </div>
          </div>

          <div className="relative z-20 w-full lg:w-1/2 mt-10 md:mt-[87px] lg:mt-0">
            <img
              src={require('../../assets/img/first-offer.png')}
              alt=""
              className="mx-auto lg:mx-0 lg:ml-auto w-[318px] h-[289px] md:w-[374px] md:h-[339px] xl:w-[429px] xl:h-[389px] 2xl:w-[651px] 2xl:h-[587px]"
            />
          </div>
        </div>
      </div>
    </header>
  );
};
