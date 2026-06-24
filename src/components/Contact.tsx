'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import {
  FiMail,
  FiGithub,
  FiLinkedin,
  FiSend,
  FiCheck,
  FiAlertCircle,
} from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (err) {
      setStatus('error');
      setErrorMsg(
        err instanceof Error ? err.message : 'Failed to send message',
      );
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          Get In Touch
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-4">
              Let&apos;s work together
            </h3>
            <p className="text-slate-600 mb-8">
              I&apos;m always open to discussing new projects, creative ideas,
              or opportunities to be part of your vision. Feel free to reach
              out!
            </p>

            <div className="space-y-4">
              <a
                href="mailto:enuphotographer.02@gmail.com"
                className="flex items-center gap-4 p-4 bg-white rounded-xl border border-blue-100 hover:border-blue-400/50 transition-all group shadow-sm"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                  <FiMail className="text-blue-600 text-xl" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Email</p>
                  <p className="text-slate-900 font-medium">
                    maharjaninima09@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/inima-maharjan-281b8536b/"
                target="_blank"
                className="flex items-center gap-4 p-4 bg-white rounded-xl border border-blue-100 hover:border-blue-400/50 transition-all group shadow-sm"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                  <FiLinkedin className="text-blue-600 text-xl" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">LinkedIn</p>
                  <p className="text-slate-900 font-medium">
                    linkedin.com/in/inima-maharjan-281b8536b/
                  </p>
                </div>
              </a>

              <a
                href="https://github.com/inimaharjan09"
                target="_blank"
                className="flex items-center gap-4 p-4 bg-white rounded-xl border border-blue-100 hover:border-blue-400/50 transition-all group shadow-sm"
              >
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center group-hover:bg-slate-200 transition-colors">
                  <FiGithub className="text-slate-700 text-xl" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">GitHub</p>
                  <p className="text-slate-900 font-medium">
                    github.com/inimaharjan09
                  </p>
                </div>
              </a>

              <a
                href="https://wa.me/+9779869061666"
                target="_blank"
                className="flex items-center gap-4 p-4 bg-white rounded-xl border border-blue-100 hover:border-blue-400/50 transition-all group shadow-sm"
              >
                <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center group-hover:bg-cyan-200 transition-colors">
                  <FaWhatsapp className="text-cyan-600 text-xl" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">WhatsApp</p>
                  <p className="text-slate-900 font-medium">+977 9869061666</p>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
            onSubmit={handleSubmit}
          >
            <div>
              <input
                type="text"
                placeholder="Your Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                className="w-full px-4 py-3 bg-white border border-blue-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                className="w-full px-4 py-3 bg-white border border-blue-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Subject"
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                required
                className="w-full px-4 py-3 bg-white border border-blue-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
              />
            </div>
            <div>
              <textarea
                rows={5}
                placeholder="Your Message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
                className="w-full px-4 py-3 bg-white border border-blue-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800/50 text-white rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 shadow-sm"
            >
              {status === 'loading' ? (
                <span className="animate-pulse">Sending...</span>
              ) : (
                <>
                  <FiSend /> Send Message
                </>
              )}
            </button>

            {status === 'success' && (
              <div className="flex items-center gap-2 p-3 bg-cyan-100 border border-cyan-300 rounded-xl text-cyan-700 text-sm">
                <FiCheck /> Message sent successfully!
              </div>
            )}
            {status === 'error' && (
              <div className="flex items-center gap-2 p-3 bg-red-100 border border-red-300 rounded-xl text-red-700 text-sm">
                <FiAlertCircle /> {errorMsg}
              </div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
