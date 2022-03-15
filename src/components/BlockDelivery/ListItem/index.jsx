import React from 'react';
import { useLocation } from 'react-router-dom';
import { routes } from '../../../router/routes';

export const ListItem = ({ isActive, name, step, temp }) => {
  const stepColor = (value) => {
    switch (true) {
      case value === '1':
        return 'text-transparent bg-clip-text background-gradient-mash';
      case value === '2':
        return 'text-green-400';
      case value === '3':
        return 'text-blue-300';
      case value === '4':
        return 'text-transparent bg-clip-text background-gradient-orange';

      default:
        return 'text-red-300';
    }
  };

  const location = useLocation();
  const boxImage =
    location.pathname === routes.Shipment
      ? require('../../../assets/img/Close-box-no-shadow.png')
      : require('../../../assets/img/Opened-box.png');

  return (
    <div
      href="#"
      className={`flex items-center justify-between w-full h-[110px] px-[14px] 2xl:px-6 border-b-2 border-gray-200 dark:border-gray-600 ${
        isActive ? 'bg-blue-50' : ''
      } dark:bg-opacity-10 hover:bg-blue-50 dark:hover:bg-opacity-10 cursor-pointer`}
    >
      <div className="flex items-center">
        <div
          className={`flex items-center justify-center w-[73px] h-[73px] rounded-full border-2 border-gray-200 dark:border-gray-600 ${
            isActive ? 'background-gradient-orange' : ''
          }`}
        >
          <img src={boxImage} alt="" className="w-[52px] dark:w-[42px] h-[42px]" />
        </div>
        <div className="ml-[9px] 2xl:ml-[17px]">
          <p className="text-base 2xl:text-lg font-bold">Package name</p>
          <p className={`text-base 2xl:text-lg font-bold mt-0.5 ${stepColor(step)}`}>{name}</p>
        </div>
      </div>

      <div className="text-center">
        <p className="text-base font-medium text-gray-400">temp</p>
        <p className={`text-4xl leading-[54px] font-bold ${temp > 0 ? 'bg-gradient-orange' : 'text-blue-300'}`}>
          {temp}℃
        </p>
      </div>
    </div>
  );
};
