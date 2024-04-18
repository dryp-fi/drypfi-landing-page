'use client';

import Image from 'next/image';
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className='flex items-center justify-between px-10 py-2 fixed w-full  z-20'>
      <Image
        src='/logo.png'
        height={35}
        width={35}
        alt='DrypFi'
      />

      <button className='bg-white py-2 px-8 rounded-md text-black'>
        Launch App
      </button>
    </nav>
  );
};

export default Navbar;
