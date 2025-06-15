
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Code, Brain, Globe, Cloud, Database, Smartphone, ArrowLeft } from 'lucide-react';
import StarFieldCanvas from '@/components/StarField';

const Skills = () => {
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});

  const skillCategories = [
    {
      title: "Machine Learning & AI",
      icon: <Brain className="w-6 h-6" />,
      color: "from-blue-500 to-purple-600",
      skills: [
        { name: "Python", level: 95, description: "Primary language for ML/AI development" },
        { name: "TensorFlow", level: 90, description: "Deep learning framework expertise" },
        { name: "PyTorch", level: 88, description: "Neural network development" },
        { name: "Scikit-learn", level: 92, description: "Machine learning algorithms" },
        { name: "OpenCV", level: 85, description: "Computer vision applications" },
        { name: "NLP", level: 82, description: "Natural language processing" }
      ]
    },
    {
      title: "Frontend Development",
      icon: <Globe className="w-6 h-6" />,
      color: "from-cyan-500 to-blue-600",
      skills: [
        { name: "React", level: 93, description: "Component-based UI development" },
        { name: "TypeScript", level: 87, description: "Type-safe JavaScript development" },
        { name: "Next.js", level: 85, description: "Full-stack React framework" },
        { name: "Tailwind CSS", level: 90, description: "Utility-first CSS framework" },
        { name: "HTML/CSS", level: 95, description: "Web fundamentals" },
        { name: "JavaScript", level: 90, description: "Core web programming" }
      ]
    },
    {
      title: "Backend Development",
      icon: <Database className="w-6 h-6" />,
      color: "from-purple-500 to-pink-600",
      skills: [
        { name: "Node.js", level: 91, description: "Server-side JavaScript runtime" },
        { name: "Express.js", level: 88, description: "Web application framework" },
        { name: "MongoDB", level: 88, description: "NoSQL database management" },
        { name: "PostgreSQL", level: 84, description: "Relational database systems" },
        { name: "REST APIs", level: 90, description: "API design and development" },
        { name: "GraphQL", level: 78, description: "Query language for APIs" }
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="w-6 h-6" />,
      color: "from-green-500 to-teal-600",
      skills: [
        { name: "AWS", level: 85, description: "Cloud infrastructure and services" },
        { name: "Docker", level: 82, description: "Containerization technology" },
        { name: "Kubernetes", level: 75, description: "Container orchestration" },
        { name: "CI/CD", level: 83, description: "Continuous integration/deployment" },
        { name: "Git", level: 95, description: "Version control systems" },
        { name: "Terraform", level: 70, description: "Infrastructure as code" }
      ]
    },
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      color: "from-orange-500 to-red-600",
      skills: [
        { name: "Python", level: 95, description: "Primary programming language" },
        { name: "JavaScript", level: 90, description: "Web development language" },
        { name: "TypeScript", level: 87, description: "Typed JavaScript superset" },
        { name: "Java", level: 80, description: "Enterprise development" },
        { name: "C++", level: 75, description: "System programming" },
        { name: "SQL", level: 88, description: "Database query language" }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: <Smartphone className="w-6 h-6" />,
      color: "from-indigo-500 to-purple-600",
      skills: [
        { name: "VS Code", level: 95, description: "Primary development environment" },
        { name: "Jupyter", level: 90, description: "Data science and ML notebooks" },
        { name: "Postman", level: 88, description: "API testing and development" },
        { name: "Figma", level: 75, description: "UI/UX design tool" },
        { name: "Firebase", level: 80, description: "Backend as a service" },
        { name: "Vercel", level: 85, description: "Deployment platform" }
      ]
    }
  ];

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

    const elements = document.querySelectorAll('.skill-card');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

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
              Technical Skills
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A comprehensive overview of my technical expertise across different domains of software development and machine learning.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                id={`category-${categoryIndex}`}
                className="skill-card"
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible[`category-${categoryIndex}`] ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              >
                <Card className="glass border-white/10 h-full">
                  <CardHeader>
                    <CardTitle className="text-2xl text-white flex items-center space-x-3">
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color}`}>
                        {category.icon}
                      </div>
                      <span>{category.title}</span>
                    </CardTitle>
                    <CardDescription className="text-gray-300">
                      Proficiency levels and experience in {category.title.toLowerCase()}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {category.skills.map((skill, skillIndex) => (
                        <div key={skill.name} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-white font-medium">{skill.name}</span>
                            <Badge 
                              variant="outline" 
                              className="border-cosmic-blue text-cosmic-blue"
                            >
                              {skill.level}%
                            </Badge>
                          </div>
                          <p className="text-gray-400 text-sm">{skill.description}</p>
                          <Progress 
                            value={isVisible[`category-${categoryIndex}`] ? skill.level : 0}
                            className="h-2"
                          />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-orbitron font-bold gradient-text mb-6">
              Ready to Collaborate?
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              Let's work together to bring your ideas to life with cutting-edge technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-cosmic-blue to-cosmic-purple hover:from-cosmic-purple hover:to-cosmic-cyan"
                asChild
              >
                <Link to="/contact">Get In Touch</Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-cosmic-blue text-cosmic-blue hover:bg-cosmic-blue/10"
                asChild
              >
                <Link to="/projects">View Projects</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
