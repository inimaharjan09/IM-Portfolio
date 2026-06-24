'use client';

import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Frontend',
    skills: ['React', 'Next.js', 'Redux', 'Tailwind CSS', 'TypeScript'],
    color: 'blue',
  },
  {
    title: 'MERN Stack',
    skills: [
      'MongoDB',
      'Express.js',
      'React.js',
      'Node.js',
      'REST API',
      'JWT Auth',
    ],
    color: 'purple',
  },
  {
    title: 'Graphic Designer',
    skills: ['Figma', 'Adobe Photoshop', 'Adobe Illustrator'],
    color: 'green',
  },
  {
    title: 'Php Developer',
    skills: ['Wordpress', 'MySQL', 'Laravel'],
    color: 'orange',
  },
];

const colorClasses: Record<
  string,
  { bg: string; text: string; border: string }
> = {
  blue: { bg: 'bg-blue-100', text: 'text-blue-700', border: 'border-blue-200' },
  purple: {
    bg: 'bg-indigo-100',
    text: 'text-indigo-700',
    border: 'border-indigo-200',
  },
  green: {
    bg: 'bg-cyan-100',
    text: 'text-cyan-700',
    border: 'border-cyan-200',
  },
  orange: { bg: 'bg-sky-100', text: 'text-sky-700', border: 'border-sky-200' },
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          Skills & Technologies
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`p-6 rounded-2xl border ${colorClasses[category.color].border} bg-white shadow-sm hover:shadow-md transition-shadow`}
            >
              <h3
                className={`text-xl font-semibold mb-4 ${colorClasses[category.color].text}`}
              >
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-4 py-2 ${colorClasses[category.color].bg} ${colorClasses[category.color].text} rounded-full text-sm font-medium`}
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
}
