import React from 'react';

export const BlockDelivery = () => {
  return (
    <section className="bg-gray-100 pt-[42px] md:pt-[31px] xl:[pt-46px] 2xl:pt-[67px]">
      <div className="container mx-auto px-[10px] md:pl-[30px] md:pr-[44px] lg:pl-[30px] lg:pr-[31px] xl:pl-[77px] xl:pr-[76px] 2xl:px-[80px]">
        <div className="flex flex-wrap xl:justify-between md:px-[13px] lg:pl-[66px] lg:pr-[79px] xl:pl-[18px] xl:pr-[55px] 2xl:pl-[17px] 2xl:pr-[56px]">
          {/* Map wrapper */}
          <div className="mx-auto xl:mx-0 w-[349px] h-[511px] md:w-[682px] lg:w-[818px] lg:h-[613px] xl:w-[682px] xl:h-[511px] 2xl:w-[818px] 2xl:h-[613px] pt-[30px] border-2 border-gray-200 rounded-[20px] overflow-x-scroll md:overflow-auto">
            {/* Map */}
            <div className="relative mx-auto w-[610px] h-[320px] lg:w-[731px] lg:h-[408px] xl:w-[610px] xl:h-[340px] 2xl:w-[731px] 2xl:h-[408px]">
              {/* Dotted map */}
              <img src={require('../../assets/img/dots.png')} alt="" />
              {/* Pointers */}
              <img
                src={require('../../assets/img/LA.png')}
                alt=""
                className="absolute w-[27px] h-[44px] lg:w-[32px] lg:h-[53px] xl:w-[27px] xl:h-[44px] 2xl:w-[32px] 2xl:h-[53px] top-[96px] left-[71px] lg:top-[115px] lg:left-[86px] xl:top-[96px] xl:left-[71px] 2xl:top-[115px] 2xl:left-[86px]"
              />

              <img
                src={require('../../assets/img/NY.png')}
                alt=""
                className="absolute w-[27px] h-[44px] lg:w-[32px] lg:h-[53px] xl:w-[27px] xl:h-[44px] 2xl:w-[32px] 2xl:h-[53px] top-[65px] left-[143px] lg:top-[78px] lg:left-[172px] xl:top-[65px] xl:left-[143px] 2xl:top-[78px] 2xl:left-[172px]"
              />

              <img
                src={require('../../assets/img/Lagos.png')}
                alt=""
                className="absolute w-[27px] h-[44px] lg:w-[32px] lg:h-[53px] xl:w-[27px] xl:h-[44px] 2xl:w-[32px] 2xl:h-[53px] top-[152px] left-[275px] lg:top-[184px] lg:left-[331px] xl:top-[152px] xl:left-[275px] 2xl:top-[184px] 2xl:left-[331px]"
              />

              <img
                src={require('../../assets/img/Kyiv.png')}
                alt=""
                className="absolute w-[27px] h-[44px] lg:w-[32px] lg:h-[53px] xl:w-[27px] xl:h-[44px] 2xl:w-[32px] 2xl:h-[53px] top-[64px] left-[326px] lg:top-[75px] lg:left-[391px] xl:top-[64px] xl:left-[326px] 2xl:top-[75px] 2xl:left-[391px]"
              />

              <img
                src={require('../../assets/img/Sydney.png')}
                alt=""
                className="absolute w-[27px] h-[44px] lg:w-[32px] lg:h-[53px] xl:w-[27px] xl:h-[44px] 2xl:w-[32px] 2xl:h-[53px] top-[238px] left-[531px] lg:top-[285px] lg:left-[637px] xl:top-[238px] xl:left-[531px] 2xl:top-[285px] 2xl:left-[637px]"
              />

              {/* Lines */}
              <img
                src={require('../../assets/img/1.png')}
                alt=""
                className="absolute w-[48px] h-[22px] lg:w-[58px] lg:h-[26px] xl:w-[48px] xl:h-[22px] 2xl:w-[58px] 2xl:h-[26px] top-[112px] left-[96px] lg:top-[134px] lg:left-[117px] xl:top-[112px] xl:left-[97px] 2xl:top-[134px] 2xl:left-[117px]"
              />

              <img
                src={require('../../assets/img/2.png')}
                alt=""
                className="absolute w-[112px] h-[89px] lg:w-[134px] lg:h-[106px] xl:w-[112px] xl:h-[89px] 2xl:w-[134px] 2xl:h-[106px] top-[110px] left-[167px] lg:top-[132px] lg:left-[200px] xl:top-[110px] xl:left-[167px] 2xl:top-[132px] 2xl:left-[200px]"
              />

              <img
                src={require('../../assets/img/3.png')}
                alt=""
                className="absolute w-[36px] h-[85px] lg:w-[43px] lg:h-[102px] xl:w-[36px] xl:h-[85px] 2xl:w-[43px] 2xl:h-[102px] top-[114px] left-[300px] lg:top-[137px] lg:left-[360px] xl:top-[114px] xl:left-[300px] 2xl:top-[137px] 2xl:left-[360px]"
              />

              <img
                src={require('../../assets/img/4.png')}
                alt=""
                className="absolute w-[185px] h-[176px] lg:w-[222px] lg:h-[211px] xl:w-[185px] xl:h-[176px] 2xl:w-[222px] 2xl:h-[211px] top-[106px] left-[349px] lg:top-[127px] lg:left-[419px] xl:top-[106px] xl:left-[349px] 2xl:top-[127px] 2xl:left-[419px]"
              />
              {/* Boxes */}
              <img
                src={require('../../assets/img/Close-box.png')}
                alt=""
                className="absolute w-[38px] h-[35px] lg:w-[45px] lg:h-[42px] xl:w-[38px] xl:h-[35px] 2xl:w-[45px] 2xl:h-[42px] top-[176px] left-[275px] lg:top-[211px] lg:left-[329px] xl:top-[176px] xl:left-[275px] 2xl:top-[211px] 2xl:left-[329px]"
              />
              {/* <img src={require("../../assets/img/Opened-box.png")} alt="" class="absolute w-[24px] h-[19px] md:w-[45px] md:h-[36px] lg:w-[66px] lg:h-[53px] xl:w-[79px] xl:h-[63px] 2xl:w-[92px] 2xl:h-[74px] top-[128px] left-[266px] md:top-[247px] md:left-[512px] lg:top-[359px] lg:left-[746px] xl:top-[425px] xl:left-[886px] 2xl:top-[501px] 2xl:left-[1032px]"> */}
            </div>

            {/* Numbers */}
            <div className="mt-[33px] w-[610px] md:w-auto flex items-center justify-center space-x-[114px] lg:space-x-[140px] xl:space-x-[114px] 2xl:space-x-[140px]">
              <p className="text-[31px] leading-[38px] font-bold text-red-300">0</p>
              <p className="text-[31px] leading-[38px] font-bold inline-block text-transparent bg-clip-text background-gradient-mash">
                1
              </p>
              <p className="text-[31px] leading-[38px] font-bold text-green-400">2</p>
              <p className="text-[31px] leading-[38px] font-bold text-blue-300">3</p>
              <p className="text-[31px] leading-[38px] font-bold text-transparent bg-clip-text background-gradient-orange">
                4
              </p>
            </div>
            {/* Lines */}
            <div className="w-[610px] md:w-auto mt-0.5 flex items-center justify-center space-x-[9px] lg:space-x-[11px] xl:space-x-[9px] 2xl:space-x-[11px]">
              <div className="w-3 h-3 rounded-full bg-red-300"></div>
              <div className="w-[102px] lg:w-[123px] xl:w-[102px] 2xl:w-[123px] h-px bg-red-300"></div>
              <div className="w-3 h-3 rounded-full background-gradient-mash"></div>
              <div className="w-[102px] lg:w-[123px] xl:w-[102px] 2xl:w-[123px] h-px background-gradient-mash"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
              <div className="w-[102px] lg:w-[123px] xl:w-[102px] 2xl:w-[123px] h-px bg-green-400"></div>
              <div className="w-3 h-3 rounded-full bg-blue-300"></div>
              <div className="w-[102px] lg:w-[123px] xl:w-[102px] 2xl:w-[123px] h-px bg-blue-300"></div>
              <div className="w-3 h-3 rounded-full background-gradient-orange"></div>
            </div>
            {/* Cities */}
            <div className="mt-[18px] w-[610px] md:w-full flex items-center justify-center text-center">
              <p className="text-[11px] lg:text-sm xl:text-[11px] 2xl:text-sm font-bold">Las Vegas, NV, USA</p>
              <p className="text-[11px] lg:text-sm xl:text-[11px] 2xl:text-sm font-bold ml-[33px] lg:ml-10">
                New York, NY, USA
              </p>
              <p className="text-[11px] lg:text-sm xl:text-[11px] 2xl:text-sm font-bold ml-[42px] lg:ml-[51px]">
                Lagos, Nigeria
              </p>
              <p className="text-[11px] lg:text-sm xl:text-[11px] 2xl:text-sm font-bold ml-[60px] lg:ml-[72px]">
                Kyiv, Ukraine
              </p>
              <p className="text-[11px] lg:text-sm xl:text-[11px] 2xl:text-sm font-bold ml-[52px] lg:ml-[62px]">
                Sydney, Australia
              </p>
            </div>
          </div>

          {/* Package list */}
          <div className="no-scrollbar mx-auto md:mx-0 mt-[60px] xl:mt-0 w-[349px] 2xl:w-[449px] h-[511px] 2xl:h-[613px] border-2 border-gray-200 rounded-[20px] overflow-hidden">
            {/* Title */}
            <div className="w-full flex items-center justify-between p-5 border-b-2 border-gray-200">
              <p className="text-2xl font-bold">Package list</p>
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M11.4838 8.60227C11.7843 8.88738 12.259 8.87492 12.5441 8.57444C12.8292 8.27396 12.8167 7.79925 12.5162 7.51414L8.25 3.46619L3.98377 7.51414C3.68329 7.79925 3.67083 8.27396 3.95594 8.57444C4.24104 8.87492 4.71575 8.88738 5.01623 8.60227L7.5 6.24558V19.5001C7.5 19.9143 7.83579 20.2501 8.25 20.2501C8.66422 20.2501 9 19.9143 9 19.5001V6.24558L11.4838 8.60227Z"
                    fill="#9CD5FF"
                  />
                  <path
                    d="M18.9838 15.3977C19.2843 15.1126 19.759 15.1251 20.0441 15.4256C20.3292 15.726 20.3167 16.2008 20.0162 16.4859L15.75 20.5338L11.4838 16.4859C11.1833 16.2008 11.1708 15.726 11.4559 15.4256C11.741 15.1251 12.2158 15.1126 12.5162 15.3977L15 17.7544V4.49993C15 4.08572 15.3358 3.74993 15.75 3.74993C16.1642 3.74993 16.5 4.08572 16.5 4.49993V17.7544L18.9838 15.3977Z"
                    fill="#9CD5FF"
                  />
                </svg>
              </a>
            </div>

            {/* List */}
            <div className="w-full h-full scrollbar overflow-y-scroll pb-20">
              {/* One package */}
              <a
                href="#"
                className="flex items-center justify-between w-full h-[110px] px-[14px] 2xl:px-6 border-b-2 border-gray-200 hover:bg-blue-50"
              >
                <div className="flex items-center">
                  {/* Box image */}
                  <div className="flex items-center justify-center w-[73px] h-[73px] rounded-full border-2 border-gray-200 ">
                    <img src={require('../../assets/img/Opened-box.png')} alt="" className="w-[52px] h-[42px]" />
                  </div>
                  {/* Name & Location */}
                  <div className="ml-[9px] 2xl:ml-[17px]">
                    <p className="text-base 2xl:text-lg font-bold">Package name</p>
                    <p className="text-base 2xl:text-lg font-bold text-red-300 mt-0.5">0 - LA, Navada</p>
                  </div>
                </div>

                <div className="text-center">
                  <p className="text-base font-medium text-gray-400">temp</p>
                  <p className="text-4xl leading-[54px] font-bold text-blue-300"> -2℃</p>
                </div>
              </a>

              {/* One package */}
              <a
                href="#"
                className="flex items-center justify-between w-full h-[110px] px-[14px] 2xl:px-6 border-b-2 border-gray-200 bg-blue-50"
              >
                <div className="flex items-center">
                  {/* Box image */}
                  <div className="flex items-center justify-center w-[73px] h-[73px] rounded-full border-2 border-gray-200 ">
                    <img src={require('../../assets/img/Opened-box.png')} alt="" className="w-[52px] h-[42px]" />
                  </div>
                  {/* Name & Location */}
                  <div className="ml-[9px] 2xl:ml-[17px]">
                    <p className="text-base 2xl:text-lg font-bold">Ice cream</p>
                    <p className="text-base 2xl:text-lg font-bold text-green-400 mt-0.5">2 - Lagos, Nigeria</p>
                  </div>
                </div>

                <div className="text-center">
                  <p className="text-base font-medium text-gray-400">temp</p>
                  <p className="text-4xl leading-[54px] font-bold text-blue-300"> 0℃</p>
                </div>
              </a>

              {/* One package */}
              <a
                href="#"
                className="flex items-center justify-between w-full h-[110px] px-[14px] 2xl:px-6 border-b-2 border-gray-200 hover:bg-blue-50"
              >
                <div className="flex items-center">
                  {/* Box image */}
                  <div className="flex items-center justify-center w-[73px] h-[73px] rounded-full border-2 border-gray-200 ">
                    <img src={require('../../assets/img/Opened-box.png')} alt="" className="w-[52px] h-[42px]" />
                  </div>
                  {/* Name & Location */}
                  <div className="ml-[9px] 2xl:ml-[17px]">
                    <p className="text-base 2xl:text-lg font-bold">Burn</p>
                    <p className="text-base 2xl:text-lg font-bold bg-gradient-orange mt-0.5">4 - Sydney, Australia</p>
                  </div>
                </div>

                <div className="text-center">
                  <p className="text-base font-medium text-gray-400">temp</p>
                  <p className="text-4xl leading-[54px] font-bold bg-gradient-orange"> 18℃</p>
                </div>
              </a>

              {/* One package */}
              <a
                href="#"
                className="flex items-center justify-between w-full h-[110px] px-[14px] 2xl:px-6 border-b-2 border-gray-200 hover:bg-blue-50 background-gradient-orange-10"
              >
                <div className="flex items-center">
                  {/* Box image */}
                  <div className="flex items-center justify-center w-[73px] h-[73px] rounded-full border-2 border-gray-200 background-gradient-orange">
                    <img src={require('../../assets/img/Opened-box.png')} alt="" className="w-[52px] h-[42px]" />
                  </div>
                  {/* Name & Location */}
                  <div className="ml-[9px] 2xl:ml-[17px]">
                    <p className="text-base 2xl:text-lg font-bold">Ice cream</p>
                    <p className="text-base 2xl:text-lg font-bold text-blue-300 mt-0.5">2 - Kyiv, Ukraine</p>
                  </div>
                </div>

                <div className="text-center">
                  <p className="text-base font-medium text-gray-400">temp</p>
                  <p className="text-4xl leading-[54px] font-bold text-blue-300"> -4℃</p>
                </div>
              </a>

              {/* One package */}
              <a
                href="#"
                className="flex items-center justify-between w-full h-[110px] px-[14px] 2xl:px-6 border-b-2 border-gray-200 hover:bg-blue-50"
              >
                <div className="flex items-center">
                  {/* Box image */}
                  <div className="flex items-center justify-center w-[73px] h-[73px] rounded-full border-2 border-gray-200 ">
                    <img src={require('../../assets/img/Opened-box.png')} alt="" className="w-[52px] h-[42px]" />
                  </div>
                  {/* Name & Location */}
                  <div className="ml-[9px] 2xl:ml-[17px]">
                    <p className="text-base 2xl:text-lg font-bold">Package name</p>
                    <p className="text-base 2xl:text-lg font-bold text-red-300 mt-0.5">0 - LA, Navada</p>
                  </div>
                </div>

                <div className="text-center">
                  <p className="text-base font-medium text-gray-400">temp</p>
                  <p className="text-4xl leading-[54px] font-bold text-blue-300"> -2℃</p>
                </div>
              </a>

              {/* One package */}
              <a
                href="#"
                className="flex items-center justify-between w-full h-[110px] px-[14px] 2xl:px-6 border-b-2 border-gray-200 hover:bg-blue-50"
              >
                <div className="flex items-center">
                  {/* Box image */}
                  <div className="flex items-center justify-center w-[73px] h-[73px] rounded-full border-2 border-gray-200 ">
                    <img src={require('../../assets/img/Opened-box.png')} alt="" className="w-[52px] h-[42px]" />
                  </div>
                  {/* Name & Location */}
                  <div className="ml-[9px] 2xl:ml-[17px]">
                    <p className="text-base 2xl:text-lg font-bold">Ice cream</p>
                    <p className="text-base 2xl:text-lg font-bold text-green-400 mt-0.5">2 - Lagos, Nigeria</p>
                  </div>
                </div>

                <div className="text-center">
                  <p className="text-base font-medium text-gray-400">temp</p>
                  <p className="text-4xl leading-[54px] font-bold text-blue-300"> 0℃</p>
                </div>
              </a>

              {/* One package */}
              <a
                href="#"
                className="flex items-center justify-between w-full h-[110px] px-[14px] 2xl:px-6 border-b-2 border-gray-200 hover:bg-blue-50"
              >
                <div className="flex items-center">
                  {/* Box image */}
                  <div className="flex items-center justify-center w-[73px] h-[73px] rounded-full border-2 border-gray-200 ">
                    <img src={require('../../assets/img/Opened-box.png')} alt="" className="w-[52px] h-[42px]" />
                  </div>
                  {/* Name & Location */}
                  <div className="ml-[9px] 2xl:ml-[17px]">
                    <p className="text-base 2xl:text-lg font-bold">Burn</p>
                    <p className="text-base 2xl:text-lg font-bold bg-gradient-orange mt-0.5">4 - Sydney, Australia</p>
                  </div>
                </div>

                <div className="text-center">
                  <p className="text-base font-medium text-gray-400">temp</p>
                  <p className="text-4xl leading-[54px] font-bold bg-gradient-orange"> 18℃</p>
                </div>
              </a>

              {/* One package */}
              <a
                href="#"
                className="flex items-center justify-between w-full h-[110px] px-[14px] 2xl:px-6 border-b-2 border-gray-200 hover:bg-blue-50"
              >
                <div className="flex items-center">
                  {/* Box image */}
                  <div className="flex items-center justify-center w-[73px] h-[73px] rounded-full border-2 border-gray-200 ">
                    <img src={require('../../assets/img/Opened-box.png')} alt="" className="w-[52px] h-[42px]" />
                  </div>
                  {/* Name & Location */}
                  <div className="ml-[9px] 2xl:ml-[17px]">
                    <p className="text-base 2xl:text-lg font-bold">Ice cream</p>
                    <p className="text-base 2xl:text-lg font-bold text-blue-300 mt-0.5">2 - Kyiv, Ukraine</p>
                  </div>
                </div>

                <div className="text-center">
                  <p className="text-base font-medium text-gray-400">temp</p>
                  <p className="text-4xl leading-[54px] font-bold text-blue-300"> -4℃</p>
                </div>
              </a>
            </div>
          </div>

          {/* Package info */}
          <div className="mt-[60px] w-[349px] md:w-[255px] lg:w-auto mx-auto md:mx-0 md:ml-[58px] xl:ml-0">
            <div className="flex flex-col xl:flex-row xl:justify-between xl:w-[682px] 2xl:w-[818px]">
              <div>
                {/* Package name */}
                <p className="text-[35px] font-bold">Ice cream</p>

                {/* Temperature & Payment */}
                <div className="mt-[30px] flex">
                  <div>
                    <p className="text-lg font-bold">Temperature</p>
                    <p className="text-[36px] font-bold text-blue-300">0℃</p>
                  </div>
                  <div className="ml-6">
                    <p className="text-lg font-bold">Payment</p>
                    <p className="mt-4 text-xl font-bold bg-gradient-mash">Reserved</p>
                  </div>
                </div>
                {/* From & To*/}
                <div className="mt-[30px] lg:mt-4 flex">
                  <div>
                    <p className="text-lg font-bold">From</p>
                    <p className="mt-4 text-base font-bold text-blue-300">oliinykk.near</p>
                  </div>
                  <div className="ml-[39px]">
                    <p className="text-lg font-bold">To</p>
                    <p className="mt-4 text-base font-bold text-green-400">nazar.near</p>
                  </div>
                </div>
              </div>

              <div className="mt-[22px] lg:mt-[30px] xl:mt-0">
                <div className="flex flex-col xl:flex-row items-baseline">
                  <p className="text-2xl font-bold text-gray-300">Currently in:</p>
                  <p className="mt-2 xl:ml-3 xl:mt-0 text-lg font-bold text-green-400">2 - Lagos, Nigeria</p>
                </div>

                {/* Blocked button */}
                {/* <button class="mt-[26px] w-[217px] h-[53px] rounded-[10px] bg-gray-200 cursor-not-allowed">
                                <p class="text-lg font-bold text-gray-400">Get withdraw</p>
                            </button> */}

                {/* Normal button */}
                <button className="mt-[26px] w-[217px] h-[53px] rounded-[10px] bg-blue-300 hover:bg-blue-400 transform active:scale-95 duration-100">
                  <p className="text-lg font-bold">Get withdraw</p>
                </button>
                {/*  */}
                {/* Details */}
                <div className="md:hidden lg:block xl:hidden mt-8 w-[347px] lg:w-[410px]">
                  <p className="text-2xl font-bold">Details</p>
                  <p className="mt-[10px] text-base text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna purus pretium lacus interdum
                    habitant. Tristique lacus mi molestie sed eget at porttitor. Elit sit felis sagittis, imperdiet
                    consectetur. Ac nibh cursus lacus nullam sit mattis. Ipsum sapien condimentum aenean praesent.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Details */}
        <div className="hidden md:block lg:hidden xl:block mt-8 w-[425px] xl:w-[682px] 2xl:w-[816px] md:px-[13px] lg:pl-[66px] lg:pr-[79px] xl:pl-[18px] xl:pr-[55px] 2xl:pl-[17px] 2xl:pr-[56px]">
          <p className="text-2xl font-bold">Details</p>
          <p className="mt-[10px] text-base text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna purus pretium lacus interdum habitant.
            Tristique lacus mi molestie sed eget at porttitor. Elit sit felis sagittis, imperdiet consectetur. Ac nibh
            cursus lacus nullam sit mattis. Ipsum sapien condimentum aenean praesent.
          </p>
        </div>
      </div>
    </section>
  );
};
