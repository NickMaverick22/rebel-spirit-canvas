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
    <footer className="py-20 md:py-32 bg-charcoal text-white">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
            {/* Column 1 - Contact & About */}
            <div className="space-y-8">
              {/* Contact */}
              <div>
                <h4 className="font-playfair text-lg font-medium text-white mb-4 uppercase tracking-wider">
                  Contact
                </h4>
                <div className="space-y-2">
                  <a href="mailto:hello@rebellious-spirits.com" className="block font-inter text-sm text-cool-gray-300 hover:text-rebellious-red-light transition-sophisticated">
                    hello@rebellious-spirits.com
                  </a>
                  <a href="tel:+1234567890" className="block font-inter text-sm text-cool-gray-300 hover:text-rebellious-red-light transition-sophisticated">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>

              {/* About */}
              <div>
                <h4 className="font-playfair text-lg font-medium text-white mb-4 uppercase tracking-wider">
                  About
                </h4>
                <nav className="space-y-2">
                  <a href="#about" className="block font-inter text-sm text-cool-gray-300 hover:text-rebellious-red-light transition-sophisticated">
                    Our Story
                  </a>
                  <a href="#careers" className="block font-inter text-sm text-cool-gray-300 hover:text-rebellious-red-light transition-sophisticated">
                    Careers
                  </a>
                </nav>
              </div>
            </div>

            {/* Column 2 - Policies */}
            <div className="space-y-8">
              {/* Shipping Policy */}
              <div>
                <h4 className="font-playfair text-lg font-medium text-white mb-4 uppercase tracking-wider">
                  Shipping Policy
                </h4>
                <nav className="space-y-2">
                  <a href="#shipping" className="block font-inter text-sm text-cool-gray-300 hover:text-rebellious-red-light transition-sophisticated">
                    Shipping Info
                  </a>
                  <a href="#returns" className="block font-inter text-sm text-cool-gray-300 hover:text-rebellious-red-light transition-sophisticated">
                    Returns & Exchanges
                  </a>
                </nav>
              </div>

              {/* Privacy Policy */}
              <div>
                <h4 className="font-playfair text-lg font-medium text-white mb-4 uppercase tracking-wider">
                  Privacy Policy
                </h4>
                <nav className="space-y-2">
                  <a href="#privacy" className="block font-inter text-sm text-cool-gray-300 hover:text-rebellious-red-light transition-sophisticated">
                    Privacy Policy
                  </a>
                  <a href="#terms" className="block font-inter text-sm text-cool-gray-300 hover:text-rebellious-red-light transition-sophisticated">
                    Terms of Service
                  </a>
                </nav>
              </div>
            </div>

            {/* Column 3 - Email Signup */}
            <div className="lg:col-span-2 text-center bg-gradient-to-br from-rebellious-red/10 to-transparent rounded-2xl p-8 border border-rebellious-red/20">
              <div className="max-w-md mx-auto">
                <h3 className="font-playfair text-2xl md:text-3xl font-medium text-white mb-4 uppercase tracking-wider leading-tight">
                  Never Miss a Drop
                </h3>
                <p className="font-inter text-cool-gray-300 mb-8 leading-relaxed">
                  Get exclusive early access to our latest collections and limited releases before they hit the public
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="relative">
                    <input 
                      type="email" 
                      value={email} 
                      onChange={e => setEmail(e.target.value)} 
                      placeholder="Enter your email for VIP access" 
                      className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl font-inter text-white placeholder-cool-gray-400 focus:outline-none focus:border-rebellious-red-light focus:bg-white/15 transition-sophisticated" 
                      required 
                    />
                  </div>
                  <button 
                    type="submit" 
                    className="w-full px-8 py-4 bg-rebellious-red text-white font-inter font-semibold hover:bg-rebellious-red-light transition-sophisticated transform hover:scale-105 uppercase tracking-wider rounded-xl shadow-lg hover:shadow-xl"
                  >
                    Get VIP Access
                  </button>
                  <p className="font-inter text-xs text-cool-gray-400 mt-3">
                    Join 10,000+ fashion rebels • Unsubscribe anytime
                  </p>
                </form>
              </div>
            </div>
          </div>

          {/* Secondary Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Ratings */}
            <div className="text-center md:text-left">
              <h4 className="font-playfair text-lg font-medium text-white mb-4 uppercase tracking-wider">
                Ratings
              </h4>
              <div className="flex items-center justify-center md:justify-start space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={18} className="fill-yellow-400 text-yellow-400" />
                ))}
                <span className="ml-2 font-inter text-sm text-cool-gray-300">4.9/5 (234 reviews)</span>
              </div>
            </div>

            {/* Instagram */}
            <div className="text-center">
              <div className="flex items-center justify-center space-x-3 mb-2">
                <Instagram size={20} className="text-cool-gray-300" />
                <a 
                  href="https://instagram.com/rebellious.spirits" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-inter text-sm text-cool-gray-300 hover:text-rebellious-red-light transition-sophisticated"
                >
                  @rebellious.spirits
                </a>
              </div>
            </div>

            {/* Payment Cards */}
            <div className="text-center md:text-right">
              <h4 className="font-playfair text-lg font-medium text-white mb-4 uppercase tracking-wider">
                We Accept
              </h4>
              <div className="flex items-center justify-center md:justify-end space-x-2">
                <div className="flex items-center space-x-1 bg-white/10 backdrop-blur-sm px-3 py-2 rounded-lg border border-white/20">
                  <CreditCard size={16} className="text-cool-gray-300" />
                  <span className="font-inter text-xs text-cool-gray-300">VISA</span>
                </div>
                <div className="flex items-center space-x-1 bg-white/10 backdrop-blur-sm px-3 py-2 rounded-lg border border-white/20">
                  <CreditCard size={16} className="text-cool-gray-300" />
                  <span className="font-inter text-xs text-cool-gray-300">MC</span>
                </div>
                <div className="flex items-center space-x-1 bg-white/10 backdrop-blur-sm px-3 py-2 rounded-lg border border-white/20">
                  <Banknote size={16} className="text-cool-gray-300" />
                  <span className="font-inter text-xs text-cool-gray-300">AMEX</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/20 pt-8">
            <div className="text-center">
              <p className="font-inter text-sm text-cool-gray-400 mb-4">
                © 2025 REBELLIOUS CLOTHING LIMITED
              </p>
              <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2">
                <a href="#terms" className="font-inter text-xs text-cool-gray-400 hover:text-rebellious-red-light transition-sophisticated uppercase tracking-wider">
                  Terms & Conditions
                </a>
                <a href="#cookies" className="font-inter text-xs text-cool-gray-400 hover:text-rebellious-red-light transition-sophisticated uppercase tracking-wider">
                  Cookies Preferences
                </a>
                <a href="#cookie-policy" className="font-inter text-xs text-cool-gray-400 hover:text-rebellious-red-light transition-sophisticated uppercase tracking-wider">
                  Cookie Policy
                </a>
                <a href="#privacy" className="font-inter text-xs text-cool-gray-400 hover:text-rebellious-red-light transition-sophisticated uppercase tracking-wider">
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