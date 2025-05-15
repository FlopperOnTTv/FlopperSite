import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Flopper's Site",
      description: "How was this site even made??",
      tech: ["React", "TypeScript", "Tailwind CSS", "Vite", "React Router"],
      github: "https://github.com/FlopperOnTTv/FlopperSite"
    },
    {
      title: "Flopper's Shop",
      description: "A secure digital marketplace offering premium accounts, game DLCs, and professional tools. Built with modern web technologies for a seamless shopping experience.",
      tech: ["HTML", "CSS"],
      github: "https://flopper.sellauth.com"
    },
    {
      title: "My Github",
      description: "👋 Hi, I'm @FlopperOnTTv\n👀 I'm interested in 🤑\n📫 How to reach me : floppertv2 on Discord",
      github: "https://github.com/FlopperOnTTv"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-5xl font-bold text-gray-900 mb-6 text-center">Projects</h1>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto text-center mb-12">
        A showcase of my recent work and personal projects.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div key={index} className="bg-black rounded-xl shadow-sm p-6 border border-blue-500/30 hover:border-blue-500/50 transition-all duration-300">
            <h2 className="text-2xl font-semibold text-white mb-2">{project.title}</h2>
            <p className="text-gray-300 mb-4" style={{ whiteSpace: 'pre-line' }}>{project.description}</p>
            
            {project.tech && (
              <div className="mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="inline-block bg-zinc-800 text-gray-300 text-sm px-3 py-1 rounded-full mr-2 mb-2 border border-zinc-700">
                    {tech}
                  </span>
                ))}
              </div>
            )}

            <div className="flex space-x-4">
              <a 
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 rounded-lg border border-blue-500/30 hover:border-blue-500 text-gray-300 hover:text-white transition-all duration-300"
              >
                <Github className="w-5 h-5 mr-1" />
                {index === 2 ? 'Link' : 'Code'}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects