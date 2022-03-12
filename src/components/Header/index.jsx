import React from 'react';
import { Link } from 'react-router-dom';
import { signIn } from '../../services/near';
import { HashLink } from 'react-router-hash-link';
import { hashRoutes, routes } from '../../router/routes';
import { ReactComponent as NearLogoTextSvg } from '../../assets/svg/nearLogoText.svg';

export const Header = () => {
  const handleSignIn = () => {
    signIn(window.location.origin + routes.Dashboard);
  };

  return (
    <nav className="w-full rounded-large bg-white">
      <div className="flex h-[65px] md:h-[77px] lg:h-[95px] 2xl:h-28 px-[10px] md:px-10 items-center justify-between">
        <Link to={routes.Home} className="flex items-center">
          <div className="w-[25px] h-[35px] md:w-[31px] md:h-[42px] xl:w-[40px] xl:h-[55px]">
            <NearLogoTextSvg />
          </div>
          <div className="w-[2px] h-[35px] md:h-[42px] xl:w-[3px] xl:h-[55px] bg-green-400 mx-[11px] md:mx-[14px] xl:mx-[18px] rounded-full"></div>
          <div>
            <p className="md:text-[22px] md:leading-[28px] xl:text-3xl font-semibold">cold chain</p>
            <p className="md:text-[13px] xl:text-xl text-gray-400 md:tracking-[8px] xl:tracking-[10px]">delivery</p>
          </div>
        </Link>

        <ul className="hidden lg:flex lg:text-base 2xl:text-xl font-medium space-x-[50px]">
          <HashLink smooth to={hashRoutes.About} className="hover:text-blue-300">
            about
          </HashLink>
          <HashLink smooth to={hashRoutes.HowItWorks} className="hover:text-blue-300">
            how it works
          </HashLink>
          <HashLink smooth to={hashRoutes.Features} className="hover:text-blue-300">
            features
          </HashLink>
          <HashLink smooth to={hashRoutes.Location} className="hover:text-blue-300">
            location
          </HashLink>
        </ul>

        <button
          onClick={handleSignIn}
          className="flex items-center justify-center w-[165px] md:w-[217px] h-[40px] md:h-[53px] bg-blue-300 hover:bg-blue-400 rounded-[10px] transform active:scale-95 duration-100"
        >
          <p className="text-sm md:text-lg font-bold">Login with</p>
          <div className="ml-3 w-[15px] h-[23px] md:w-[22px] md:h-[31px]">
            <NearLogoTextSvg />
          </div>
        </button>
      </div>
    </nav>
  );
};
