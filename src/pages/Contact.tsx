
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ContactPanel from '@/components/ContactPanel';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      {/* Navigation */}
      <nav className="p-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link to="/" className="text-2xl font-orbitron font-bold gradient-text">
            RS
          </Link>
          <div className="flex gap-6">
            <Link to="/about" className="text-white hover:text-cosmic-blue transition-colors">
              About
            </Link>
            <Link to="/projects" className="text-white hover:text-cosmic-blue transition-colors">
              Projects
            </Link>
            <Link to="/skills" className="text-white hover:text-cosmic-blue transition-colors">
              Skills
            </Link>
            <Link to="/contact" className="text-cosmic-blue">
              Contact
            </Link>
          </div>
        </div>
      </nav>

      <div className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-orbitron font-bold gradient-text mb-8">
              Connect & Collaborate
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Ready to embark on your next digital adventure? Let's connect and bring 
              your innovative ideas to life.
            </p>
          </motion.div>

          <ContactPanel />
        </div>
      </div>
    </div>
  );
};

export default Contact;
