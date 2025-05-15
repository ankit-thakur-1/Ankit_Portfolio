import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const Education = () => {
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

  const education = [
    {
      degree: "Master of Business Administration (MBA)",
      institution: "Lovely Professional University",
      period: "2024 - Present",
      description: "Specializing in Financial Consulting & Sales and Distribution with a focus on digital transformation. Maintaining a 7.54 GPA while participating in various finance and business case competitions.",
      achievements: ["3rd Runner-up at FinQuest"]
    },
    {
      degree: "Business Administration (BBA)",
      institution: "North Bengal St. Xavier's College",
      period: "2021 - 2024",
      description: "Graduated with honors, specializing in Marketing. Actively participated in business clubs and entrepreneurship initiatives.",
      achievements: ["Winner, Inter-College Startup Competition", "Organized multiple college-level business events", "Best Active Student Award","Joint Secretary of Campus"]
    }
  ];

  const certifications = [
    {
      title: "Data Visualization Using Python",
      issuer: "IBM",
      year: "Dec 2024"
    },
    {
      title: "Google Digital Marketing & E-commerce Professional",
      issuer: "Coursera",
      year: "Dec 2024"
    },
    {
      title: "Career Essentials in Generative AI",
      issuer: "Microsoft & LinkedIn",
      year: "2025"
    },
    
    {
      title: "Financial Modeling ",
      issuer: "Udemy",
      year: "2025"
    },
    
  ];

  return (
    <section id="education" className="section bg-cardBg" ref={containerRef}>
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
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">Education & Certifications</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-textSecondary max-w-3xl mx-auto">
            My academic journey and professional certifications that have shaped my expertise.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold font-serif mb-8 flex items-center">
              <GraduationCap size={24} className="mr-3 text-primary" />
              Academic Education
            </h3>
            
            <div className="space-y-12">
              {education.map((edu, index) => (
                <div key={index} className="card hover:shadow-xl transition-all duration-300">
                  <h4 className="text-xl font-bold mb-2">{edu.degree}</h4>
                  <h5 className="text-lg font-medium mb-2">{edu.institution}</h5>
                  
                  <div className="flex items-center text-textSecondary mb-4">
                    <Calendar size={16} className="mr-2" />
                    <span>{edu.period}</span>
                  </div>
                  
                  <p className="text-textSecondary mb-4">{edu.description}</p>
                  
                  <div className="mt-4">
                    <h6 className="font-medium mb-2">Key Achievements:</h6>
                    <ul className="list-disc list-inside text-textSecondary">
                      {edu.achievements.map((achievement, i) => (
                        <li key={i} className="mb-1">{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold font-serif mb-8 flex items-center">
              <Award size={24} className="mr-3 text-primary" />
              Professional Certifications
            </h3>
            
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <motion.div 
                  key={index} 
                  className="card hover:shadow-xl transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-lg font-bold mb-2">{cert.title}</h4>
                      <p className="text-textSecondary">{cert.issuer}</p>
                    </div>
                    <span className="text-primary font-medium">{cert.year}</span>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-12">
              <h3 className="text-2xl font-bold font-serif mb-6">Additional Training</h3>
              
              <div className="space-y-4">
                <div className="card p-4 hover:shadow-xl transition-all duration-300">
                  <h4 className="font-medium">Power BI and Tableau</h4>
                  <p className="text-textSecondary">Center for Professional Enhancement | LPU, 2024</p>
                </div>
                
                
                
                
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Education;