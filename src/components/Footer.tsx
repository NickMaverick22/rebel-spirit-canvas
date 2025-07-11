import { useState } from 'react';
import { toast } from 'sonner';
import { Instagram, Mail, Phone, MapPin } from 'lucide-react';
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

          {/* Footer Content */}
          <div className="border-t border-gray-200 pt-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
              {/* Brand & Logo */}
              <div className="col-span-1 md:col-span-2">
                <img 
                  src="/lovable-uploads/f168ab13-0fc0-4291-abb1-4e09d78439b6.png" 
                  alt="Rebellious Spirits" 
                  className="h-8 w-auto mb-4" 
                />
                <p className="font-inter text-gray-600 text-sm leading-relaxed max-w-md">
                  Rebellious Spirits crafts bold, uncompromising fashion for those who dare to stand out. 
                  Every piece tells a story of rebellion, authenticity, and fearless self-expression.
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="font-playfair text-lg font-medium text-gray-900 mb-4">
                  Quick Links
                </h4>
                <nav className="space-y-3">
                  <a href="#about" className="block font-inter text-gray-600 hover:text-rebellious-red transition-colors duration-300">
                    About Us
                  </a>
                  <a href="#size-guide" className="block font-inter text-gray-600 hover:text-rebellious-red transition-colors duration-300">
                    Size Guide
                  </a>
                  <a href="#shipping" className="block font-inter text-gray-600 hover:text-rebellious-red transition-colors duration-300">
                    Shipping Info
                  </a>
                  <a href="#returns" className="block font-inter text-gray-600 hover:text-rebellious-red transition-colors duration-300">
                    Returns
                  </a>
                </nav>
              </div>

              {/* Contact Info */}
              <div>
                <h4 className="font-playfair text-lg font-medium text-gray-900 mb-4">
                  Get in Touch
                </h4>
                <div className="space-y-3">
                  <a 
                    href="mailto:hello@rebellious-spirits.com" 
                    className="flex items-center font-inter text-gray-600 hover:text-rebellious-red transition-colors duration-300"
                  >
                    <Mail size={16} className="mr-3" />
                    hello@rebellious-spirits.com
                  </a>
                  <a 
                    href="tel:+1234567890" 
                    className="flex items-center font-inter text-gray-600 hover:text-rebellious-red transition-colors duration-300"
                  >
                    <Phone size={16} className="mr-3" />
                    +1 (234) 567-890
                  </a>
                  <div className="flex items-center font-inter text-gray-600">
                    <MapPin size={16} className="mr-3" />
                    Los Angeles, CA
                  </div>
                  <a 
                    href="https://instagram.com/rebellious_spirits" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center font-inter text-gray-600 hover:text-rebellious-red transition-colors duration-300"
                  >
                    <Instagram size={16} className="mr-3" />
                    @rebellious_spirits
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-200 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <p className="font-inter text-sm text-gray-500 mb-4 md:mb-0">
                  © 2024 Rebellious Spirits. All rights reserved.
                </p>
                <nav className="flex space-x-6">
                  <a href="#terms" className="font-inter text-sm text-gray-500 hover:text-rebellious-red transition-colors duration-300">
                    Terms of Service
                  </a>
                  <a href="#privacy" className="font-inter text-sm text-gray-500 hover:text-rebellious-red transition-colors duration-300">
                    Privacy Policy
                  </a>
                  <a href="#cookies" className="font-inter text-sm text-gray-500 hover:text-rebellious-red transition-colors duration-300">
                    Cookie Policy
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;