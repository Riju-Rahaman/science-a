import React from 'react';
import Card from '../common/Card';
import { Code2, Github, Linkedin } from 'lucide-react';

interface DeveloperProps {
  name: string;
  role?: string;
  github?: string;
  linkedin?: string;
}

const developers: DeveloperProps[] = [
  {
    name: "Riju Rahaman",
    role: "Lead Developer",
    github: "#",
    linkedin: "#"
  },
  {
    name: "Souvik Das",
    github: "#",
    linkedin: "#"
  },
  {
    name: "Sarif Mondal",
    github: "#",
    linkedin: "#"
  },
  {
    name: "Kriyangsu Paul",
    github: "#",
    linkedin: "#"
  },
  {
    name: "Aksat Dora",
    github: "#",
    linkedin: "#"
  },
  {
    name: "Divyansh Prasad Singh",
    github: "#",
    linkedin: "#"
  },
  {
    name: "Bidisha Jana",
    github: "#",
    linkedin: "#"
  }
];

const DeveloperCard: React.FC<DeveloperProps> = ({ name, role, github, linkedin }) => {
  return (
    <Card className="overflow-hidden group bg-deepSpace-darker border-slate-800">
      <div className="p-6">
        <div className="flex items-center space-x-2 mb-4">
          <Code2 size={16} className="text-energy" />
          <h3 className="text-xl font-bold">{name}</h3>
        </div>
        
        {role && (
          <span className="text-sm text-slate-300 block mb-4">{role}</span>
        )}
        
        <div className="flex space-x-4">
          {github && (
            <a href={github} className="text-slate-400 hover:text-quantum transition-colors">
              <Github size={20} />
            </a>
          )}
          {linkedin && (
            <a href={linkedin} className="text-slate-400 hover:text-quantum transition-colors">
              <Linkedin size={20} />
            </a>
          )}
        </div>
      </div>
    </Card>
  );
};

const DevelopmentTeam: React.FC = () => {
  return (
    <section className="py-20 bg-deepSpace-lighter">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Development Team</h2>
        <p className="text-slate-400 text-lg mb-12 max-w-3xl">
          Meet the talented developers behind Quantum Paradox Magazine, bringing complex scientific concepts to life through code.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {developers.map((developer, index) => (
            <DeveloperCard key={index} {...developer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DevelopmentTeam;