'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const [logoError, setLogoError] = useState(false);
  const logoSrc = logoError ? 'file.svg' : 'my logo.PNG';

  return (
    <footer className="bg-black border-t border-zinc-800 py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <motion.img
            src={logoSrc}
            alt="Zain Iqbal logo"
            className="h-12 w-12 object-contain"
            onError={() => setLogoError(true)}
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          />
          <div>
            <p className="text-white font-semibold">Zain Iqbal</p>
            <p className="text-zinc-500 text-sm">This is copyright for Zain Iqbal. All rights reserved.</p>
          </div>
        </div>
        <p className="text-zinc-500 text-sm">Built with Next.js, TypeScript, Tailwind CSS</p>
      </div>
    </footer>
  );
};

export default Footer;
