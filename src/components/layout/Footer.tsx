import React from 'react';
import { AtomIcon } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-deepSpace-darker py-12 mt-20 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-8">
          <AtomIcon size={24} className="text-quantum" />
          <h3 className="text-xl font-bold bg-gradient-to-r from-quantum to-energy bg-clip-text text-transparent ml-2">
            Quantum Paradox
          </h3>
        </div>
        
        <div className="text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Quantum Paradox Magazine. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;