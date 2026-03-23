import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import useInView from '../lib/useInView';

export default function SocialMedia() {
  const { ref, inView } = useInView(0.2);

  return (
    <div ref={ref} className="relative w-full overflow-hidden bg-red-700 py-3">
      <div
        className={`pointer-events-none absolute inset-0 bg-linear-to-r from-red-800 via-red-500 to-red-700 transition-transform duration-1000 ease-out ${
          inView ? 'translate-x-0' : '-translate-x-full'
        }`}
      />

      <div className="relative z-10 flex justify-center items-center gap-10 text-white">
        <a
          href="https://www.facebook.com/arielle.aventura/ "
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="hover:scale-110 transition-transform"
        >
          <FaFacebook size={50} />
        </a>
        <a
          href="https://www.linkedin.com/in/arielle-aventura-0b6778320/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:scale-110 transition-transform"
        >
          <FaLinkedin size={50} />
        </a>
        <a
          href="https://github.com/yelle15"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:scale-110 transition-transform"
        >
          <FaGithub size={50} />
        </a>
      </div>
    </div>
  );
}