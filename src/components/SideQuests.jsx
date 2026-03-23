import { useMemo, useState } from 'react';
import useInView from '../lib/useInView';

const HobbyColumn = ({ 
  number, title, description, colorClass, image, icon, textColor, 
  isHovered, onMouseEnter, onMouseLeave, 
  imageClass = ""
}) => (
  <div 
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    className={`
      ${colorClass} p-8 flex flex-col justify-end h-100 border-r-4 border-neutral-900 
      transition-all duration-700 ease-in-out relative overflow-hidden cursor-pointer
      ${isHovered ? 'flex-[2.5]' : 'flex-1'}
    `}
  >
    {image && (
      <img 
        src={image} 
        alt={title}
        className={`
          absolute bottom-0 object-contain transition-all duration-700 pointer-events-none z-0
          ${isHovered ? 'opacity-100 grayscale-0 mix-blend-normal' : 'opacity-40 grayscale mix-blend-multiply'}
          ${imageClass || 'right-[-10%] w-[120%] h-full'} 
        `}
      />
    )}
    {icon && (
      <div className="absolute inset-0 z-10 pointer-events-none">
        {icon}
      </div>
    )}
    <div className={`
      relative z-30 mt-auto transition-all duration-500 origin-bottom-left
      ${isHovered ? 'scale-110 translate-y-0' : 'scale-100 translate-y-2'}
    `}>
      <h3 className={`
        text-sm font-black uppercase tracking-widest mb-1 transition-colors duration-500
        ${isHovered ? 'text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]' : textColor}
      `}>
        {title}
      </h3>
      
      <p className={`
        text-[11px] leading-tight font-bold max-w-40 transition-colors duration-500
        ${isHovered ? 'text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]' : textColor}
      `}>
        {description}
      </p>
    </div>
    <div className={`
      absolute -bottom-2.5 -left-2.5 text-[120px] font-black leading-none select-none z-0 transition-opacity duration-500
      ${isHovered ? 'opacity-5' : 'opacity-15'} ${textColor}
    `}>
      {number}
    </div>
  </div>
);

export default function SideQuests() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const { ref: sectionRef, inView: sectionInView } = useInView(0.12);
  const stars = useMemo(
    () =>
      Array.from({ length: 36 }, (_, index) => ({
        id: index,
        left: `${(index * 13) % 100}%`,
        top: `${(index * 23) % 100}%`,
        size: 12 + (index % 8),
        opacity: 0.3 + ((index % 6) * 0.08),
        color: ['#22d3ee', '#f472b6', '#facc15', '#a3e635', '#fb7185'][index % 5],
        motion: index % 2 === 0 ? 'animate-pulse-slow' : 'animate-float',
      })),
    []
  );

  return (
    <section id="side-quests" className="relative mt-8 overflow-hidden bg-white pt-10 pb-16 px-6 md:mt-12 md:px-20 md:pt-14">
      <div className="pointer-events-none absolute inset-0 z-0">
        {stars.map((star) => (
          <span
            key={star.id}
            className={`absolute select-none ${star.motion}`}
            style={{
              left: star.left,
              top: star.top,
              fontSize: `${star.size}px`,
              color: star.color,
              opacity: star.opacity,
            }}
          >
            ✦
          </span>
        ))}
      </div>

      <div
        ref={sectionRef}
        className={`relative z-10 max-w-5xl mx-auto border-4 border-neutral-900 overflow-hidden rounded-[2.5rem] flex flex-col md:flex-row bg-neutral-900 shadow-xl transition-all duration-700 ${
          sectionInView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
        }`}
      >

        <HobbyColumn 
          number="01" 
          title="Playing Instruments" 
          image="/Hobbies-1.png" 
          description="I mainly play the guitar and bass for the current bands I'm in. I also enjoy experimenting with music production."
          colorClass="bg-blue-400" 
          textColor="text-blue-950"
          isHovered={hoveredIndex === 0}
          onMouseEnter={() => setHoveredIndex(0)}
          onMouseLeave={() => setHoveredIndex(null)}
        />

        <HobbyColumn 
          number="02" 
          title="Video Editing" 
          image="/Hobbies-2.png" 
          description="I edit in Adobe Premiere Pro and explore new storytelling styles."
          colorClass="bg-red-500" textColor="text-red-950"
          isHovered={hoveredIndex === 1}
          onMouseEnter={() => setHoveredIndex(1)}
          onMouseLeave={() => setHoveredIndex(null)}
        />

        <div className={`
          bg-neutral-900 flex items-center justify-center transition-all duration-500 overflow-hidden h-100
          ${hoveredIndex !== null ? 'flex-[0.5] opacity-50' : 'flex-[2.5] opacity-100'}
        `}>
           <div className="text-center">
            <h2 className="text-white text-5xl font-black uppercase italic tracking-tighter">✦ SIDE QUESTS ✦</h2>
            <p className="text-neutral-500 font-mono text-[15px] mt-2 tracking-widest text-center px-4">
              These are some of my "side quests" that I enjoy doing outside of my main career path. I am open to collaborating on projects related to these works!
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}