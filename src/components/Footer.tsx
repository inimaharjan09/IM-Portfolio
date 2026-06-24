'use client';

import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-blue-200">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} Inima Maharjan. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/inimaharjan09"
            target="_blank"
            className="text-slate-500 hover:text-blue-700 transition-colors"
          >
            <FiGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/inima-maharjan-281b8536b/"
            target="_blank"
            className="text-slate-500 hover:text-blue-700 transition-colors"
          >
            <FiLinkedin size={20} />
          </a>
          <a
            href="https://x.com/Inima09Inima"
            target="_blank"
            className="text-slate-500 hover:text-blue-700 transition-colors"
          >
            <FiTwitter size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
