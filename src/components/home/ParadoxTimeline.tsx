import React, { useState } from 'react';
import Card from '../common/Card';
import Equation from '../common/Equation';
import { Calendar, Clock, AlertCircle } from 'lucide-react';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  type: 'discovery' | 'theory' | 'paradox';
  image?: string;
  equation?: {
    formula: string;
    description: string;
  };
}

const timelineEvents: TimelineEvent[] = [
  {
    year: "1905",
    title: "Special Relativity",
    description: "Einstein's theory revolutionizes our understanding of time as relative rather than absolute, setting the theoretical foundation for time dilation.",
    type: "theory",
    image: "https://images.pexels.com/photos/714699/pexels-photo-714699.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    equation: {
      formula: "E = mc²",
      description: "Mass-energy equivalence showing that mass and energy are interchangeable."
    }
  },
  {
    year: "1915",
    title: "General Relativity",
    description: "Einstein extends special relativity to include gravity, describing it as a curvature of spacetime caused by mass and energy.",
    type: "theory",
    image: "https://images.pexels.com/photos/41953/earth-blue-planet-globe-planet-41953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    equation: {
      formula: "Gμν = 8πG/c⁴ Tμν",
      description: "Einstein's field equations relating spacetime curvature to the energy and momentum of matter."
    }
  },
  {
    year: "1935",
    title: "EPR Paradox",
    description: "Einstein, Podolsky, and Rosen challenge quantum mechanics with a thought experiment suggesting quantum entanglement violates locality.",
    type: "paradox",
    image: "https://images.pexels.com/photos/8107337/pexels-photo-8107337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    year: "1935",
    title: "Schrödinger's Cat",
    description: "Erwin Schrödinger proposes his famous thought experiment illustrating the problem of quantum superposition applied to everyday objects.",
    type: "paradox",
    image: "https://images.pexels.com/photos/2071873/pexels-photo-2071873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    equation: {
      formula: "|ψ⟩ = α|alive⟩ + β|dead⟩",
      description: "Quantum state describing the cat as a superposition of alive and dead states."
    }
  },
  {
    year: "1948",
    title: "Bootstrap Paradox",
    description: "A temporal paradox where an object or information from the future is sent back to the past, creating a loop with no discernible origin.",
    type: "paradox",
    image: "https://images.pexels.com/photos/3846517/pexels-photo-3846517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    year: "1988",
    title: "Hawking's Chronology Protection",
    description: "Stephen Hawking proposes that the laws of physics prevent time travel to avoid paradoxes, effectively 'protecting chronology'.",
    type: "theory",
    image: "https://images.pexels.com/photos/39561/solar-flare-sun-eruption-energy-39561.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    year: "2015",
    title: "Quantum Time Reversal",
    description: "Experiments demonstrate time reversal at quantum scale, showing particles can return to their original quantum states.",
    type: "discovery",
    image: "https://images.pexels.com/photos/279009/pexels-photo-279009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

const TimelineItem: React.FC<{ event: TimelineEvent; index: number }> = ({ event, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isEven = index % 2 === 0;
  
  const typeColors = {
    discovery: "bg-success/20 text-success",
    theory: "bg-quantum/20 text-quantum",
    paradox: "bg-cosmic/20 text-cosmic"
  };
  
  const typeIcon = {
    discovery: <AlertCircle size={14} />,
    theory: <Clock size={14} />,
    paradox: <AlertCircle size={14} />
  };

  return (
    <div className="relative mb-12">
      <div className="timeline-dot" style={{ top: isExpanded ? '3rem' : '2rem' }}></div>
      
      <div className={`timeline-card ${isEven ? 'timeline-card-left' : 'timeline-card-right'}`}>
        <Card 
          className="overflow-hidden"
          onClick={() => setIsExpanded(!isExpanded)}
          hoverable={false}
        >
          <div className="relative">
            {event.image && (
              <div className={`h-40 overflow-hidden ${isExpanded ? 'h-64 transition-all duration-300' : ''}`}>
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deepSpace to-transparent"></div>
              </div>
            )}
            
            <div className="absolute top-4 right-4 flex items-center space-x-2">
              <span className={`px-3 py-1 rounded-full text-xs flex items-center space-x-1 ${typeColors[event.type]}`}>
                {typeIcon[event.type]}
                <span className="capitalize">{event.type}</span>
              </span>
            </div>
            
            <div className="absolute bottom-4 left-4 bg-quantum text-white px-3 py-1 rounded-full text-sm flex items-center space-x-1">
              <Calendar size={14} />
              <span>{event.year}</span>
            </div>
          </div>
          
          <div className="p-6">
            <h3 className="text-xl font-bold mb-3">{event.title}</h3>
            <p className="text-slate-400">{event.description}</p>
            
            {isExpanded && event.equation && (
              <div className="mt-4">
                <Equation 
                  formula={event.equation.formula} 
                  description={event.equation.description}
                />
              </div>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
};

const ParadoxTimeline: React.FC = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Timeline of Paradox Stories</h2>
        <p className="text-slate-400 text-lg mb-12 max-w-3xl">
          Explore the evolution of time paradoxes and quantum theories throughout scientific history.
        </p>
        
        <div className="relative">
          <div className="timeline-line"></div>
          
          <div className="md:mt-20">
            {timelineEvents.map((event, index) => (
              <TimelineItem key={index} event={event} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParadoxTimeline;