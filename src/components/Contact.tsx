import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Linkedin, Send, CheckCircle, Github } from 'lucide-react';

const Contact = () => {
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

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send the form data to a server here
    console.log('Form submitted:', formState);
    setIsSubmitted(true);
    setFormState({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    // Reset the submission status after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: "Email",
      value: "19ankitthakur@gmail.com",
      link: "mailto:19ankitthakur@gmail.com"
    },
    {
      icon: <Phone size={24} />,
      title: "Phone",
      value: "+91 98765 43210",
      link: "tel:+919876543210"
    },
    {
      icon: <MapPin size={24} />,
      title: "Location",
      value: "New Delhi, India",
      link: "https://maps.google.com/?q=New+Delhi,India"
    },
    {
      icon: <Linkedin size={24} />,
      title: "LinkedIn",
      value: "linkedin.com/in/19ankitthakur",
      link: "http://www.linkedin.com/in/19ankitthakur"
    }
  ];

  return (
    <section id="contact" className="section" ref={containerRef}>
      <div className="bg-blur w-80 h-80 top-20 right-20 bg-secondary"></div>
      <div className="bg-blur w-64 h-64 bottom-20 left-20 bg-primary"></div>
      
      <motion.div 
        className="container mx-auto px-4 relative z-10"
        style={{ y, opacity }}
        ref={ref}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-textSecondary max-w-3xl mx-auto">
            Feel free to reach out for collaborations, business inquiries, or just to say hello!
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold font-serif mb-8">Contact Information</h3>
            
            <div className="space-y-6 mb-12">
              {contactInfo.map((info, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.3, delay: 0.3 + (0.1 * index) }}
                >
                  <div className="p-3 bg-cardBg rounded-lg text-primary mr-4">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">{info.title}</h4>
                    <a 
                      href={info.link} 
                      className="text-textSecondary hover:text-primary transition-colors"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      {info.value}
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div>
              <h3 className="text-2xl font-bold font-serif mb-6">Follow Me</h3>
              
              <div className="flex space-x-4">
                <a 
                  href="http://www.linkedin.com/in/19ankitthakur" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-cardBg rounded-lg text-primary hover:bg-primary hover:text-white transition-colors"
                >
                  <Linkedin size={24} />
                </a>
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-cardBg rounded-lg text-primary hover:bg-primary hover:text-white transition-colors"
                >
                  <Github size={24} />
                </a>
                <a 
                  href="mailto:19ankitthakur@gmail.com" 
                  className="p-3 bg-cardBg rounded-lg text-primary hover:bg-primary hover:text-white transition-colors"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="card p-8">
              <h3 className="text-2xl font-bold font-serif mb-6">Send Me a Message</h3>
              
              {isSubmitted ? (
                <motion.div 
                  className="flex flex-col items-center justify-center py-8"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <CheckCircle size={64} className="text-primary mb-4" />
                  <h4 className="text-xl font-bold mb-2">Message Sent!</h4>
                  <p className="text-textSecondary text-center">
                    Thank you for reaching out. I'll get back to you as soon as possible.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-textSecondary mb-2">Your Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="w-full p-3 bg-background border border-borderColor rounded-lg focus:outline-none focus:border-primary"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-textSecondary mb-2">Your Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="w-full p-3 bg-background border border-borderColor rounded-lg focus:outline-none focus:border-primary"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-textSecondary mb-2">Subject</label>
                    <input 
                      type="text" 
                      id="subject" 
                      name="subject" 
                      value={formState.subject}
                      onChange={handleChange}
                      required
                      className="w-full p-3 bg-background border border-borderColor rounded-lg focus:outline-none focus:border-primary"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-textSecondary mb-2">Message</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows={5}
                      value={formState.message}
                      onChange={handleChange}
                      required
                      className="w-full p-3 bg-background border border-borderColor rounded-lg focus:outline-none focus:border-primary resize-none"
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="btn btn-primary w-full flex items-center justify-center"
                  >
                    Send Message <Send size={16} className="ml-2" />
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p className="text-textSecondary">
            &copy; {new Date().getFullYear()} Ankit Thakur. All rights reserved.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;