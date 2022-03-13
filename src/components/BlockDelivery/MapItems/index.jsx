import React from 'react';

export const MapItems = ({ isDarkTheme }) => {
  const pathMapTheme = isDarkTheme
    ? require('../../../assets/img/dots-dark.png')
    : require('../../../assets/img/dots.png');

  return (
    <>
      <div className="relative mx-auto w-[610px] h-[320px] lg:w-[731px] lg:h-[408px] xl:w-[610px] xl:h-[340px] 2xl:w-[731px] 2xl:h-[408px]">
        <img src={pathMapTheme} alt="" />

        <img
          src={require('../../../assets/img/LA.png')}
          alt=""
          className="absolute w-[27px] h-[44px] lg:w-[32px] lg:h-[53px] xl:w-[27px] xl:h-[44px] 2xl:w-[32px] 2xl:h-[53px] top-[96px] left-[71px] lg:top-[115px] lg:left-[86px] xl:top-[96px] xl:left-[71px] 2xl:top-[115px] 2xl:left-[86px]"
        />

        <img
          src={require('../../../assets/img/NY.png')}
          alt=""
          className="absolute w-[27px] h-[44px] lg:w-[32px] lg:h-[53px] xl:w-[27px] xl:h-[44px] 2xl:w-[32px] 2xl:h-[53px] top-[65px] left-[143px] lg:top-[78px] lg:left-[172px] xl:top-[65px] xl:left-[143px] 2xl:top-[78px] 2xl:left-[172px]"
        />

        <img
          src={require('../../../assets/img/Lagos.png')}
          alt=""
          className="absolute w-[27px] h-[44px] lg:w-[32px] lg:h-[53px] xl:w-[27px] xl:h-[44px] 2xl:w-[32px] 2xl:h-[53px] top-[152px] left-[275px] lg:top-[184px] lg:left-[331px] xl:top-[152px] xl:left-[275px] 2xl:top-[184px] 2xl:left-[331px]"
        />

        <img
          src={require('../../../assets/img/Kyiv.png')}
          alt=""
          className="absolute w-[27px] h-[44px] lg:w-[32px] lg:h-[53px] xl:w-[27px] xl:h-[44px] 2xl:w-[32px] 2xl:h-[53px] top-[64px] left-[326px] lg:top-[75px] lg:left-[391px] xl:top-[64px] xl:left-[326px] 2xl:top-[75px] 2xl:left-[391px]"
        />

        <img
          src={require('../../../assets/img/Sydney.png')}
          alt=""
          className="absolute w-[27px] h-[44px] lg:w-[32px] lg:h-[53px] xl:w-[27px] xl:h-[44px] 2xl:w-[32px] 2xl:h-[53px] top-[238px] left-[531px] lg:top-[285px] lg:left-[637px] xl:top-[238px] xl:left-[531px] 2xl:top-[285px] 2xl:left-[637px]"
        />

        {/* Lines */}
        <img
          src={require('../../../assets/img/1.png')}
          alt=""
          className="absolute w-[48px] h-[22px] lg:w-[58px] lg:h-[26px] xl:w-[48px] xl:h-[22px] 2xl:w-[58px] 2xl:h-[26px] top-[112px] left-[96px] lg:top-[134px] lg:left-[117px] xl:top-[112px] xl:left-[97px] 2xl:top-[134px] 2xl:left-[117px]"
        />

        <img
          src={require('../../../assets/img/2.png')}
          alt=""
          className="absolute w-[112px] h-[89px] lg:w-[134px] lg:h-[106px] xl:w-[112px] xl:h-[89px] 2xl:w-[134px] 2xl:h-[106px] top-[110px] left-[167px] lg:top-[132px] lg:left-[200px] xl:top-[110px] xl:left-[167px] 2xl:top-[132px] 2xl:left-[200px]"
        />

        <img
          src={require('../../../assets/img/3.png')}
          alt=""
          className="absolute w-[36px] h-[85px] lg:w-[43px] lg:h-[102px] xl:w-[36px] xl:h-[85px] 2xl:w-[43px] 2xl:h-[102px] top-[114px] left-[300px] lg:top-[137px] lg:left-[360px] xl:top-[114px] xl:left-[300px] 2xl:top-[137px] 2xl:left-[360px]"
        />

        <img
          src={require('../../../assets/img/4.png')}
          alt=""
          className="absolute w-[185px] h-[176px] lg:w-[222px] lg:h-[211px] xl:w-[185px] xl:h-[176px] 2xl:w-[222px] 2xl:h-[211px] top-[106px] left-[349px] lg:top-[127px] lg:left-[419px] xl:top-[106px] xl:left-[349px] 2xl:top-[127px] 2xl:left-[419px]"
        />
        {/* Boxes */}
        <img
          src={require('../../../assets/img/Close-box.png')}
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
        <div className="w-3 h-3 rounded-full bg-red-300" />
        <div className="w-[102px] lg:w-[123px] xl:w-[102px] 2xl:w-[123px] h-px bg-red-300" />
        <div className="w-3 h-3 rounded-full background-gradient-mash" />
        <div className="w-[102px] lg:w-[123px] xl:w-[102px] 2xl:w-[123px] h-px background-gradient-mash" />
        <div className="w-3 h-3 rounded-full bg-green-400" />
        <div className="w-[102px] lg:w-[123px] xl:w-[102px] 2xl:w-[123px] h-px bg-green-400" />
        <div className="w-3 h-3 rounded-full bg-blue-300" />
        <div className="w-[102px] lg:w-[123px] xl:w-[102px] 2xl:w-[123px] h-px bg-blue-300" />
        <div className="w-3 h-3 rounded-full background-gradient-orange" />
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
    </>
  );
};
