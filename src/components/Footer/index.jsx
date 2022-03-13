import React from 'react';
import { ReactComponent as NearLogoTextSvg } from '../../assets/svg/nearLogoText.svg';

export const Footer = () => {
  return (
    <footer className="relative bg-gray-100 dark:bg-gray-700 pt-[63px] md:pt-[150px] pb-[46px] dark:text-white">
      <div className="container mx-auto px-[10px] md:px-[30px] lg:pl-[31px] lg:pr-[30px] xl:pl-[77px] xl:pr-[76px] 2xl:px-20">
        <div className="bg-white dark:bg-gray-900 md:px-[38px] lg:px-[65px] pt-[31px] pb-[25px] rounded-[20px]">
          <div className="flex-col md:flex md:flex-row pl-[14px] md:pl-0 space-y-[24px] md:space-y-0">
            <div>
              <a href="#" className="flex items-center">
                <div className="w-[25px] h-[35px] md:w-[31px] md:h-[42px] xl:w-[40px] xl:h-[55px]">
                  <NearLogoTextSvg />
                </div>
                <div className="w-[2px] h-[35px] md:h-[42px] xl:w-[3px] xl:h-[55px] bg-green-400 mx-[11px] md:mx-[14px] xl:mx-[18px] rounded-full"></div>
                <div>
                  <p className="md:text-[22px] md:leading-[28px] xl:text-3xl font-semibold">cold chain</p>
                  <p className="md:text-[13px] xl:text-xl text-gray-400 md:tracking-[8px] xl:tracking-[10px]">
                    delivery
                  </p>
                </div>
              </a>

              <ul className="space-y-[6px] mt-[19px]">
                <li>
                  <a href="#" className="hover:text-blue-400">
                    info@nearcoldchain
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400">
                    1-232-3434 (Main)
                  </a>
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-[7px] md:ml-[89px] xl:ml-[121px] 2xl:ml-[212px] space-y-[24px] md:space-y-0">
              <div>
                <p className="font-bold">About</p>
                <ul className="font-medium mt-[11px] space-y-[6px]">
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      About contract
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      About NEAR
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      About NEAR ecosystem
                    </a>
                  </li>
                </ul>
              </div>

              <div className="md:ml-[88px]">
                <p className="font-bold">Community</p>
                <ul className="font-medium mt-[11px] space-y-[6px]">
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      Community OS Wiki
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      Forum
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      Events
                    </a>
                  </li>
                </ul>
              </div>

              <div className="lg:ml-[88px]">
                <p className="font-bold">Help</p>
                <ul className="font-medium mt-[11px] space-y-[6px]">
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      Support
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      info@nearcoldchain
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-400">
                      1-232-3434 (Main)
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <p className="text-center text-sm font-bold mt-[19px]">© 2022 NEAR Ltd</p>
        </div>
      </div>
    </footer>
  );
};
