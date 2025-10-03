// components/sections/ContactSection.tsx
'use client';

import React, { useState } from 'react';
import { 
  Mail, Phone, MapPin, Send, User, MessageSquare, 
  Clock, CheckCircle, Github, Linkedin, Coffee,
  Zap, Globe, Calendar, ArrowRight, Star, AlertCircle
} from 'lucide-react';
import { NeonCard } from '../ui/NeonCard';
import { SectionTitle } from '../ui/SectionTitle';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear error when user starts typing
    if (error) setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        
        // Auto-hide success message after 10 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 10000);
      } else {
        throw new Error(result.error || 'Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setError(error instanceof Error ? error.message : 'Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'larycodes@gmail.com',
      link: 'mailto:larycodes@gmail.com',
      color: 'text-yellow-400',
      description: 'Drop me a line anytime'
    },
    {
      icon: Phone,
      label: 'Phone/WhatsApp',
      value: '+92 322 0237437',
      link: 'tel:+923220237437',
      color: 'text-green-400',
      description: 'Available 9 AM - 9 PM PKT'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Karachi, Pakistan',
      color: 'text-cyan-400',
      description: 'Open to remote work'
    },
    {
      icon: Clock,
      label: 'Response Time',
      value: '< 24 hours',
      color: 'text-purple-400',
      description: 'Quick turnaround guaranteed'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      name: 'GitHub',
      url: 'https://github.com/larycodes',
      color: 'hover:text-gray-400',
      username: '@larycodes'
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/larycodes',
      color: 'hover:text-blue-400',
      username: 'Muhammad Laraib'
    },
    {
      icon: Mail,
      name: 'Email',
      url: 'mailto:larycodes@gmail.com',
      color: 'hover:text-red-400',
      username: 'larycodes@gmail.com'
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <SectionTitle 
          title="CONTACT"
          subtitle="Let's create something extraordinary together"
          gradientFrom="from-green-400"
          gradientTo="to-blue-400"
        />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Intro */}
            <NeonCard glowColor="yellow" className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500">
                  <Coffee className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-cyan-400 bg-clip-text text-transparent">
                    Let&apos;s Collaborate!
                  </h3>
                  <p className="text-gray-400">Ready to bring your ideas to life</p>
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed mb-6">
                I&apos;m always excited to work on innovative projects and collaborate with amazing people. 
                Whether you have a groundbreaking idea, need technical expertise, or just want to say hi, 
                I&apos;d love to hear from you!
              </p>
              
              <div className="flex items-center gap-2 text-sm text-cyan-400">
                <Zap className="w-4 h-4" />
                <span>Currently available for new projects</span>
              </div>
            </NeonCard>

            {/* Contact Methods */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <NeonCard 
                  key={info.label} 
                  glowColor={index % 2 === 0 ? "cyan" : "yellow"}
                  className="p-6 hover:scale-105 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className={`p-2 rounded-lg bg-black/40 ${info.color}`}>
                      <info.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">{info.label}</h4>
                      <p className="text-xs text-gray-400">{info.description}</p>
                    </div>
                  </div>
                  
                  {info.link ? (
                    <a 
                      href={info.link}
                      className={`text-sm font-medium ${info.color} hover:underline block`}
                    >
                      {info.value}
                    </a>
                  ) : (
                    <span className={`text-sm font-medium ${info.color}`}>
                      {info.value}
                    </span>
                  )}
                </NeonCard>
              ))}
            </div>

            {/* Social Links */}
            <NeonCard glowColor="cyan" className="p-6">
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Connect With Me
              </h3>
              
              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-4 p-3 rounded-lg bg-black/40 hover:bg-black/60 ${social.color} transition-all duration-300 group`}
                  >
                    <div className="p-2 rounded-lg bg-gradient-to-r from-gray-700 to-gray-600 group-hover:from-yellow-400 group-hover:to-cyan-400 transition-all duration-300">
                      <social.icon className="w-4 h-4 group-hover:text-black" />
                    </div>
                    <div>
                      <div className="font-medium">{social.name}</div>
                      <div className="text-sm text-gray-400">{social.username}</div>
                    </div>
                    <ArrowRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  </a>
                ))}
              </div>
            </NeonCard>
          </div> 

          {/* Contact Form */}
          <div>
            <NeonCard glowColor="cyan" className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    Send Message
                  </h3>
                  <p className="text-gray-400">I&apos;ll get back to you within 24 hours</p>
                </div>
              </div>

              {/* Error Message */}
              {error && (
                <div className="mb-6 p-4 bg-red-900/20 border border-red-500/30 rounded-lg flex items-center gap-3">
                  <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                  <div>
                    <p className="text-red-400 font-medium">Failed to send message</p>
                    <p className="text-red-300 text-sm">{error}</p>
                  </div>
                </div>
              )}

              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-green-400 mb-2">Message Sent Successfully!</h3>
                  <p className="text-gray-300 mb-6">Thank you for reaching out. I&apos;ll get back to you soon.</p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black rounded-full font-medium hover:scale-105 transition-all duration-300"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        <User className="w-4 h-4 inline mr-2" />
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-black/40 border border-white/20 rounded-lg focus:border-cyan-400 focus:outline-none text-white placeholder-gray-400 transition-all duration-300"
                        placeholder="Your name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        <Mail className="w-4 h-4 inline mr-2" />
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-black/40 border border-white/20 rounded-lg focus:border-cyan-400 focus:outline-none text-white placeholder-gray-400 transition-all duration-300"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      <MessageSquare className="w-4 h-4 inline mr-2" />
                      Subject (Optional)
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-black/40 border border-white/20 rounded-lg focus:border-cyan-400 focus:outline-none text-white placeholder-gray-400 transition-all duration-300"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      <MessageSquare className="w-4 h-4 inline mr-2" />
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-black/40 border border-white/20 rounded-lg focus:border-cyan-400 focus:outline-none text-white placeholder-gray-400 transition-all duration-300 resize-none"
                      placeholder="Tell me about your project or just say hello..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-lg font-bold hover:scale-105 disabled:scale-100 disabled:opacity-70 transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(0,255,255,0.3)]"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </NeonCard>

            {/* Quick Contact Options */}
            <div className="mt-6 grid grid-cols-2 gap-4">
              <a
                href="mailto:larycodes@gmail.com"
                className="flex items-center justify-center gap-2 p-4 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 border border-yellow-400/30 rounded-lg hover:border-yellow-400/60 transition-all duration-300 group"
              >
                <Mail className="w-5 h-5 text-yellow-400 group-hover:scale-110 transition-transform" />
                <span className="font-medium text-yellow-400">Quick Email</span>
              </a>
              
              <a
                href="https://wa.me/923220237437"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 p-4 bg-gradient-to-r from-green-400/20 to-cyan-500/20 border border-green-400/30 rounded-lg hover:border-green-400/60 transition-all duration-300 group"
              >
                <Phone className="w-5 h-5 text-green-400 group-hover:scale-110 transition-transform" />
                <span className="font-medium text-green-400">WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block p-8 rounded-2xl bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-purple-500/20">
            <Globe className="w-12 h-12 mx-auto mb-4 text-cyan-400" />
            <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-yellow-400 to-cyan-400 bg-clip-text text-transparent">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-300 mb-6 max-w-md mx-auto">
              From concept to deployment, I&apos;ll help you build solutions that make a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#projects"
                className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-full font-medium hover:scale-105 transition-all duration-300"
              >
                View My Work
              </a>
              <a
                href="mailto:larycodes@gmail.com"
                className="px-6 py-3 border border-yellow-400 text-yellow-400 rounded-full font-medium hover:bg-yellow-400 hover:text-black transition-all duration-300"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};