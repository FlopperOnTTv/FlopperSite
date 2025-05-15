import React from 'react';
import { ArrowRight, Code, User } from 'lucide-react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-zinc-900 relative">
      <div 
        className="absolute inset-0 opacity-[0.15]" 
        style={{
          backgroundImage: `url("https://www.transparenttextures.com/patterns/cartographer.png")`,
          backgroundRepeat: 'repeat',
        }}
      />
      
      {/* Hero Section */}
      <section className="relative text-center pt-32 mb-16">
        <h1 className="text-8xl font-bold mb-8 tracking-wider portfolio-title" style={{ color: '#0a11f5', fontFamily: 'Verdana, sans-serif', letterSpacing: '0.1em' }}>
          Welcome to my Portfolio
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          I'm a passionate developer creating innovative solutions and bringing ideas to life through code.
        </p>
      </section>

      {/* Featured Sections */}
      <div className="relative grid md:grid-cols-2 gap-8 max-w-4xl mx-auto px-4 pb-16">
        <Link 
          to="/projects" 
          className="group p-6 bg-black/50 backdrop-blur-sm rounded-xl border border-blue-500/30 hover:border-blue-500 transition-all duration-300"
        >
          <Code className="w-12 h-12 text-blue-400 mb-4" />
          <h2 className="text-2xl font-['Luckiest_Guy'] text-blue-400 mb-2">Projects</h2>
          <p className="text-gray-300 mb-4">
            Explore my latest work and technical projects.
          </p>
          <div className="flex items-center text-blue-400 group-hover:translate-x-1 transition-transform">
            View Projects <ArrowRight className="ml-2 w-4 h-4" />
          </div>
        </Link>

        <Link 
          to="/about" 
          className="group p-6 bg-black/50 backdrop-blur-sm rounded-xl border border-blue-500/30 hover:border-blue-500 transition-all duration-300"
        >
          <User className="w-12 h-12 text-blue-400 mb-4" />
          <h2 className="text-2xl font-['Luckiest_Guy'] text-blue-400 mb-2">About Me</h2>
          <p className="text-gray-300 mb-4">
            Learn more about my journey and experience.
          </p>
          <div className="flex items-center text-blue-400 group-hover:translate-x-1 transition-transform">
            About Me <ArrowRight className="ml-2 w-4 h-4" />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Home;