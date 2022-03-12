import React from 'react';
import { StepWork } from './StepWork';
import { anchorRoutes } from '../../router/routes';

export const HowItWorks = () => {
  return (
    <section id={anchorRoutes.HowItWorks} className="relative bg-gray-100 md:pt-[109px] xl:pt-[188px] 2xl:pt-[78px]">
      <div className="container mx-auto lg:pl-[31px] lg:pr-[30px] xl:pl-[77px] xl:pr-[76px] 2xl:px-20">
        <div className="text-center mx-auto">
          <p className="text-[28px] 2xl:text-[35px] font-bold">How it works</p>
          <p className="w-[211px] md:w-auto mx-auto md:mx-0 text-base 2xl:text-xl font-medium text-gray-400 mt-4">
            Short introduction about cold chain delivery. <br />
            The best way to send a temp-controlled packages.
          </p>
        </div>

        <div className="hidden md:flex  mt-[50px] xl:mt-[77px] 2xl:mt-[55px] justify-center md:space-x-[38px] xl:space-x-0">
          <div className="hidden md:block xl:hidden">
            <div className="mt-[95px] w-[224px] text-center">
              <p className="md:text-xl 2xl:text-2xl font-bold hover:text-blue-300 cursor-default">Track a delivery</p>
              <p className="mt-2 text-sm 2xl:text-base font-medium text-gray-400">
                You can track your package in real time 24/7
              </p>
            </div>
            <div className="mt-[226px] w-[224px] text-center">
              <p className="md:text-xl 2xl:text-2xl font-bold hover:text-blue-300 cursor-default">Send another one</p>
              <p className="mt-2 text-sm 2xl:text-base font-medium text-gray-400">You can create a new delivery! </p>
            </div>
          </div>
          <div className="hidden md:flex md:flex-col xl:flex-row items-center justify-center md:space-y-4 xl:space-y-0 xl:space-x-4">
            <div className="w-6 h-6 background-gradient-mash rounded-full my-5" />
            <div className="md:w-0.5 md:h-[85px] xl:w-[230px] 2xl:w-[265px] xl:h-[2px] bg-blue-300" />
            <div className="w-6 h-6 background-gradient-mash rounded-full my-5" />
            <div className="md:w-0.5 md:h-[85px] xl:w-[230px] 2xl:w-[265px] xl:h-[2px] bg-green-300" />
            <div className="w-6 h-6 background-gradient-mash rounded-full my-5" />
            <div className="md:w-0.5 md:h-[85px] xl:w-[230px] 2xl:w-[265px] xl:h-[2px] bg-red-300" />
            <div className="w-6 h-6 background-gradient-mash rounded-full my-5" />
          </div>
          <div className="hidden md:block xl:hidden">
            <div className="w-[224px] text-center">
              <p className="md:text-xl 2xl:text-2xl font-bold hover:text-blue-300 cursor-default">Create a package</p>
              <p className="mt-2 text-sm 2xl:text-base font-medium text-gray-400">
                Create a package, set the temperature and reserve a funds
              </p>
            </div>
            <div className="mt-[183px] w-[224px] text-center">
              <p className="md:text-xl 2xl:text-2xl font-bold hover:text-blue-300 cursor-default">Get a withdraw</p>
              <p className="mt-2 text-sm 2xl:text-base font-medium text-gray-400">
                If delivery is successful, withdraw can be done and would be send to the account defined{' '}
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center md:hidden xl:flex xl:flex-row xl:items-start justify-center mt-[31px] xl:space-x-[60px] 2xl:space-x-[100px]">
          <StepWork title="Create a package" text="Create a package, set the temperature and reserve a funds" hasLine />
          <StepWork title="Track a delivery" text="You can track your package in real time 24/7" hasLine />
          <StepWork
            title="Get a withdraw"
            text="If delivery is successful, withdraw can be done and would be send to the account defined"
            hasLine
          />
          <StepWork title="Send another one" text="You can create a new delivery!" />
        </div>
      </div>
    </section>
  );
};
