import React from 'react';
import { ReactComponent as ErrorSvg } from '../../../assets/svg/error.svg';

export const FormInput = ({ label, id, errorMessage, register, width, widthMD }) => {
  return (
    <div>
      <p className="text-xs font-semibold">{label}</p>
      <input
        {...register(id)}
        type="text"
        className={`mt-2 h-10 w-${width} md:w-${widthMD} rounded-[10px] pl-2 md:pl-4 ${
          errorMessage ? 'border-red-400' : 'border-gray-200'
        } outline-none border text-sm placeholder-gray-300 focus:border-blue-400`}
        placeholder="Write here"
      />
      {errorMessage ? (
        <div className="flex mt-2">
          <ErrorSvg />
          <p className="text-xs text-gray-400 ml-2 whitespace-pre-line">{errorMessage}</p>
        </div>
      ) : null}
    </div>
  );
};
