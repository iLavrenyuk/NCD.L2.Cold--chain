import React from 'react';

export const StepWork = ({ title, text, hasLine }) => {
  return (
    <>
      <div className="w-[224px] text-center">
        <p className="text-xl 2xl:text-2xl font-bold hover:text-blue-300 cursor-default">{title}</p>
        <p className="mt-2 text-sm 2xl:text-base font-medium text-gray-400">{text}</p>
      </div>
      <div className="md:hidden w-6 h-6 background-gradient-mash rounded-full my-5" />
      {hasLine ? <div className="md:hidden w-0.5 h-[85px] rounded-[10px] bg-red-300 mb-5" /> : null}
    </>
  );
};
