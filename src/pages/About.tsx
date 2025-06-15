import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Mail, Github, Linkedin, MapPin, Calendar, Award, Code, GraduationCap, Briefcase, FileText, Download, Users, Trophy, BookOpen, Rocket, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import StarFieldCanvas from '@/components/StarField';

const About = () => {
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});
  const [showResume, setShowResume] = useState(false);
  const [activeTimelineFilter, setActiveTimelineFilter] = useState('all');

  // Personal Information
  const personalInfo = {
    name: "Ravishankar Singh",
    title: "Machine Learning and Development Enthusiast",
    location: "India",
    email: "ravishankar.singh@example.com",
    phone: "+91-9876543210",
    bio: "Passionate developer with 3+ years of experience in machine learning and full-stack development. Specialized in building scalable AI solutions and modern web applications. Winner of 15+ hackathons and contributor to various open-source projects.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
  };

  // Education data
  const education = [
    {
      degree: "B.Tech in Computer Science",
      institution: "Indian Institute of Technology",
      year: "2019-2023",
      grade: "CGPA: 8.7/10",
      achievements: [
        "Graduated with First Class Honors",
        "President of Computer Science Society",
        "Published 3 research papers in AI conferences",
        "Led university hackathon team to national victory"
      ]
    },
    {
      degree: "Higher Secondary Education",
      institution: "Delhi Public School",
      year: "2017-2019",
      grade: "95.2%",
      achievements: [
        "Top 1% in state board examinations",
        "Winner of National Science Olympiad",
        "Head Boy and Student Council President",
        "Represented school in national programming contests"
      ]
    }
  ];

  // Experience data
  const experience = [
    {
      role: "Senior Full Stack Developer",
      company: "TechCorp Solutions",
      duration: "2023 - Present",
      description: "Leading development of AI-powered web applications and managing cross-functional teams.",
      achievements: [
        "Led team of 5 developers in building scalable microservices architecture",
        "Implemented ML models that improved user engagement by 40%",
        "Reduced application load time by 60% through optimization",
        "Mentored 10+ junior developers and interns"
      ]
    },
    {
      role: "Machine Learning Engineer",
      company: "AI Innovations Inc.",
      duration: "2022 - 2023",
      description: "Developed and deployed machine learning models for production systems.",
      achievements: [
        "Built computer vision models with 94% accuracy for object detection",
        "Implemented NLP chatbot reducing customer service costs by 30%",
        "Published research paper on transformer architectures",
        "Optimized model inference time by 50%"
      ]
    }
  ];

  // Internships data
  const internships = [
    {
      role: "Machine Learning Engineer Intern",
      company: "AI Innovations Inc.",
      duration: "Jun 2022 - Dec 2022",
      description: "Developed computer vision models and NLP solutions for production systems.",
      achievements: [
        "Built object detection model with 94% accuracy",
        "Implemented NLP chatbot reducing customer service costs by 30%",
        "Published research paper on transformer architectures"
      ],
      technologies: ["Python", "TensorFlow", "PyTorch", "OpenCV", "NLP"]
    },
    {
      role: "Full Stack Developer Intern",
      company: "StartupTech Solutions",
      duration: "Jan 2021 - May 2021",
      description: "Built responsive web applications and REST APIs for client projects.",
      achievements: [
        "Developed 3 full-stack web applications",
        "Improved application performance by 45%",
        "Mentored 2 junior interns"
      ],
      technologies: ["React", "Node.js", "MongoDB", "Express", "AWS"]
    }
  ];

  // Enhanced Comprehensive Timeline with projects
  const comprehensiveTimeline = [
    {
      year: "2017",
      title: "Excellence in Academics",
      description: "Graduated as Head Boy from Delhi Public School with 95.2%",
      type: "education",
      icon: <GraduationCap className="w-4 h-4" />,
      details: "National Science Olympiad Winner"
    },
    {
      year: "2019",
      title: "IIT Journey Begins",
      description: "Started Computer Science at Indian Institute of Technology",
      type: "education",
      icon: <BookOpen className="w-4 h-4" />,
      details: "Secured admission through JEE Advanced"
    },
    {
      year: "2020",
      title: "First Hackathon Victory",
      description: "Won Smart India Hackathon with AI-based healthcare solution",
      type: "achievement",
      icon: <Trophy className="w-4 h-4" />,
      details: "Team lead for 6-member group"
    },
    {
      year: "2020",
      title: "E-Learning Platform Project",
      description: "Built comprehensive online learning platform with React and Node.js",
      type: "project",
      icon: <Code className="w-4 h-4" />,
      details: "Served 500+ students with video streaming and assessments"
    },
    {
      year: "2020",
      title: "Open Source Journey",
      description: "Started contributing to open source projects",
      type: "activity",
      icon: <Code className="w-4 h-4" />,
      details: "First contribution to TensorFlow community"
    },
    {
      year: "2021",
      title: "Healthcare AI Project",
      description: "Developed ML model for early disease detection using medical imaging",
      type: "project",
      icon: <Rocket className="w-4 h-4" />,
      details: "Achieved 92% accuracy in diagnostic predictions"
    },
    {
      year: "2021",
      title: "First Internship",
      description: "Full Stack Developer Intern at StartupTech Solutions",
      type: "internship",
      icon: <Briefcase className="w-4 h-4" />,
      details: "Built 3 production web applications"
    },
    {
      year: "2021",
      title: "Research Publication",
      description: "Published first research paper on deep learning",
      type: "achievement",
      icon: <Award className="w-4 h-4" />,
      details: "Accepted at international AI conference"
    },
    {
      year: "2022",
      title: "Smart City IoT Project",
      description: "Led development of IoT-based traffic management system",
      type: "project",
      icon: <Rocket className="w-4 h-4" />,
      details: "Reduced traffic congestion by 25% in pilot area"
    },
    {
      year: "2022",
      title: "ML Engineer Intern",
      description: "Machine Learning Engineer Intern at AI Innovations Inc.",
      type: "internship",
      icon: <Rocket className="w-4 h-4" />,
      details: "Developed production ML models"
    },
    {
      year: "2022",
      title: "Tech Speaker",
      description: "Started speaking at tech conferences and workshops",
      type: "activity",
      icon: <Users className="w-4 h-4" />,
      details: "Spoke at 5+ conferences on AI/ML topics"
    },
    {
      year: "2022",
      title: "Financial Analytics Platform",
      description: "Built real-time stock market analysis platform using ML",
      type: "project",
      icon: <Code className="w-4 h-4" />,
      details: "Processed 1M+ data points with 95% prediction accuracy"
    },
    {
      year: "2023",
      title: "Graduation & Full-time Role",
      description: "Graduated from IIT and joined TechCorp Solutions as Senior Developer",
      type: "work",
      icon: <Briefcase className="w-4 h-4" />,
      details: "CGPA: 8.7/10, First Class Honors"
    },
    {
      year: "2023",
      title: "AWS ML Certification",
      description: "Achieved AWS Machine Learning Specialty certification",
      type: "certification",
      icon: <Award className="w-4 h-4" />,
      details: "Professional level certification"
    },
    {
      year: "2023",
      title: "AI Chat Assistant Project",
      description: "Developed enterprise-grade AI chatbot for customer service",
      type: "project",
      icon: <Rocket className="w-4 h-4" />,
      details: "Handles 10k+ queries daily with 94% satisfaction rate"
    },
    {
      year: "2024",
      title: "Computer Vision Project",
      description: "Built automated quality control system for manufacturing",
      type: "project",
      icon: <Code className="w-4 h-4" />,
      details: "Reduced defect detection time by 80%"
    },
    {
      year: "2024",
      title: "15+ Hackathons Won",
      description: "Reached milestone of winning 15+ national and international hackathons",
      type: "achievement",
      icon: <Trophy className="w-4 h-4" />,
      details: "Including major hackathons like HackIndia, CodeStorm"
    },
    {
      year: "2024",
      title: "Innovation Award",
      description: "Received company's highest innovation award",
      type: "achievement",
      icon: <Award className="w-4 h-4" />,
      details: "For AI-driven product development"
    }
  ];

  // Technical Skills data
  const technicalSkills = {
    "Programming Languages": [
      { name: "Python", level: 95 },
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Java", level: 80 },
      { name: "C++", level: 75 }
    ],
    "Web Technologies": [
      { name: "React", level: 92 },
      { name: "Node.js", level: 88 },
      { name: "Express.js", level: 85 },
      { name: "Next.js", level: 80 },
      { name: "HTML/CSS", level: 95 }
    ],
    "Machine Learning": [
      { name: "TensorFlow", level: 90 },
      { name: "PyTorch", level: 88 },
      { name: "Scikit-learn", level: 92 },
      { name: "OpenCV", level: 85 },
      { name: "NLP", level: 82 }
    ],
    "Cloud & DevOps": [
      { name: "AWS", level: 85 },
      { name: "Docker", level: 80 },
      { name: "Kubernetes", level: 75 },
      { name: "CI/CD", level: 82 },
      { name: "Git", level: 95 }
    ]
  };

  // Certifications data
  const certifications = [
    {
      name: "AWS Certified Machine Learning - Specialty",
      issuer: "Amazon Web Services",
      year: "2023",
      credentialId: "AWS-ML-2023-001"
    },
    {
      name: "Google Cloud Professional ML Engineer",
      issuer: "Google Cloud",
      year: "2023",
      credentialId: "GCP-ML-2023-002"
    },
    {
      name: "TensorFlow Developer Certificate",
      issuer: "TensorFlow",
      year: "2022",
      credentialId: "TF-DEV-2022-003"
    },
    {
      name: "React Advanced Certification",
      issuer: "Meta",
      year: "2022",
      credentialId: "META-REACT-2022-004"
    }
  ];

  // Achievements data
  const achievements = [
    {
      title: "15+ Hackathon Victories",
      description: "Won over 15 national and international hackathons including Smart India Hackathon",
      year: "2019-2024"
    },
    {
      title: "Open Source Contributor",
      description: "Contributed to 20+ open source projects with over 1000 GitHub stars",
      year: "2020-2024"
    },
    {
      title: "Research Publications",
      description: "Published 5 research papers in top-tier AI and ML conferences",
      year: "2021-2023"
    },
    {
      title: "Tech Speaker",
      description: "Speaker at 10+ tech conferences and workshops on AI/ML topics",
      year: "2022-2024"
    }
  ];

  // Resume content
  const resumeContent = {
    summary: "Passionate Machine Learning Engineer and Full Stack Developer with 3+ years of experience building scalable AI solutions. Proven track record of 15+ hackathon victories and expertise in modern web technologies.",
    experience: experience,
    education: education,
    skills: ["Python", "JavaScript", "React", "TensorFlow", "AWS", "Docker", "Machine Learning", "Deep Learning"],
    certifications: certifications.slice(0, 3),
    achievements: [
      "Winner of 15+ hackathons including Smart India Hackathon",
      "Published 5 research papers in AI/ML conferences",
      "Led development of ML models improving user engagement by 40%",
      "Mentored 25+ students in their tech careers"
    ]
  };

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

  const getTimelineColor = (type: string) => {
    switch (type) {
      case 'education': return 'bg-cosmic-blue';
      case 'internship': return 'bg-cosmic-purple';
      case 'work': return 'bg-cosmic-cyan';
      case 'achievement': return 'bg-yellow-500';
      case 'certification': return 'bg-green-500';
      case 'activity': return 'bg-pink-500';
      case 'project': return 'bg-orange-500';
      default: return 'bg-cosmic-blue';
    }
  };

  const getFilteredTimeline = () => {
    if (activeTimelineFilter === 'all') return comprehensiveTimeline;
    return comprehensiveTimeline.filter(item => item.type === activeTimelineFilter);
  };

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
              Complete Profile
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive overview of my journey, skills, and achievements in the world of technology and innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Personal Information with Resume Button */}
      <section id="personal" className="py-16 px-4 scroll-reveal">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible.personal ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <Card className="glass border-white/10">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle className="text-3xl font-orbitron gradient-text">Personal Information</CardTitle>
                  <Button 
                    onClick={() => setShowResume(!showResume)}
                    className="bg-cosmic-blue hover:bg-cosmic-blue/80"
                  >
                    <FileText className="w-4 h-4 mr-2" />
                    {showResume ? 'Hide Resume' : 'View Resume'}
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                {!showResume ? (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="md:col-span-1">
                      <img 
                        src={personalInfo.image} 
                        alt={personalInfo.name}
                        className="w-48 h-48 rounded-full mx-auto object-cover border-4 border-cosmic-blue"
                      />
                    </div>
                    <div className="md:col-span-2 space-y-4">
                      <h3 className="text-2xl font-orbitron text-white">{personalInfo.name}</h3>
                      <p className="text-cosmic-cyan text-lg">{personalInfo.title}</p>
                      <p className="text-gray-300 leading-relaxed">{personalInfo.bio}</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                        <div className="flex items-center space-x-3">
                          <MapPin className="w-5 h-5 text-cosmic-blue" />
                          <span className="text-gray-300">{personalInfo.location}</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Mail className="w-5 h-5 text-cosmic-blue" />
                          <span className="text-gray-300">{personalInfo.email}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-8">
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="text-2xl font-orbitron text-white">Professional Resume</h3>
                      <Button variant="outline" className="border-cosmic-blue text-cosmic-blue">
                        <Download className="w-4 h-4 mr-2" />
                        Download PDF
                      </Button>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-cosmic-cyan mb-3">Professional Summary</h4>
                      <p className="text-gray-300 leading-relaxed">{resumeContent.summary}</p>
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-lg font-semibold text-cosmic-cyan mb-4">Professional Experience</h4>
                        {resumeContent.experience.map((exp, index) => (
                          <div key={index} className="mb-6 p-4 bg-white/5 rounded-lg border border-white/10">
                            <h5 className="font-semibold text-white text-lg">{exp.role}</h5>
                            <p className="text-cosmic-blue font-medium">{exp.company}</p>
                            <p className="text-gray-400 text-sm mb-2">{exp.duration}</p>
                            <p className="text-gray-300 text-sm mb-3">{exp.description}</p>
                            <ul className="text-gray-300 text-sm space-y-1">
                              {exp.achievements.slice(0, 3).map((achievement, i) => (
                                <li key={i} className="flex items-start space-x-2">
                                  <span className="text-cosmic-blue">•</span>
                                  <span>{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                      
                      <div className="space-y-6">
                        <div>
                          <h4 className="text-lg font-semibold text-cosmic-cyan mb-4">Education</h4>
                          {resumeContent.education.map((edu, index) => (
                            <div key={index} className="mb-4 p-4 bg-white/5 rounded-lg border border-white/10">
                              <h5 className="font-semibold text-white">{edu.degree}</h5>
                              <p className="text-cosmic-blue">{edu.institution}</p>
                              <p className="text-gray-400 text-sm">{edu.year}</p>
                              <p className="text-gray-300 text-sm">{edu.grade}</p>
                            </div>
                          ))}
                        </div>
                        
                        <div>
                          <h4 className="text-lg font-semibold text-cosmic-cyan mb-3">Core Skills</h4>
                          <div className="flex flex-wrap gap-2">
                            {resumeContent.skills.map((skill, index) => (
                              <Badge key={index} variant="outline" className="border-cosmic-blue text-cosmic-blue">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="text-lg font-semibold text-cosmic-cyan mb-3">Key Achievements</h4>
                          <ul className="text-gray-300 text-sm space-y-2">
                            {resumeContent.achievements.map((achievement, index) => (
                              <li key={index} className="flex items-start space-x-2">
                                <span className="text-cosmic-blue">✓</span>
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Timeline Section */}
      <section id="comprehensive-timeline" className="py-16 px-4 scroll-reveal">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible['comprehensive-timeline'] ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-orbitron font-bold gradient-text mb-8 text-center">Complete Journey Timeline</h2>
            <p className="text-center text-gray-300 mb-12 text-lg">
              Explore my educational background, internships, achievements, and project milestones
            </p>
            
            {/* Timeline Filters */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {[
                { key: 'all', label: 'All', color: 'bg-white' },
                { key: 'education', label: 'Education', color: 'bg-cosmic-blue' },
                { key: 'internship', label: 'Internships', color: 'bg-cosmic-purple' },
                { key: 'work', label: 'Professional', color: 'bg-cosmic-cyan' },
                { key: 'project', label: 'Projects', color: 'bg-orange-500' },
                { key: 'achievement', label: 'Achievements', color: 'bg-yellow-500' },
                { key: 'certification', label: 'Certifications', color: 'bg-green-500' },
                { key: 'activity', label: 'Activities', color: 'bg-pink-500' }
              ].map((filter) => (
                <button
                  key={filter.key}
                  onClick={() => setActiveTimelineFilter(filter.key)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full border transition-all duration-300 ${
                    activeTimelineFilter === filter.key
                      ? 'bg-white/20 border-white text-white'
                      : 'border-white/20 text-gray-300 hover:border-white/40'
                  }`}
                >
                  <div className={`w-3 h-3 ${filter.color} rounded-full`}></div>
                  <span className="text-sm">{filter.label}</span>
                </button>
              ))}
            </div>
            
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cosmic-blue via-cosmic-purple to-cosmic-cyan opacity-50"></div>
              
              <div className="space-y-8">
                {getFilteredTimeline().map((item, index) => (
                  <motion.div
                    key={`${item.year}-${item.title}`}
                    initial={{ opacity: 0, x: -50 }}
                    animate={isVisible['comprehensive-timeline'] ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="relative flex items-start space-x-6"
                  >
                    <div className={`flex-shrink-0 w-16 h-16 ${getTimelineColor(item.type)} rounded-full flex items-center justify-center relative z-10 shadow-lg`}>
                      {item.icon}
                    </div>
                    
                    <Card className="glass border-white/10 flex-1 hover:border-cosmic-blue/30 transition-all duration-300">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="text-lg text-white">{item.title}</CardTitle>
                            <CardDescription className="text-cosmic-cyan">{item.description}</CardDescription>
                            {item.details && (
                              <p className="text-gray-400 text-sm mt-1">{item.details}</p>
                            )}
                          </div>
                          <div className="text-right">
                            <Badge variant="outline" className="border-cosmic-purple text-cosmic-purple">
                              {item.year}
                            </Badge>
                            <div className="text-xs text-gray-400 mt-1 capitalize">{item.type}</div>
                          </div>
                        </div>
                      </CardHeader>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Internships Section */}
      <section id="internships" className="py-16 px-4 scroll-reveal">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible.internships ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-orbitron font-bold gradient-text mb-12 text-center">Internship Experience</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {internships.map((internship, index) => (
                <Card key={index} className="glass border-white/10 hover:border-cosmic-purple/30 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl text-white flex items-center space-x-3">
                      <Briefcase className="w-6 h-6 text-cosmic-purple" />
                      <span>{internship.role}</span>
                    </CardTitle>
                    <CardDescription className="text-cosmic-cyan">{internship.company} • {internship.duration}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4">{internship.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="text-white font-semibold mb-2">Key Achievements:</h4>
                      <ul className="text-gray-300 space-y-1">
                        {internship.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start space-x-2">
                            <span className="text-cosmic-purple">✓</span>
                            <span className="text-sm">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-white font-semibold mb-2">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {internship.technologies.map((tech, i) => (
                          <Badge key={i} variant="outline" className="border-cosmic-purple text-cosmic-purple text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="py-16 px-4 scroll-reveal">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible.education ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-orbitron font-bold gradient-text mb-12 text-center">Education</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {education.map((edu, index) => (
                <Card key={index} className="glass border-white/10">
                  <CardHeader>
                    <CardTitle className="text-xl text-white flex items-center space-x-3">
                      <GraduationCap className="w-6 h-6 text-cosmic-blue" />
                      <span>{edu.degree}</span>
                    </CardTitle>
                    <CardDescription className="text-cosmic-cyan">{edu.institution}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">{edu.year}</span>
                        <Badge variant="outline" className="border-cosmic-blue text-cosmic-blue">{edu.grade}</Badge>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-2">Achievements:</h4>
                        <ul className="text-gray-300 text-sm space-y-1">
                          {edu.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start space-x-2">
                              <span className="text-cosmic-blue">•</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-16 px-4 scroll-reveal">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible.experience ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-orbitron font-bold gradient-text mb-12 text-center">Professional Experience</h2>
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <Card key={index} className="glass border-white/10">
                  <CardHeader>
                    <CardTitle className="text-xl text-white">{exp.role}</CardTitle>
                    <CardDescription className="text-cosmic-cyan">{exp.company} • {exp.duration}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4">{exp.description}</p>
                    <div>
                      <h4 className="text-white font-semibold mb-2">Key Achievements:</h4>
                      <ul className="text-gray-300 space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start space-x-2">
                            <span className="text-cosmic-blue">✓</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technical Skills */}
      <section id="skills-detailed" className="py-16 px-4 scroll-reveal">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible['skills-detailed'] ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-orbitron font-bold gradient-text mb-12 text-center">Technical Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {Object.entries(technicalSkills).map(([category, skills], index) => (
                <Card key={category} className="glass border-white/10">
                  <CardHeader>
                    <CardTitle className="text-xl text-white flex items-center space-x-3">
                      <Code className="w-6 h-6 text-cosmic-blue" />
                      <span>{category}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {skills.map((skill, i) => (
                        <div key={skill.name}>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-gray-300">{skill.name}</span>
                            <span className="text-cosmic-cyan">{skill.level}%</span>
                          </div>
                          <div className="w-full bg-gray-700 rounded-full h-2">
                            <motion.div
                              className="bg-gradient-to-r from-cosmic-blue to-cosmic-purple h-2 rounded-full"
                              initial={{ width: 0 }}
                              animate={isVisible['skills-detailed'] ? { width: `${skill.level}%` } : { width: 0 }}
                              transition={{ duration: 1, delay: index * 0.1 + i * 0.1 }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="py-16 px-4 scroll-reveal">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible.certifications ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-orbitron font-bold gradient-text mb-12 text-center">Certifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <Card key={index} className="glass border-white/10">
                  <CardHeader>
                    <CardTitle className="text-lg text-white">{cert.name}</CardTitle>
                    <CardDescription className="text-cosmic-cyan">{cert.issuer}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4 text-cosmic-blue" />
                        <span className="text-gray-300">{cert.year}</span>
                      </div>
                      <div className="text-xs text-gray-400">
                        ID: {cert.credentialId}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Achievements */}
      <section id="achievements" className="py-16 px-4 scroll-reveal">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible.achievements ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-orbitron font-bold gradient-text mb-12 text-center">Achievements & Recognition</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="glass border-white/10">
                  <CardHeader>
                    <CardTitle className="text-lg text-white flex items-center space-x-3">
                      <Award className="w-6 h-6 text-cosmic-blue" />
                      <span>{achievement.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-2">{achievement.description}</p>
                    <Badge variant="outline" className="border-cosmic-purple text-cosmic-purple">
                      {achievement.year}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
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
              Let's Build Something Amazing Together
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              Ready to collaborate on your next project? Let's connect and turn your ideas into reality.
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
                <a href="/resume.pdf" download>Download Resume</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
