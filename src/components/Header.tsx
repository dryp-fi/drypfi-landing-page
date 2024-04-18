'use client';

import React from 'react';
import LogoCarousel from './LogoCarousel';
import Image from 'next/image';

const Header = () => {
  return (
    <div className='h-screen flex flex-col items-center justify-center  bg-[url("/bg1.svg")] bg-center bg-contain '>
      <p className='text-center text-4xl md:text-7xl font-Anton  uppercase mt-20 '>
        Automated <span className='text-[#707070]'>Yield</span>{' '}
      </p>

      <p className='text-center text-4xl md:text-7xl font-Anton uppercase mt-1'>
        <span className='text-[#707070]'>Optimization </span> layer of DeFi.
      </p>

      <p className='mt-10 text-slate-200 '>
        Empowering Investors with Automated & Adaptive strategies across
        ecosystem
      </p>

      <LogoCarousel />

      <div className='flex gap-4 items-center mt-20'>
        <p className='text-sm'>Powered by </p>
        <Image
          onClick={() => {
            window.open('https://www.layerzero.network/', '_blank');
          }}
          src={'/icons/layerzero.png'}
          height={40}
          width={120}
          alt='LayerZero'
          className='cursor-pointer'
        />
      </div>
    </div>
  );
};

export default Header;
