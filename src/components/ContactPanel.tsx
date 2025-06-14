
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactPanel = () => {
  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      url: 'https://github.com/ravishankar-singh',
      color: 'cosmic-blue'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn', 
      url: 'https://linkedin.com/in/ravishankar-singh',
      color: 'cosmic-cyan'
    },
    {
      icon: Mail,
      label: 'Email',
      url: 'mailto:ravishankar.singh@example.com',
      color: 'cosmic-purple'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="relative max-w-4xl mx-auto"
    >
      {/* Mission Control Panel */}
      <div className="glass rounded-2xl p-8 border border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left side - Control interface */}
          <div className="space-y-6">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-orbitron font-bold gradient-text mb-4">
                Mission Control
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Ready to collaborate on your next project? Let's connect and explore 
                the possibilities together. Whether it's machine learning, full-stack 
                development, or innovative solutions - I'm here to help bring your 
                ideas to life.
              </p>
            </div>

            {/* Status indicators */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-400">Available for Projects</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-cosmic-blue rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-400">Remote Collaboration Ready</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-cosmic-purple rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-400">Open Source Contributor</span>
              </div>
            </div>
          </div>

          {/* Right side - Communication links */}
          <div className="space-y-6">
            <h4 className="text-lg font-orbitron font-semibold text-white mb-4">
              Communication Channels
            </h4>
            
            <div className="grid gap-4">
              {socialLinks.map((link, index) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full justify-start glass border-white/20 hover:border-cosmic-blue/50 text-white hover:text-cosmic-blue transition-all duration-300 group"
                    asChild
                  >
                    <a href={link.url} target="_blank" rel="noopener noreferrer">
                      <link.icon className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                      <span className="flex-1 text-left">{link.label}</span>
                      <div className="w-2 h-2 bg-cosmic-blue rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </a>
                  </Button>
                </motion.div>
              ))}
            </div>

            {/* Download Resume Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-4"
            >
              <Button
                size="lg"
                className="w-full bg-gradient-to-r from-cosmic-blue to-cosmic-purple hover:from-cosmic-purple hover:to-cosmic-cyan transition-all duration-300 font-orbitron font-semibold"
                asChild
              >
                <a href="/resume.pdf" download>
                  Download Resume
                </a>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-4 right-4 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
        <div className="absolute top-8 right-8 w-1 h-1 bg-cosmic-blue rounded-full animate-sparkle"></div>
        <div className="absolute bottom-4 left-4 w-2 h-2 bg-cosmic-purple rounded-full animate-pulse"></div>
      </div>
    </motion.div>
  );
};

export default ContactPanel;
