'use client';

import React from 'react';
import LogoCarousel from './LogoCarousel';
import Image from 'next/image';
import { Fade } from 'react-awesome-reveal';

const Header = () => {
  return (
    <div className='h-screen flex flex-col items-center justify-center  bg-[url("/bg1.svg")] bg-center bg-cover bg-no-repeat px-2'>
      <Fade>
        <p className='text-center text-4xl md:text-7xl font-Anton  uppercase mt-20  '>
          Automated <span className='text-[#707070]'>Yield</span>{' '}
        </p>
      </Fade>

      <Fade
        damping={3}
        delay={500}>
        <p className='text-center text-4xl md:text-7xl font-Anton uppercase mt-1 '>
          <span className='text-[#707070]'>Optimization </span> layer of DeFi.
        </p>
      </Fade>

      <Fade
        damping={3}
        delay={1000}>
        <p className='mt-10 text-slate-200 md:text-lg text-sm text-center'>
          Empowering Investors with Automated & Adaptive strategies across
          ecosystem
        </p>
      </Fade>

      <LogoCarousel />

      <div className='flex gap-6 items-center mt-20'>
        <p className='md:text-sm text-xs'>Powered by </p>
        <Image
          onClick={() => {
            window.open('https://chain.link/cross-chain', '_blank');
          }}
          src={'/icons/newCCIP.png'}
          height={80}
          width={170}
          alt='CCIP Chainlink'
          className='cursor-pointer h-[30px] w-[80px] md:h-[40px] md:w-[100px]'
        />

        <Image
          onClick={() => {
            window.open('https://www.circle.com/en/', '_blank');
          }}
          src={'/icons/circle.png'}
          height={20}
          width={80}
          alt='Circle CCTP'
          className='cursor-pointer h-[25px] w-[80px] md:h-[28px] md:w-[100px]'
        />
      </div>
    </div>
  );
};

export default Header;
