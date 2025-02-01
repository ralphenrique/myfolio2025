

interface SectionNameProps {
    title: string;
}

const SectionName = ({ title }: SectionNameProps) => {
    return (
            <span className="flex items-center justify-start w-full ">
                <h1 className=' lg:text-[24px] md:text-[20px] text-[15px] font-Neue font-bold mr-2'>{title}</h1>
                <div className='  w-[14px] h-[14px] lg:w-[14px] lg:h-[14px]  rounded-xl bg-red drop-shadow-[0px_0px_4px_#DB4537]'></div>
            </span>

    )
}

export default SectionName;