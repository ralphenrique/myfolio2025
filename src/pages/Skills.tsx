import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import SectionName from '../ui/SectionName';
import { Icon } from "@iconify/react";

export default function Skills() {
    const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
    const [activeSkill, setActiveSkill] = useState<string>("");
    const messageRef = useRef<HTMLDivElement>(null);
    const toolsRef = useRef<HTMLDivElement>(null);

    const animations = {
        arrow: {
            default: { x: -10, opacity: 0 },
            hover: { x: 10, opacity: 1, duration: 0.2 }
        },
        text: {
            default: { opacity: 0.5 },
            hover: { opacity: 1, duration: 0.2 }
        }
    };
    
    useEffect(() => {
        const elements = itemsRef.current.filter(Boolean);

        const handleHover = (item: HTMLDivElement, isEntering: boolean, skillName: string) => {
            const state = isEntering ? 'hover' : 'default';
            // Kill previous animations first
            gsap.killTweensOf(item.querySelector('.arrow'));
            gsap.killTweensOf(item.querySelector('.text'));
            gsap.to(item.querySelector('.arrow'), animations.arrow[state]);
            gsap.to(item.querySelector('.text'), animations.text[state]);
            setActiveSkill(isEntering ? skillName : "");
        };

        elements.forEach((item, index) => {
            if (!item) return;
            const skillName = ["Graphics", "Cinematography", "Developer", "Video Editor"][index];
            const enter = () => handleHover(item, true, skillName);
            const leave = () => handleHover(item, false, skillName);

            item.addEventListener('mouseenter', enter);
            item.addEventListener('mouseleave', leave);

            return () => {
                item.removeEventListener('mouseenter', enter);
                item.removeEventListener('mouseleave', leave);
            };
        });

        // For tools animation
        if (toolsRef.current && getToolsList().length > 0) {
            gsap.killTweensOf(toolsRef.current.children);
            gsap.fromTo(toolsRef.current.children,
                {
                    opacity: 0,
                    y: 20
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    stagger: 0.1,
                    ease: "power2.out"
                }
            );
        }

        // For message animation (in separate condition)
        if (messageRef.current && getToolsList().length === 0) {
            gsap.killTweensOf(messageRef.current);
            gsap.fromTo(messageRef.current,
                {
                    opacity: 0,
                },
                {
                    opacity: 1,
                    duration: 0.5,
                    ease: "power2.out"
                }
            );
        }
    }, [activeSkill]);


    const getToolsList = () => {
        switch (activeSkill) {
            case "Graphics":
                return graphics;
            case "Cinematography":
                return cinematography;
            case "Developer":
                return developer;
            case "Video Editor":
                return videoEditor;
            default:
                return [];
        }
    };


    const graphics = [
        { name: "Figma" },
        { name: "Photoshop" },
    ]

    const cinematography = [
        { name: "Sony A7III" },
        { name: "DJI Ronin SC" },
        { name: "Godox" },
    ]

    const developer = [
        { name: "React" },
        { name: "Vue" },
        { name: "WebSocket" },
        { name: "TailwindCSS" },
        { name: "GreenSock" },
        { name: "PWA" },
        { name: "Java" },
        { name: "Python" },
        { name: "TypeScript" },
        { name: "PHP" },
    ]

    const videoEditor = [
        { name: "Premiere Pro" },
        { name: "After Effects" },
        { name: "Final Cut Pro" },
    ]

    return (
        <div className="lg:px-0 px-10 w-full max-w-[880px] mx-auto mt-[150px] text-white font-Clash text-clamp2">
            <div className="grid grid-cols-5 gap-8 md:gap-12">
                {/* Left section */}
                <div className="col-span-3 w-full font-semibold tracking-tight">
                    <SectionName title="[ Skills ]" />
                    <div className="mt-10 leading-tight">
                        {["Graphics", "Cinematography", "Developer", "Video Editor"].map((skill, index) => (
                            <div
                                key={index}
                                ref={(el) => (itemsRef.current[index] = el)}
                                className="flex items-center space-x-2 cursor-pointer"
                            >
                                <span className="text opacity-50">{skill}</span>
                                <Icon
                                    icon="pixelarticons:arrow-down"
                                    className="arrow w-[44px] h-[44px] lg:w-[74px] lg:h-[74px] opacity-0"
                                    style={{ transform: "rotate(-90deg)" }}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right section */}
                <div className="col-span-2 w-full">
                    <SectionName title="[ Tools ]" />
                    <div className="mt-10 leading-tight">
                        {getToolsList().length === 0 ? (
                            <div ref={messageRef} className="text-clamp3">
                                Hover over skills
                            </div>
                        ) : (
                            <div ref={toolsRef} className="grid grid-cols-2">
                                {getToolsList().map((tool, index) => (
                                    <div key={index} className="text-clamp3">
                                        {tool.name}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}