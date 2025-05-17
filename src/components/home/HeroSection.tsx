import React, { useEffect, useRef } from 'react';
import { ArrowRight, Atom, Brain } from 'lucide-react';

const HeroSection: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    const title = titleRef.current;
    if (!title) return;
    
    const letters = title.innerText.split('');
    title.innerHTML = '';
    
    letters.forEach((letter, i) => {
      const span = document.createElement('span');
      span.innerText = letter;
      span.style.animationDelay = `${i * 0.05}s`;
      span.classList.add('inline-block', 'animate-float');
      title.appendChild(span);
    });
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-quantum/20 border border-quantum/30">
            <div className="flex items-center space-x-2">
              <Atom size={18} className="text-energy" />
              <span className="text-energy">Exploring Time & Quantum Reality</span>
            </div>
          </div>
          
          <h1 
            ref={titleRef}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            Quantum Paradox Magazine
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Journey through the intricacies of time travel paradoxes, quantum theories, and the fascinating intersections of science and fiction.
          </p>
          
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 justify-center">
            <button className="btn btn-primary flex items-center justify-center space-x-2">
              <span>Explore Paradoxes</span>
              <ArrowRight size={18} />
            </button>
            <button className="btn btn-secondary flex items-center justify-center space-x-2">
              <Brain size={18} />
              <span>Quantum Theories</span>
            </button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-deepSpace to-transparent"></div>
    </section>
  );
};

export default HeroSection;