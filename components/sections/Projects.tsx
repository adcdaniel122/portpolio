'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, Github, Layers } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

// Sample project data
const projectsData = [
  {
    id: 1,
    title: 'E-Commerce Dashboard',
    description: 'A comprehensive dashboard for e-commerce businesses with analytics, inventory management, and customer insights.',
    image: 'https://images.pexels.com/photos/8148457/pexels-photo-8148457.jpeg',
    tags: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    liveUrl: 'https://example.com',
    repoUrl: 'https://github.com',
    featured: true,
  },
  {
    id: 2,
    title: 'Finance Tracker App',
    description: 'Personal finance application helping users track expenses, set budgets, and visualize spending patterns.',
    image: 'https://images.pexels.com/photos/6804581/pexels-photo-6804581.jpeg',
    tags: ['Next.js', 'TypeScript', 'Supabase', 'Recharts', 'Tailwind CSS'],
    liveUrl: 'https://example.com',
    repoUrl: 'https://github.com',
    featured: true,
  },
  {
    id: 3,
    title: 'AI Content Generator',
    description: 'Web application that leverages AI to help users create blog posts, social media content, and marketing copy.',
    image: 'https://images.pexels.com/photos/8367221/pexels-photo-8367221.jpeg',
    tags: ['React', 'Next.js', 'OpenAI API', 'Vercel AI SDK', 'Tailwind CSS'],
    liveUrl: 'https://example.com',
    repoUrl: 'https://github.com',
    featured: true,
  },
  {
    id: 4,
    title: 'Real Estate Listing Platform',
    description: 'Property listing website with search functionality, filters, and interactive maps for finding homes.',
    image: 'https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg',
    tags: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Google Maps API'],
    liveUrl: 'https://example.com',
    repoUrl: 'https://github.com',
    featured: false,
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  
  // Get featured projects
  const featuredProjects = projectsData.filter(project => project.featured);
  
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">My Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Take a look at some of my featured projects. Each project reflects my passion for creating 
            intuitive and impactful digital experiences.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <Card className="h-full overflow-hidden group hover:shadow-lg transition-all duration-300 border-border/50">
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-500 group-hover:scale-105"
                    />
                    {project.featured && (
                      <div className="absolute top-3 right-3">
                        <Badge className="bg-primary text-white">Featured</Badge>
                      </div>
                    )}
                  </div>
                  
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, i) => (
                        <Badge key={i} variant="secondary" className="bg-muted/50">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex space-x-3">
                      <Button size="sm" variant="outline" asChild>
                        <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </Link>
                      </Button>
                      <Button size="sm" variant="outline" asChild>
                        <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" asChild>
              <Link href="/projects">
                <Layers className="h-4 w-4 mr-2" />
                View All Projects
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}