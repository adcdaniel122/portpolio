'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12 rounded-full"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-full h-[400px] overflow-hidden rounded-lg">
                <Image
                  src="https://images.pexels.com/photos/4195342/pexels-photo-4195342.jpeg"
                  alt="John Doe"
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform hover:scale-105 duration-500"
                  priority
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-40 h-40 rounded-lg border-8 border-background bg-muted/30 z-10 flex items-center justify-center">
                <p className="text-sm font-medium text-center">
                  <span className="block text-4xl font-bold text-primary mb-1">5+</span>
                  Years of Experience
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold mb-4">
                I am a <span className="text-primary">Full-Stack Developer</span> with a passion for creating
                beautiful digital experiences
              </h3>
              
              <p className="text-muted-foreground mb-4">
                Hi there! 
                I’m a full‑stack web developer who brings ideas to life with polished, mobile‑first applications. I thrive on turning concepts into user‑friendly experiences, and love solving challenges end to end—from the initial wireframe to a live, SEO‑optimized site.
                Responsive Front‑End: Craft pixel‑perfect UIs using HTML, CSS, JavaScript (vanilla or with React/Next.js, Vue/Nuxt, Laravel/Php), TypeScript, Tailwind CSS and Styled Components.
              </p>
              
              <p className="text-muted-foreground mb-6">
                Build Optimization & Testing: Streamline builds with Webpack/Turbopack and ensure reliability through unit and integration tests.

                Real‑Time & API Integration: Connect data seamlessly via Firebase (Realtime Database & Functions) and custom REST APIs built with Node.js, Django or Flask.
                Hosting & SEO: Manage hosting on Firebase and Vercel, custom domains, DNS, and Search Console; optimize performance and PageSpeed to land top‑3 Google rankings.
                I’m passionate about learning new technologies and applying them to boost user engagement, retention, and overall product success.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="font-medium">Name:</p>
                  <p className="text-muted-foreground">Daniel Andronache</p>
                </div>
                <div>
                  <p className="font-medium">Email:</p>
                  <p className="text-muted-foreground"></p>
                </div>
                <div>
                  <p className="font-medium">Location:</p>
                  <p className="text-muted-foreground">Suceava, Romania</p>
                </div>
                <div>
                  <p className="font-medium">Availability:</p>
                  <p className="text-muted-foreground">Freelance & Full-time</p>
                </div>
              </div>
              
              <Button className="group">
                <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                Download Resume
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}