'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Progress } from '@/components/ui/progress';

const skillsData = [
  { name: 'React / Next.js', level: 95, category: 'frontend' },
  { name: 'Vue2 / Vue3 / Nuxt.js', level: 100, category: 'frontend' },
  { name: 'React Native / Flutter / Ionic', level: 100, category: 'frontend' },
  { name: 'Payload CMS / Strapi / Wordpress', level: 95, category: 'frontend' },
  { name: 'Laravel / Php', level: 95, category: 'frontend' },
  { name: 'TypeScript / JavaScript', level: 95, category: 'frontend' },
  { name: 'HTML5 / CSS3', level: 92, category: 'frontend' },
  { name: 'Tailwind CSS', level: 100, category: 'frontend' },
  { name: 'Supabase / Firebase / RLS / sequelize / Stripe', level: 100, category: 'backend' },
  { name: 'Node.js', level: 100, category: 'backend' },
  { name: 'Express.js', level: 100, category: 'backend' },
  { name: 'MongoDB', level: 100, category: 'backend' },
  { name: 'PostgreSQL', level: 100, category: 'backend' },
  { name: 'Figma / Adobe XD', level: 85, category: 'design' },
  { name: 'Git / GitHub', level: 100, category: 'tools' },
  { name: 'Docker', level: 90, category: 'tools' },
  { name: 'Devops', level: 90, category: 'tools' },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // Filter skills by category
  const frontendSkills = skillsData.filter(skill => skill.category === 'frontend');
  const backendSkills = skillsData.filter(skill => skill.category === 'backend');
  const designTools = skillsData.filter(skill => 
    skill.category === 'design' || skill.category === 'tools'
  );

  return (
    <section id="skills" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">My Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            I have worked with a variety of technologies in the web & mobile development world.
            Here is an overview of my technical skills and proficiency levels.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <span className="w-2 h-8 bg-chart-1 mr-3 inline-block rounded-full"></span>
                Frontend Development
              </h3>
              
              <div className="space-y-6">
                {frontendSkills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2"/>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <span className="w-2 h-8 bg-chart-2 mr-3 inline-block rounded-full"></span>
                Backend Development
              </h3>
              
              <div className="space-y-6">
                {backendSkills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="md:col-span-2"
            >
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <span className="w-2 h-8 bg-chart-4 mr-3 inline-block rounded-full"></span>
                Design & Tools
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {designTools.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}