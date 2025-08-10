"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function AboutSection() {
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);

  const skills = [
    {
      category: "Frontend",
      icon: "⚡",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      color: "from-cyan-500 to-blue-500",
      bgColor: "from-cyan-500/10 to-blue-500/10"
    },
    {
      category: "Backend",
      icon: "🔧",
      technologies: ["Node.js", "Express", "MongoDB", "PostgreSQL", "REST APIs"],
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-500/10 to-pink-500/10"
    },
    {
      category: "Tools & DevOps",
      icon: "🚀",
      technologies: ["Git", "Docker", "AWS", "Vercel", "VS Code"],
      color: "from-emerald-500 to-teal-500",
      bgColor: "from-emerald-500/10 to-teal-500/10"
    }
  ];

  const achievements = [
    { number: "50+", label: "Projects Completed", icon: "💼" },
    { number: "3+", label: "Years Experience", icon: "⭐" },
    { number: "100%", label: "Client Satisfaction", icon: "🎯" },
    { number: "24/7", label: "Available Support", icon: "⚡" }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:100px_100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            About <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            I&apos;m a passionate full-stack developer who loves creating digital experiences that make a difference. 
            Let me tell you my story.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Personal Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="mb-10">
              <div className="w-40 h-40 mx-auto lg:mx-0 mb-8 relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-2xl rotate-6 group-hover:rotate-12 transition-transform duration-500" />
                <div className="absolute inset-2 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl flex items-center justify-center">
                  <span className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    AG
                  </span>
                </div>
              </div>
              
              <h3 className="text-3xl font-bold text-white mb-6 text-center lg:text-left">
                Ashish Gaikwad
              </h3>
              
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  🚀 I&apos;m a full-stack developer with a passion for creating exceptional digital experiences. 
                  My journey started 3+ years ago when I wrote my first line of code, and I haven&apos;t looked back since.
                </p>
                
                <p>
                  💡 I specialize in modern web technologies like React, Next.js, and Node.js. 
                  What drives me is solving complex problems and turning ideas into reality through clean, efficient code.
                </p>
                
                <p>
                  🎯 When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing to open source, 
                  or mentoring aspiring developers. I believe in continuous learning and sharing knowledge with the community.
                </p>
              </div>
            </div>

            {/* Achievements */}
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-sm border border-slate-600/30 rounded-xl p-4 text-center hover:border-cyan-400/50 transition-all duration-300 group"
                >
                  <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">
                    {achievement.icon}
                  </div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    {achievement.number}
                  </div>
                  <div className="text-sm text-slate-400">
                    {achievement.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white mb-8 text-center lg:text-left">
              My Technical Arsenal
            </h3>
            
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                onHoverStart={() => setHoveredSkill(index)}
                onHoverEnd={() => setHoveredSkill(null)}
                className={`relative overflow-hidden rounded-xl bg-gradient-to-r ${skill.bgColor} border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 group`}
              >
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${skill.color} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}>
                      {skill.icon}
                    </div>
                    <h4 className="text-xl font-semibold text-white">
                      {skill.category}
                    </h4>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {skill.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 + techIndex * 0.05 }}
                        viewport={{ once: true }}
                        className="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full text-sm font-medium hover:bg-slate-600/50 hover:text-white transition-all duration-300 cursor-default"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
                
                {/* Hover Effect */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: hoveredSkill === index ? 1 : 0 }}
                  className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-5 rounded-xl`}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm border border-slate-600/30 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Let&apos;s Build Something Amazing Together
            </h3>
            <p className="text-slate-300 mb-6">
              Ready to turn your ideas into reality? I&apos;m always excited to work on new projects and challenges.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(6, 182, 212, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-full overflow-hidden transition-all duration-300"
            >
              <span className="relative z-10">Start a Conversation</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-center duration-300" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}