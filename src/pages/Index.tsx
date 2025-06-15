
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sparkles, Code, GraduationCap, Briefcase } from 'lucide-react';
import StarFieldCanvas from '@/components/StarField';
import Navigation from '@/components/Navigation';
import QuickStats from '@/components/QuickStats';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

const Index = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen text-white overflow-x-hidden">
      <StarFieldCanvas />
      
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-8"
          >
            {/* Profile Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face" 
                alt="Ravishankar Singh"
                className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto object-cover border-4 border-cosmic-blue shadow-2xl"
              />
            </motion.div>

            <h1 className="text-6xl md:text-8xl font-orbitron font-bold mb-6">
              <span className="text-cosmic-cyan">Ravishankar</span>{' '}
              <span className="gradient-text">Singh</span>
            </h1>
            <p className="text-2xl md:text-3xl mb-4">
              <span className="text-cosmic-blue">Machine Learning</span>{' '}
              <span className="text-white">and Development</span>{' '}
              <span className="text-cosmic-purple">Enthusiast</span>
            </p>
            <p className="text-xl text-cosmic-purple mb-8 max-w-3xl mx-auto leading-relaxed">
              Passionate developer crafting intelligent solutions with cutting-edge AI technology and modern web development
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-cosmic-blue to-cosmic-purple hover:from-cosmic-purple hover:to-cosmic-cyan text-lg px-8 py-3"
                asChild
              >
                <Link to="/projects">Explore My Work</Link>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-cosmic-cyan text-cosmic-cyan hover:bg-cosmic-cyan/10 text-lg px-8 py-3"
                asChild
              >
                <Link to="/about">View Full Profile</Link>
              </Button>
            </div>
          </motion.div>

          {/* Floating Elements */}
          <div className="absolute top-1/4 left-10 w-32 h-32 rounded-full bg-cosmic-blue/20 blur-lg"></div>
          <div className="absolute bottom-1/4 right-10 w-48 h-48 rounded-full bg-cosmic-purple/20 blur-xl"></div>
          <motion.div
            className="absolute top-10 right-20 text-cosmic-cyan animate-pulse"
            style={{ x: mousePosition.x / 50, y: mousePosition.y / 50 }}
          >
            <Sparkles className="w-6 h-6" />
          </motion.div>
          <motion.div
            className="absolute bottom-20 left-20 text-cosmic-purple animate-pulse"
            style={{ x: -mousePosition.x / 50, y: -mousePosition.y / 50 }}
          >
            <Code className="w-6 h-6" />
          </motion.div>
          <motion.div
            className="absolute top-40 left-40 text-white animate-pulse"
            style={{ x: mousePosition.x / 50, y: -mousePosition.y / 50 }}
          >
            <GraduationCap className="w-6 h-6" />
          </motion.div>
           <motion.div
            className="absolute bottom-40 right-40 text-cosmic-blue animate-pulse"
            style={{ x: -mousePosition.x / 50, y: mousePosition.y / 50 }}
          >
            <Briefcase className="w-6 h-6" />
          </motion.div>
        </div>
      </section>

      {/* Quick Stats */}
      <QuickStats />

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-orbitron font-bold gradient-text mb-4">
              Get In Touch
            </h2>
            <p className="text-gray-300 text-lg">
              Feel free to reach out for collaborations, project inquiries, or just a friendly hello.
            </p>
          </motion.div>
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
