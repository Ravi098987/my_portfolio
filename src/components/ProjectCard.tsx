
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  category: string;
  githubUrl?: string;
  liveUrl?: string;
  index: number;
}

const ProjectCard = ({ title, description, techStack, category, githubUrl, liveUrl, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="glass rounded-xl p-6 backdrop-blur-lg border border-white/10 hover:border-cosmic-blue/50 transition-all duration-300 group hover:scale-105"
    >
      <div className="relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-cosmic-blue to-cosmic-purple rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
        <div className="relative">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl font-orbitron font-bold text-white">{title}</h3>
            <span className="px-3 py-1 text-xs font-semibold bg-cosmic-blue/20 text-cosmic-blue rounded-full border border-cosmic-blue/30">
              {category}
            </span>
          </div>
          
          <p className="text-gray-300 mb-4 leading-relaxed">{description}</p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {techStack.map((tech, i) => (
              <span
                key={i}
                className="px-2 py-1 text-xs bg-white/5 text-cosmic-cyan rounded border border-white/10"
              >
                {tech}
              </span>
            ))}
          </div>
          
          <div className="flex gap-3">
            {githubUrl && (
              <Button
                variant="outline"
                size="sm"
                className="border-cosmic-blue/30 text-cosmic-blue hover:bg-cosmic-blue/10"
                asChild
              >
                <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  Code
                </a>
              </Button>
            )}
            {liveUrl && (
              <Button
                size="sm"
                className="bg-cosmic-purple hover:bg-cosmic-purple/80"
                asChild
              >
                <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
