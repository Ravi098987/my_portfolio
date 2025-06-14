
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  proficiency: number;
  yearsExp: number;
}

interface SkillOrbitProps {
  skills: Skill[];
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
              key={skill.name}
              className="absolute w-14 h-14 -ml-7 -mt-7 flex items-center justify-center rounded-full glass border border-white/20 hover:scale-125 transition-transform cursor-pointer group"
              style={{
                left: x + radius,
                top: y + radius,
              }}
              whileHover={{ scale: 1.3 }}
              animate={{ rotate: -360 }}
              transition={{ duration, repeat: Infinity, ease: "linear" }}
            >
              <div
                className="w-4 h-4 rounded-full"
                style={{ backgroundColor: color }}
              />
              
              {/* Enhanced tooltip with skill parameters */}
              <div className="absolute bottom-full mb-3 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                <div className="bg-black/90 text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap border border-white/20">
                  <div className="font-semibold text-center mb-1">{skill.name}</div>
                  <div className="text-gray-300">
                    <div>Proficiency: {skill.proficiency}%</div>
                    <div>Experience: {skill.yearsExp}y</div>
                  </div>
                  <div 
                    className="w-full h-1 bg-gray-700 rounded mt-1"
                  >
                    <div 
                      className="h-full rounded transition-all duration-300"
                      style={{ 
                        width: `${skill.proficiency}%`,
                        backgroundColor: color 
                      }}
                    />
                  </div>
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
