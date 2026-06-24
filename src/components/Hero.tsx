'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-blue-600 text-lg mb-4 font-medium"
        >
          Hello, I'm
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-300 bg-clip-text text-transparent"
        >
          INIMA MAHARJAN
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-2xl md:text-3xl text-slate-700 mb-6"
        >
          Web Developer
        </motion.p>

        {/* <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-gray-500 text-lg max-w-2xl mx-auto mb-10"
        >
          "I build scalable web applications using MongoDB, Express.js,
          React.js, and Node.js."
        </motion.p> */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href="#projects"
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-sm"
          >
            View Projects
          </a>
          <a
            href="/resume.pdf"
            download
            className="px-8 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-full font-medium transition-all duration-300"
          >
            Download Resume
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border-2 border-blue-300 text-blue-600 hover:bg-blue-600 hover:text-white rounded-full font-medium transition-all duration-300"
          >
            Contact
          </a>
        </motion.div>
      </div>
    </section>
  );
}
