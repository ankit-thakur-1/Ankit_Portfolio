import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronDown, ChevronUp, BarChart2, TrendingUp, Users, Database, LineChart, PieChart } from 'lucide-react';

const Skills = () => {
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

  const [activeCategory, setActiveCategory] = useState('business');

  const skillCategories = [
    { id: 'business', label: 'Business Skills', icon: <BarChart2 size={20} /> },
    { id: 'technical', label: 'Technical Skills', icon: <Database size={20} /> },
    { id: 'leadership', label: 'Leadership', icon: <Users size={20} /> },
    { id: 'analytics', label: 'Analytics', icon: <LineChart size={20} /> }
  ];

  const skills = {
    business: [
      { name: "Strategic Planning", level: 90 },
      { name: "Financial Analysis", level: 85 },
      { name: "Market Research", level: 80 },
      { name: "Business Development", level: 85 },
      { name: "Project Management", level: 75 },
      { name: "Risk Management", level: 70 }
    ],
    technical: [
      { name: "Data Analysis", level: 80 },
      { name: "Microsoft Office Suite", level: 95 },
      { name: "CRM Systems", level: 75 },
      { name: "ERP Systems", level: 70 },
      { name: "Business Intelligence Tools", level: 65 },
      { name: "Digital Marketing Tools", level: 60 }
    ],
    leadership: [
      { name: "Team Management", level: 85 },
      { name: "Decision Making", level: 80 },
      { name: "Conflict Resolution", level: 75 },
      { name: "Delegation", level: 70 },
      { name: "Coaching & Mentoring", level: 80 },
      { name: "Change Management", level: 65 }
    ],
    analytics: [
      { name: "Data Interpretation", level: 85 },
      { name: "Statistical Analysis", level: 75 },
      { name: "Forecasting", level: 70 },
      { name: "Reporting", level: 80 },
      { name: "KPI Monitoring", level: 85 },
      { name: "Trend Analysis", level: 75 }
    ]
  };

  const softSkills = [
    { name: "Communication", icon: <Users size={24} /> },
    { name: "Problem Solving", icon: <TrendingUp size={24} /> },
    { name: "Adaptability", icon: <PieChart size={24} /> },
    { name: "Time Management", icon: <BarChart2 size={24} /> },
    { name: "Critical Thinking", icon: <LineChart size={24} /> },
    { name: "Teamwork", icon: <Users size={24} /> }
  ];

  return (
    <section id="skills" className="section" ref={containerRef}>
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
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-textSecondary max-w-3xl mx-auto">
            A comprehensive overview of my professional capabilities and expertise.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <motion.button
              key={category.id}
              className={`card p-6 text-center transition-all ${
                activeCategory === category.id 
                  ? 'bg-primary text-white' 
                  : 'hover:border-primary'
              }`}
              onClick={() => setActiveCategory(category.id)}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
              whileHover={{ y: -5 }}
            >
              <div className={`flex justify-center mb-3 ${
                activeCategory === category.id ? 'text-white' : 'text-primary'
              }`}>
                {category.icon}
              </div>
              <h3 className="text-lg font-bold">{category.label}</h3>
            </motion.button>
          ))}
        </div>
        
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: 1, 
            height: 'auto',
            transition: { duration: 0.5 }
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills[activeCategory as keyof typeof skills].map((skill, index) => (
              <motion.div 
                key={index}
                className="card"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.05 * index }}
              >
                <div className="flex justify-between mb-2">
                  <h4 className="font-medium">{skill.name}</h4>
                  <span className="text-primary font-medium">{skill.level}%</span>
                </div>
                <div className="progress-bar">
                  <motion.div 
                    className="progress-bar-fill"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.2 + (0.1 * index) }}
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold font-serif mb-8 text-center">Soft Skills</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {softSkills.map((skill, index) => (
              <motion.div 
                key={index}
                className="card p-6 text-center"
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
              >
                <div className="flex justify-center mb-4 text-primary">
                  {skill.icon}
                </div>
                <h4 className="font-medium">{skill.name}</h4>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="card p-6">
            <h3 className="text-xl font-bold mb-4">Languages</h3>
            
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">English</span>
                  <span className="text-primary">Fluent</span>
                </div>
                <div className="progress-bar">
                  <motion.div 
                    className="progress-bar-fill"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1 }}
                  ></motion.div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Hindi</span>
                  <span className="text-primary">Native</span>
                </div>
                <div className="progress-bar">
                  <motion.div 
                    className="progress-bar-fill"
                    initial={{ width: 0 }}
                    animate={{ width: "90%" }}
                    transition={{ duration: 1, delay: 0.1 }}
                  ></motion.div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Bengali</span>
                  <span className="text-primary">Fluent</span>
                </div>
                <div className="progress-bar">
                  <motion.div 
                    className="progress-bar-fill"
                    initial={{ width: 0 }}
                    animate={{ width: "75%" }}
                    transition={{ duration: 1, delay: 0.2 }}
                  ></motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;