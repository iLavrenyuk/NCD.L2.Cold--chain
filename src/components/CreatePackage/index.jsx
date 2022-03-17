import React from 'react';
import { FormInput } from './FormInput';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { sendPackageSchema } from '../../constants/validatePackage';
import { ReactComponent as CrossSvg } from '../../assets/svg/cross.svg';
import { ReactComponent as NearLogoTextSvg } from '../../assets/svg/nearLogoText.svg';

const defaultValues = {
  packageName: '',
  temp_c: '',
  payment_account_id: '',
  description: '',
};

export const CreatePackage = ({ setIsOpenForm }) => {
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm({
    defaultValues,
    resolver: yupResolver(sendPackageSchema),
    mode: 'onBlur',
  });

  const onSubmit = (data) => {
    console.log(data);
  };

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

        <form onSubmit={handleSubmit(onSubmit)} className="w-[328px] md:w-[397px] mx-auto mt-[30px] md:mt-[18px]">
          <div className="flex justify-between">
            <FormInput
              label="Package name"
              id="packageName"
              errorMessage={errors?.['packageName']?.message}
              register={register}
              width="[195px]"
              widthMD="[260px]"
            />
            <FormInput
              label="Set temperature ℃"
              id="temp_c"
              errorMessage={errors?.['temp_c']?.message}
              register={register}
              width="[125px]"
            />
          </div>

          <div className="mt-4">
            <FormInput
              label="Go to"
              id="payment_account_id"
              errorMessage={errors?.['payment_account_id']?.message}
              register={register}
              width="full"
            />
          </div>

          <div className="mt-4">
            <p className="text-xs font-semibold">Set a details</p>
            <textarea
              {...register('description')}
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

          <button
            type="submit"
            className="w-[214px] h-[53px] mt-4 md:mt-[35px] mx-auto rounded-[10px] bg-blue-300 hover:bg-blue-400 flex items-center justify-center transform active:scale-95 duration-100"
          >
            <div className="text-lg font-bold">Send a package</div>
          </button>
        </form>
      </div>
    </div>
  );
};
