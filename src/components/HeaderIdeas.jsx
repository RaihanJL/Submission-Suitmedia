import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '../context/useGlobalContext';

const HeaderIdeas = () => {
  const { imagesBg } = useGlobalContext();

  useEffect(() => {}, [imagesBg]);

  return (
    <header className="flex items-center justify-center h-80 bg-fixed bg-center bg-cover relative overflow-x-hidden" style={{ backgroundImage: `url(${imagesBg})` }}>
      <div className="text-5xl text-center  text-white bg-opacity-50 bg-black h-full w-full">
        <div className="translate-y-full mt-10">
          <p>Ideas</p>
          <p className="text-base">Where all our great things begin</p>
        </div>
      </div>
      <div className="segitiga4"></div>
    </header>
  );
};

export default HeaderIdeas;
