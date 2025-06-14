
import { motion } from 'framer-motion';

interface SkillOrbitProps {
  skills: string[];
  category: string;
  color: string;
  radius: number;
  duration: number;
}

const SkillOrbit = ({ skills, category, color, radius, duration }: SkillOrbitProps) => {
  return (
    <div className="relative">
      {/* Orbit path */}
      <motion.div
        className="absolute border border-white/10 rounded-full"
        style={{
          width: radius * 2,
          height: radius * 2,
          left: -radius,
          top: -radius,
        }}
        animate={{ rotate: 360 }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
      >
        {skills.map((skill, index) => {
          const angle = (index / skills.length) * 360;
          const x = Math.cos((angle * Math.PI) / 180) * radius;
          const y = Math.sin((angle * Math.PI) / 180) * radius;

          return (
            <motion.div
              key={skill}
              className="absolute w-12 h-12 -ml-6 -mt-6 flex items-center justify-center rounded-full glass border border-white/20 hover:scale-125 transition-transform cursor-pointer group"
              style={{
                left: x + radius,
                top: y + radius,
              }}
              whileHover={{ scale: 1.2 }}
              animate={{ rotate: -360 }}
              transition={{ duration, repeat: Infinity, ease: "linear" }}
            >
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: color }}
              />
              <div className="absolute bottom-full mb-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="bg-black/80 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                  {skill}
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
      
      {/* Center label */}
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center text-white font-orbitron font-bold text-xs text-center border-2"
          style={{ borderColor: color, backgroundColor: `${color}20` }}
        >
          {category}
        </div>
      </div>
    </div>
  );
};

export default SkillOrbit;
