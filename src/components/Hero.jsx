import { useEffect, useMemo, useState } from 'react';
import { FaHtml5, FaCss3Alt, FaReact, FaFigma } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiTailwindcss } from 'react-icons/si';
import { RiNextjsFill } from "react-icons/ri";


export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const languageLogos = [
    { name: 'HTML', Icon: FaHtml5 },
    { name: 'CSS', Icon: FaCss3Alt },
    { name: 'JavaScript', Icon: SiJavascript },
    { name: 'TypeScript', Icon: SiTypescript },
    { name: 'React', Icon: FaReact },
    { name: 'Next.js', Icon: RiNextjsFill},
    { name: 'Tailwind', Icon: SiTailwindcss },
    { name: 'Figma', Icon: FaFigma},
  ];

  const stars = useMemo(
    () =>
      Array.from({ length: 55 }, (_, index) => ({
        id: index,
        left: `${(index * 17) % 100}%`,
        top: `${(index * 29) % 100}%`,
        size: 8 + (index % 6),
        opacity: 0.22 + ((index % 7) * 0.08),
        speed: 0.08 + ((index % 5) * 0.04),
        direction: index % 3 === 0 ? -1 : 1,
        delay: `${(index % 6) * 0.4}s`,
      })),
    []
  );

  useEffect(() => {
    let rafId = null;

    const handleScroll = () => {
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }

      rafId = requestAnimationFrame(() => {
        setScrollY(window.scrollY || 0);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

  return (
    <header id="about" className="relative min-h-screen flex flex-col items-center justify-center gap-12 px-6 py-20 md:px-20 overflow-hidden bg-linear-to-b from-neutral-900 to-black">
      {/* Dense white star field with subtle scroll parallax */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {stars.map((star) => (
          <span
            key={star.id}
            className="absolute text-white select-none animate-pulse-slow"
            style={{
              left: star.left,
              top: star.top,
              fontSize: `${star.size}px`,
              opacity: star.opacity,
              transform: `translate3d(0, ${scrollY * star.speed * star.direction}px, 0)`,
              willChange: 'transform',
              animationDelay: star.delay,
            }}
          >
            ✦
          </span>
        ))}
      </div>

      <div className="relative z-10 mt-10 md:mt-16 flex w-full max-w-6xl flex-col items-center gap-12">
        <div className="flex w-full flex-col items-center justify-center gap-12 md:flex-row md:items-center">
          <div className="relative z-10 flex flex-col items-center gap-8 max-w-2xl">
            <div className="relative flex h-112.5 max-w-150 items-end justify-center overflow-visible bg-red-700 rounded-1.5xl border border-white/10 md:h-64 md:w-80 shadow-2xl glow-cyan">
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[250px] text-yellow-100 pointer-events-none">✦</span>
              <img
                src="/Arielle.png"
                alt="Arielle"
                className="relative z-10 block h-[120%] w-auto object-contain ml-3 translate-y-0.5 drop-shadow-2xl"
              />
            </div>

            <div className="flex w-full max-w-150 items-center justify-center gap-8 rounded-2xl border border-white/10 bg-white/5 px-8 py-4 shadow-2xl shadow-black/20 backdrop-blur-md">
              <div className="flex flex-col items-center">
                <span className="text-white font-space-grotesk font-bold italic text-xl">UI/UX Designer</span>
              </div>

              <div className="h-10 w-px bg-white/20"></div>

              <div className="flex flex-col items-center">
                <span className="text-white font-space-grotesk font-bold italic text-xl">Front-End Developer</span>
              </div>
            </div>
          </div>

          <div className="relative z-10 max-w-xl flex flex-col items-center md:items-start text-center md:text-left">
            <h1 className="text-white mb-1">
              Hi, I am Arielle Aventura!
            </h1>
            <p className="text-neutral-300 text-lg mb-3 leading-relaxed">
              I am a 3rd year BS Computer Science student currently working on student-led projects focused on software development
              in collaboration with public and private partners as a UI/UX designer and frontend developer. Outside of school, I enjoy
              performing with bands and editing videos.
            </p>
          </div>
        </div>

        <div className="w-full max-w-4xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            {languageLogos.map((language) => (
              <div
                key={language.name}
                className="flex flex-none min-w-32 items-center justify-center gap-3 px-4 py-3"
              >
                <language.Icon className="h-8 w-8 text-white" aria-hidden="true" />
                {/* Optional: keep this label, or replace with text/tooltip from your logo component props. */}
                <span className="text-sm font-semibold tracking-wide text-white/90">{language.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}