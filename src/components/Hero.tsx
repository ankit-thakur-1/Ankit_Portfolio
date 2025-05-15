import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Linkedin, Mail, Github } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Hero = () => {
  const { theme } = useTheme();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section id="hero" ref={ref} className="section relative min-h-screen flex items-center">
      <div className="bg-blur w-96 h-96 top-20 left-20 bg-primary"></div>
      <div className="bg-blur w-64 h-64 bottom-20 right-20 bg-secondary"></div>
      
      <motion.div 
        className="container mx-auto px-4 z-10"
        style={{ y, opacity }}
      >
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <motion.h2 
              className="text-xl md:text-2xl font-medium text-textSecondary mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Hello, I'm
            </motion.h2>
            
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold font-serif mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
             <span className="gradient-text">Ankit Kr. Thakur</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl font-medium text-textSecondary mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              MBA Student & Enthusiast of Finance....
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <a href="#contact" className="btn btn-primary">
                Get in Touch
              </a>
              <a href="#about" className="btn btn-outline flex items-center gap-2">
                Learn More <ArrowDown size={16} />
              </a>
            </motion.div>
            
            <motion.div 
              className="flex gap-4 mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <a 
                href="http://www.linkedin.com/in/19ankitthakur" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-borderColor hover:bg-cardBg transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:19ankitthakur@gmail.com" 
                className="p-2 rounded-full border border-borderColor hover:bg-cardBg transition-colors"
              >
                <Mail size={20} />
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-borderColor hover:bg-cardBg transition-colors"
              >
                <Github size={20} />
              </a>
            </motion.div>
          </div>
          
          <motion.div 
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary animate-float">
              <img 
                src="src/components/images/Ankit new 111.png" 
                alt="Ankit Kr. Thakur" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary opacity-30"></div>
            </div>
          </motion.div>
        </div>
      </motion.div>
      
      <div className="absolute bottom-10 left-0 w-full flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <a 
            href="#about" 
            className="flex flex-col items-center text-textSecondary hover:text-primary transition-colors"
          >
            <span className="mb-2 text-sm">Scroll Down</span>
            <ArrowDown size={20} className="animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
