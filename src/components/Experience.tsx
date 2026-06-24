'use client';

import { motion } from 'framer-motion';

const experiences = [
  {
    company: 'Mindrisers Technologies',
    position: 'Junior Frontend Developer',
    duration: 'Dec 2025 - Present',
    achievements: [
      'Developed modern web applications with React.js, Next.js and TypeScript.',
      'Built responsive UI components using Tailwind CSS.',
      'Integrated REST APIs and optimized application performance.',
      'Collaborated with designers and backend developers to deliver seamless user experiences.',
    ],
  },
  {
    company: 'Mindrisers Technologies',
    position: 'Frontend Trainee',
    duration: 'Sep 2025 - Dec 2025',
    achievements: [
      'Learn and apply frontend frameworks such as React.js under guidance.',
      'Collaborate with the development team on live projects and assignments.',
      'Participate in code reviews, team meetings, and training sessions.',
    ],
  },
  {
    company: 'Digifly Branding & Marketing Agency',
    position: 'Graphic Designer',
    duration: 'Nov 2023 - Jan 2024',
    achievements: [
      'Designed and optimized website layouts using typography principles, improving readability and brand consistency.',
      'Coordinated design projects and ensured 100% on-time delivery under tight deadlines. ',
      'Collaborated with team members and contributed creative input, strengthening teamwork and project outcomes.',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          Experience
        </motion.h2>

        <div className="relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-cyan-400 to-blue-300 transform md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.position}-${exp.duration}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className={`relative flex flex-col md:flex-row items-start mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              <div
                className={`flex-1 ${
                  index % 2 === 0
                    ? 'md:text-right md:pr-12'
                    : 'md:text-left md:pl-12'
                }`}
              >
                <div className="bg-white p-6 rounded-2xl border border-blue-100 shadow-sm">
                  <span className="text-sm text-blue-600 font-medium">
                    {exp.duration}
                  </span>

                  <h3 className="text-xl font-bold text-slate-900 mt-1">
                    {exp.position}
                  </h3>

                  <p className="text-cyan-600 font-medium mb-3">
                    {exp.company}
                  </p>

                  <ul
                    className={`space-y-2 ${
                      index % 2 === 0 ? 'md:text-right' : ''
                    }`}
                  >
                    {exp.achievements.map((achievement, achievementIndex) => (
                      <li
                        key={`${exp.position}-${achievementIndex}`}
                        className="text-slate-600 text-sm flex items-start gap-2"
                      >
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow transform -translate-x-1/2 mt-6 ml-[-6px] md:ml-0 z-10" />

              <div className="flex-1 hidden md:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
