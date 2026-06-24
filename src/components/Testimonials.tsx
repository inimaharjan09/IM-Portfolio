// 'use client';

// import { motion } from 'framer-motion';
// import { FiStar } from 'react-icons/fi';

// const testimonials = [
//   {
//     name: 'Sarah Johnson',
//     role: 'CEO, TechCorp Inc.',
//     quote: 'John is one of the most talented developers I\'ve worked with. He delivered our SaaS platform ahead of schedule and exceeded all expectations. His attention to detail and problem-solving skills are exceptional.',
//     rating: 5,
//   },
//   {
//     name: 'Mark Williams',
//     role: 'CTO, StartupXYZ',
//     quote: 'Working with John was a game-changer for our startup. He built our entire e-commerce platform from scratch, and it has been running flawlessly. His expertise in MongoDB and Node.js is outstanding.',
//     rating: 5,
//   },
//   {
//     name: 'Emily Chen',
//     role: 'Product Manager, WebAgency Co.',
//     quote: 'John consistently delivered high-quality work on complex projects. His ability to understand requirements and translate them into scalable solutions made him invaluable to our team.',
//     rating: 5,
//   },
// ];

// export default function Testimonials() {
//   return (
//     <section id="testimonials" className="py-20 px-6 bg-blue-50/50">
//       <div className="max-w-5xl mx-auto">
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-4xl font-bold text-center mb-12"
//         >
//           What Clients Say
//         </motion.h2>

//         <div className="grid md:grid-cols-3 gap-6">
//           {testimonials.map((t, index) => (
//             <motion.div
//               key={t.name}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.1 }}
//               className="bg-white p-6 rounded-2xl border border-blue-100 hover:border-blue-400/50 transition-all duration-300 shadow-sm"
//             >
//               <div className="flex mb-4">
//                 {Array.from({ length: t.rating }).map((_, i) => (
//                   <FiStar key={i} className="text-yellow-500 fill-yellow-500" />
//                 ))}
//               </div>
//               <p className="text-slate-600 mb-6 italic leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
//               <div className="border-t border-blue-100 pt-4">
//                 <p className="font-semibold text-slate-900">{t.name}</p>
//                 <p className="text-sm text-slate-500">{t.role}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
