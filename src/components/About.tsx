'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-blue-50/50">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          About Me
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-2xl p-8 border border-blue-100 shadow-sm"
        >
          <p className="text-slate-600 text-lg leading-relaxed">
            I'm hard of hearing, and I believe everyone deserves equal access to
            digital experiences. I strive to reflect that belief in every
            project I build. I've completed my BCA and have a background in
            graphic design, which brings a creative perspective to my
            development work. My design experience helps me build user
            interfaces that are not only functional but also visually engaging.
            Currently, I'm learning the MERN stack (MongoDB, Express.js, React,
            and Node.js) and Next.js as I work toward becoming a full-stack
            developer. This journey is helping me understand both frontend and
            backend development, enabling me to build complete, scalable web
            applications. I'm passionate about continuous learning, writing
            clean code, and creating accessible, high-quality digital products.
            Whether it's improving performance, collaborating on projects, or
            designing inclusive user experiences, I'm always eager to grow and
            make a meaningful impact.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="text-center p-4 bg-blue-100 rounded-xl">
              <p className="text-3xl font-bold text-blue-700">3+</p>
              <p className="text-slate-500">Years Experience</p>
            </div>
            <div className="text-center p-4 bg-blue-100 rounded-xl">
              <p className="text-3xl font-bold text-blue-700">30+</p>
              <p className="text-slate-500">Projects Completed</p>
            </div>
            <div className="text-center p-4 bg-cyan-100 rounded-xl">
              <p className="text-3xl font-bold text-cyan-700">10+</p>
              <p className="text-slate-500">Happy Clients</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
