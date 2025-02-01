import RalphImage from '../assets/Ralph.png';
import SectionName from '../ui/sectionname';
export default function About() {
    return (
        <div className='lg:px-0 px-10 mt-[150px] w-full max-w-[880px] flex flex-col items-center  text-white'>
            <SectionName title='[About Me]'  />
            <img src={RalphImage} alt='Ralph' className='h-clamp4' />
            <span
                className="text-clamp4 text-justify font-Clash font-semibold tracking-tight leading-tight -mt-[25%]"
            >
                <p className="mb-10">&nbsp;&nbsp;&nbsp;&nbsp;Hey! I'm Ralph Enrique, currently pursuing a major in Information Technology with a focus on Software Engineering. My current area of focus is in web development technologies.</p>
                <p className="mb-10">
                    &nbsp;&nbsp;Beyond the digital realm, I'm a passionate cinematographer, drawing inspiration from cinematic maestros like Christopher Nolan. Excited about merging technology and storytelling.</p>
                <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;I'm on a journey to master the art of creating captivating digital experiences.
                </p>
            </span>
        </div>
    )
}