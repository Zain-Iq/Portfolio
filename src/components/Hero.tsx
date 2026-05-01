'use client';

import { motion } from 'framer-motion';
import { Download, Github, Linkedin, Mail } from 'lucide-react';
import dynamic from 'next/dynamic';

const Typewriter = dynamic(() => import('react-typewriter-effect'), { ssr: false });

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-zinc-900 to-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
            Zain Iqbal
          </h1>
          <div className="text-xl sm:text-2xl text-zinc-300 mb-8 h-16 flex items-center">
            <Typewriter
              textStyle={{
                color: '#d4d4d8',
                fontWeight: 400,
              }}
              startDelay={300}
              cursorColor="#d4d4d8"
              multiText={[
                'Computer Science Student',
                'Full-stack developer',
                'IT support specialist',
                'QA automation specialist',
                'Cloud solutions builder',
                'AI enthusiast',
              ]}
              multiTextDelay={1000}
              typeSpeed={25}
              deleteSpeed={10}
              multiTextLoop
            />
          </div>
          <p className="text-lg text-zinc-400 mb-12 max-w-2xl mx-auto">
            I solve problems by building practical applications using React, TypeScript, Python, C#, SQL, and cloud tools, with experience in testing, automation, and improving real workflows 😁.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-zinc-200 transition-colors"
            >
              View Projects
            </a>
            <a
              href="/resume.pdf"
              className="border border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition-colors flex items-center justify-center gap-2"
            >
              <Download size={20} />
              View Resume
            </a>
            <a
              href="#contact"
              className="border border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition-colors"
            >
              Contact Me
            </a>
          </div>
          <div className="flex justify-center gap-6 mt-12">
            <a href="https://github.com/Zain-Iq" className="text-zinc-400 hover:text-white transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/iqzain" className="text-zinc-400 hover:text-white transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:jobs.zainiqbal@gmail.com" className="text-zinc-400 hover:text-white transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
