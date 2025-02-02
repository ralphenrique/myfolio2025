import { useEffect, useState } from "react";


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
                <h1 className="text-clamp5 font-semibold">[ Contact ]</h1>
                <p className="text-clamp1 font-semibold tracking-tight">This is the part where you get in touch!</p>
                <span className="pt-5 text-clamp3">
                    <a href="https://www.linkedin.com/in/ralphenrique/" >linkedin · </a>
                    <a href="https://github.com/rikeenrike" >github · </a>
                    <a href="https://www.instagram.com/ralphenrique_/" >instagram · </a>
                    <a href="https://bento.me/ralphenrique" >bento</a>
                </span>
            </div>
            <div className="flex w-full text-clamp3  justify-between items-center pt-[30%]">
                <a href="https://www.google.com/maps/place/Davao+City,+Davao+del+Sur/@7.2535176,125.1214096,10z/data=!3m1!4b1!4m6!3m5!1s0x32f96d9f519e327f:0xb53a24589f79c573!8m2!3d7.0736114!4d125.6110248!16zL20vMDJnbjF4?entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoASAFQAw%3D%3D">Davao City, Philippines</a>
                <a>PHT {time}</a>
            </div>
            <div className="text-[12px] select-none flex items-center justify-center gap-1 pt-[10%] pb-5">
                <div className="absolute flex justify-center overflow-hidden">
                    <div className="h-[70px] pb-5 overflow-hidden">
                        {/* <img className="w-full h-full object-cover" src="\src\assets\signature.svg" alt="sig" /> */}
                    </div>
                </div>
                <p>• Developed in Phase 2 El Rio</p>
                <p>by Ralph Enrique •</p>
            </div>
        </div>

    )
}