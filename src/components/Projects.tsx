import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const Projects = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  const projects = [
    {
      title: "Market Expansion Strategy",
      category: "Business Strategy",
      description: "Developed a comprehensive market expansion strategy for a tech startup, resulting in 40% growth in new markets within the first year.",
      image: "https://images.pexels.com/photos/7947541/pexels-photo-7947541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      link: "#"
    },
    {
      title: "Financial Performance Analysis",
      category: "Finance",
      description: "Conducted in-depth financial analysis for a Fortune 500 company, identifying cost-saving opportunities worth $2M annually.",
      image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      link: "#"
    },
    {
      title: "Supply Chain Optimization",
      category: "Operations",
      description: "Redesigned supply chain processes for a manufacturing company, reducing lead times by 30% and operational costs by 15%.",
      image: "https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      link: "#"
    },
    {
      title: "Digital Transformation Strategy",
      category: "Technology",
      description: "Led a digital transformation initiative for a traditional retail business, resulting in 50% increase in online sales within six months.",
      image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      link: "#"
    }
  ];

  return (
    <section id="projects" className="section bg-cardBg" ref={containerRef}>
      <motion.div 
        className="container mx-auto px-4"
        style={{ y, opacity }}
        ref={ref}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-textSecondary max-w-3xl mx-auto">
            Showcasing some of my most impactful business projects and case studies.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="card overflow-hidden group"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ y: -10 }}
            >
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-primary text-white text-sm rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-textSecondary mb-4">{project.description}</p>
                
                <a 
                  href={project.link} 
                  className="inline-flex items-center text-primary font-medium hover:underline"
                >
                  View Case Study <ArrowRight size={16} className="ml-2" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <a href="#" className="btn btn-primary inline-flex items-center">
            View All Projects <ExternalLink size={16} className="ml-2" />
          </a>
        </motion.div>
        
        <motion.div 
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="card p-8">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
                <h3 className="text-2xl font-bold font-serif mb-4">Let's Collaborate on Your Next Project</h3>
                <p className="text-textSecondary mb-6">
                  I'm always open to discussing new projects, business challenges, or opportunities to collaborate.
                  Whether you need a business strategy, financial analysis, or market research, I can help you achieve your goals.
                </p>
                <a href="#contact" className="btn btn-primary inline-block">
                  Get in Touch
                </a>
              </div>
              
              <div className="md:w-1/3">
                <div className="relative w-full h-48 md:h-64 rounded-lg overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="Collaboration" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-primary/20"></div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;