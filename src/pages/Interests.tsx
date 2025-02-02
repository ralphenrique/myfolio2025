import SectionName from '../ui/SectionName';
import RadarChart from '../ui/RadarChart';
export default function Interests() {

    return(
        <div className="lg:px-0 px-10  mt-[150px] w-full max-w-[880px] flex flex-col items-start text-white font-Clash">
            <SectionName title='[ Interests ]'  />
            <RadarChart />
        </div>
    );

};
