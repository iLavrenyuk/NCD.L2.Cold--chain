import React from 'react';
import { Decoration } from '../Decoration';
import { routes } from '../../router/routes';
import { useNavigate } from 'react-router-dom';

export const BlockCall = () => {
  const navigate = useNavigate();

  return (
    <section className="relative bg-gray-100 pt-[90px] md:pt-[174px] xl:pt-[154px] 2xl:pt-[218px]">
      <div className="relative z-20 container mx-auto px-10 lg:pl-[31px] lg:pr-[30px] xl:pl-[77px] xl:pr-[76px] 2xl:px-20">
        <Decoration />
        <div className="text-center">
          <p className="text-[40px] 2xl:text-[50px] font-bold leading-[49px] 2xl:leading-[62px]">
            Try NEAR Cold chain <br className="hidden md:block" />
            <span className="inline-block text-transparent bg-clip-text background-gradient-pink">right now!</span>
          </p>
          <p className="text-base 2xl:text-xl font-medium text-gray-400 mx-auto mt-4 leading-6">
            The best way to send a coldchain package with <br /> tracking and fully secured!
          </p>
          <button
            onClick={() => navigate(routes.Shipment)}
            className="mx-auto w-[214px] h-[53px] mt-[34px] rounded-[10px] bg-blue-300 hover:bg-blue-400 transform active:scale-95 duration-100"
          >
            <p className="text-xl font-bold">Send a packadge</p>
          </button>
        </div>

        <img
          src={require('../../assets/img/Close-box-huge.png')}
          alt=""
          className="mx-auto mt-[66px] md:mt-[84px] w-[287px] h-[265px] md:w-[365px] md:h-[338px] 2xl:w-[468px] 2xl:h-[433px]"
        />
      </div>
    </section>
  );
};
