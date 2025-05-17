import React from 'react';
import Card from '../common/Card';
import { Atom, Sparkles, Zap } from 'lucide-react';

interface TheoryProps {
  title: string;
  description: string;
  image: string;
  equation?: string;
  icon: React.ReactNode;
}

const theories: TheoryProps[] = [
  {
    title: "String Theory",
    description: "A theoretical framework in which point-like particles are replaced by one-dimensional strings, potentially unifying quantum mechanics and gravity.",
    image: "https://images.pexels.com/photos/924824/pexels-photo-924824.jpeg",
    equation: "S = -T ∫∫ √(-det(gαβ)) d²σ",
    icon: <Atom className="text-quantum" size={24} />
  },
  {
    title: "Quantum Entanglement",
    description: "A phenomenon where particles become correlated in such a way that the quantum state of each particle cannot be described independently.",
    image: "https://images.pexels.com/photos/1169754/pexels-photo-1169754.jpeg",
    equation: "|ψ⟩ = (|↑⟩₁|↓⟩₂ - |↓⟩₁|↑⟩₂)/√2",
    icon: <Sparkles className="text-energy" size={24} />
  },
  {
    title: "M-Theory",
    description: "A theory that unifies all consistent versions of superstring theory, suggesting the existence of 11 dimensions.",
    image: "https://images.pexels.com/photos/2150/sky-space-dark-galaxy.jpg",
    icon: <Zap className="text-cosmic" size={24} />
  }
];

const TheoryCard: React.FC<TheoryProps> = ({ title, description, image, equation, icon }) => {
  return (
    <Card className="overflow-hidden group">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deepSpace via-deepSpace/70 to-transparent"></div>
        <div className="absolute top-4 right-4">
          {icon}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-slate-400 mb-4">{description}</p>
        
        {equation && (
          <div className="bg-slate-800/50 rounded-lg p-4 font-mono text-sm">
            {equation}
          </div>
        )}
      </div>
    </Card>
  );
};

const QuantumTheories: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Quantum Theories</h2>
        <p className="text-slate-400 text-lg mb-12 max-w-3xl">
          Explore the fundamental theories that shape our understanding of the quantum universe and its mysteries.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {theories.map((theory, index) => (
            <TheoryCard key={index} {...theory} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuantumTheories;