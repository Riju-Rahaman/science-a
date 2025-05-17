import React, { useState, useEffect } from 'react';
import { AtomIcon, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-deepSpace/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <AtomIcon size={28} className="text-quantum" />
          <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-quantum to-energy bg-clip-text text-transparent">
            Quantum Paradox
          </h1>
        </div>

        <nav className="hidden md:flex space-x-8">
          {['Home', 'Paradoxes', 'Theories', 'Team'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-slate-300 hover:text-quantum transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-quantum transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        <button 
          className="md:hidden text-slate-300 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div 
        className={`fixed inset-0 bg-deepSpace/95 backdrop-blur-lg z-40 flex flex-col justify-center items-center transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <nav className="flex flex-col space-y-8 text-center">
          {['Home', 'Paradoxes', 'Theories', 'Team'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-2xl text-slate-300 hover:text-quantum transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;