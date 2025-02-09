import { Icon } from "@iconify/react/dist/iconify.js";
import { useEffect, useState } from "react";
import SectionName from "../ui/SectionName";

export default function Footer() {

    const [time, setTime] = useState<string>('');

    useEffect(() => {
        const timer = setInterval(() => {
            const date = new Date();
            const options: Intl.DateTimeFormatOptions = {
                timeZone: 'Asia/Manila',
                hour: 'numeric',
                minute: '2-digit',
                hour12: true
            };

            const formattedTime = date
                .toLocaleTimeString('en-US', options)
                .toLowerCase()
                .replace(' ', '');

            setTime(formattedTime);
        }, 1000);

        return () => clearInterval(timer);
    }, []);
    return (
        <div className="lg:px-0 px-10  mt-[150px] w-full max-w-[880px] flex flex-col items-center text-white font-Clash">
            <div className="flex flex-col w-full items-center justify-center">
                <SectionName title='[ That is All! ]' />
                <p className="text-clamp5 font-semibold tracking-tighter text-center font-clash">Wanna get in touch?</p>
                      <div className="flex items-center justify-center w-full m-0 p-0">
                        <Icon icon="pixelarticons:arrow-down" className='w-[44px] h-[44px] lg:w-[74px] lg:h-[74px]' />
                      </div>
            </div>
            <div className="flex w-full text-clamp3 font-clash  justify-between items-center pt-[10%]">
                <a href="https://www.google.com/maps/place/Davao+City,+Davao+del+Sur/@7.2535176,125.1214096,10z/data=!3m1!4b1!4m6!3m5!1s0x32f96d9f519e327f:0xb53a24589f79c573!8m2!3d7.0736114!4d125.6110248!16zL20vMDJnbjF4?entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoASAFQAw%3D%3D">Davao City, Philippines</a>
                <a>PHT {time}</a>
            </div>
            <div className="text-[12px] select-none flex items-center justify-center gap-1 pt-[5%] pb-5">
                <div className="absolute flex justify-center overflow-hidden">
                    <div className="h-[70px] pb-5 overflow-hidden">
                        {/* <img className="w-full h-full object-cover" src="\src\assets\signature.svg" alt="sig" /> */}
                    </div>
                </div>

                <div className="flex flex-col items-center text-[#696969] text-[15px] font-clash">
                    <span className="flex pt-5 space-x-1 tracking-wider">
                        <a href="https://www.linkedin.com/in/ralphenrique/" >Linkedin</a>
                        <p className="text-[#696969]"> • </p>
                        <a href="https://github.com/ralphenrique" >Github</a>
                        <p className="text-[#696969]"> • </p>
                        <a href="https://www.instagram.com/ralphenrique_/" >Instagram</a>
                        <p className="text-[#696969]"> • </p>
                        <a href="https://bento.me/ralphenrique" >Bento</a>
                    </span>
                    <span className="flex flex-row items-center space-x-5 ">
                    <p>Developed in Phase 2 El Rio </p>
                    <p>©2025</p>
                    </span>
                </div>

            </div>
        </div>

    )
}