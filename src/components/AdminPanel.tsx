
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Settings, Plus, Trash2, Edit } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface Project {
  title: string;
  description: string;
  techStack: string[];
  category: string;
  githubUrl?: string;
  liveUrl?: string;
}

interface Skill {
  name: string;
  level: number;
  description: string;
  category: string;
}

interface AdminPanelProps {
  projects: Project[];
  onProjectsUpdate: (projects: Project[]) => void;
  skills: { title: string; skills: Skill[] }[];
  onSkillsUpdate: (skills: { title: string; skills: Skill[] }[]) => void;
}

const AdminPanel = ({ projects, onProjectsUpdate, skills, onSkillsUpdate }: AdminPanelProps) => {
  const { toast } = useToast();
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'projects' | 'skills'>('projects');
  
  // Project form state
  const [projectForm, setProjectForm] = useState<Project>({
    title: '',
    description: '',
    techStack: [],
    category: 'Full Stack',
    githubUrl: '',
    liveUrl: ''
  });
  
  // Skill form state
  const [skillForm, setSkillForm] = useState<Skill>({
    name: '',
    level: 0,
    description: '',
    category: ''
  });
  
  const [techInput, setTechInput] = useState('');
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  const addProject = () => {
    if (!projectForm.title || !projectForm.description) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }
    
    const newProjects = editingIndex !== null 
      ? projects.map((p, i) => i === editingIndex ? projectForm : p)
      : [...projects, projectForm];
    
    onProjectsUpdate(newProjects);
    setProjectForm({
      title: '',
      description: '',
      techStack: [],
      category: 'Full Stack',
      githubUrl: '',
      liveUrl: ''
    });
    setEditingIndex(null);
    toast({
      title: "Success",
      description: editingIndex !== null ? "Project updated!" : "Project added!"
    });
  };

  const addSkill = () => {
    if (!skillForm.name || !skillForm.category || skillForm.level === 0) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    const updatedSkills = [...skills];
    const categoryIndex = updatedSkills.findIndex(cat => cat.title === skillForm.category);
    
    if (categoryIndex !== -1) {
      updatedSkills[categoryIndex].skills.push(skillForm);
    } else {
      updatedSkills.push({
        title: skillForm.category,
        skills: [skillForm]
      });
    }
    
    onSkillsUpdate(updatedSkills);
    setSkillForm({ name: '', level: 0, description: '', category: '' });
    toast({
      title: "Success",
      description: "Skill added!"
    });
  };

  const deleteProject = (index: number) => {
    const newProjects = projects.filter((_, i) => i !== index);
    onProjectsUpdate(newProjects);
    toast({
      title: "Success",
      description: "Project deleted!"
    });
  };

  const editProject = (project: Project, index: number) => {
    setProjectForm(project);
    setEditingIndex(index);
  };

  const addTechToStack = () => {
    if (techInput.trim()) {
      setProjectForm({
        ...projectForm,
        techStack: [...projectForm.techStack, techInput.trim()]
      });
      setTechInput('');
    }
  };

  const removeTech = (techToRemove: string) => {
    setProjectForm({
      ...projectForm,
      techStack: projectForm.techStack.filter(tech => tech !== techToRemove)
    });
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="fixed top-4 right-4 z-50 border-cosmic-blue text-cosmic-blue hover:bg-cosmic-blue/10"
        >
          <Settings className="w-4 h-4 mr-2" />
          Admin
        </Button>
      </SheetTrigger>
      <SheetContent className="w-[600px] sm:w-[540px] overflow-y-auto">
        <SheetHeader>
          <SheetTitle>Admin Panel</SheetTitle>
          <SheetDescription>
            Add and manage your projects and skills in real-time
          </SheetDescription>
        </SheetHeader>

        <div className="mt-6">
          <div className="flex space-x-2 mb-6">
            <Button
              variant={activeTab === 'projects' ? 'default' : 'outline'}
              onClick={() => setActiveTab('projects')}
              size="sm"
            >
              Projects
            </Button>
            <Button
              variant={activeTab === 'skills' ? 'default' : 'outline'}
              onClick={() => setActiveTab('skills')}
              size="sm"
            >
              Skills
            </Button>
          </div>

          {activeTab === 'projects' && (
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">
                    {editingIndex !== null ? 'Edit Project' : 'Add New Project'}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Input
                    placeholder="Project Title"
                    value={projectForm.title}
                    onChange={(e) => setProjectForm({ ...projectForm, title: e.target.value })}
                  />
                  <Textarea
                    placeholder="Project Description"
                    value={projectForm.description}
                    onChange={(e) => setProjectForm({ ...projectForm, description: e.target.value })}
                  />
                  <Select value={projectForm.category} onValueChange={(value) => setProjectForm({ ...projectForm, category: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Machine Learning">Machine Learning</SelectItem>
                      <SelectItem value="Full Stack">Full Stack</SelectItem>
                      <SelectItem value="Hackathons">Hackathons</SelectItem>
                    </SelectContent>
                  </Select>
                  
                  <div>
                    <div className="flex space-x-2 mb-2">
                      <Input
                        placeholder="Add technology"
                        value={techInput}
                        onChange={(e) => setTechInput(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && addTechToStack()}
                      />
                      <Button onClick={addTechToStack} size="sm">Add</Button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {projectForm.techStack.map((tech, i) => (
                        <Badge key={i} variant="secondary" className="cursor-pointer" onClick={() => removeTech(tech)}>
                          {tech} ×
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <Input
                    placeholder="GitHub URL (optional)"
                    value={projectForm.githubUrl}
                    onChange={(e) => setProjectForm({ ...projectForm, githubUrl: e.target.value })}
                  />
                  <Input
                    placeholder="Live URL (optional)"
                    value={projectForm.liveUrl}
                    onChange={(e) => setProjectForm({ ...projectForm, liveUrl: e.target.value })}
                  />
                  
                  <Button onClick={addProject} className="w-full">
                    <Plus className="w-4 h-4 mr-2" />
                    {editingIndex !== null ? 'Update Project' : 'Add Project'}
                  </Button>
                  
                  {editingIndex !== null && (
                    <Button 
                      variant="outline" 
                      onClick={() => {
                        setEditingIndex(null);
                        setProjectForm({
                          title: '',
                          description: '',
                          techStack: [],
                          category: 'Full Stack',
                          githubUrl: '',
                          liveUrl: ''
                        });
                      }}
                      className="w-full"
                    >
                      Cancel Edit
                    </Button>
                  )}
                </CardContent>
              </Card>

              <div className="space-y-3">
                <h3 className="font-semibold">Current Projects ({projects.length})</h3>
                {projects.map((project, index) => (
                  <Card key={index}>
                    <CardContent className="pt-4">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h4 className="font-medium">{project.title}</h4>
                          <p className="text-sm text-gray-600 mt-1">{project.description.substring(0, 100)}...</p>
                          <Badge variant="outline" className="mt-2">{project.category}</Badge>
                        </div>
                        <div className="flex space-x-2 ml-4">
                          <Button size="sm" variant="outline" onClick={() => editProject(project, index)}>
                            <Edit className="w-3 h-3" />
                          </Button>
                          <Button size="sm" variant="destructive" onClick={() => deleteProject(index)}>
                            <Trash2 className="w-3 h-3" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'skills' && (
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Add New Skill</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Input
                    placeholder="Skill Name"
                    value={skillForm.name}
                    onChange={(e) => setSkillForm({ ...skillForm, name: e.target.value })}
                  />
                  <Input
                    placeholder="Category (e.g., Frontend Development)"
                    value={skillForm.category}
                    onChange={(e) => setSkillForm({ ...skillForm, category: e.target.value })}
                  />
                  <Input
                    type="number"
                    min="0"
                    max="100"
                    placeholder="Proficiency Level (0-100)"
                    value={skillForm.level || ''}
                    onChange={(e) => setSkillForm({ ...skillForm, level: parseInt(e.target.value) || 0 })}
                  />
                  <Textarea
                    placeholder="Skill Description"
                    value={skillForm.description}
                    onChange={(e) => setSkillForm({ ...skillForm, description: e.target.value })}
                  />
                  <Button onClick={addSkill} className="w-full">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Skill
                  </Button>
                </CardContent>
              </Card>

              <div className="space-y-3">
                <h3 className="font-semibold">Current Skills by Category</h3>
                {skills.map((category, categoryIndex) => (
                  <Card key={categoryIndex}>
                    <CardHeader>
                      <CardTitle className="text-base">{category.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {category.skills.map((skill, skillIndex) => (
                          <div key={skillIndex} className="flex justify-between items-center p-2 bg-gray-50 rounded">
                            <div>
                              <span className="font-medium">{skill.name}</span>
                              <span className="text-sm text-gray-600 ml-2">({skill.level}%)</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default AdminPanel;
