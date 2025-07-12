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
    <footer className="py-16 md:py-24 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Left Column - Links */}
            <div className="space-y-8">
              {/* Contact */}
              <div>
                <h4 className="font-playfair text-lg font-medium text-gray-900 mb-4 uppercase tracking-wide">
                  Contact
                </h4>
                <div className="space-y-2">
                  <a href="mailto:hello@rebellious-spirits.com" className="block font-inter text-gray-600 hover:text-rebellious-red transition-colors duration-300">
                    hello@rebellious-spirits.com
                  </a>
                  <a href="tel:+1234567890" className="block font-inter text-gray-600 hover:text-rebellious-red transition-colors duration-300">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>

              {/* About */}
              <div>
                <h4 className="font-playfair text-lg font-medium text-gray-900 mb-4 uppercase tracking-wide">
                  About
                </h4>
                <nav className="space-y-2">
                  <a href="#about" className="block font-inter text-gray-600 hover:text-rebellious-red transition-colors duration-300">
                    Our Story
                  </a>
                  <a href="#careers" className="block font-inter text-gray-600 hover:text-rebellious-red transition-colors duration-300">
                    Careers
                  </a>
                </nav>
              </div>

              {/* Shipping Policy */}
              <div>
                <h4 className="font-playfair text-lg font-medium text-gray-900 mb-4 uppercase tracking-wide">
                  Shipping Policy
                </h4>
                <nav className="space-y-2">
                  <a href="#shipping" className="block font-inter text-gray-600 hover:text-rebellious-red transition-colors duration-300">
                    Shipping Info
                  </a>
                  <a href="#returns" className="block font-inter text-gray-600 hover:text-rebellious-red transition-colors duration-300">
                    Returns & Exchanges
                  </a>
                </nav>
              </div>

              {/* Privacy Policy */}
              <div>
                <h4 className="font-playfair text-lg font-medium text-gray-900 mb-4 uppercase tracking-wide">
                  Privacy Policy
                </h4>
                <nav className="space-y-2">
                  <a href="#privacy" className="block font-inter text-gray-600 hover:text-rebellious-red transition-colors duration-300">
                    Privacy Policy
                  </a>
                  <a href="#terms" className="block font-inter text-gray-600 hover:text-rebellious-red transition-colors duration-300">
                    Terms of Service
                  </a>
                </nav>
              </div>
            </div>

            {/* Middle Column - Email Signup */}
            <div className="text-center">
              <h3 className="font-playfair text-2xl md:text-3xl font-medium text-gray-900 mb-6 uppercase tracking-wide">
                Get Notified Before The Next Drop
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input 
                  type="email" 
                  value={email} 
                  onChange={e => setEmail(e.target.value)} 
                  placeholder="Enter your email" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-none font-inter text-gray-900 placeholder-gray-500 focus:outline-none focus:border-rebellious-red transition-colors duration-300" 
                  required 
                />
                <button 
                  type="submit" 
                  className="w-full px-8 py-3 bg-black text-white font-inter font-medium hover:bg-rebellious-red transition-all duration-300 transform hover:scale-105 uppercase tracking-wide"
                >
                  Subscribe
                </button>
              </form>
            </div>

            {/* Right Column - Ratings, Instagram, Payment */}
            <div className="space-y-8">
              {/* Ratings */}
              <div>
                <h4 className="font-playfair text-lg font-medium text-gray-900 mb-4 uppercase tracking-wide">
                  Ratings
                </h4>
                <div className="flex items-center space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={20} className="fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="ml-2 font-inter text-gray-600">4.9/5 (234 reviews)</span>
                </div>
              </div>

              {/* Instagram */}
              <div>
                <div className="flex items-center space-x-3 mb-2">
                  <Instagram size={24} className="text-gray-600" />
                  <a 
                    href="https://instagram.com/rebellious.spirits" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-inter text-gray-600 hover:text-rebellious-red transition-colors duration-300"
                  >
                    @rebellious.spirits
                  </a>
                </div>
              </div>

              {/* Payment Cards */}
              <div>
                <h4 className="font-playfair text-lg font-medium text-gray-900 mb-4 uppercase tracking-wide">
                  We Accept
                </h4>
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-2 bg-white p-2 rounded border">
                    <CreditCard size={20} className="text-gray-600" />
                    <span className="font-inter text-xs text-gray-600">VISA</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-white p-2 rounded border">
                    <CreditCard size={20} className="text-gray-600" />
                    <span className="font-inter text-xs text-gray-600">MC</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-white p-2 rounded border">
                    <Banknote size={20} className="text-gray-600" />
                    <span className="font-inter text-xs text-gray-600">AMEX</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-200 pt-8">
            <div className="text-center">
              <p className="font-inter text-sm text-gray-500">
                © REBELLIOUS CLOTHING LIMITED
              </p>
              <nav className="flex justify-center space-x-6 mt-4">
                <a href="#terms" className="font-inter text-sm text-gray-500 hover:text-rebellious-red transition-colors duration-300">
                  TERMS & CONDITIONS
                </a>
                <a href="#cookies" className="font-inter text-sm text-gray-500 hover:text-rebellious-red transition-colors duration-300">
                  COOKIES PREFERENCES
                </a>
                <a href="#cookie-policy" className="font-inter text-sm text-gray-500 hover:text-rebellious-red transition-colors duration-300">
                  COOKIE POLICY
                </a>
                <a href="#privacy" className="font-inter text-sm text-gray-500 hover:text-rebellious-red transition-colors duration-300">
                  PRIVACY POLICY
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