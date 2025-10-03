// lib/data/personalInfo.ts
export const personalInfo = {
  name: "Muhammad Laraib",
  brandName: "LaryCodes",
  tagline: "Full Stack Developer & AI Engineer",
  bio: "Crafting next-generation web experiences with AI-powered intelligence and cutting-edge technology. Passionate about creating innovative solutions that push the boundaries of what's possible.",
  
  contact: {
    email: "larycodes@gmail.com",
    phone: "+92 322 0237437",
    whatsapp: "+92 322 0237437",
    linkedin: "https://linkedin.com/in/larycodes",
    github: "https://github.com/larycodes",
    location: "Karachi, Pakistan"
  },

  roles: [
    'Full Stack Developer',
    'Agentic-AI Engineer', 
    'Software Engineer',
    'Problem Solver'
  ],

  education: [
    {
      degree: "BS in Software Engineering",
      institution: "Sir Syed University of Engineering and Technology",
      period: "2024 - ongoing",
      status: "Current"
    },
    {
      degree: "Agentic AI Engineering",
      institution: "GIAIC, Governor House, Karachi", 
      period: "2024 - ongoing",
      status: "Current"
    },
    {
      degree: "Computer Science (Second Year)",
      institution: "Gov. Superior Science College",
      period: "2022 - 2024",
      status: "Completed"
    }
  ],

  achievements: [
    "🏆 1st Position in University Software Expo january 2025 (InterviewXpert)",
    "🚀 Lead Developer & Project Manager",
    "🤖 AI Integration",
    "💼 Full Stack Development"
  ],

  socialLinks: [
    {
      name: "GitHub",
      url: "https://github.com/larycodes",
      icon: "Github"
    },
    {
      name: "LinkedIn", 
      url: "https://linkedin.com/in/larycodes",
      icon: "Linkedin"
    },
    {
      name: "Email",
      url: "mailto:larycodes@gmail.com", 
      icon: "Mail"
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/+923220237437",
      icon: "MessageCircle"
    }
  ]
};

export type PersonalInfo = typeof personalInfo;