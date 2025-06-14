
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import StarFieldCanvas from '@/components/StarField';
import Planet3D from '@/components/Planet3D';
import ProjectCard from '@/components/ProjectCard';
import SkillOrbit from '@/components/SkillOrbit';
import ContactPanel from '@/components/ContactPanel';
import { Button } from '@/components/ui/button';

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});

  // Enhanced projects data with more ML and Full Stack projects
  const projects = [
    {
      title: "AI-Powered Recommendation Engine",
      description: "Built a sophisticated machine learning system using collaborative filtering and deep learning to provide personalized recommendations with 94% accuracy.",
      techStack: ["Python", "TensorFlow", "MongoDB", "Flask", "Docker"],
      category: "Machine Learning",
      githubUrl: "https://github.com/ravishankar-singh/ai-recommendations",
      liveUrl: "https://ai-recommendations-demo.vercel.app"
    },
    {
      title: "Computer Vision Object Detection",
      description: "Advanced CV system using YOLO and CNN architectures for real-time object detection with 89% mAP score on COCO dataset.",
      techStack: ["Python", "PyTorch", "OpenCV", "CUDA", "FastAPI"],
      category: "Machine Learning",
      githubUrl: "https://github.com/ravishankar-singh/cv-detection"
    },
    {
      title: "NLP Sentiment Analysis API",
      description: "Multi-language sentiment analysis using transformer models (BERT/RoBERTa) with real-time processing for social media monitoring.",
      techStack: ["PyTorch", "Transformers", "FastAPI", "Docker", "AWS"],
      category: "Machine Learning",
      githubUrl: "https://github.com/ravishankar-singh/nlp-sentiment"
    },
    {
      title: "Time Series Forecasting Platform",
      description: "ML platform for financial time series prediction using LSTM, Prophet, and ARIMA models with 92% accuracy on stock predictions.",
      techStack: ["Python", "TensorFlow", "Prophet", "React", "PostgreSQL"],
      category: "Machine Learning",
      githubUrl: "https://github.com/ravishankar-singh/time-series-ml"
    },
    {
      title: "Real-time Chat Application",
      description: "Full-stack chat app with real-time messaging, file sharing, and video calls. Features include end-to-end encryption and multi-platform support.",
      techStack: ["React", "Node.js", "Socket.io", "MongoDB", "WebRTC"],
      category: "Full Stack",
      githubUrl: "https://github.com/ravishankar-singh/realtime-chat",
      liveUrl: "https://chat-app-demo.vercel.app"
    },
    {
      title: "E-commerce Microservices Platform",
      description: "Scalable e-commerce platform using microservices architecture with payment gateway integration, inventory management, and analytics dashboard.",
      techStack: ["Node.js", "React", "Docker", "Kubernetes", "PostgreSQL", "Redis"],
      category: "Full Stack",
      githubUrl: "https://github.com/ravishankar-singh/ecommerce-microservices",
      liveUrl: "https://ecommerce-demo.vercel.app"
    },
    {
      title: "Social Media Analytics Dashboard",
      description: "Full-stack application for social media analytics with real-time data visualization, sentiment analysis, and user engagement metrics.",
      techStack: ["Next.js", "TypeScript", "Node.js", "MongoDB", "Chart.js"],
      category: "Full Stack",
      githubUrl: "https://github.com/ravishankar-singh/social-analytics"
    },
    {
      title: "Blockchain Voting System",
      description: "Secure and transparent voting platform built on Ethereum blockchain with smart contracts ensuring immutable and verifiable elections.",
      techStack: ["Solidity", "Web3.js", "React", "Node.js", "IPFS"],
      category: "Full Stack",
      githubUrl: "https://github.com/ravishankar-singh/blockchain-voting",
      liveUrl: "https://blockchain-voting-demo.vercel.app"
    },
    {
      title: "Smart City Traffic Optimizer",
      description: "Hackathon-winning project that uses computer vision and ML to optimize traffic light timing, reducing wait times by 35% in simulations.",
      techStack: ["OpenCV", "Python", "React", "FastAPI", "PostgreSQL"],
      category: "Hackathons",
      githubUrl: "https://github.com/ravishankar-singh/traffic-optimizer"
    },
    {
      title: "IoT Environmental Monitor",
      description: "24-hour hackathon project: IoT system monitoring air quality, temperature, and humidity with real-time alerts and data visualization.",
      techStack: ["Arduino", "React", "Node.js", "InfluxDB", "Grafana"],
      category: "Hackathons",
      githubUrl: "https://github.com/ravishankar-singh/iot-monitor"
    }
  ];

  const categories = ['All', 'Machine Learning', 'Full Stack', 'Hackathons'];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  // Enhanced skills data with detailed parameters
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

  // Scroll reveal effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.scroll-reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen text-white overflow-x-hidden">
      <StarFieldCanvas />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 p-6">
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
            <Link to="/contact" className="text-white hover:text-cosmic-blue transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </nav>
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="absolute right-10 top-20 w-96 h-96 opacity-30">
          <Planet3D />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center z-10 max-w-4xl mx-auto"
        >
          <motion.h1
            className="text-6xl md:text-8xl font-orbitron font-black mb-6"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="gradient-text">RAVISHANKAR</span>
            <br />
            <span className="text-white">SINGH</span>
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-8 font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Machine Learning Enthusiast & Full Stack Developer
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <Button
              size="lg"
              className="px-8 py-4 bg-gradient-to-r from-cosmic-blue to-cosmic-purple hover:from-cosmic-purple hover:to-cosmic-cyan transition-all duration-300 font-orbitron font-semibold text-lg animate-pulse-glow"
              asChild
            >
              <Link to="/projects">View Projects</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-4 border-cosmic-blue text-cosmic-blue hover:bg-cosmic-blue/10 font-orbitron font-semibold text-lg"
              asChild
            >
              <Link to="/about">View Full Profile</Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-cosmic-cyan rounded-full animate-float opacity-60"></div>
        <div className="absolute bottom-32 left-20 w-3 h-3 bg-cosmic-purple rounded-full animate-float opacity-80" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 right-20 w-2 h-2 bg-cosmic-pink rounded-full animate-float opacity-70" style={{ animationDelay: '1s' }}></div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 scroll-reveal">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible.about ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-orbitron font-bold gradient-text mb-8">
              About Mission
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
                I'm a passionate developer on a mission to bridge the gap between artificial intelligence 
                and practical solutions. With expertise spanning machine learning, full-stack development, 
                and modern technologies, I craft innovative solutions that push the boundaries of what's possible.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                When I'm not coding or training models, you'll find me participating in hackathons, 
                contributing to open-source projects, or exploring the latest advancements in AI and space technology.
              </p>
            </div>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            {[
              { number: "50+", label: "Projects Completed" },
              { number: "15+", label: "Hackathons Won" },
              { number: "3+", label: "Years Experience" },
              { number: "10k+", label: "Lines of Code" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isVisible.about ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center glass rounded-xl p-6"
              >
                <div className="text-3xl md:text-4xl font-orbitron font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 scroll-reveal">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible.skills ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-orbitron font-bold gradient-text mb-8">
              Tech Universe
            </h2>
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
                animate={isVisible.skills ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 1, delay: index * 0.2 }}
                className="absolute"
              >
                <SkillOrbit {...group} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 scroll-reveal">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible.projects ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-orbitron font-bold gradient-text mb-8">
              Project Galaxy
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-12">
              Explore my constellation of projects, each one a unique journey through 
              innovation, problem-solving, and cutting-edge technology.
            </p>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className={selectedCategory === category 
                    ? "bg-cosmic-blue hover:bg-cosmic-blue/80" 
                    : "border-cosmic-blue/30 text-cosmic-blue hover:bg-cosmic-blue/10"
                  }
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.title} {...project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 scroll-reveal">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible.contact ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-orbitron font-bold gradient-text mb-8">
              Connect & Collaborate
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Ready to embark on your next digital adventure? Let's connect and bring 
              your innovative ideas to life.
            </p>
          </motion.div>

          <ContactPanel />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 Ravishankar Singh. Designed and built with ❤️ and lots of ☕
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
