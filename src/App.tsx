import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTheme } from './context/ThemeContext';
import { Sun, Moon, Menu, X, ChevronDown } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import BackgroundCanvas from './components/BackgroundCanvas';
import CursorFollower from './components/CursorFollower';

function App() {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);
  const mainRef = useRef<HTMLDivElement>(null);

  const sections = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!mainRef.current) return;
      
      const sectionElements = sections.map(section => ({
        id: section.id,
        element: document.getElementById(section.id)
      })).filter(section => section.element !== null);
      
      const currentPosition = window.scrollY + window.innerHeight / 3;
      
      for (const section of sectionElements) {
        if (!section.element) continue;
        
        const sectionTop = section.element.offsetTop;
        const sectionBottom = sectionTop + section.element.offsetHeight;
        
        if (currentPosition >= sectionTop && currentPosition < sectionBottom) {
          setActiveSection(section.id);
          break;
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="relative" ref={mainRef}>
      <CursorFollower />
      <BackgroundCanvas />
      
      {/* Header */}
      <Header 
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        theme={theme}
        toggleTheme={toggleTheme}
      />
      
      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''} flex flex-col p-8 pt-20 md:hidden`}>
        <button 
          className="absolute top-6 right-6 text-textColor"
          onClick={() => setIsMenuOpen(false)}
        >
          <X size={24} />
        </button>
        <div className="flex flex-col space-y-6">
          {sections.map(section => (
            <button
              key={section.id}
              className={`nav-link text-left text-lg ${activeSection === section.id ? 'active' : ''}`}
              onClick={() => scrollToSection(section.id)}
            >
              {section.label}
            </button>
          ))}
        </div>
      </div>
      
      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </main>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="scroll-indicator hidden md:block" 
        style={{ opacity }}
      >
        <ChevronDown size={32} className="text-primary animate-bounce" />
      </motion.div>
      
      {/* Theme Toggle Button (Mobile) */}
      <button
        className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-cardBg shadow-lg md:hidden"
        onClick={toggleTheme}
      >
        {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
      </button>
    </div>
  );
}

export default App;