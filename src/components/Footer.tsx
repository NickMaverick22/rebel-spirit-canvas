import { useState } from 'react';
import { toast } from 'sonner';
const Footer = () => {
  const [email, setEmail] = useState('');
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success('Successfully subscribed! You\'ll be notified before the next drop.');
      setEmail('');
    }
  };
  return <footer className="py-16 md:py-24 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Email Signup */}
          <div className="text-center mb-16">
            <h3 className="font-playfair text-3xl md:text-4xl font-medium text-gray-900 mb-8">
              Get notified before the next drop
            </h3>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter your email" className="flex-1 px-4 py-3 border border-gray-300 rounded-none font-inter text-gray-900 placeholder-gray-500 focus:outline-none focus:border-rebellious-red transition-colors duration-300" required />
                <button type="submit" className="px-8 py-3 bg-black text-white font-inter font-medium hover:bg-rebellious-red transition-all duration-300 transform hover:scale-105">
                  Subscribe
                </button>
              </div>
            </form>
          </div>

          {/* Footer Links */}
          <div className="border-t border-gray-200 pt-12">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0">
                <img src="/lovable-uploads/c690406b-488b-44a7-bb45-c70060a14e7f.png" alt="Rebellious Spirits" className="h-6 w-auto opacity-70" />
              </div>
              <nav className="flex space-x-8">
                <a href="#about" className="font-inter text-gray-600 hover:text-rebellious-red transition-colors duration-300">
                  About
                </a>
                <a href="#terms" className="font-inter text-gray-600 hover:text-rebellious-red transition-colors duration-300">
                  Terms
                </a>
                <a href="#privacy" className="font-inter text-gray-600 hover:text-rebellious-red transition-colors duration-300">
                  Privacy
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;