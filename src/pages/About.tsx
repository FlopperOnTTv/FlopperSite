import React from 'react';
import { Briefcase, GraduationCap, Code2 } from 'lucide-react';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">About Me</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Passionate developer with a love for creating innovative solutions and learning new technologies.
        </p>
      </section>

      {/* Experience Grid */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="p-6 bg-black rounded-xl shadow-sm border border-blue-500/30 hover:border-blue-500 transition-all duration-300">
          <Briefcase className="w-12 h-12 text-blue-600 mb-4" />
          <h2 className="text-2xl font-semibold text-white mb-2">Experience</h2>
          <p className="text-gray-300">
            Over 3 years of experience in web development, specializing in modern JavaScript frameworks and cloud technologies.
          </p>
        </div>

        <div className="p-6 bg-black rounded-xl shadow-sm border border-blue-500/30 hover:border-blue-500 transition-all duration-300">
          <GraduationCap className="w-12 h-12 text-green-600 mb-4" />
          <h2 className="text-2xl font-semibold text-white mb-2">Education</h2>
          <p className="text-gray-300">
            Bachelor's degree in Computer Science with a focus on software engineering and web technologies.
          </p>
        </div>

        <div className="p-6 bg-black rounded-xl shadow-sm border border-blue-500/30 hover:border-blue-500 transition-all duration-300">
          <Code2 className="w-12 h-12 text-purple-600 mb-4" />
          <h2 className="text-2xl font-semibold text-white mb-2">Skills</h2>
          <p className="text-gray-300">
            Proficient in React, TypeScript, Node.js, and modern web development practices.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;