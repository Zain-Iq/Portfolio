'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillTabs = [
    {
      id: 'software',
      label: 'Software',
      description: 'Technologies and tools I work with',
      categories: [
        {
          title: 'Languages',
          skills: ['TypeScript', 'JavaScript', 'Python', 'C#', 'Java', 'SQL', 'C', 'C++']
        },
        {
          title: 'Frontend',
          skills: ['React', 'Next.js', 'HTML', 'CSS', 'Tailwind CSS', 'Bootstrap']
        },
        {
          title: 'Backend & Databases',
          skills: ['Node.js', 'Flask', 'DynamoDB', 'MySQL', 'SQLite', 'Firebase']
        },
        {
          title: 'Cloud & DevOps',
          skills: ['AWS', 'Docker', 'Git', 'GitHub', 'CI/CD']
        },
        {
          title: 'Testing & Tools',
          skills: ['Playwright', 'Postman', 'pandas', 'Matplotlib', 'VS Code', 'Visual Studio']
        },
        {
          title: 'AI & Machine Learning',
          skills: ['GitHub Copilot', 'Claude', 'Cursor', 'Scikit-learn', 'LLMs', 'ChatGPT']
        }
      ]
    },
    {
      id: 'devops-it',
      label: 'DevOps/IT',
      description: 'Support, systems, and operational tooling experience',
      categories: [
        {
          title: 'IT Support',
          skills: ['Help Desk Support', 'Troubleshooting', 'Ticketing', 'Hardware Setup', 'User Support']
        },
        {
          title: 'Systems & Tools',
          skills: ['Windows', 'Linux', 'MS Tools', 'Google Workspace', 'Remote Access Tools', 'VPN', 'Jira', 'Virtual Machines', 'Cloud Tools', 'SQL']
        },
        {
          title: 'Scripting & Automation',
          skills: ['Python', 'Bash', 'PowerShell', 'AI Tools']
        },
        {
          title: 'Administration',
          skills: ['Account Setup', 'Permissions Support', 'Device Configuration', 'Software Installation']
        },
        {
          title: 'AI Platforms',
          skills: ['ChatGPT', 'Claude', 'Gemini', 'Copilot', 'Cursor']
        }
      ]
    }
  ];
  const [activeTab, setActiveTab] = useState(skillTabs[0].id);
  const activeSkillTab = skillTabs.find((tab) => tab.id === activeTab) ?? skillTabs[0];

  return (
    <section id="skills" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Skills</h2>
          <p className="text-zinc-400 mb-8">{activeSkillTab.description}</p>
          <div className="inline-flex flex-wrap items-center justify-center gap-3 rounded-full border border-zinc-800 bg-zinc-900/80 p-2">
            {skillTabs.map((tab) => {
              const isActive = tab.id === activeTab;

              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-white text-black'
                      : 'bg-zinc-900 text-zinc-300 hover:bg-zinc-800 hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activeSkillTab.categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-zinc-900 rounded-lg p-6 border border-zinc-800"
            >
              <h3 className="text-xl font-semibold text-white mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-zinc-800 text-zinc-300 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
