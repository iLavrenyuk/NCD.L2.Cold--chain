import React from 'react';

export const Decoration = () => {
  return (
    <div>
      <img src={require('../../assets/img/ellipses.png')} alt="" className="absolute left-0 top-[278px]" />
      <img src={require('../../assets/img/gradient-ellipse.png')} alt="" className="absolute top-[221px] left-[94px]" />
      <img
        src={require('../../assets/img/blue-ellipse-small.png')}
        alt=""
        className="absolute top-[218px] right-[10px] md:left-[632px]"
      />
      <img
        src={require('../../assets/img/green-ellipse.png')}
        alt=""
        className="absolute md:top-[340px] md:left-[620px] lg:top-[386px] lg:left-[371px] xl:top-[512px] xl:left-[454px] 2xl:top-[542px] 2xl:left-[644px]"
      />
      <img src={require('../../assets/img/red-ellipse.png')} alt="" className="absolute top-[643px] left-[210px]" />
      <img src={require('../../assets/img/blue-ellipse.png')} alt="" className="absolute top-[790px] left-[89px]" />
      <img
        src={require('../../assets/img/gradient-ellipse-huge.png')}
        alt=""
        className="absolute top-[748px] left-[267px]"
      />
    </div>
  );
};
