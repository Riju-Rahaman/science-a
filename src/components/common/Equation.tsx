import React from 'react';

interface EquationProps {
  formula: string;
  description?: string;
}

const formatEquation = (formula: string): React.ReactNode => {
  // This is a simple formatter - in a real-world app you might use MathJax or KaTeX
  // We'll do basic formatting for demonstration purposes
  
  const parts = formula.split(/(\s|\+|-|\*|\/|\(|\)|\^|=|<|>|≥|≤)/g).filter(Boolean);
  
  return parts.map((part, index) => {
    // Variables (single letters)
    if (/^[a-zA-Z]$/.test(part)) {
      return <span key={index} className="equation-variable">{part}</span>;
    }
    
    // Operators
    if (/[\+\-\*\/\^\=<>≥≤]/.test(part)) {
      return <span key={index} className="equation-operator">{part}</span>;
    }
    
    // Numbers
    if (/^\d+(\.\d+)?$/.test(part)) {
      return <span key={index} className="equation-number">{part}</span>;
    }
    
    // Brackets and other symbols
    if (/[\(\)\[\]\{\}]/.test(part)) {
      return <span key={index} className="equation-symbol">{part}</span>;
    }
    
    // Spaces and other characters
    return <span key={index}>{part}</span>;
  });
};

const Equation: React.FC<EquationProps> = ({ formula, description }) => {
  return (
    <div className="math-equation">
      <div className="text-center py-2">{formatEquation(formula)}</div>
      {description && (
        <div className="mt-2 text-sm text-slate-400 border-t border-slate-700 pt-2">{description}</div>
      )}
    </div>
  );
};

export default Equation;