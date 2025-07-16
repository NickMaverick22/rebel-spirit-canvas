import { useState } from 'react';
import { toast } from 'sonner';
import { Instagram, Star, CreditCard, Banknote } from 'lucide-react';
const Footer = () => {
  const [email, setEmail] = useState('');
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success('Successfully subscribed! You\'ll be notified before the next drop.');
      setEmail('');
    }
  };
  return (
    <footer className="py-20 md:py-32 bg-[var(--charcoal)] text-white overflow-hidden relative">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-black/10"></div>
      
      <div className="container mx-auto px-8 md:px-16 lg:px-24 relative">
        <div className="max-w-7xl mx-auto">
          
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 mb-20">
            {/* Column 1 - Contact & Instagram */}
            <div className="space-y-10">
              {/* Instagram */}
              <div>
                <div className="flex items-center space-x-4 mb-4">
                  <Instagram size={24} className="text-[var(--cool-gray-300)] hover:text-[var(--rebellious-red-light)] transition-sophisticated" />
                  <a 
                    href="https://instagram.com/rebellious.spirits" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-inter text-base text-[var(--cool-gray-300)] hover:text-[var(--rebellious-red-light)] transition-sophisticated"
                  >
                    @rebellious.spirits
                  </a>
                </div>
                <p className="font-inter text-sm text-[var(--cool-gray-300)] leading-relaxed">
                  Follow for behind-the-scenes content and style inspiration
                </p>
              </div>

              {/* Ratings */}
              <div>
                <h4 className="font-playfair text-xl font-medium text-white mb-6 uppercase tracking-widest">
                  Customer Reviews
                </h4>
                <div className="flex items-center space-x-2 mb-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={20} className="fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="ml-3 font-inter text-[var(--cool-gray-300)]">4.9/5</span>
                </div>
                <p className="font-inter text-sm text-[var(--cool-gray-300)]">
                  Based on 234 verified reviews
                </p>
              </div>

              {/* Contact */}
              <div>
                <h4 className="font-playfair text-xl font-medium text-white mb-6 uppercase tracking-widest">
                  Contact
                </h4>
                <div className="space-y-3">
                  <a href="mailto:hello@rebellious-spirits.com" className="block font-inter text-[var(--cool-gray-300)] hover:text-[var(--rebellious-red-light)] transition-sophisticated">
                    hello@rebellious-spirits.com
                  </a>
                  <a href="tel:+1234567890" className="block font-inter text-[var(--cool-gray-300)] hover:text-[var(--rebellious-red-light)] transition-sophisticated">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>
            </div>

            {/* Column 2 - About */}
            <div>
              <h4 className="font-playfair text-xl font-medium text-white mb-6 uppercase tracking-widest">
                About
              </h4>
              <nav className="space-y-4">
                <a href="#about" className="block font-inter text-[var(--cool-gray-300)] hover:text-[var(--rebellious-red-light)] transition-sophisticated">
                  Our Story
                </a>
                <a href="#careers" className="block font-inter text-[var(--cool-gray-300)] hover:text-[var(--rebellious-red-light)] transition-sophisticated">
                  Careers
                </a>
                <a href="#sustainability" className="block font-inter text-[var(--cool-gray-300)] hover:text-[var(--rebellious-red-light)] transition-sophisticated">
                  Sustainability
                </a>
                <a href="#press" className="block font-inter text-[var(--cool-gray-300)] hover:text-[var(--rebellious-red-light)] transition-sophisticated">
                  Press
                </a>
              </nav>
            </div>

            {/* Column 3 - Customer Care */}
            <div>
              <h4 className="font-playfair text-xl font-medium text-white mb-6 uppercase tracking-widest">
                Customer Care
              </h4>
              <nav className="space-y-4">
                <a href="#shipping" className="block font-inter text-[var(--cool-gray-300)] hover:text-[var(--rebellious-red-light)] transition-sophisticated">
                  Shipping & Returns
                </a>
                <a href="#size-guide" className="block font-inter text-[var(--cool-gray-300)] hover:text-[var(--rebellious-red-light)] transition-sophisticated">
                  Size Guide
                </a>
                <a href="#care" className="block font-inter text-[var(--cool-gray-300)] hover:text-[var(--rebellious-red-light)] transition-sophisticated">
                  Care Instructions
                </a>
                <a href="#faq" className="block font-inter text-[var(--cool-gray-300)] hover:text-[var(--rebellious-red-light)] transition-sophisticated">
                  FAQ
                </a>
              </nav>
            </div>

            {/* Column 4 - Newsletter */}
            <div className="space-y-8">
              <div>
                <h3 className="font-playfair text-2xl md:text-3xl font-medium text-white mb-6 uppercase tracking-widest leading-tight">
                  Never Miss a Drop
                </h3>
                <p className="font-inter text-[var(--cool-gray-300)] mb-8 leading-relaxed">
                  Be the first to discover our latest pieces and gain exclusive access to limited collections.
                </p>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <input 
                    type="email" 
                    value={email} 
                    onChange={e => setEmail(e.target.value)} 
                    placeholder="Your email address" 
                    className="w-full px-6 py-4 bg-transparent border border-[var(--cool-gray-600)] rounded-none font-inter text-white placeholder-[var(--cool-gray-300)] focus:outline-none focus:border-[var(--rebellious-red-light)] transition-sophisticated" 
                    required 
                  />
                  <button 
                    type="submit" 
                    className="w-full px-8 py-4 bg-[var(--rebellious-red)] text-white font-inter font-medium hover:bg-[var(--rebellious-red-light)] transition-sophisticated transform hover:scale-[1.02] uppercase tracking-widest border border-[var(--rebellious-red)] hover:border-[var(--rebellious-red-light)]"
                  >
                    Subscribe Now
                  </button>
                </form>
                <p className="font-inter text-xs text-[var(--cool-gray-300)] mt-6 leading-relaxed">
                  Join 10,000+ fashion rebels worldwide. Unsubscribe at any time.
                </p>
              </div>

              {/* Payment Methods */}
              <div>
                <h4 className="font-playfair text-lg font-medium text-white mb-4 uppercase tracking-wider">
                  We Accept
                </h4>
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-2 bg-white/5 backdrop-blur-sm px-4 py-3 rounded-sm border border-white/10">
                    <CreditCard size={18} className="text-[var(--cool-gray-300)]" />
                    <span className="font-inter text-xs text-[var(--cool-gray-300)] uppercase tracking-wide">Visa</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-white/5 backdrop-blur-sm px-4 py-3 rounded-sm border border-white/10">
                    <CreditCard size={18} className="text-[var(--cool-gray-300)]" />
                    <span className="font-inter text-xs text-[var(--cool-gray-300)] uppercase tracking-wide">MC</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-white/5 backdrop-blur-sm px-4 py-3 rounded-sm border border-white/10">
                    <Banknote size={18} className="text-[var(--cool-gray-300)]" />
                    <span className="font-inter text-xs text-[var(--cool-gray-300)] uppercase tracking-wide">Amex</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-12">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
              <p className="font-inter text-sm text-[var(--cool-gray-300)]">
                © 2025 REBELLIOUS CLOTHING LIMITED. All rights reserved.
              </p>
              <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2">
                <a href="#privacy" className="font-inter text-xs text-[var(--cool-gray-300)] hover:text-[var(--rebellious-red-light)] transition-sophisticated uppercase tracking-wider">
                  Privacy Policy
                </a>
                <a href="#terms" className="font-inter text-xs text-[var(--cool-gray-300)] hover:text-[var(--rebellious-red-light)] transition-sophisticated uppercase tracking-wider">
                  Terms of Service
                </a>
                <a href="#cookies" className="font-inter text-xs text-[var(--cool-gray-300)] hover:text-[var(--rebellious-red-light)] transition-sophisticated uppercase tracking-wider">
                  Cookie Preferences
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;