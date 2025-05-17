import React from 'react';
import Card from '../common/Card';
import { ExternalLink, Award, Sparkles } from 'lucide-react';

interface CreatorProps {
  name: string;
  role: string;
  image: string;
  bio: string;
  contribution: string;
}

const creators: CreatorProps[] = [
  {
    name: "Dr. Michio Kaku",
    role: "Theoretical Physicist",
    image: "https://images.pexels.com/photos/5326953/pexels-photo-5326953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    bio: "Pioneer in string field theory and popularizer of science",
    contribution: "Work on string theory and parallel universes"
  },
  {
    name: "Ted Chiang",
    role: "Science Fiction Author",
    image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    bio: "Award-winning author known for precise scientific storytelling",
    contribution: "Stories exploring determinism and free will"
  },
  {
    name: "Dr. Kip Thorne",
    role: "Nobel Laureate in Physics",
    image: "https://images.pexels.com/photos/7101440/pexels-photo-7101440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    bio: "Expert on gravitational physics and astrophysics",
    contribution: "Theories on wormholes and time travel"
  }
];

const CreatorCard: React.FC<CreatorProps> = ({ name, role, image, bio, contribution }) => {
  return (
    <Card className="overflow-hidden group">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deepSpace via-deepSpace/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-6">
          <div className="flex items-center space-x-2">
            <Award size={16} className="text-energy" />
            <span className="text-sm text-slate-300">{role}</span>
          </div>
          <h3 className="text-xl font-bold mt-1">{name}</h3>
        </div>
      </div>
      
      <div className="p-6">
        <p className="text-slate-300 mb-4">{bio}</p>
        
        <div className="bg-slate-800/50 rounded-lg p-4">
          <div className="flex items-center space-x-2 mb-2">
            <Sparkles size={16} className="text-energy" />
            <h4 className="font-medium">Notable Contribution</h4>
          </div>
          <p className="text-sm text-slate-400">{contribution}</p>
        </div>
        
        <button className="mt-4 w-full btn btn-secondary flex items-center justify-center space-x-2">
          <span>View Profile</span>
          <ExternalLink size={14} />
        </button>
      </div>
    </Card>
  );
};

const CreatorSpotlight: React.FC = () => {
  return (
    <section className="py-20 bg-deepSpace-lighter">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Creator Spotlight</h2>
        <p className="text-slate-400 text-lg mb-12 max-w-3xl">
          Meet the brilliant minds pushing the boundaries of science and fiction, whose work shapes our understanding of paradoxes and quantum realities.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {creators.map((creator, index) => (
            <CreatorCard key={index} {...creator} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button className="btn btn-primary">Explore All Contributors</button>
        </div>
      </div>
    </section>
  );
};

export default CreatorSpotlight;