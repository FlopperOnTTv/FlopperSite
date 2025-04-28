import React from 'react';
import { Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-zinc-800">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-xl font-['Luckiest_Guy'] logo-neon" style={{ color: '#0a11f5' }}>Flopper</h3>
            <p className="text-gray-200 mt-2 font-['Luckiest_Guy']">Building digital experiences</p>
          </div>
          
          <div className="flex items-center space-x-6">
            <a href="https://github.com/FlopperOnTTv" target="_blank" rel="noopener noreferrer" 
              className="text-gray-300 hover:text-white transition-colors border border-blue-500/30 hover:border-blue-500 p-2 rounded-lg">
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 text-center text-gray-500 text-sm font-['Luckiest_Guy']">
          <p>&copy; {new Date().getFullYear()} Flopper. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;