
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ProjectCard from '@/components/ProjectCard';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

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
            <Link to="/projects" className="text-cosmic-blue">
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

      <div className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-orbitron font-bold gradient-text mb-8">
              Project Galaxy
            </h1>
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
      </div>
    </div>
  );
};

export default Projects;
