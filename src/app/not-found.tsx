'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-8xl font-bold text-blue-600 mb-4">404</h1>
        <p className="text-xl text-slate-600 mb-8">This page could not be found.</p>
        <Link
          href="/"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
