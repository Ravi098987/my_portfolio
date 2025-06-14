
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Mail, Github, Linkedin, MapPin, Calendar, Award, Code, GraduationCap } from 'lucide-react';
import StarFieldCanvas from '@/components/StarField';

const About = () => {
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});

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

  // Education
  const education = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "Indian Institute of Technology (IIT)",
      year: "2019-2023",
      grade: "CGPA: 8.7/10",
      achievements: ["Dean's List for 3 consecutive semesters", "Best Final Year Project Award"]
    },
    {
      degree: "Machine Learning Specialization",
      institution: "Stanford University (Online)",
      year: "2022",
      grade: "Certificate with Honors",
      achievements: ["Top 5% in the cohort", "Completed all programming assignments with distinction"]
    }
  ];

  // Experience
  const experience = [
    {
      role: "Senior Full Stack Developer",
      company: "TechCorp Solutions",
      duration: "2023 - Present",
      description: "Lead development of ML-powered web applications serving 100K+ users. Built microservices architecture and implemented CI/CD pipelines.",
      achievements: [
        "Reduced application load time by 40% through optimization",
        "Led a team of 5 developers on multiple projects",
        "Implemented ML models increasing user engagement by 25%"
      ]
    },
    {
      role: "Machine Learning Engineer Intern",
      company: "AI Innovations Inc.",
      duration: "2022 - 2023",
      description: "Developed computer vision models for autonomous systems and natural language processing solutions for customer service automation.",
      achievements: [
        "Built CV model with 94% accuracy for object detection",
        "Created NLP chatbot reducing customer service costs by 30%",
        "Published research paper on transformer architectures"
      ]
    }
  ];

  // Certifications
  const certifications = [
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      year: "2023",
      credentialId: "AWS-SA-2023-RS001"
    },
    {
      name: "TensorFlow Developer Certificate",
      issuer: "Google",
      year: "2022",
      credentialId: "TF-DEV-2022-RS002"
    },
    {
      name: "Full Stack Web Development",
      issuer: "Meta",
      year: "2021",
      credentialId: "META-FS-2021-RS003"
    }
  ];

  // Technical Skills with detailed proficiency
  const technicalSkills = {
    "Programming Languages": [
      { name: "Python", level: 95 },
      { name: "JavaScript/TypeScript", level: 90 },
      { name: "Java", level: 80 },
      { name: "C++", level: 75 }
    ],
    "Machine Learning": [
      { name: "TensorFlow/Keras", level: 90 },
      { name: "PyTorch", level: 88 },
      { name: "Scikit-learn", level: 92 },
      { name: "OpenCV", level: 85 },
      { name: "Pandas/NumPy", level: 95 }
    ],
    "Web Development": [
      { name: "React/Next.js", level: 93 },
      { name: "Node.js/Express", level: 88 },
      { name: "MongoDB", level: 85 },
      { name: "PostgreSQL", level: 82 },
      { name: "GraphQL", level: 78 }
    ],
    "DevOps & Cloud": [
      { name: "AWS", level: 80 },
      { name: "Docker", level: 85 },
      { name: "Kubernetes", level: 75 },
      { name: "CI/CD", level: 83 }
    ]
  };

  // Achievements
  const achievements = [
    {
      title: "Best Innovation Award",
      description: "Won at National Level Hackathon 2023 for AI-powered traffic management system",
      year: "2023"
    },
    {
      title: "Open Source Contributor",
      description: "500+ contributions to TensorFlow and React ecosystem projects",
      year: "2022-2024"
    },
    {
      title: "Research Publication",
      description: "Co-authored paper on 'Efficient Deep Learning for Edge Computing' - IEEE Conference",
      year: "2023"
    },
    {
      title: "Hackathon Champion",
      description: "Winner of 15+ hackathons including Smart India Hackathon and Microsoft Imagine Cup",
      year: "2021-2024"
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
                <CardTitle className="text-3xl font-orbitron gradient-text">Personal Information</CardTitle>
              </CardHeader>
              <CardContent>
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
              </CardContent>
            </Card>
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
