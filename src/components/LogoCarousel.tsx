import Image from 'next/image';
import eth from '../../public/icons/eth.png';
import pol from '../../public/icons/pol.png';
import arb from '../../public/icons/arb.png';
import base from '../../public/icons/base.png';
import scroll from '../../public/icons/scroll.png';
import mantle from '../../public/icons/mantle.png';
import gnosis from '../../public/icons/gnosis.png';
import bnb from '../../public/icons/bnb.png';
import linea from '../../public/icons/linea.png';

const LogoCarousel = () => {
  const logos = [
    { src: eth, alt: 'eth' },
    { src: pol, alt: 'pol' },
    { src: arb, alt: 'arb' },
    { src: base, alt: 'base' },
    { src: scroll, alt: 'scroll' },
    // { src: mantle, alt: 'mantle' },
    // { src: gnosis, alt: 'gnosis' },
    // { src: bnb, alt: 'bnb' },
    // { src: linea, alt: 'linea' },
  ];

  return (
    <div className='mt-10 w-[300px] lg:w-[500px] mx-auto inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]'>
      <ul className='flex items-center justify-center md:justify-start [&_li]:mx-5 [&_img]:max-w-none animate-infinite-scroll'>
        {logos.map((logo, index) => (
          <li key={index}>
            <Image
              src={logo.src}
              alt={logo.alt}
              height={45}
              width={45}
              className='rounded-full h-[30px] w-[30px] md:h-[45px] md:w-[45px]'
            />
          </li>
        ))}
      </ul>
      <ul
        className='flex items-center justify-center md:justify-start [&_li]:mx-5 [&_img]:max-w-none animate-infinite-scroll'
        aria-hidden='true'>
        {logos.map((logo, index) => (
          <li key={index}>
            <Image
              src={logo.src}
              alt={logo.alt}
              height={45}
              width={45}
              className='rounded-full h-[30px] w-[30px] md:h-[45px] md:w-[45px]'
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LogoCarousel;
