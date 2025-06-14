
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SkillOrbit from '@/components/SkillOrbit';

const Skills = () => {
  const skillGroups = [
    {
      category: "ML/AI",
      skills: [
        { name: "Python", proficiency: 95, yearsExp: 4 },
        { name: "TensorFlow", proficiency: 90, yearsExp: 3 },
        { name: "PyTorch", proficiency: 88, yearsExp: 3 },
        { name: "Scikit-learn", proficiency: 92, yearsExp: 4 },
        { name: "OpenCV", proficiency: 85, yearsExp: 2 }
      ],
      color: "#3b82f6",
      radius: 120,
      duration: 20
    },
    {
      category: "Frontend",
      skills: [
        { name: "React", proficiency: 93, yearsExp: 3 },
        { name: "TypeScript", proficiency: 87, yearsExp: 2 },
        { name: "Next.js", proficiency: 85, yearsExp: 2 },
        { name: "Tailwind", proficiency: 90, yearsExp: 2 },
        { name: "Three.js", proficiency: 78, yearsExp: 1 }
      ],
      color: "#06b6d4", 
      radius: 160,
      duration: 25
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", proficiency: 91, yearsExp: 3 },
        { name: "Python", proficiency: 95, yearsExp: 4 },
        { name: "MongoDB", proficiency: 88, yearsExp: 3 },
        { name: "PostgreSQL", proficiency: 84, yearsExp: 2 },
        { name: "Docker", proficiency: 82, yearsExp: 2 }
      ],
      color: "#a855f7",
      radius: 200,
      duration: 30
    },
    {
      category: "DevOps",
      skills: [
        { name: "AWS", proficiency: 80, yearsExp: 2 },
        { name: "Docker", proficiency: 85, yearsExp: 2 },
        { name: "Kubernetes", proficiency: 75, yearsExp: 1 },
        { name: "CI/CD", proficiency: 83, yearsExp: 2 },
        { name: "Terraform", proficiency: 70, yearsExp: 1 }
      ],
      color: "#ec4899",
      radius: 240,
      duration: 35
    }
  ];

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
            <Link to="/skills" className="text-cosmic-blue">
              Skills
            </Link>
            <Link to="/contact" className="text-white hover:text-cosmic-blue transition-colors">
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
              Tech Universe
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Explore the orbital systems of my technical expertise, where each skill 
              revolves around innovation and excellence.
            </p>
          </motion.div>

          <div className="relative flex items-center justify-center min-h-[600px]">
            {skillGroups.map((group, index) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: index * 0.2 }}
                className="absolute"
              >
                <SkillOrbit {...group} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
