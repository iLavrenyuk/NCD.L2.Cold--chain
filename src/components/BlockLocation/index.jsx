import React from 'react';
import { anchorRoutes } from '../../router/routes';

export const BlockLocation = () => {
  return (
    <section id={anchorRoutes.Location} className="relative pt-[100px] bg-gray-100">
      <div className="container mx-auto lg:pl-[31px] lg:pr-[30px] xl:pl-[77px] xl:pr-[76px] 2xl:px-20">
        <div className="text-center">
          <p className="text-[28px] 2xl:text-[35px] font-bold">Locations or way of package</p>
          <div className="text-base 2xl:text-xl mt-4 font-medium text-gray-400">Our packages move for this points</div>
        </div>

        <div className="relative bg-gray-100 mx-auto my-8 lg:my-5 w-[333px] h-[184px] md:w-[641px] md:h-[354px] lg:w-[934px] lg:h-[516px] xl:my-[70px] xl:w-[1112px] xl:h-[614px] 2xl:w-[1295px] 2xl:h-[723px]">
          <img src={require('../../assets/img/dots.png')} alt="" />
          <img
            src={require('../../assets/img/LA.png')}
            alt=""
            className="absolute w-[15px] h-[24px] md:w-[28px] md:h-[46px] lg:w-[41px] lg:h-[66px] xl:w-[49px] xl:h-[79px] 2xl:w-[57px] 2xl:h-[93px] top-[52px]  left-[39px]  md:top-[99px] md:left-[75px]   lg:top-[145px] lg:left-[109px] xl:top-[172px] xl:left-[130px] 2xl:top-[203px] 2xl:left-[151px]"
          />
          <img
            src={require('../../assets/img/NY.png')}
            alt=""
            className="absolute w-[15px] h-[24px] md:w-[28px] md:h-[46px] lg:w-[41px] lg:h-[66px] xl:w-[49px] xl:h-[79px] 2xl:w-[57px] 2xl:h-[93px] top-[35px]  left-[78px]  md:top-[68px] md:left-[150px]  lg:top-[98px]  lg:left-[219px] xl:top-[121px] xl:left-[261px] 2xl:top-[138px] 2xl:left-[304px]"
          />
          <img
            src={require('../../assets/img/Lagos.png')}
            alt=""
            className="absolute w-[15px] h-[24px] md:w-[28px] md:h-[46px] lg:w-[41px] lg:h-[66px] xl:w-[49px] xl:h-[79px] 2xl:w-[57px] 2xl:h-[93px] top-[83px]  left-[151px] md:top-[163px] md:left-[291px] lg:top-[233px] lg:left-[423px] xl:top-[284px] xl:left-[505px] 2xl:top-[326px] 2xl:left-[586px]"
          />
          <img
            src={require('../../assets/img/Kyiv.png')}
            alt=""
            className="absolute w-[15px] h-[24px] md:w-[28px] md:h-[46px] lg:w-[41px] lg:h-[66px] xl:w-[49px] xl:h-[79px] 2xl:w-[57px] 2xl:h-[93px] top-[34px]  left-[178px] md:top-[66px] md:left-[343px]  lg:top-[97px] lg:left-[499px] xl:top-[116px] xl:left-[595px] 2xl:top-[134px] 2xl:left-[692px]"
          />
          <img
            src={require('../../assets/img/Sydney.png')}
            alt=""
            className="absolute w-[15px] h-[24px] md:w-[28px] md:h-[46px] lg:w-[41px] lg:h-[66px] xl:w-[49px] xl:h-[79px] 2xl:w-[57px] 2xl:h-[93px] top-[128px] left-[290px] md:top-[252px] md:left-[559px] lg:top-[365px] lg:left-[813px] xl:top-[434px] xl:left-[968px] 2xl:top-[505px] 2xl:left-[1127px]"
          />
          <img
            src={require('../../assets/img/1.png')}
            alt=""
            className="absolute w-[27px]  h-[12px] md:w-[51px]  md:h-[23px]  lg:w-[75px] lg:h-[33px] xl:w-[89px]  xl:h-[40px] 2xl:w-[103px]  2xl:h-[43px]  top-[61px] left-[54px]  md:top-[118px] md:left-[103px] lg:top-[172px] lg:left-[150px] xl:top-[205px] xl:left-[179px] 2xl:top-[237px] 2xl:left-[207px]"
          />
          <img
            src={require('../../assets/img/2.png')}
            alt=""
            className="absolute w-[61px]  h-[49px] md:w-[118px] md:h-[94px]  lg:w-[172px] lg:h-[136px] xl:w-[205px] xl:h-[163px] 2xl:w-[237px] 2xl:h-[188px] top-[60px] left-[92px]  md:top-[116px] md:left-[176px] lg:top-[169px] lg:left-[257px] xl:top-[201px] xl:left-[303px] 2xl:top-[233px] 2xl:left-[354px]"
          />
          <img
            src={require('../../assets/img/3.png')}
            alt=""
            className="absolute w-[20px]  h-[47px] md:w-[38px]  md:h-[90px]  lg:w-[55px] lg:h-[131px] xl:w-[66px]  xl:h-[156px] 2xl:w-[76px]  2xl:h-[181px] top-[63px] left-[165px] md:top-[121px] md:left-[317px] lg:top-[176px] lg:left-[462px] xl:top-[207px] xl:left-[550px] 2xl:top-[242px] 2xl:left-[636px]"
          />
          <img
            src={require('../../assets/img/4.png')}
            alt=""
            className="absolute w-[102px] h-[97px] md:w-[196px] md:h-[186px] lg:w-[285px] lg:h-[271px] xl:w-[340px] xl:h-[323px] 2xl:w-[393px] 2xl:h-[374px] top-[58px] left-[192px] md:top-[112px] md:left-[369px] lg:top-[164px] lg:left-[538px] xl:top-[192px] xl:left-[638px] 2xl:top-[222px] 2xl:left-[742px]"
          />
          <img
            src={require('../../assets/img/Close-box.png')}
            alt=""
            className="absolute w-[21px] h-[19px] md:w-[40px] md:h-[37px] lg:w-[58px] lg:h-[54px] xl:w-[69px] xl:h-[64px] 2xl:w-[80px] 2xl:h-[74px] top-[56px] left-[57px] md:top-[108px] md:left-[111px] lg:top-[157px] lg:left-[161px] xl:top-[187px] xl:left-[189px] 2xl:top-[217px] 2xl:left-[222px]"
          />
          <img
            src={require('../../assets/img/Opened-box.png')}
            alt=""
            className="absolute w-[24px] h-[19px] md:w-[45px] md:h-[36px] lg:w-[66px] lg:h-[53px] xl:w-[79px] xl:h-[63px] 2xl:w-[92px] 2xl:h-[74px] top-[128px] left-[266px] md:top-[247px] md:left-[512px] lg:top-[359px] lg:left-[746px] xl:top-[425px] xl:left-[886px] 2xl:top-[501px] 2xl:left-[1032px]"
          />
        </div>

        <div className="flex md:hidden">
          <div className="flex flex-col items-center ml-[59px]">
            <p className="text-[66px] font-bold text-red-300">0</p>
            <div className="w-6 h-6 bg-red-300 rounded-full" />
            <div className="mt-[10px] w-0.5 h-[78px] bg-red-300 rounded-full" />
            <p className="text-[66px] font-bold inline-block text-transparent bg-clip-text background-gradient-mash">
              1
            </p>
            <div className="w-6 h-6 background-gradient-mash rounded-full" />
            <div className="mt-[10px] w-0.5 h-[78px] background-gradient-mash rounded-full" />
            <p className="text-[66px] font-bold text-green-400">2</p>
            <div className="w-6 h-6 bg-green-400 rounded-full" />
            <div className="mt-[10px] w-0.5 h-[78px] bg-green-400 rounded-full" />
            <p className="inline md:hidden xl:inline-block text-[66px] font-bold text-blue-300">3</p>
            <div className="w-6 h-6 bg-blue-300 rounded-full" />
            <div className="mt-[10px] w-0.5 h-[78px] bg-blue-300 rounded-full" />
            <p className="inline md:hidden xl:inline-block text-[66px] font-bold text-transparent bg-clip-text background-gradient-orange">
              4
            </p>
            <div className="w-6 h-6 background-gradient-orange rounded-full" />
          </div>
          <div className="ml-[11px]">
            <p className="text-xl font-bold mt-[97px] leading-[25px]">Las Vegas, NV, USA</p>
            <p className="text-xl font-bold mt-[188px] leading-[25px]">New York, NY, USA</p>
            <p className="text-xl font-bold mt-[185px] leading-[25px]">Lagos, Nigeria</p>
            <p className="text-xl font-bold mt-[187px] leading-[25px]">Kyiv, Ukraine</p>
            <p className="text-xl font-bold mt-[186px] leading-[25px]">Sydney, Australia</p>
          </div>
        </div>

        <div className="hidden md:block">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-center space-x-0 md:space-x-[183px] xl:space-x-[183px] 2xl:space-x-[244px]">
            <p className="text-[66px] font-bold text-red-300">0</p>
            <p className="text-[66px] font-bold inline-block text-transparent bg-clip-text background-gradient-mash">
              1
            </p>
            <p className="text-[66px] font-bold text-green-400">2</p>
            <p className="inline md:hidden xl:inline-block text-[66px] font-bold text-blue-300">3</p>
            <p className="inline md:hidden xl:inline-block text-[66px] font-bold text-transparent bg-clip-text background-gradient-orange">
              4
            </p>
          </div>
          <div className="hidden md:flex items-center justify-center md:space-x-[26px] 2xl:space-x-[20px] mt-px">
            <div className="w-6 h-6 bg-red-300 rounded-full" />
            <div className="md:w-[144px] 2xl:w-[218px] h-0.5 bg-red-300 rounded-full" />
            <div className="w-6 h-6 background-gradient-mash rounded-full" />
            <div className="md:w-[144px] 2xl:w-[218px] h-0.5 background-gradient-mash rounded-full" />
            <div className="w-6 h-6 bg-green-400 rounded-full" />
            <div className="hidden xl:block lg:w-[144px] 2xl:w-[218px] h-0.5 bg-green-400 rounded-full" />
            <div className="hidden xl:block w-6 h-6 bg-blue-300 rounded-full" />
            <div className="hidden xl:block lg:w-[144px] 2xl:w-[218px] h-0.5 bg-blue-300 rounded-full" />
            <div className="hidden xl:block w-6 h-6 background-gradient-orange rounded-full" />
          </div>
          <div className="hidden md:flex justify-center text-center mt-[31px]">
            <p className="text-xl xl:text-xl 2xl:text-2xl font-bold">Las Vegas, NV, USA</p>
            <p className="text-xl xl:text-xl 2xl:text-2xl font-bold md:ml-[49px] xl:ml-[40px] 2xl:ml-[70px]">
              New York, NY, USA
            </p>
            <p className="text-xl xl:text-xl 2xl:text-2xl font-bold md:ml-[71px] xl:ml-[71px] 2xl:ml-[90px]">
              Lagos, Nigeria
            </p>
            <p className="hidden lg:text-xl xl:block xl:text-xl 2xl:text-2xl font-bold xl:ml-[99px] 2xl:ml-[128px]">
              Kyiv, Ukraine
            </p>
            <p className="hidden lg:text-xl xl:block xl:text-xl 2xl:text-2xl font-bold xl:ml-[81px] 2xl:ml-[110px]">
              Sydney, Australia
            </p>
          </div>
        </div>

        <div className="hidden md:block xl:hidden">
          <div className="flex items-center justify-center md:space-x-[183px] xl:space-x-[183px] 2xl:space-x-[244px]">
            <p className=" xl:inline-block text-[66px] font-bold text-blue-300">3</p>
            <p className=" xl:inline-block text-[66px] font-bold text-transparent bg-clip-text background-gradient-orange">
              4
            </p>
          </div>
          <div className="flex items-center justify-center md:space-x-[26px] 2xl:space-x-[20px] mt-px">
            <div className=" xl:block w-6 h-6 bg-blue-300 rounded-full" />
            <div className=" xl:block md:w-[144px] 2xl:w-[218px] h-0.5 bg-blue-300 rounded-full" />
            <div className=" xl:block w-6 h-6 background-gradient-orange rounded-full" />
          </div>
          <div className="flex justify-center text-center mt-[31px]">
            <p className="text-xl xl:block xl:text-xl 2xl:text-2xl font-bold xl:ml-[99px] 2xl:ml-[128px]">
              Kyiv, Ukraine
            </p>
            <p className="text-xl xl:block xl:text-xl 2xl:text-2xl font-bold md:ml-[81px] xl:ml-[96px] 2xl:ml-[110px]">
              Sydney, Australia
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
