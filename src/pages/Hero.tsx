
import { Icon } from '@iconify/react';

export default function Hero() {
  return (
    <div className="flex flex-col jusitfy-center items-center w-fit text-white">
      <span className="flex items-center justify-center w-full">
        <h1 className="font-bold text-clamp2 drop-shadow-[0px_0px_2px_#EEE] mr-2">はじめまして</h1>
        <div className=' w-[14px] h-[14px] rounded-xl bg-red drop-shadow-[0px_0px_4px_#DB4537]'></div>
      </span>
      <span className="text-clamp1 text-center font-Garamond font-semibold tracking-tight leading-tight">
        <p className="m-0">I create inspiring digital</p>
        <p className="m-0">experiences through seamless</p>
        <p className="m-0">design and development.</p>
      </span>
      <div className="flex items-start  w-full m-0 p-0">
        <Icon icon="pixelarticons:arrow-down" width="70" height="70" style={{ transform: 'rotate(-45deg)' }} />      
      </div>
    </div>
  );
}