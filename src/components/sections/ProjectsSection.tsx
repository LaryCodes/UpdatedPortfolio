// components/sections/ProjectsSection.tsx
'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { 
  Play, ExternalLink, Eye, Heart, MessageCircle, 
  Zap, Github, Calendar, Users, Clock, Award,
  Star, Rocket, Trophy, Target, Brain, Monitor,
  ShoppingCart, Code2, Coffee, Server
} from 'lucide-react';
import { NeonCard } from '../ui/NeonCard';
import { SectionTitle } from '../ui/SectionTitle';
import Link from 'next/link';
import { projectsData as importedProjects, projectCategories as projectCategoriesData, projectStats as importedStats } from '@/lib/data/projects';

// Transform imported data to match component's expected format
const projectsData = importedProjects.map((project, index) => ({
  id: project.id,
  title: project.title,
  category: project.category,
  categories: project.categories || [project.category],
  description: project.description,
  technologies: project.tech,
  image: project.image,
  status: project.status,
  featured: index < 6, // First 6 projects are featured
  stats: {
    views: project.stats.views,
    likes: parseInt(project.stats.likes) || 0,
    comments: parseInt(project.stats.comments) || 0
  },
  highlights: project.achievements,
  demoUrl: project.live,
  githubUrl: project.github,
  year: project.year
}));

// Simplified categories
const projectCategories = projectCategoriesData;

const projectStats = {
  totalProjects: String(importedStats.totalProjects),
  completedProjects: String(importedStats.completedProjects),
  totalViews: importedStats.totalViews,
  averageRating: importedStats.averageRating
};

