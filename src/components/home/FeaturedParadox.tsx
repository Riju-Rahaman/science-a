import React from 'react';
import Card from '../common/Card';
import Equation from '../common/Equation';
import { Clock, Link, ChevronRight } from 'lucide-react';

const FeaturedParadox: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Featured Paradox</h2>
        
        <Card className="p-6 md:p-8 md:flex gap-8">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <div className="rounded-lg overflow-hidden h-[300px] md:h-[400px] relative">
              <img 
                src="https://images.pexels.com/photos/3680319/pexels-photo-3680319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Wormhole illustration" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deepSpace to-transparent"></div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <div className="flex items-center space-x-2 text-sm text-neutron mb-3">
              <span className="bg-cosmic/20 text-cosmic px-3 py-1 rounded-full">Temporal Physics</span>
              <Clock size={14} />
              <span>8 min read</span>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold mb-4">The Grandfather Paradox: Unraveling Time's Greatest Mystery</h3>
            
            <p className="text-slate-300 mb-6">
              What happens when you travel back in time and prevent your grandfather from meeting your grandmother? This classic paradox challenges our understanding of causality and has profound implications for theoretical physics.
            </p>
            
            <Equation 
              formula="∆S ≥ k ln 2" 
              description="Landauer's principle sets a minimum energy requirement for irreversible information manipulation, potentially limiting certain time travel scenarios."
            />
            
            <div className="flex justify-between items-center mt-6">
              <div className="flex items-center space-x-3">
                <img 
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Author" 
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-medium">Dr. Elena Visser</p>
                  <p className="text-xs text-slate-400">Theoretical Physicist</p>
                </div>
              </div>
              
              <button className="btn btn-outline flex items-center space-x-1">
                <span>Read More</span>
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </Card>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {['Schrödinger\'s Cat Paradox', 'Twin Paradox', 'Bootstrap Paradox'].map((title, index) => (
            <Card key={index} className="overflow-hidden group">
              <div className="h-48 overflow-hidden">
                <img 
                  src={`https://images.pexels.com/photos/${[3687729, 7303468, 3680316][index]}/pexels-photo-${[3687729, 7303468, 3680316][index]}.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`} 
                  alt={title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{title}</h3>
                <p className="text-slate-400 mb-4">
                  {index === 0 && "A thought experiment illustrating quantum superposition, where a cat is both alive and dead until observed."}
                  {index === 1 && "Time dilation causes a space traveler to age slower than their twin on Earth, creating an apparent paradox."}
                  {index === 2 && "An object, information, or idea from the future travels to the past, becoming the cause of itself."}
                </p>
                <a href="#" className="text-quantum hover:text-energy flex items-center space-x-1 text-sm font-medium">
                  <span>Learn more</span>
                  <ChevronRight size={14} />
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedParadox;