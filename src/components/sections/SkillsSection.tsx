// components/sections/SkillsSection.tsx
'use client';

import React from 'react';
import { 
  Code, Server, Brain, Layers, Briefcase, Monitor,
  Database, Globe, GitBranch, Cloud, Flame, Users,
  Zap, RotateCcw, ArrowDown, RefreshCw, MessageSquare,
  Clock, Crown, Code2, Github, MousePointer, BarChart3
} from 'lucide-react';
import { NeonCard } from '../ui/NeonCard';
import { SectionTitle } from '../ui/SectionTitle';
import { mainSkills, skillsData } from '../../lib/data/skills';

export const SkillsSection = () => {
  const iconMap = {
    Code, Server, Brain, Layers, Briefcase, Monitor,
    Database, Globe, GitBranch, Cloud, Flame, Users,
    Zap, RotateCcw, ArrowDown, RefreshCw, MessageSquare,
    Clock, Crown, Code2, Github, MousePointer, BarChart3
  };

  const skillCategories = [
    { title: 'Languages', skills: skillsData.languages, color: 'yellow' },
    { title: 'Frameworks', skills: skillsData.frameworks, color: 'cyan' },
    { title: 'Tools', skills: skillsData.tools, color: 'yellow' },
    { title: 'Methodologies', skills: skillsData.methodologies, color: 'cyan' }
  ];

  return (
    <section id="skills" className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <SectionTitle 
          title="SKILLS"
          subtitle="Technologies that power my creations"
          gradientFrom="from-purple-400"
          gradientTo="to-pink-400"
        />
        
        {/* Main Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {mainSkills.map((skill, index) => {
            const IconComponent = iconMap[skill.icon as keyof typeof iconMap];
            
            return (
              <NeonCard 
                key={skill.name} 
                className="group hover:rotate-1 transition-all duration-500" 
                glowColor={index % 2 === 0 ? "yellow" : "cyan"}
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className={`p-3 rounded-full bg-gradient-to-r ${skill.color}`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{skill.name}</h3>
                    <p className="text-sm text-gray-400">{skill.description}</p>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-2000 shadow-lg`}
                      style={{ 
                        width: `${skill.level}%`,
                        animation: `fillBar 2s ease-out ${index * 0.2}s both`
                      }}
                    ></div>
                  </div>
                  <span className="absolute -top-8 right-0 text-2xl font-bold bg-gradient-to-r from-yellow-400 to-cyan-400 bg-clip-text text-transparent">
                    {skill.level}%
                  </span>
                </div>
              </NeonCard>
            );
          })}
        </div>

        {/* Detailed Skills Categories */}
        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <div key={category.title}>
              <h3 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-yellow-400 to-cyan-400 bg-clip-text text-transparent">
                {category.title}
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {category.skills.map((skill, skillIndex) => {
                  const IconComponent = iconMap[skill.icon as keyof typeof iconMap];
                  
                  return (
                    <div 
                      key={skill.name}
                      className={`group p-4 rounded-xl bg-black/40 border border-white/10 hover:border-${category.color === 'yellow' ? 'yellow' : 'cyan'}-400/50 transition-all duration-300 hover:scale-105`}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`p-2 rounded-lg bg-gradient-to-r ${skill.color}`}>
                          <IconComponent className="w-4 h-4 text-white" />
                        </div>
                        <span className="font-medium text-sm">{skill.name}</span>
                      </div>
                      
                      <div className="relative">
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div 
                            className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1500`}
                            style={{ 
                              width: `${skill.level}%`,
                              animation: `fillBar 1.5s ease-out ${(categoryIndex * 0.5) + (skillIndex * 0.1)}s both`
                            }}
                          ></div>
                        </div>
                        <span className="absolute -top-6 right-0 text-xs font-bold text-gray-400">
                          {skill.level}%
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Soft Skills
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillsData.softSkills.map((skill, index) => {
              const IconComponent = iconMap[skill.icon as keyof typeof iconMap];
              
              return (
                <div 
                  key={skill.name}
                  className="group p-6 rounded-xl bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/20 hover:border-purple-400/50 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-3 rounded-full bg-gradient-to-r ${skill.color}`}>
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold">{skill.name}</h4>
                  </div>
                  
                  <div className="relative">
                    <div className="w-full bg-gray-700 rounded-full h-3">
                      <div 
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-2000`}
                        style={{ 
                          width: `${skill.level}%`,
                          animation: `fillBar 2s ease-out ${index * 0.3}s both`
                        }}
                      ></div>
                    </div>
                    <span className="absolute -top-7 right-0 text-sm font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                      {skill.level}%
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* CSS Animation */}
      <style jsx>{`
        @keyframes fillBar {
          from {
            width: 0%;
          }
          to {
            width: var(--final-width);
          }
        }
      `}</style>
    </section>
  );
};