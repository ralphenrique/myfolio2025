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
                <a href="">Davao City, Philippines</a>
                <a href="">PHT {time}</a>
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