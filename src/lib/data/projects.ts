// lib/data/projects.ts
export const projectsData = [
  {
    id: 1,
    title: 'InterviewXpert',
    subtitle: 'AI-Powered Virtual Interview Simulator',
    description: 'Revolutionary web-based interview simulator featuring role-based mock interviews with dynamic AI-generated questions. Built with Flask backend and Next.js frontend for seamless user experience.',
    longDescription: 'InterviewXpert v1.0 is a comprehensive interview preparation platform that uses AI to generate dynamic, role-specific questions for HR, Developer, and other professional roles. The system provides real-time feedback and performance analytics to help users improve their interview skills.',
    tech: ['Next.js', 'Flask', 'Python', 'AI/ML', 'REST API', 'Responsive Design'],
    image: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    category: 'AI/Web Application',
    status: 'Completed',
    year: '2024',
    stats: { 
      views: '12.5K', 
      likes: '89%', 
      comments: '234',
      users: '1.2K+'
    },
    achievements: [
      '🏆 1st Position in University Software Expo',
      '🚀 Lead Next.js Developer & Project Manager',
      '⭐ 95% User Satisfaction Rate',
      '📈 1000+ Mock Interviews Conducted'
    ],
    features: [
      'Role-based Interview Simulation',
      'Dynamic AI Question Generation', 
      'Real-time Performance Analytics',
      'Multi-role Support (HR, Developer, etc.)',
      'Responsive Web Design',
      'User Progress Tracking'
    ],
    role: 'Lead Next.js Developer & Project Manager',
    teamSize: 4,
    duration: '3 months',
    live: '#',
    github: '#',
    demo: '#'
  },
  {
    id: 2,
    title: 'Intruviate',
    subtitle: 'Desktop Interview Simulator with Gesture & Voice',
    description: 'Advanced desktop application featuring real-time gesture tracking for behavioral evaluation and text-to-speech integration. Built with Java and JavaFX using advanced OOP principles.',
    longDescription: 'InterviewXpert v2.0 takes interview simulation to the next level with gesture recognition technology and voice interaction. The desktop application analyzes body language and provides comprehensive feedback on both verbal and non-verbal communication.',
    tech: ['Java', 'JavaFX', 'Computer Vision', 'MaryTTS', 'OOP', 'Gesture Recognition'],
    image: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    category: 'Desktop Application/AI',
    status: 'Completed', 
    year: '2024',
    stats: { 
      views: '8.7K', 
      likes: '94%', 
      comments: '156',
      downloads: '850+'
    },
    achievements: [
      '🎯 Advanced Gesture Recognition Implementation',
      '🎤 Text-to-Speech Integration',
      '💻 Cross-platform Desktop Application',
      '🔧 Advanced OOP Architecture'
    ],
    features: [
      'Real-time Gesture Tracking',
      'Behavioral Evaluation System',
      'Text-to-Speech Question Narration',
      'Advanced OOP Design Patterns',
      'Cross-platform Compatibility',
      'Comprehensive Performance Reports'
    ],
    role: 'Project Manager & JavaFX Developer',
    teamSize: 3,
    duration: '4 months',
    live: '#',
    github: '#',
    demo: '#'
  },
  {
    id: 3,
    title: 'E-Commerce Web Application',
    subtitle: 'Responsive Online Storefront',
    description: 'Modern e-commerce platform built with Next.js featuring server-side rendering, secure payment integration, and authenticated route protection for optimal user experience.',
    longDescription: 'A full-featured e-commerce web application that provides a seamless shopping experience with modern UI/UX design, secure payment processing, and robust user authentication system.',
    tech: ['Next.js', 'TypeScript', 'Payment Gateway', 'Authentication', 'SSR', 'API Routes'],
    image: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    category: 'Full Stack Web Application',
    status: 'Completed',
    year: '2024',
    stats: { 
      views: '15.2K', 
      likes: '91%', 
      comments: '378',
      transactions: '500+'
    },
    achievements: [
      '💳 Secure Payment Gateway Integration',
      '🔐 Advanced Authentication System',
      '⚡ Server-Side Rendering Optimization',
      '📱 Fully Responsive Design'
    ],
    features: [
      'Server-Side Rendering (SSR)',
      'Secure Payment Gateway Integration',
      'User Authentication & Authorization',
      'Route Protection System',
      'Responsive Design',
      'Admin Dashboard',
      'Order Management System',
      'Inventory Tracking'
    ],
    role: 'Full Stack Developer',
    teamSize: 2,
    duration: '5 months',
    live: '#',
    github: '#',
    demo: '#'
  },
  {
    id: 4,
    title: 'AI Chat Assistant',
    subtitle: 'Intelligent Conversational AI Platform',
    description: 'Advanced chatbot platform with natural language processing, context awareness, and multi-domain knowledge integration for enhanced user interactions.',
    tech: ['Python', 'Flask', 'NLP', 'Machine Learning', 'OpenAI API', 'Streamlit'],
    image: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    category: 'AI/Machine Learning',
    status: 'In Development',
    year: '2024',
    stats: { 
      views: '9.8K', 
      likes: '87%', 
      comments: '145',
      interactions: '10K+'
    },
    achievements: [
      '🤖 Advanced NLP Implementation',
      '🧠 Context-Aware Conversations',
      '🔄 Multi-domain Knowledge Base',
      '📊 Real-time Analytics Dashboard'
    ],
    features: [
      'Natural Language Processing',
      'Context-Aware Conversations',
      'Multi-domain Knowledge Integration',
      'Real-time Response Generation',
      'User Intent Recognition',
      'Conversation Analytics'
    ],
    role: 'AI Developer & ML Engineer',
    teamSize: 1,
    duration: '2 months (ongoing)',
    live: '#',
    github: '#',
    demo: '#'
  }
];

export const projectCategories = [
  'All Projects',
  'AI/Machine Learning', 
  'Web Applications',
  'Desktop Applications',
  'Full Stack'
];

export const projectStats = {
  totalProjects: projectsData.length,
  completedProjects: projectsData.filter(p => p.status === 'Completed').length,
  inDevelopment: projectsData.filter(p => p.status === 'In Development').length,
  totalUsers: '3K+',
  totalViews: '46.2K',
  averageRating: '90%'
};

export type Project = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  tech: string[];
  image: string;
  category: string;
  status: string;
  year: string;
  stats: {
    views: string;
    likes: string;
    comments: string;
    [key: string]: string;
  };
  achievements: string[];
  features: string[];
  role: string;
  teamSize: number;
  duration: string;
  live: string;
  github: string;
  demo: string;
};
