// lib/data/skills.ts
export const skillsData = {
  languages: [
    { name: "Python", level: 90, icon: "Code", color: "from-blue-400 to-blue-600" },
    { name: "JavaScript", level: 95, icon: "Code", color: "from-yellow-400 to-yellow-600" },
    { name: "TypeScript", level: 88, icon: "Code", color: "from-blue-500 to-indigo-600" },
    { name: "Java", level: 85, icon: "Code", color: "from-red-400 to-orange-500" }
  ],

  frameworks: [
    { name: "Next.js", level: 95, icon: "Globe", color: "from-gray-700 to-gray-900" },
    { name: "React", level: 92, icon: "Globe", color: "from-cyan-400 to-blue-500" },
    { name: "Flask", level: 88, icon: "Server", color: "from-green-400 to-green-600" },
    { name: "Streamlit", level: 85, icon: "BarChart3", color: "from-red-400 to-pink-500" },
    { name: "JavaFX", level: 80, icon: "Monitor", color: "from-purple-400 to-purple-600" }
  ],

  tools: [
    { name: "Git", level: 90, icon: "GitBranch", color: "from-orange-400 to-red-500" },
    { name: "VS Code", level: 95, icon: "Code2", color: "from-blue-400 to-blue-600" },
    { name: "GitHub", level: 92, icon: "Github", color: "from-gray-600 to-gray-800" },
    { name: "Firebase", level: 85, icon: "Flame", color: "from-yellow-400 to-orange-500" },
    { name: "MongoDB Atlas", level: 88, icon: "Database", color: "from-green-400 to-green-600" },
    { name: "Azure", level: 82, icon: "Cloud", color: "from-blue-500 to-cyan-500" },
    { name: "Netlify", level: 87, icon: "Globe", color: "from-teal-400 to-cyan-500" },
    { name: "Render", level: 85, icon: "Server", color: "from-purple-500 to-indigo-600" }
  ],

  platforms: [
    { name: "NetBeans", level: 83, icon: "Code", color: "from-blue-400 to-blue-600" },
    { name: "IntelliJ IDEA", level: 86, icon: "Code", color: "from-red-400 to-orange-500" },
    { name: "Cursor", level: 88, icon: "MousePointer", color: "from-purple-400 to-pink-500" }
  ],

  methodologies: [
    { name: "Agile", level: 90, icon: "Zap", color: "from-green-400 to-blue-500" },
    { name: "Scrum", level: 88, icon: "Users", color: "from-blue-400 to-purple-500" },
    { name: "V-Model", level: 85, icon: "GitBranch", color: "from-yellow-400 to-orange-500" },
    { name: "Spiral", level: 82, icon: "RotateCcw", color: "from-purple-400 to-pink-500" },
    { name: "Waterfall", level: 80, icon: "ArrowDown", color: "from-blue-400 to-cyan-500" },
    { name: "SDLC", level: 92, icon: "RefreshCw", color: "from-green-400 to-teal-500" }
  ],

  softSkills: [
    { name: "Communication", level: 95, icon: "MessageSquare", color: "from-blue-400 to-purple-500" },
    { name: "Team Collaboration", level: 92, icon: "Users", color: "from-green-400 to-blue-500" },
    { name: "Time Management", level: 88, icon: "Clock", color: "from-yellow-400 to-orange-500" },
    { name: "Problem Solving", level: 94, icon: "Brain", color: "from-purple-400 to-pink-500" },
    { name: "Leadership", level: 90, icon: "Crown", color: "from-gold-400 to-yellow-500" },
    { name: "Project Management", level: 89, icon: "Briefcase", color: "from-indigo-400 to-purple-500" }
  ]
};

// Main skills for the hero section
export const mainSkills = [
  { 
    name: 'Frontend Development', 
    level: 95, 
    icon: 'Code', 
    color: 'from-yellow-400 to-orange-500',
    description: 'Next.js, React, TypeScript, Modern UI/UX'
  },
  { 
    name: 'Backend Engineering', 
    level: 92, 
    icon: 'Server', 
    color: 'from-blue-400 to-cyan-500',
    description: 'Flask, Node.js, API Development, Database Design'
  },
  { 
    name: 'AI/ML Integration', 
    level: 88, 
    icon: 'Brain', 
    color: 'from-purple-400 to-pink-500',
    description: 'AI-Powered Applications, Machine Learning, Automation'
  },
  { 
    name: 'Full Stack Development', 
    level: 94, 
    icon: 'Layers', 
    color: 'from-green-400 to-blue-500',
    description: 'End-to-end application development, System Architecture'
  },
  { 
    name: 'Project Management', 
    level: 90, 
    icon: 'Briefcase', 
    color: 'from-red-400 to-yellow-500',
    description: 'Agile, Scrum, Team Leadership, Delivery Management'
  },
  { 
    name: 'Desktop Applications', 
    level: 85, 
    icon: 'Monitor', 
    color: 'from-indigo-400 to-purple-500',
    description: 'JavaFX, Desktop UI, Gesture Recognition, Voice Integration'
  }
];

export type Skill = {
  name: string;
  level: number;
  icon: string;
  color: string;
  description?: string;
};

export type SkillCategory = {
  [key: string]: Skill[];
};