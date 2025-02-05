
import { Icon } from '@iconify/react';

export default function Hero() {
  return (
    <div className="lg:px-0 px-10 w-full max-w-[880px] flex flex-col items-center text-white '">
      <span className="flex items-center justify-center w-full">
        <h1 className="font-bold text-clamp3 drop-shadow-[0px_0px_2px_#EEE] mr-2">はじめまして!</h1>
        <div className=' w-[14px] h-[14px] rounded-xl bg-red drop-shadow-[0px_0px_4px_#DB4537]'></div>
      </span>
      <span className="lg:text-[65px] text-clamp1 text-center font-Clash font-semibold tracking-tighter leading-tight">
        <p className="m-0 font-clash">Hey, I'm Ralph!</p>
        <span className='text-clamp2 tracking-normal'>
          <p className="font-clash">a software developer, student leader</p>
          <p className="font-clash">cinematographer, & a volunteer</p>
        </span>

      </span>
      <div className="flex items-start  w-full m-0 p-0">
        <Icon icon="pixelarticons:arrow-down" className='-ml-4 w-[44px] h-[44px] lg:w-[74px] lg:h-[74px]' style={{ transform: 'rotate(-45deg)' }} />
      </div>
    </div>
  );
}