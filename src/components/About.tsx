import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, BookOpen, Briefcase, GraduationCap } from 'lucide-react';

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false
  });

  const stats = [
    { icon: <BookOpen size={24} />, value: "MBA", label: "Degree" },
    //{ icon: <Briefcase size={24} />, value: "5+", label: "Years Experience" },
    { icon: <Award size={24} />, value: "2024", label: "Student of the Year" },
    { icon: <GraduationCap size={24} />, value: "7.5", label: "GPA" }
  ];

  return (
    <section id="about" className="section bg-cardBg" ref={containerRef}>
      <motion.div 
        className="container mx-auto px-4"
        style={{ y, opacity }}
        ref={ref}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-textSecondary max-w-3xl mx-auto">
          Driven MBA student with a solid foundation in finance, marketing, and data-driven decision-making.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              <div className="w-full h-80 md:h-96 rounded-lg overflow-hidden">
                <img 
                  src="src/components/images/ankitaward.jpg" 
                  alt="Ankit Thakur" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary rounded-lg flex items-center justify-center">
                <p className="text-white text-center">
                  <span className="block text-2xl font-bold">2024</span>
                  <span className="text-sm">Startup Idea Award</span>
                </p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold font-serif mb-4">
              MBA Student & Business Professional
            </h3>
            <p className="text-textSecondary mb-6">
  I am an MBA student specializing in Financial Consulting and Sales & Distribution, with a strong foundation in 
  finance, marketing, and strategic decision-making. I am deeply passionate about solving real-world business 
  problems through data-driven insights and innovative thinking.
</p>
<p className="text-textSecondary mb-6">
  My academic journey has helped me develop analytical, communication, and leadership skills, along with hands-on 
  experience in financial modeling, market research, and business analysis. I have also worked on projects involving 
  valuation, forecasting, and strategy under the mentorship of industry experts.
</p>
<p className="text-textSecondary mb-8">
  I am actively seeking challenging opportunities where I can apply my skills, contribute to organizational growth, 
  and continue learning in a dynamic environment. I am driven, adaptable, and eager to make a meaningful impact 
  in the world of business and finance.
</p>
            
            <div className="flex flex-wrap gap-4">
              <a href="#experience" className="btn btn-primary">
                My Experience
              </a>
              <a href="#contact" className="btn btn-outline">
                Contact Me
              </a>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              className="card text-center"
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex justify-center mb-4 text-primary">
                {stat.icon}
              </div>
              <h4 className="text-2xl md:text-3xl font-bold mb-1">{stat.value}</h4>
              <p className="text-textSecondary">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;