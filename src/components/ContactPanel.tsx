
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactPanel = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "ravishankar.singh@example.com",
      href: "mailto:ravishankar.singh@example.com",
      color: "#3b82f6"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "ravishankar-singh",
      href: "https://github.com/ravishankar-singh",
      color: "#06b6d4"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "ravishankar-singh",
      href: "https://linkedin.com/in/ravishankar-singh",
      color: "#a855f7"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "India",
      href: "#",
      color: "#ec4899"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="glass rounded-2xl p-8 backdrop-blur-lg border border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-orbitron font-bold gradient-text mb-6">
              Mission Control
            </h3>
            
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <motion.a
                  key={method.label}
                  href={method.href}
                  target={method.href.startsWith('http') ? '_blank' : '_self'}
                  rel={method.href.startsWith('http') ? 'noopener noreferrer' : ''}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center space-x-4 p-4 rounded-lg glass border border-white/10 hover:border-cosmic-blue/50 transition-all duration-300 group"
                >
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: `${method.color}20`, border: `1px solid ${method.color}` }}
                  >
                    <IconComponent 
                      className="w-6 h-6 group-hover:scale-110 transition-transform"
                      style={{ color: method.color }}
                    />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">{method.label}</div>
                    <div className="text-white font-medium">{method.value}</div>
                  </div>
                </motion.a>
              );
            })}
          </div>

          {/* Quick Message */}
          <div className="space-y-6">
            <h3 className="text-2xl font-orbitron font-bold gradient-text mb-6">
              Launch a Message
            </h3>
            
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-cosmic-blue focus:outline-none"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-cosmic-blue focus:outline-none"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-cosmic-blue focus:outline-none resize-none"
              />
              
              <Button 
                className="w-full bg-gradient-to-r from-cosmic-blue to-cosmic-purple hover:from-cosmic-purple hover:to-cosmic-cyan transition-all duration-300 font-orbitron font-semibold"
                size="lg"
              >
                Send Message
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPanel;
