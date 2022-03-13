import React from 'react';

export const PackageInfo = () => {
  return (
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna purus pretium lacus interdum habitant.
              Tristique lacus mi molestie sed eget at porttitor. Elit sit felis sagittis, imperdiet consectetur. Ac nibh
              cursus lacus nullam sit mattis. Ipsum sapien condimentum aenean praesent.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
