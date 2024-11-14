import Link from 'next/link';
import React from 'react';

const IntroPage: React.FC = () => {
  return (
    <div className="bg-white text-gray-800 font-sans antialiased">
      
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-purple-500 to-blue-500 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-wide mb-4">Welcome to Scholar</h1>
        <p className="text-lg md:text-2xl font-light max-w-2xl">
          Where each choice you make unlocks powerful lessons. Dive into real-life challenges, learn from history’s greatest minds, and grow your skills in thinking and decision-making.
        </p>
        <Link href={'/scenario'} className="mt-8 px-6 py-3 bg-white text-purple-500 font-semibold rounded-lg hover:bg-gray-100 transition duration-200">
          Begin Your Journey
        </Link>
      </section>

      {/* About Scholar Section */}
      <section className="py-20 text-center bg-gray-50">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">About Scholar</h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed mb-12">
          Scholar is an interactive learning platform designed to foster critical thinking, problem definition, and strategic problem-solving skills. Users engage in scenario-based questions that mimic real-world challenges, guiding them through structured exercises to analyze, interpret, and respond to various situations.
        </p>
        <p className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
          Upon answering, users receive contextual feedback, including insights or historical anecdotes derived from influential sources such as <em>The Art of War</em>, Napoleon’s military strategies, and the <em>48 Laws of Power</em>. This approach ties ancient wisdom and historical tactics to modern challenges, reinforcing key strategic and analytical principles in an engaging way.
        </p>
      </section>

      {/* Objective Section */}
      <section className="py-20 text-center bg-white">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Objective</h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed mb-12">
          Scholar&apos;s primary objective is to develop users’ analytical and decision-making skills through scenario-based learning. Using historical and scientific references, the app makes critical thinking both informative and compelling, aiming to attract individuals from diverse backgrounds who wish to enhance their cognitive and strategic skills for personal and professional growth.
        </p>
      </section>

      {/* Footer Section */}
      <footer className="py-10 bg-gray-900 text-center text-white">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Scholar. All rights reserved.
        </p>
      </footer>
    </div>


  );
};

export default IntroPage;
