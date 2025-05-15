import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
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

  const experiences = [
    {
      title: "Founder & Business Strategist",
      company: "Shirt-Zen",
      period: "2024 - Present",
      description: "Launched and managed a student-focused T-shirt brand as part of a practical business initiative. Oversaw marketing, sales, and financial planning strategies, generating ₹32,216 in revenue with a 28.15% profit margin. Applied data-driven decision-making, led promotional campaigns, and gained hands-on experience in customer behavior analysis and product positioning."
    },
   /*{
      title: "Business Development Manager",
      company: "Global Solutions Ltd.",
      period: "2020 - 2022",
      description: "Developed and executed business strategies resulting in 30% revenue growth. Managed client relationships and negotiated key partnerships with industry leaders."
    },
    {
      title: "Marketing Specialist",
      company: "Creative Marketing Agency",
      period: "2018 - 2020",
      description: "Created and implemented marketing campaigns for Fortune 500 clients. Analyzed market trends and consumer behavior to optimize campaign performance."
    },
    {
      title: "Business Consultant (Intern)",
      company: "Strategic Consulting Group",
      period: "2017 - 2018",
      description: "Assisted senior consultants in developing business strategies for clients across various industries. Conducted market research and competitive analysis."
    }*/
  ];

  return (
    <section id="experience" className="section" ref={containerRef}>
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
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">Professional Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-textSecondary max-w-3xl mx-auto">
          My MBA journey has provided me with hands-on experience and valuable insights across finance, consulting, and strategic decision-making..
          </p>
        </motion.div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-borderColor transform md:translate-x-[-50%]"></div>
          
          {/* Experience items */}
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              className={`relative mb-16 md:mb-24 ${
                index % 2 === 0 ? 'md:pr-12 md:text-right md:ml-auto md:mr-[50%]' : 'md:pl-12 md:ml-[50%]'
              }`}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              {/* Timeline dot */}
              <div className={`absolute top-0 left-0 md:left-auto ${
                index % 2 === 0 ? 'md:right-[-12px]' : 'md:left-[-12px]'
              } w-6 h-6 rounded-full bg-primary border-4 border-background z-10`}></div>
              
              <div className="card hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4 text-primary">
                  <Briefcase size={20} className="mr-2" />
                  <h3 className="text-xl font-bold">{exp.title}</h3>
                </div>
                
                <h4 className="text-lg font-medium mb-2">{exp.company}</h4>
                
                <div className="flex items-center text-textSecondary mb-4">
                  <Calendar size={16} className="mr-2" />
                  <span>{exp.period}</span>
                </div>
                
                <p className="text-textSecondary">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <a href="https://drive.google.com/file/d/1uGLLJ7smfaR8KDdcBUUIg5yVTqieglZz/view?usp=sharing" className="btn btn-outline inline-block">
            Download Full Resume
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Experience;