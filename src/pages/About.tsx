import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Mail, Github, Linkedin, MapPin, Calendar, Award, Code, GraduationCap, Briefcase, FileText, Download } from 'lucide-react';
import StarFieldCanvas from '@/components/StarField';

const About = () => {
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});
  const [showResume, setShowResume] = useState(false);

  // Personal Information
  const personalInfo = {
    name: "Ravishankar Singh",
    title: "Machine Learning Enthusiast & Full Stack Developer",
    location: "India",
    email: "ravishankar.singh@example.com",
    phone: "+91-9876543210",
    bio: "Passionate developer with 3+ years of experience in machine learning and full-stack development. Specialized in building scalable AI solutions and modern web applications. Winner of 15+ hackathons and contributor to various open-source projects.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
  };

  // Timeline data
  const timeline = [
    {
      year: "2019",
      title: "Started Computer Science Journey",
      description: "Began Bachelor's in Computer Science at IIT",
      type: "education",
      icon: <GraduationCap className="w-4 h-4" />
    },
    {
      year: "2020",
      title: "First Hackathon Win",
      description: "Won Smart India Hackathon with AI-based solution",
      type: "achievement",
      icon: <Award className="w-4 h-4" />
    },
    {
      year: "2021",
      title: "Started Learning ML",
      description: "Dove deep into Machine Learning and AI",
      type: "education",
      icon: <Code className="w-4 h-4" />
    },
    {
      year: "2022",
      title: "First Internship",
      description: "ML Engineer Intern at AI Innovations Inc.",
      type: "work",
      icon: <Briefcase className="w-4 h-4" />
    },
    {
      year: "2023",
      title: "Graduated & Full-time Role",
      description: "Graduated from IIT and joined TechCorp Solutions",
      type: "work",
      icon: <Briefcase className="w-4 h-4" />
    },
    {
      year: "2024",
      title: "15+ Hackathons Won",
      description: "Achieved milestone of winning 15+ hackathons",
      type: "achievement",
      icon: <Award className="w-4 h-4" />
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

  // Early achievements
  const earlyAchievements = [
    {
      title: "Programming Contest Winner",
      description: "Won state-level programming contest in 12th grade",
      year: "2019"
    },
    {
      title: "Science Fair Champion",
      description: "First place in national science fair for AI project",
      year: "2018"
    },
    {
      title: "Coding Bootcamp Graduate",
      description: "Completed advanced coding bootcamp with distinction",
      year: "2020"
    }
  ];

  // Resume content (mock data)
  const resumeContent = {
    personalInfo: personalInfo,
    experience: [
      {
        role: "Senior Full Stack Developer",
        company: "TechCorp Solutions",
        duration: "2023 - Present",
        responsibilities: [
          "Lead development of ML-powered web applications",
          "Manage team of 5 developers",
          "Implement CI/CD pipelines and microservices architecture"
        ]
      }
    ],
    education: [
      {
        degree: "B.Tech Computer Science",
        institution: "Indian Institute of Technology",
        year: "2019-2023",
        grade: "CGPA: 8.7/10"
      }
    ],
    skills: ["Python", "JavaScript", "React", "TensorFlow", "AWS", "Docker"]
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

  return (
    <div className="min-h-screen text-white overflow-x-hidden">
      <StarFieldCanvas />
      
      {/* Header */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
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
                  <div className="space-y-6">
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="text-2xl font-orbitron text-white">Resume</h3>
                      <Button variant="outline" className="border-cosmic-blue text-cosmic-blue">
                        <Download className="w-4 h-4 mr-2" />
                        Download PDF
                      </Button>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Experience */}
                      <div>
                        <h4 className="text-lg font-semibold text-cosmic-cyan mb-3">Experience</h4>
                        {resumeContent.experience.map((exp, index) => (
                          <div key={index} className="mb-4 p-4 bg-white/5 rounded-lg">
                            <h5 className="font-semibold text-white">{exp.role}</h5>
                            <p className="text-cosmic-blue">{exp.company}</p>
                            <p className="text-gray-400 text-sm">{exp.duration}</p>
                            <ul className="text-gray-300 text-sm mt-2 space-y-1">
                              {exp.responsibilities.map((resp, i) => (
                                <li key={i} className="flex items-start space-x-2">
                                  <span className="text-cosmic-blue">•</span>
                                  <span>{resp}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                      
                      {/* Education & Skills */}
                      <div>
                        <h4 className="text-lg font-semibold text-cosmic-cyan mb-3">Education</h4>
                        {resumeContent.education.map((edu, index) => (
                          <div key={index} className="mb-4 p-4 bg-white/5 rounded-lg">
                            <h5 className="font-semibold text-white">{edu.degree}</h5>
                            <p className="text-cosmic-blue">{edu.institution}</p>
                            <p className="text-gray-400 text-sm">{edu.year}</p>
                            <p className="text-gray-300 text-sm">{edu.grade}</p>
                          </div>
                        ))}
                        
                        <h4 className="text-lg font-semibold text-cosmic-cyan mb-3 mt-6">Key Skills</h4>
                        <div className="flex flex-wrap gap-2">
                          {resumeContent.skills.map((skill, index) => (
                            <Badge key={index} variant="outline" className="border-cosmic-blue text-cosmic-blue">
                              {skill}
                            </Badge>
                          ))}
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

      {/* Timeline Section */}
      <section id="timeline" className="py-16 px-4 scroll-reveal">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible.timeline ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-orbitron font-bold gradient-text mb-12 text-center">Journey Timeline</h2>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-cosmic-blue"></div>
              
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    animate={isVisible.timeline ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="relative flex items-start space-x-6"
                  >
                    {/* Timeline dot */}
                    <div className="flex-shrink-0 w-16 h-16 bg-cosmic-blue rounded-full flex items-center justify-center relative z-10">
                      {item.icon}
                    </div>
                    
                    <Card className="glass border-white/10 flex-1">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="text-lg text-white">{item.title}</CardTitle>
                            <CardDescription className="text-cosmic-cyan">{item.description}</CardDescription>
                          </div>
                          <Badge variant="outline" className="border-cosmic-purple text-cosmic-purple">
                            {item.year}
                          </Badge>
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
                <Card key={index} className="glass border-white/10">
                  <CardHeader>
                    <CardTitle className="text-xl text-white flex items-center space-x-3">
                      <Briefcase className="w-6 h-6 text-cosmic-blue" />
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
                            <span className="text-cosmic-blue">✓</span>
                            <span className="text-sm">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-white font-semibold mb-2">Technologies:</h4>
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

      {/* Early Achievements */}
      <section id="early-achievements" className="py-16 px-4 scroll-reveal">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible['early-achievements'] ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-orbitron font-bold gradient-text mb-12 text-center">Early Achievements</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {earlyAchievements.map((achievement, index) => (
                <Card key={index} className="glass border-white/10">
                  <CardHeader>
                    <CardTitle className="text-lg text-white flex items-center space-x-3">
                      <Award className="w-5 h-5 text-cosmic-blue" />
                      <span>{achievement.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-2">{achievement.description}</p>
                    <Badge variant="outline" className="border-cosmic-cyan text-cosmic-cyan">
                      {achievement.year}
                    </Badge>
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
                <a href="/#contact">Get In Touch</a>
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
