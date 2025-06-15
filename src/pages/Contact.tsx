
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import ContactPanel from '@/components/ContactPanel';
import StarFieldCanvas from '@/components/StarField';

const Contact = () => {
  return (
    <div className="min-h-screen text-white overflow-x-hidden">
      <StarFieldCanvas />
      
      {/* Header */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center mb-8">
            <Button 
              variant="ghost" 
              size="sm" 
              asChild
              className="text-cosmic-cyan hover:text-white"
            >
              <Link to="/" className="flex items-center space-x-2">
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Home</span>
              </Link>
            </Button>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-orbitron font-bold gradient-text mb-8">
              Connect & Collaborate
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to embark on your next digital adventure? Let's connect and bring 
              your innovative ideas to life through cutting-edge technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Panel */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <ContactPanel />
        </div>
      </section>
    </div>
  );
};

export default Contact;
