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

  // Updated Engineering Journey Timeline (2022-2026)
  const engineeringTimeline = [
    {
      year: "2022",
      month: "January",
      title: "Smart Healthcare AI Project",
      description: "Developed ML model for early disease detection using medical imaging during 3rd year",
      type: "project",
      icon: <Rocket className="w-4 h-4" />,
      details: "Achieved 92% accuracy in diagnostic predictions, used TensorFlow and OpenCV",
      technologies: ["Python", "TensorFlow", "OpenCV", "Medical Imaging"]
    },
    {
      year: "2022",
      month: "March",
      title: "Smart India Hackathon Winner",
      description: "Led team to victory with AI-based traffic management system",
      type: "achievement",
      icon: <Trophy className="w-4 h-4" />,
      details: "Reduced traffic congestion by 25% in pilot area, team of 6 members",
      technologies: ["IoT", "Python", "Machine Learning", "Real-time Analytics"]
    },
    {
      year: "2022",
      month: "June",
      title: "ML Engineer Intern - AI Innovations Inc.",
      description: "Started first major internship in machine learning",
      type: "internship",
      icon: <Briefcase className="w-4 h-4" />,
      details: "Focused on computer vision and NLP solutions",
      technologies: ["Python", "TensorFlow", "PyTorch", "OpenCV", "NLP"]
    },
    {
      year: "2022",
      month: "August",
      title: "Computer Vision Object Detection",
      description: "Built production-ready object detection model",
      type: "project",
      icon: <Code className="w-4 h-4" />,
      details: "Achieved 94% accuracy, deployed in real-time systems",
      technologies: ["YOLO", "TensorFlow", "Python", "OpenCV"]
    },
    {
      year: "2022",
      month: "October",
      title: "NLP Chatbot Development",
      description: "Implemented enterprise chatbot reducing customer service costs",
      type: "project",
      icon: <Rocket className="w-4 h-4" />,
      details: "Reduced customer service costs by 30%, handles 1000+ queries daily",
      technologies: ["NLP", "Transformers", "Python", "Flask"]
    },
    {
      year: "2022",
      month: "December",
      title: "First Research Paper Published",
      description: "Published research on transformer architectures",
      type: "achievement",
      icon: <Award className="w-4 h-4" />,
      details: "Accepted at international AI conference, cited 50+ times",
      technologies: ["Research", "Transformers", "Deep Learning"]
    },
    {
      year: "2023",
      month: "February",
      title: "Financial Analytics Platform",
      description: "Built real-time stock market analysis platform using ML",
      type: "project",
      icon: <Code className="w-4 h-4" />,
      details: "Processed 1M+ data points with 95% prediction accuracy",
      technologies: ["Python", "Machine Learning", "Real-time Processing", "Financial APIs"]
    },
    {
      year: "2023",
      month: "April",
      title: "Tech Conference Speaker",
      description: "Started speaking at major tech conferences",
      type: "activity",
      icon: <Users className="w-4 h-4" />,
      details: "Spoke at 5+ conferences on AI/ML topics, 500+ attendees each",
      technologies: ["Public Speaking", "AI/ML", "Knowledge Sharing"]
    },
    {
      year: "2023",
      month: "May",
      title: "B.Tech Graduation - First Class Honors",
      description: "Graduated from Indian Institute of Technology",
      type: "education",
      icon: <GraduationCap className="w-4 h-4" />,
      details: "CGPA: 8.7/10, President of Computer Science Society",
      technologies: ["Computer Science", "Leadership", "Academic Excellence"]
    },
    {
      year: "2023",
      month: "July",
      title: "Senior Full Stack Developer - TechCorp",
      description: "Started full-time role leading development teams",
      type: "work",
      icon: <Briefcase className="w-4 h-4" />,
      details: "Leading team of 5 developers, managing AI-powered applications",
      technologies: ["React", "Node.js", "Team Leadership", "AI Integration"]
    },
    {
      year: "2023",
      month: "September",
      title: "AWS ML Specialty Certification",
      description: "Achieved AWS Machine Learning Specialty certification",
      type: "certification",
      icon: <Award className="w-4 h-4" />,
      details: "Professional level certification in cloud ML services",
      technologies: ["AWS", "Machine Learning", "Cloud Computing"]
    },
    {
      year: "2023",
      month: "November",
      title: "Enterprise AI Chatbot",
      description: "Developed enterprise-grade AI assistant",
      type: "project",
      icon: <Rocket className="w-4 h-4" />,
      details: "Handles 10k+ queries daily with 94% satisfaction rate",
      technologies: ["NLP", "Transformers", "Production ML", "Microservices"]
    },
    {
      year: "2024",
      month: "January",
      title: "Computer Vision Quality Control",
      description: "Built automated quality control system for manufacturing",
      type: "project",
      icon: <Code className="w-4 h-4" />,
      details: "Reduced defect detection time by 80%, deployed in 3 factories",
      technologies: ["Computer Vision", "Industrial IoT", "Real-time Processing"]
    },
    {
      year: "2024",
      month: "March",
      title: "15+ Hackathon Victories Milestone",
      description: "Reached milestone of winning 15+ hackathons",
      type: "achievement",
      icon: <Trophy className="w-4 h-4" />,
      details: "Including HackIndia, CodeStorm, Smart India Hackathon",
      technologies: ["Problem Solving", "Innovation", "Team Leadership"]
    },
    {
      year: "2024",
      month: "June",
      title: "Company Innovation Award",
      description: "Received highest innovation award at TechCorp",
      type: "achievement",
      icon: <Award className="w-4 h-4" />,
      details: "For AI-driven product development improving efficiency by 40%",
      technologies: ["Innovation", "AI/ML", "Product Development"]
    },
    {
      year: "2024",
      month: "September",
      title: "Open Source ML Framework",
      description: "Released open-source ML framework for developers",
      type: "project",
      icon: <Code className="w-4 h-4" />,
      details: "1000+ GitHub stars, used by 50+ companies",
      technologies: ["Open Source", "Python", "ML Framework", "Community"]
    },
    {
      year: "2025",
      month: "January",
      title: "Advanced AI Research Project",
      description: "Leading research on next-generation AI architectures",
      type: "project",
      icon: <Rocket className="w-4 h-4" />,
      details: "Exploring AGI concepts and multi-modal AI systems",
      technologies: ["Advanced AI", "Research", "Multi-modal AI"]
    },
    {
      year: "2025",
      month: "June",
      title: "Tech Leadership Role",
      description: "Promoted to Technical Lead managing multiple teams",
      type: "work",
      icon: <Users className="w-4 h-4" />,
      details: "Managing 20+ developers across 3 AI product teams",
      technologies: ["Leadership", "Team Management", "Strategic Planning"]
    },
    {
      year: "2026",
      month: "January",
      title: "AI Startup Co-founder",
      description: "Co-founding AI startup focused on healthcare solutions",
      type: "work",
      icon: <Rocket className="w-4 h-4" />,
      details: "Building next-gen AI solutions for medical diagnostics",
      technologies: ["Entrepreneurship", "Healthcare AI", "Startup"]
    },
    {
      year: "2026",
      month: "June",
      title: "PhD Research Commencement",
      description: "Starting PhD in Artificial Intelligence",
      type: "education",
      icon: <BookOpen className="w-4 h-4" />,
      details: "Research focus on Explainable AI and Medical Applications",
      technologies: ["PhD Research", "Explainable AI", "Medical AI"]
    }
  ];

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
    if (activeTimelineFilter === 'all') return engineeringTimeline;
    return engineeringTimeline.filter(item => item.type === activeTimelineFilter);
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
              Comprehensive overview of my engineering journey from 2022-2026, showcasing skills, projects, and achievements in technology and innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Personal Information */}
      <section id="personal" className="py-16 px-4 scroll-reveal">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible.personal ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <Card className="glass border-white/10">
              <CardHeader>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
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

      {/* Engineering Journey Timeline (2022-2026) */}
      <section id="engineering-timeline" className="py-16 px-4 scroll-reveal">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible['engineering-timeline'] ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-orbitron font-bold gradient-text mb-8 text-center">Engineering Journey Timeline</h2>
            <p className="text-center text-gray-300 mb-12 text-lg">
              My complete engineering journey from 2022-2026: internships, projects, achievements, and career milestones
            </p>
            
            {/* Timeline Filters */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {[
                { key: 'all', label: 'All Events', color: 'bg-white' },
                { key: 'internship', label: 'Internships', color: 'bg-cosmic-purple' },
                { key: 'project', label: 'Projects', color: 'bg-orange-500' },
                { key: 'achievement', label: 'Achievements', color: 'bg-yellow-500' },
                { key: 'work', label: 'Professional', color: 'bg-cosmic-cyan' },
                { key: 'education', label: 'Education', color: 'bg-cosmic-blue' },
                { key: 'certification', label: 'Certifications', color: 'bg-green-500' }
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
              
              <div className="space-y-6">
                {getFilteredTimeline().map((item, index) => (
                  <motion.div
                    key={`${item.year}-${item.month}-${item.title}`}
                    initial={{ opacity: 0, x: -50 }}
                    animate={isVisible['engineering-timeline'] ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.05 }}
                    className="relative flex items-start space-x-6"
                  >
                    <div className={`flex-shrink-0 w-16 h-16 ${getTimelineColor(item.type)} rounded-full flex items-center justify-center relative z-10 shadow-lg`}>
                      {item.icon}
                    </div>
                    
                    <Card className="glass border-white/10 flex-1 hover:border-cosmic-blue/30 transition-all duration-300">
                      <CardHeader>
                        <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                          <div className="flex-1">
                            <CardTitle className="text-lg text-white mb-2">{item.title}</CardTitle>
                            <CardDescription className="text-cosmic-cyan mb-2">{item.description}</CardDescription>
                            <p className="text-gray-400 text-sm mb-3">{item.details}</p>
                            {item.technologies && (
                              <div className="flex flex-wrap gap-2">
                                {item.technologies.map((tech, i) => (
                                  <Badge key={i} variant="outline" className="border-cosmic-purple text-cosmic-purple text-xs">
                                    {tech}
                                  </Badge>
                                ))}
                              </div>
                            )}
                          </div>
                          <div className="text-right flex-shrink-0">
                            <Badge variant="outline" className="border-cosmic-blue text-cosmic-blue mb-1">
                              {item.month} {item.year}
                            </Badge>
                            <div className="text-xs text-gray-400 capitalize">{item.type}</div>
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
            <h2 className="text-4xl font-orbitron font-bold gradient-text mb-12 text-center">Professional Certifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((cert, index) => (
                <Card key={index} className="glass border-white/10 hover:border-cosmic-cyan/30 transition-all duration-300">
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

      {/* Call to Action */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-orbitron font-bold gradient-text mb-6">
              Let's Build the Future Together
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              Ready to collaborate on innovative AI and web solutions? Let's connect and transform your ideas into reality.
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
