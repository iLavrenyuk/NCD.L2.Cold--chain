import React from 'react';
import { Decoration } from '../Decoration';
import { anchorRoutes } from '../../router/routes';
import { ReactComponent as Feature1Svg } from '../../assets/svg/feature1.svg';
import { ReactComponent as Feature2Svg } from '../../assets/svg/feature2.svg';
import { ReactComponent as Feature3Svg } from '../../assets/svg/feature3.svg';
import { ReactComponent as Feature4Svg } from '../../assets/svg/feature4.svg';

export const BlockFeature = () => {
  return (
    <section id={anchorRoutes.Features} className="relative pt-[80px] md:pt-[90px] lg:pt-[121px] bg-gray-100">
      <Decoration />

      <div className="relative z-20 container mx-auto lg:pl-[31px] lg:pr-[30px] xl:pl-[77px] xl:pr-[76px] 2xl:px-20">
        <div className="text-center xl:text-left">
          <p className="text-[28px] 2xl:text-[35px] font-bold">Main features</p>
          <p className="w-[211px] md:w-auto mx-auto md:mx-0 mt-4 text-base 2xl:text-xl font-medium text-gray-400 leading-[30xp]">
            Key features of cold chain deliveries <br className="hidden md:block" /> or how this can help you
          </p>
        </div>

        <div className="w-[242px] md:w-[548px] mx-auto xl:w-auto flex flex-wrap justify-between md:mt-11">
          <div className="mt-[34px] md:mt-0 w-[242px] h-[280px] 2xl:w-[270px] 2xl:h-[312px] bg-blue-300 rounded-[20px] pt-[26px] 2xl:pt-[30px] pr-[39px] 2xl:pr-[40px] pb-[44px] 2xl:pb-[50px] pl-[26px] 2xl:pl-[33px]">
            <Feature1Svg />
            <p className="text-[25px] 2xl:text-[28px] font-bold mt-4">Simplicity</p>
            <p className="text-base 2xl:text-lg font-semibold text-white w-[197px]">
              You can create package just in 3 clicks!
            </p>
          </div>
          <div className="mt-[34px] md:mt-0 w-[242px] h-[280px] 2xl:w-[270px] 2xl:h-[312px] bg-green-400 rounded-[20px] pt-[26px] 2xl:pt-[30px] pr-[39px] 2xl:pr-[40px] pb-[44px] 2xl:pb-[50px] pl-[26px] 2xl:pl-[33px]">
            <Feature2Svg />
            <p className="text-[25px] 2xl:text-[28px] font-bold mt-4">Security</p>
            <p className="text-base 2xl:text-lg font-semibold text-white w-[197px]">
              All packages are fully secured from creating to deliver
            </p>
          </div>
          <div className="mt-[34px] md:mt-[64px] xl:mt-0 w-[242px] h-[280px] 2xl:w-[270px] 2xl:h-[312px] bg-red-300 rounded-[20px] pt-[26px] 2xl:pt-[30px] lg:pr-[39px] 2xl:pr-[40px] pb-[44px] 2xl:pb-[50px] pl-[26px] 2xl:pl-[33px]">
            <Feature3Svg />
            <p className="text-[25px] 2xl:text-[28px] font-bold mt-4">Temp-contoll</p>
            <p className="text-base 2xl:text-lg font-semibold text-white w-[197px]">
              We give a 100% return if your package will deliver in other temperature
            </p>
          </div>
          <div className="mt-[34px] md:mt-[64px] xl:mt-0 w-[242px] h-[280px] 2xl:w-[270px] 2xl:h-[312px] background-gradient-mash rounded-[20px] pt-[26px] 2xl:pt-[30px] pr-[39px] 2xl:pr-[40px] pb-[44px] 2xl:pb-[50px] pl-[26px] 2xl:pl-[33px]">
            <Feature4Svg />
            <p className="text-[25px] 2xl:text-[28px] font-bold mt-4">Tracking</p>
            <p className="text-base 2xl:text-lg font-semibold text-white w-[197px]">
              You can track all packages from this webapplication
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
