import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialMedia from './components/SocialMedia';
import CurrentProjects from './components/CurrentProjects';
import SideQuests from './components/SideQuests';

function App() {
  return (
    <div className="w-full min-h-screen bg-neutral-800 overflow-x-hidden">
      <div className="relative">
        <Navbar />
        <Hero />
      </div>
      <SocialMedia />
      <CurrentProjects />
      <SideQuests />
    </div>
  );
}

export default App;
