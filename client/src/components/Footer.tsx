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
    <footer className="py-16 md:py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Column 1 - Contact & About */}
            <div className="space-y-8">
              {/* Contact */}
              <div>
                <h4 className="font-playfair text-lg font-medium text-white mb-4 uppercase tracking-wide">
                  Contact
                </h4>
                <div className="space-y-2">
                  <a href="mailto:hello@rebellious-spirits.com" className="block font-inter text-sm text-gray-300 hover:text-red-400 transition-colors duration-300">
                    hello@rebellious-spirits.com
                  </a>
                  <a href="tel:+1234567890" className="block font-inter text-sm text-gray-300 hover:text-red-400 transition-colors duration-300">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>

              {/* About */}
              <div>
                <h4 className="font-playfair text-lg font-medium text-white mb-4 uppercase tracking-wide">
                  About
                </h4>
                <nav className="space-y-2">
                  <a href="#about" className="block font-inter text-sm text-gray-300 hover:text-red-400 transition-colors duration-300">
                    Our Story
                  </a>
                  <a href="#careers" className="block font-inter text-sm text-gray-300 hover:text-red-400 transition-colors duration-300">
                    Careers
                  </a>
                </nav>
              </div>
            </div>

            {/* Column 2 - Policies */}
            <div className="space-y-8">
              {/* Shipping Policy */}
              <div>
                <h4 className="font-playfair text-lg font-medium text-white mb-4 uppercase tracking-wide">
                  Shipping Policy
                </h4>
                <nav className="space-y-2">
                  <a href="#shipping" className="block font-inter text-sm text-gray-300 hover:text-red-400 transition-colors duration-300">
                    Shipping Info
                  </a>
                  <a href="#returns" className="block font-inter text-sm text-gray-300 hover:text-red-400 transition-colors duration-300">
                    Returns & Exchanges
                  </a>
                </nav>
              </div>

              {/* Privacy Policy */}
              <div>
                <h4 className="font-playfair text-lg font-medium text-white mb-4 uppercase tracking-wide">
                  Privacy Policy
                </h4>
                <nav className="space-y-2">
                  <a href="#privacy" className="block font-inter text-sm text-gray-300 hover:text-red-400 transition-colors duration-300">
                    Privacy Policy
                  </a>
                  <a href="#terms" className="block font-inter text-sm text-gray-300 hover:text-red-400 transition-colors duration-300">
                    Terms of Service
                  </a>
                </nav>
              </div>
            </div>

            {/* Column 3 - Email Signup */}
            <div className="text-center bg-gradient-to-br from-red-900/20 to-transparent rounded-2xl p-6 border border-red-800/30">
              <h3 className="font-playfair text-xl md:text-2xl font-medium text-white mb-3 uppercase tracking-wide">
                Never Miss a Drop
              </h3>
              <p className="font-inter text-gray-300 mb-6 text-sm leading-relaxed">
                Get exclusive early access to our latest collections and limited releases
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input 
                  type="email" 
                  value={email} 
                  onChange={e => setEmail(e.target.value)} 
                  placeholder="Enter your email for VIP access" 
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg font-inter text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors duration-300" 
                  required 
                />
                <button 
                  type="submit" 
                  className="w-full px-6 py-3 bg-red-700 text-white font-inter font-medium hover:bg-red-600 transition-colors duration-300 uppercase tracking-wide rounded-lg"
                >
                  Get VIP Access
                </button>
                <p className="font-inter text-xs text-gray-400 mt-2">
                  Join 10,000+ fashion rebels • Unsubscribe anytime
                </p>
              </form>
            </div>
          </div>

          {/* Secondary Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Ratings */}
            <div className="text-center md:text-left">
              <h4 className="font-playfair text-lg font-medium text-white mb-4 uppercase tracking-wide">
                Ratings
              </h4>
              <div className="flex items-center justify-center md:justify-start space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={18} className="fill-yellow-400 text-yellow-400" />
                ))}
                <span className="ml-2 font-inter text-sm text-gray-300">4.9/5 (234 reviews)</span>
              </div>
            </div>

            {/* Instagram */}
            <div className="text-center">
              <div className="flex items-center justify-center space-x-3">
                <Instagram size={20} className="text-gray-300" />
                <a 
                  href="https://instagram.com/rebellious.spirits" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-inter text-sm text-gray-300 hover:text-red-400 transition-colors duration-300"
                >
                  @rebellious.spirits
                </a>
              </div>
            </div>

            {/* Payment Cards */}
            <div className="text-center md:text-right">
              <h4 className="font-playfair text-lg font-medium text-white mb-4 uppercase tracking-wide">
                We Accept
              </h4>
              <div className="flex items-center justify-center md:justify-end space-x-2">
                <div className="flex items-center space-x-1 bg-gray-800/50 px-3 py-2 rounded-lg border border-gray-600">
                  <CreditCard size={16} className="text-gray-300" />
                  <span className="font-inter text-xs text-gray-300">VISA</span>
                </div>
                <div className="flex items-center space-x-1 bg-gray-800/50 px-3 py-2 rounded-lg border border-gray-600">
                  <CreditCard size={16} className="text-gray-300" />
                  <span className="font-inter text-xs text-gray-300">MC</span>
                </div>
                <div className="flex items-center space-x-1 bg-gray-800/50 px-3 py-2 rounded-lg border border-gray-600">
                  <Banknote size={16} className="text-gray-300" />
                  <span className="font-inter text-xs text-gray-300">AMEX</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-700 pt-6">
            <div className="text-center">
              <p className="font-inter text-sm text-gray-400 mb-4">
                © 2025 REBELLIOUS CLOTHING LIMITED
              </p>
              <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                <a href="#terms" className="font-inter text-xs text-gray-400 hover:text-red-400 transition-colors duration-300 uppercase tracking-wide">
                  Terms & Conditions
                </a>
                <a href="#cookies" className="font-inter text-xs text-gray-400 hover:text-red-400 transition-colors duration-300 uppercase tracking-wide">
                  Cookies Preferences
                </a>
                <a href="#cookie-policy" className="font-inter text-xs text-gray-400 hover:text-red-400 transition-colors duration-300 uppercase tracking-wide">
                  Cookie Policy
                </a>
                <a href="#privacy" className="font-inter text-xs text-gray-400 hover:text-red-400 transition-colors duration-300 uppercase tracking-wide">
                  Privacy Policy
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