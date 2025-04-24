import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Github, Moon, Sun } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    }
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/80 dark:bg-black/80 backdrop-blur-sm shadow-sm py-4' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-['Luckiest_Guy'] logo-neon" style={{ color: '#0a11f5' }}>
            Flopper
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="space-x-6">
              <Link to="/" className={`nav-link ${isActive('/') ? 'text-blue-600 dark:text-blue-400' : 'text-zinc-600 dark:text-zinc-300'}`}>
                Home
              </Link>
              <Link to="/about" className={`nav-link ${isActive('/about') ? 'text-blue-600 dark:text-blue-400' : 'text-zinc-600 dark:text-zinc-300'}`}>
                About
              </Link>
              <Link to="/shop" className={`nav-link ${isActive('/shop') ? 'text-blue-600 dark:text-blue-400' : 'text-zinc-600 dark:text-zinc-300'}`}>
                Shop
              </Link>
              <Link to="/projects" className={`nav-link ${isActive('/projects') ? 'text-blue-600 dark:text-blue-400' : 'text-zinc-600 dark:text-zinc-300'}`}>
                Projects
              </Link>
              <Link to="/contact" className={`nav-link ${isActive('/contact') ? 'text-blue-600 dark:text-blue-400' : 'text-zinc-600 dark:text-zinc-300'}`}>
                Contact
              </Link>
            </div>
            
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleDarkMode}
                className="text-zinc-600 dark:text-zinc-300 hover:text-zinc-800 dark:hover:text-white transition-colors"
              >
                {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
              <a href="https://github.com/FlopperOnTTv" target="_blank" rel="noopener noreferrer" 
                className="text-zinc-600 dark:text-zinc-300 hover:text-zinc-800 dark:hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="text-zinc-600 dark:text-zinc-300 hover:text-zinc-800 dark:hover:text-white transition-colors"
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-zinc-800 dark:text-white"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className={`md:hidden absolute left-0 right-0 bg-white dark:bg-black transition-all duration-300 ease-in-out ${
          isOpen ? 'top-full opacity-100 visible' : 'top-[110%] opacity-0 invisible'
        }`}>
          <div className="container mx-auto px-4 py-4 space-y-4">
            <Link to="/" className="block py-2 text-zinc-800 dark:text-zinc-200" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link to="/about" className="block py-2 text-zinc-800 dark:text-zinc-200" onClick={() => setIsOpen(false)}>
              About
            </Link>
            <Link to="/shop" className="block py-2 text-zinc-800 dark:text-zinc-200" onClick={() => setIsOpen(false)}>
              Shop
            </Link>
            <Link to="/projects" className="block py-2 text-zinc-800 dark:text-zinc-200" onClick={() => setIsOpen(false)}>
              Projects
            </Link>
            <Link to="/contact" className="block py-2 text-zinc-800 dark:text-zinc-200" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
            
            <div className="flex space-x-4 py-2">
              <a href="https://github.com/FlopperOnTTv" target="_blank" rel="noopener noreferrer" 
                className="text-zinc-600 dark:text-zinc-300 hover:text-zinc-800 dark:hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;