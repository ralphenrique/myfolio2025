import RalphImage from '../assets/Ralph.png';

export default function About() {
    return (
        <div className='mt-[150px] w-full max-w-[880px] flex flex-col items-center h-[150vh] border relative'>
            <span className="flex items-center justify-start w-full ">
                <h1 className='text-white text-[24px] font-Neue font-bold mr-2'>[About me]</h1>
                <div className=' w-[14px] h-[14px] rounded-xl bg-red drop-shadow-[0px_0px_4px_#DB4537]'></div>
            </span>
            <img src={RalphImage} alt='Ralph' className='h-clamp4' />
            <span
  className="text-white text-clamp4 text-justify font-Garamond font-semibold tracking-tight leading-tight absolute"
  style={{ top: 'clamp(0px, 100px, 200px)' }}
>            <p className="mb-10">&nbsp;&nbsp;&nbsp;&nbsp;Hey! I'm Ralph Enrique, currently pursuing a major in Information Technology with a focus on Software Engineering. My current area of focus is in web development technologies.</p>
                <p className="mb-10">
                    &nbsp;&nbsp;Beyond the digital realm, I'm a passionate cinematographer, drawing inspiration from cinematic maestros like Christopher Nolan. Excited about merging technology and storytelling.</p>
                <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;I'm on a journey to master the art of creating captivating digital experiences.
                </p>
            </span>
        </div>
    )
}