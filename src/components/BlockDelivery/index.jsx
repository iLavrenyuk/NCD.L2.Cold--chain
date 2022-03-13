import React from 'react';
import { MapItems } from './MapItems';
import { ListItem } from './ListItem';
import { PackageInfo } from './PackageInfo';
import { ReactComponent as ReverseArrowSvg } from '../../assets/svg/reverseArrow.svg';

export const BlockDelivery = ({ isDarkTheme }) => {
  return (
    <section className="dark:bg-gray-700 dark:text-white bg-gray-100 pt-[42px] md:pt-[31px] xl:[pt-46px] 2xl:pt-[67px]">
      <div className="container mx-auto px-[10px] md:pl-[30px] md:pr-[44px] lg:pl-[30px] lg:pr-[31px] xl:pl-[77px] xl:pr-[76px] 2xl:px-[80px]">
        <div className="flex flex-wrap xl:justify-between md:px-[13px] lg:pl-[66px] lg:pr-[79px] xl:pl-[18px] xl:pr-[55px] 2xl:pl-[17px] 2xl:pr-[56px]">
          <div className="mx-auto xl:mx-0 w-[349px] h-[511px] md:w-[682px] lg:w-[818px] lg:h-[613px] xl:w-[682px] xl:h-[511px] 2xl:w-[818px] 2xl:h-[613px] pt-[30px] border-2 border-gray-200 rounded-[20px] overflow-x-scroll md:overflow-auto">
            <MapItems isDarkTheme={isDarkTheme} />
          </div>

          <div className="no-scrollbar mx-auto md:mx-0 mt-[60px] xl:mt-0 w-[349px] 2xl:w-[449px] h-[511px] 2xl:h-[613px] border-2 border-gray-200 rounded-[20px] overflow-hidden">
            <div className="w-full flex items-center justify-between p-5 border-b-2 border-gray-200">
              <p className="text-2xl font-bold">Package list</p>
              <button>
                <ReverseArrowSvg />
              </button>
            </div>

            <div className="w-full h-full scrollbar overflow-y-scroll pb-20">
              <ListItem isActive name="0 - LA, Nevada" step="0" temp="8" />
              <ListItem name="2 - Lagos, Nigeria" step="0" temp="-4" />
              <ListItem name="0 - LA, Nevada" step="1" temp="8" />
              <ListItem name="0 - LA, Nevada" step="2" temp="8" />
              <ListItem name="0 - LA, Nevada" step="3" temp="8" />
              <ListItem name="0 - LA, Nevada" step="4" temp="8" />
              <ListItem name="0 - LA, Nevada" step="0" temp="8" />
            </div>
          </div>

          <PackageInfo />
        </div>

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
