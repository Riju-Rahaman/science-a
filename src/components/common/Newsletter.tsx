import React, { useState } from 'react';
import { MailCheck, Send } from 'lucide-react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (email) {
      // In a real app, you would send this to your backend
      console.log('Subscription email:', email);
      setIsSubmitted(true);
      setEmail('');
      
      // Reset the success message after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }
  };

  return (
    <section className="py-20 bg-deepSpace-lighter relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-quantum rounded-full filter blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cosmic rounded-full filter blur-[100px]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="section-title">Subscribe to Quantum Paradox</h2>
          <p className="text-slate-300 text-lg mb-8">
            Join our community of science enthusiasts and receive the latest paradoxes, theories, and thought experiments directly to your inbox.
          </p>
          
          <div className="bg-deepSpace p-8 rounded-xl border border-slate-800 shadow-glow">
            {isSubmitted ? (
              <div className="flex flex-col items-center space-y-4 py-4">
                <div className="w-16 h-16 rounded-full bg-success/20 flex items-center justify-center">
                  <MailCheck size={32} className="text-success" />
                </div>
                <h3 className="text-xl font-semibold">Thank you for subscribing!</h3>
                <p className="text-slate-400">You've been added to our subscriber list.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address" 
                    className="bg-slate-800 border border-slate-700 rounded-md px-4 py-3 text-slate-200 flex-grow focus:outline-none focus:ring-2 focus:ring-quantum"
                    required
                  />
                  <button 
                    type="submit" 
                    className="btn btn-primary md:w-auto w-full flex items-center justify-center space-x-2"
                  >
                    <span>Subscribe</span>
                    <Send size={18} />
                  </button>
                </div>
                <p className="text-sm text-slate-500">
                  By subscribing, you agree to our Privacy Policy and to receive updates from Quantum Paradox Magazine.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;