export const ProjectsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Projects');
  const [showAll, setShowAll] = useState(false);

  const filteredProjects = selectedCategory === 'All Projects' 
    ? projectsData 
    : projectsData.filter(project => project.categories.includes(selectedCategory));

  // Show only 6 projects initially, all when "showAll" is true
  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'text-green-400 bg-green-400/20';
      case 'In Development': return 'text-yellow-400 bg-yellow-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI Systems': return Brain;
      case 'Full-Stack Applications': return Code2;
      case 'Web Experiences': return Monitor;
      case 'Products & SaaS': return Rocket;
      case 'Systems & Automation': return Server;
      default: return Rocket;
    }
  };

  return (
    <section id="projects" className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <SectionTitle 
          title="PROJECTS"
          subtitle="Revolutionary solutions that push boundaries"
          gradientFrom="from-cyan-400"
          gradientTo="to-blue-400"
        />

        {/* Project Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {[
            { label: 'Total Projects', value: projectStats.totalProjects, icon: Rocket, color: 'text-yellow-400' },
            { label: 'Completed', value: projectStats.completedProjects, icon: Trophy, color: 'text-green-400' },
            { label: 'Total Views', value: projectStats.totalViews, icon: Eye, color: 'text-cyan-400' },
            { label: 'Avg Rating', value: projectStats.averageRating, icon: Star, color: 'text-purple-400' }
          ].map((stat, index) => (
            <div key={stat.label} className="text-center p-6 rounded-xl bg-black/40 border border-white/10 hover:border-white/30 transition-all duration-300 group">
              <stat.icon className={`w-8 h-8 mx-auto mb-3 ${stat.color} group-hover:scale-110 transition-transform duration-300`} />
              <div className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-cyan-400 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {projectCategories.map((category) => {
            const IconComponent = getCategoryIcon(category);
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-black shadow-[0_0_20px_rgba(255,255,0,0.3)] scale-105'
                    : 'bg-black/40 text-gray-300 border border-white/20 hover:border-yellow-400/50 hover:text-yellow-400 hover:scale-105'
                }`}
              >
                <IconComponent className="w-4 h-4" />
                {category}
              </button>
            );
          })}
        </div>

        {/* Projects Grid - Fixed height cards */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <NeonCard 
              key={project.id} 
              className="group hover:-translate-y-4 transition-all duration-700 cursor-pointer overflow-hidden flex flex-col h-full"
              glowColor={index % 2 === 0 ? "cyan" : "yellow"}
            >
              {/* Project Image */}
              <div 
                className="w-full h-48 rounded-xl mb-6 relative overflow-hidden"
                style={project.image.startsWith('linear-gradient') ? { background: project.image } : {}}
              >
                {project.image.startsWith('linear-gradient') ? null : (
                  <Image 
                      src={project.image} 
                      alt={project.title} 
                      fill
                      className="object-cover" 
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                )}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-yellow-400 to-orange-500 text-black">
                    ⭐ Featured
                  </div>
                )}
                
                {/* Status Badge */}
                <div className={`absolute top-4 ${project.featured ? 'left-24' : 'left-4'} px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                  {project.status}
                </div>
                
                {/* Action Buttons */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <a 
                    target='_blank'
                    rel="noopener noreferrer"
                    href={project.demoUrl}
                    className="p-2 bg-black/50 rounded-full hover:bg-yellow-400/80 hover:text-black transition-all duration-300"
                    title="Live Demo"
                  >
                    <Play className="w-4 h-4" />
                  </a>
                  <a 
                    target='_blank'
                    rel="noopener noreferrer"
                    href={project.githubUrl}
                    className="p-2 bg-black/50 rounded-full hover:bg-cyan-400/80 hover:text-black transition-all duration-300"
                    title="View Code"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
                
                {/* Stats Overlay */}
                <div className="absolute bottom-4 left-4 flex gap-4 text-sm">
                  <div className="flex items-center gap-1 bg-black/60 px-2 py-1 rounded-full">
                    <Eye className="w-3 h-3" />
                    <span>{project.stats.views}</span>
                  </div>
                  <div className="flex items-center gap-1 bg-black/60 px-2 py-1 rounded-full">
                    <Heart className="w-3 h-3" />
                    <span>{project.stats.likes}</span>
                  </div>
                  <div className="flex items-center gap-1 bg-black/60 px-2 py-1 rounded-full">
                    <MessageCircle className="w-3 h-3" />
                    <span>{project.stats.comments}</span>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="space-y-4 flex-1 flex flex-col">
                {/* Title */}
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent group-hover:from-yellow-400 group-hover:to-cyan-400 transition-all duration-300">
                    {project.title}
                  </h3>
                </div>

                {/* Description - Fixed height with line clamp */}
                <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2 min-h-[48px]">
                  {project.highlights.slice(0, 2).map((highlight, idx) => (
                    <div key={idx} className="text-xs text-gray-400 flex items-center gap-2">
                      <div className="w-1 h-1 bg-gradient-to-r from-yellow-400 to-cyan-400 rounded-full"></div>
                      {highlight}
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 min-h-[60px]">
                  {project.technologies.slice(0, 4).map((tech, idx) => (
                    <span 
                      key={tech} 
                      className={`text-xs px-2 py-1 rounded-full h-fit ${
                        idx % 2 === 0 
                          ? 'bg-yellow-400/20 text-yellow-400 border border-yellow-400/30' 
                          : 'bg-cyan-400/20 text-cyan-400 border border-cyan-400/30'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="text-xs px-2 py-1 rounded-full bg-gray-400/20 text-gray-400 border border-gray-400/30 h-fit">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>

                {/* Action Links - Push to bottom */}
                <div className="flex gap-3 pt-2 mt-auto">>
                  <a 
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black rounded-full font-medium hover:scale-105 transition-all duration-300 text-sm"
                  >
                    <ExternalLink className="w-3 h-3" />
                    Details
                  </a>
                  <a 
                    href={project.githubUrl}
                    className="px-4 py-2 border border-cyan-400 text-cyan-400 rounded-full hover:bg-cyan-400 hover:text-black transition-all duration-300 flex items-center gap-2 text-sm"
                  >
                    <Github className="w-3 h-3" />
                    Code
                  </a>
                </div>
              </div>
            </NeonCard>
          ))}
        </div>

        {/* View All / Show Less Button */}
        {filteredProjects.length > 6 && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-black rounded-full font-bold hover:scale-110 transition-all duration-300 shadow-[0_0_30px_rgba(0,255,255,0.3)]"
            >
              {showAll ? 'Show Less' : `View All ${filteredProjects.length} Projects`}
            </button>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-block p-8 rounded-2xl bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-purple-500/20">
            <Coffee className="w-12 h-12 mx-auto mb-4 text-yellow-400" />
            <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-yellow-400 to-cyan-400 bg-clip-text text-transparent">
              Let&apos;s Build Something Amazing Together
            </h3>
            <p className="text-gray-300 mb-6 max-w-md mx-auto">
              Have an exciting project in mind? Let&apos;s collaborate and create the next breakthrough solution.
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black rounded-full font-bold hover:scale-110 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,0,0.3)]">
              <Link href="https://wa.me/923220237437" target="_blank" rel="noopener noreferrer">
              Start a Project
              </Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};