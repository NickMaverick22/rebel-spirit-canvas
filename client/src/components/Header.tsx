
import { User, ShoppingCart, Heart } from 'lucide-react';
import { Link } from 'wouter';
import { useCart } from '@/contexts/CartContext';
import { useUser } from '@/contexts/UserContext';
import { useWishlist } from '@/contexts/WishlistContext';

const Header = () => {
  const { setIsOpen, totalItems } = useCart();
  const { setDashboardOpen } = useUser();
  const { totalWishlistItems } = useWishlist();

  return (
    <header className="relative z-50 bg-white/95 backdrop-blur-refined border-b border-refined">
      <div className="container mx-auto px-8 py-6 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Left spacer for balance */}
          <div className="flex-1 hidden lg:block"></div>
          
          {/* Logo - Centered */}
          <div className="flex justify-center lg:justify-center flex-1 lg:flex-none">
            <Link to="/" className="cursor-pointer">
              <h1 className="font-playfair text-2xl md:text-3xl lg:text-4xl font-bold text-[var(--charcoal)] uppercase tracking-widest">
                Rebellious Spirits
              </h1>
            </Link>
          </div>

          {/* Header Icons - Right */}
          <div className="flex-1 flex items-center justify-end space-x-6 lg:space-x-8">
            {/* User Icon */}
            <button
              onClick={() => setDashboardOpen(true)}
              className="p-3 hover:bg-cool-gray-50 rounded-full transition-sophisticated group relative"
              aria-label="User Dashboard"
            >
              <User 
                size={22} 
                className="text-cool-gray-700 group-hover:text-rebellious-red transition-sophisticated stroke-[1.5]" 
              />
            </button>

            {/* Wishlist Icon */}
            <Link
              to="/wishlist"
              className="relative p-3 hover:bg-cool-gray-50 rounded-full transition-sophisticated group"
              aria-label="Wishlist"
            >
              <Heart 
                size={22} 
                className="text-cool-gray-700 group-hover:text-rebellious-red transition-sophisticated stroke-[1.5]" 
              />
              {totalWishlistItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-rebellious-red text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-inter font-medium shadow-lg">
                  {totalWishlistItems}
                </span>
              )}
            </Link>

            {/* Cart Icon */}
            <button
              onClick={() => setIsOpen(true)}
              className="relative p-3 hover:bg-cool-gray-50 rounded-full transition-sophisticated group"
              aria-label="Shopping Cart"
            >
              <ShoppingCart 
                size={22} 
                className="text-cool-gray-700 group-hover:text-rebellious-red transition-sophisticated stroke-[1.5]" 
              />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-rebellious-red text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-inter font-medium shadow-lg">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
