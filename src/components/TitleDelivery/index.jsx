import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../router/routes';

export const TitleDelivery = ({ isDarkTheme }) => {
  const boxImage = isDarkTheme
    ? require('../../assets/img/Close-box-no-shadow.png')
    : require('../../assets/img/Opened-box.png');

  return (
    <div className="relative w-full bg-gray-100 dark:bg-gray-700">
      <div className="container mx-auto px-[10px] md:px-[30px] lg:pl-[31px] lg:pr-[30px] xl:pl-[77px] xl:pr-[76px] 2xl:px-20 pt-12">
        <div className="md:px-[13px] lg:pl-[66px] lg:pr-[79px] xl:pl-[18px] xl:pr-[55px] 2xl:pl-[17px] 2xl:pr-[56px] flex flex-col md:flex-row md:justify-between space-y-4 md:space-y-0">
          <div className="flex items-center justify-center space-x-[14px]">
            <p className="text-2xl lg:text-[35px] font-bold dark:text-white">
              {isDarkTheme ? 'My shipments' : 'My receipts'}
            </p>
            <img
              src={boxImage}
              alt="Opened-box"
              className="w-[43px] h-[38px] dark:w-[34px] lg:w-[52px] lg:h-[46px] dark:lg:w-[42px]"
            />
          </div>
          <div className="flex items-center justify-center space-x-2">
            <Link
              to={routes.Shipment}
              className="text-lg 2xl:text-2xl font-bold text-gray-300 dark:text-green-400 hover:text-green-500"
            >
              My shipments
            </Link>
            <div className="w-0.5 h-4 bg-gray-300"></div>
            <Link
              to={routes.Receipt}
              className="text-lg 2xl:text-2xl font-bold text-green-400 dark:text-gray-300 hover:text-green-500"
            >
              My receipts
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
