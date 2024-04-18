'use client';

import Image from 'next/image';
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className='flex items-center justify-between px-4 md:px-10 py-3 fixed w-full  z-20'>
      <Image
        src='/logo.png'
        height={35}
        width={35}
        alt='DrypFi'
        className='h-[25px] w-[25px] md:h-[35px] md:w-[35px]'
      />

      <button
        onClick={() => {
          window.open('https://app.dryp.fi', '_blank');
        }}
        className='bg-white py-2 md:px-8 px-4 rounded-md text-black text-xs md:text-base'>
        Launch App
      </button>
    </nav>
  );
};

export default Navbar;
