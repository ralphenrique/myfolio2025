import SectionName from '../ui/SectionName';

export default function Experience() {
    return (
        <div className="lg:px-0 px-10  mt-[150px] w-full max-w-[880px] lg:flex-row flex flex-col items-start text-white">
            <SectionName title="[Experience]" />
            <div className="flex flex-col items-start w-full lg:pl-[10%] pl-0 font-clash">
                <div className="h-[1px] bg-white w-full mt-5 mb-10"></div>
                <div className="flex items-start w-full gap-[10%] text-clamp2 font-semibold">
                    <span>Now</span>
                    <div className='flex flex-col items-start gap-10'>
                        <div>
                            <span>Campus Organizer</span>
                            <p className='text-clamp3 text-justify font-normal opacity-50 leading-tight'>at Google Developer Groups On Campus UIC, I host workshops and seminars, inspiring like-minded individuals to embark on their tech journey.</p>
                        </div>
                        {/* <div>
                            <span>Software Developer</span>
                            <p className='text-clamp3 text-justify font-normal opacity-50 leading-tight'>at Commission on Higher Education Department. Currently sitting as Frontend Developer on their upcoming Information Repository System</p>
                        </div> */}
                    </div>
                </div>
                <div className="h-[1px] bg-white w-full my-10"></div>
                <div className="flex items-start w-full gap-[6%] text-clamp2 font-semibold">
                    <span>2024</span>
                    <div className='flex flex-col items-start gap-10'>
                        <div>
                            <span>Volunteer</span>
                            <p className='text-clamp3 text-justify font-normal opacity-50 leading-tight'>at DEVCON Davao’s Mindanao Summit 2024 & Bayanihan Ventures. Capturing live moments during the event as a Videographer. </p>
                        </div>
                    </div>
                </div>
                <div className="h-[1px] bg-white w-full my-10"></div>
                <div className="flex items-start w-full gap-[6%] text-clamp2 font-semibold">
                    <span>2023</span>
                    <div className='flex flex-col items-start gap-10'>
                        <div>
                            <span>Volunteer</span>
                            <p className='text-clamp3 text-justify font-normal opacity-50 leading-tight'>at Techstars, Startup Weekend. Capturing live moments during the event as a Videographer. </p>
                        </div>
                        <div>
                            <span>Finance Officer</span>
                            <p className='text-clamp3 text-justify font-normal opacity-50 leading-tight'>at the Society of Information Technology Education Students UIC, I managed the organization’s financial audit, ensuring transparency and accountability in financial operations.</p>
                        </div>
                        <div>
                            <span>Freelance Video Editor</span>
                            <p className='text-clamp3 text-justify font-normal opacity-50 leading-tight'>worked with multiple clients, including CYGA Academy and Monte Weaver, delivering impactful solutions tailored to their needs. </p>
                        </div>
                    </div>
                </div>
                <div className="h-[1px] bg-white w-full my-10"></div>

            </div>
        </div>
    );

}