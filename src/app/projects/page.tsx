import Link from 'next/link';
import {
  FiArrowLeft,
  FiExternalLink,
  FiGithub,
  FiArrowRight,
} from 'react-icons/fi';

const projects = [
  {
    id: 1,
    title: 'Contract Management System',
    description:
      'Use the credentials provided by your department administrator',
    image: '/CMS.png',
    tech: ['Next.js', 'TypeScript'],
    live: 'https://cms.mindriserstech.com/',
  },
  {
    id: 2,
    title: 'SheGuidesMe',
    description:
      'Creating Your Profile Connect with Customers & Service Providers Then Enjoy a Seamless Service-Experiences.',
    image: '/SGM.jpeg',
    tech: ['Next.js', 'TypeScript'],
    live: 'https://sheguidesme.com/',
  },
  {
    id: 3,
    title: 'Digital Palika',
    description:
      'The only ERP system in Nepal that helps local governments in financial, strategic, and overall decision-making for a better tomorrow with the help of Digital Palika.',
    image: '/DP.png',
    tech: ['Next.js', 'JavaScript', 'Node.js'],
    live: 'https://digitalpalika.org/',
  },
  {
    id: 4,
    title: 'Gadget Shop',
    description:
      'Users to browse products like mobile phones, laptops, headphones, and other tech devices, add them to a cart, and place orders.',
    image:
      'https://plus.unsplash.com/premium_photo-1681488262364-8aeb1b6aac56?q=80&w=870&auto=format&fit=crop',
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT Auth'],
    github: 'https://github.com/inimaharjan09/GadgetShop-frontend',
  },
  {
    id: 5,
    title: 'Nepali Sign Language',
    description:
      'Uses technologies like computer vision (such as OpenCV), machine learning, or deep learning to detect and understand hand gestures made by users.',
    image:
      'https://media.istockphoto.com/id/925024772/photo/multiple-images-set-of-female-caucasian-hand-gestures-isolated-over-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=RZ_yraTr1R3M6gwLDFpde4ZFrI7JNx6JtChque-PAUk=',
    tech: ['Python', 'Random Forest', 'OpenCV'],
    github:
      'https://github.com/inimaharjan09/nepali-sign-language-using-python',
  },
  {
    id: 6,
    title: 'Travel Agency',
    description:
      'Web-based application designed to help travel agencies manage their services more efficiently through an online platform.',
    image:
      'https://images.unsplash.com/photo-1516546453174-5e1098a4b4af?q=80&w=464&auto=format&fit=crop',
    tech: ['PHP', 'MySQL', 'Bootstrap', 'jQuery'],
    github:
      'https://github.com/inimaharjan09/travel-agency/tree/main/travelagency',
  },
  {
    id: 7,
    title: 'CRM',
    description:
      'Access student leads, counselor tasks, reports, and enrollment progress from one workspace.',
    image: 'CRM.png',
    tech: ['Vite', 'React', 'RTK Query', 'Tailwind CSS'],
    live: 'https://crm.mindriserstech.com/',
  },
];

export default function AllProjects() {
  return (
    <div className="min-h-screen bg-blue-50">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-slate-600 hover:text-blue-700 mb-8 transition-colors"
        >
          <FiArrowLeft /> Back to Home
        </Link>

        <h1 className="text-4xl font-bold text-center mb-12">All Projects</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl overflow-hidden border border-blue-100 hover:border-blue-400/70 transition-all duration-300 group shadow-sm flex flex-col"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent" />
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>

                <p className="text-slate-600 text-sm mb-4 flex-1">
                  {project.description}
                </p>

                <div className="mb-4">
                  <p className="text-xs text-slate-400 uppercase tracking-wider mb-2">
                    Tech Stack
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-md"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 pt-2 border-t border-blue-100 items-center">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-500 transition-colors"
                    >
                      <FiExternalLink /> Live Demo
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm text-slate-500 hover:text-blue-700 transition-colors"
                    >
                      <FiGithub /> Source
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
