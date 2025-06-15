
import { motion } from 'framer-motion';
import { Code, Users, Award, Coffee } from 'lucide-react';

const QuickStats = () => {
  const stats = [
    {
      icon: Code,
      value: '50+',
      label: 'Projects Completed',
      color: 'text-cosmic-blue'
    },
    {
      icon: Users,
      value: '10+',
      label: 'Collaborations',
      color: 'text-cosmic-cyan'
    },
    {
      icon: Award,
      value: '5+',
      label: 'Certifications',
      color: 'text-cosmic-purple'
    },
    {
      icon: Coffee,
      value: '1000+',
      label: 'Cups of Coffee',
      color: 'text-orange-400'
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-orbitron font-bold gradient-text mb-4">
            Quick Stats
          </h2>
          <p className="text-gray-300 text-lg">
            Numbers that define my journey
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center glass rounded-xl p-6 backdrop-blur-lg border border-white/10"
              >
                <IconComponent className={`w-8 h-8 mx-auto mb-4 ${stat.color}`} />
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default QuickStats;
