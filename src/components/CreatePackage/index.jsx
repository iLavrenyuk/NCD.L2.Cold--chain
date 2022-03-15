import React from 'react';
import { ReactComponent as CrossSvg } from '../../assets/svg/cross.svg';
import { ReactComponent as ErrorSvg } from '../../assets/svg/error.svg';
import { ReactComponent as NearLogoTextSvg } from '../../assets/svg/nearLogoText.svg';

export const CreatePackage = ({ setIsOpenForm }) => {
  return (
    <div
      onClick={(e) => e.target === e.currentTarget && setIsOpenForm(false)}
      className="fixed w-screen h-screen z-50 bg-black bg-opacity-50 py-[56px] lg:py-[176px] overflow-y-scroll"
    >
      <div className="w-[356px] md:w-[495px] mx-auto bg-white px-[14px] pt-[38px] pb-[48px] rounded-[10px]">
        <nav className="flex justify-between items-center px-[10px]">
          <div className="flex items-center">
            <div className="w-[25px] h-[35px]">
              <NearLogoTextSvg />
            </div>
            <div className="w-[2px] h-[35px] bg-green-400 mx-[11px] rounded-full" />
            <div>
              <p className="text-lg font-semibold leading-5">cold chain</p>
              <p className="text-[10px] text-gray-400 tracking-[7px]">delivery</p>
            </div>
          </div>

          <button onClick={() => setIsOpenForm(false)}>
            <CrossSvg />
          </button>
        </nav>

        <p className="text-2xl font-bold mt-4 text-center">Package creating</p>
        <img
          src={require('../../assets/img/Close-box-huge.png')}
          alt="box"
          className="w-[138px] h-[127px] mx-auto mt-[31px]"
        />

        <form className="w-[328px] md:w-[397px] mx-auto mt-[30px] md:mt-[18px]">
          <div className="flex justify-between">
            <div>
              <p className="text-xs font-semibold">Package name</p>
              <input
                type="text"
                placeholder="Example name"
                className={`mt-2 h-10 w-[195px] md:w-[260px] rounded-[10px] pl-2 md:pl-4 ${
                  1 == Number ? 'border-red-400' : 'border-gray-200'
                } outline-none border text-sm placeholder-gray-300 focus:border-blue-400`}
              />

              <div className="flex mt-2">
                <ErrorSvg />
                <p className="text-xs text-gray-400 ml-2">Name must be less than 20 characters</p>
              </div>
              <div className="flex mt-2">
                <ErrorSvg />
                <p className="text-xs text-gray-400 ml-2">This field is required</p>
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold">Set temperature</p>

              <input
                type="text"
                placeholder="0℃"
                className={`mt-2 h-10 w-[125px] rounded-[10px] pl-2 md:pl-4 outline-none border ${
                  1 == Number ? 'border-red-400' : 'border-gray-200'
                } text-sm placeholder-gray-300 focus:border-blue-400`}
              />

              <div className="flex mt-2">
                <ErrorSvg />
                <p className="text-xs text-gray-400 ml-3">
                  We work from <br /> -80℃ to 200℃
                </p>
              </div>
              <div className="flex mt-2">
                <ErrorSvg />
                <p className="text-xs text-gray-400 ml-3">
                  This field is <br /> required
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <p className="text-xs font-semibold">Go to</p>
            <input
              type="text"
              placeholder="Example.near"
              className="mt-2 h-10 w-full rounded-[10px] pl-2 md:pl-4 outline-none border border-gray-200 text-sm placeholder-gray-300 focus:border-blue-400"
            />
            <input
              type="text"
              placeholder="Example.near"
              className="mt-2 h-10 w-full rounded-[10px] pl-2 md:pl-4 outline-none border border-yellow-400 text-sm placeholder-gray-300 "
            />
            <input
              type="text"
              placeholder="Example.near"
              className="mt-2 h-10 w-full rounded-[10px] pl-2 md:pl-4 outline-none border border-green-300 text-sm placeholder-gray-300 "
            />
            <div className="flex mt-2">
              <ErrorSvg />
              <p className="text-xs text-gray-400 ml-2">We can find this ID, package for your risk</p>
            </div>
            <div className="flex mt-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M7.00004 0.333374C3.32004 0.333374 0.333374 3.32004 0.333374 7.00004C0.333374 10.68 3.32004 13.6667 7.00004 13.6667C10.68 13.6667 13.6667 10.68 13.6667 7.00004C13.6667 3.32004 10.68 0.333374 7.00004 0.333374ZM5.66671 10.3334L2.33337 7.00004L3.27337 6.06004L5.66671 8.44671L10.7267 3.38671L11.6667 4.33337L5.66671 10.3334Z"
                  fill="#3CC13B"
                />
              </svg>
              <p className="text-xs text-gray-400 ml-2">Correct ID</p>
            </div>
          </div>

          <div className="mt-4">
            <p className="text-xs font-semibold">Set a details</p>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Example info"
              className="w-full h-20 mt-2 rounded-[10px] border border-gray-200 outline-none px-2 md:px-4 py-[10px] text-sm focus:border-blue-300 placeholder-gray-300"
            />
          </div>

          <div className="relative mt-[22px] w-full p-[14px] bg-green-400 bg-opacity-50 rounded-[10px]">
            <img
              src={require('../../assets/img/near-3.png')}
              alt=""
              className="absolute -right-4 top-4 md:top-0 w-[77px] h-[77px] md:w-[87px] md:h-[87px]"
            />
            <p className="text-sm w-[252px] md:w-[308px]">
              Cold chain will reserved <b>10 NEAR</b> from your wallet. If delivery will successful we return you NEAR
              from you and recipient will pay this price
            </p>
          </div>

          <button className="w-[214px] h-[53px] mt-4 md:mt-[35px] mx-auto rounded-[10px] bg-blue-300 hover:bg-blue-400 flex items-center justify-center transform active:scale-95 duration-100">
            <div className="text-lg font-bold">Send a package</div>
          </button>
        </form>
      </div>
    </div>
  );
};
