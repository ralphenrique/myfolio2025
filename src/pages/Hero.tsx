
import { Icon } from '@iconify/react';
const emoji_1 =
  "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Waving%20Hand%20Medium-Light%20Skin%20Tone.png";
export default function Hero() {
  return (
    <div className="lg:px-0 px-10 w-full max-w-[880px] flex flex-col  text-white '">
      <span className="flex  w-full">
        {/* <h1 className="font-bold text-clamp3 drop-shadow-[0px_0px_2px_#EEE] mr-2">はじめまして!</h1>
        
        <div className=' w-[14px] h-[14px] rounded-xl bg-red drop-shadow-[0px_0px_4px_#DB4537]'></div> */}
        <p className="lg:text-[30px] m-0 font-clash">Hey!</p>

        <img className="w-[35px] h-[35px]" src={emoji_1} alt="emoji" />
        <p className="lg:text-[30px] m-0 font-clash">&nbsp; I'm Ralph!</p>

      </span>
      <span className="lg:text-[75px] text-clamp1 font-Clash font-semibold tracking-tighter leading-tight">
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