
import { User, ShoppingCart, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '@/contexts/CartContext';
import { useUser } from '@/contexts/UserContext';
import { useWishlist } from '@/contexts/WishlistContext';

const Header = () => {
  const { setIsOpen, totalItems } = useCart();
  const { setDashboardOpen } = useUser();
  const { totalWishlistItems } = useWishlist();

  return (
    <header className="relative z-50 bg-white border-b border-gray-100">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-1">
            <img 
              src="/lovable-uploads/f168ab13-0fc0-4291-abb1-4e09d78439b6.png" 
              alt="Rebellious Spirits" 
              className="h-16 md:h-20 w-auto transition-all duration-300 hover:scale-105"
            />
          </div>

          {/* Header Icons */}
          <div className="flex items-center space-x-4">
            {/* User Icon */}
            <button
              onClick={() => setDashboardOpen(true)}
              className="p-2 hover:bg-gray-50 rounded-full transition-all duration-200 group"
              aria-label="User Dashboard"
            >
              <User 
                size={20} 
                className="text-gray-700 group-hover:text-rebellious-red transition-colors duration-200" 
              />
            </button>

            {/* Wishlist Icon */}
            <Link
              to="/wishlist"
              className="relative p-2 hover:bg-gray-50 rounded-full transition-all duration-200 group"
              aria-label="Wishlist"
            >
              <Heart 
                size={20} 
                className="text-gray-700 group-hover:text-rebellious-red transition-colors duration-200" 
              />
              {totalWishlistItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-rebellious-red text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-inter font-medium">
                  {totalWishlistItems}
                </span>
              )}
            </Link>

            {/* Cart Icon */}
            <button
              onClick={() => setIsOpen(true)}
              className="relative p-2 hover:bg-gray-50 rounded-full transition-all duration-200 group"
              aria-label="Shopping Cart"
            >
              <ShoppingCart 
                size={20} 
                className="text-gray-700 group-hover:text-rebellious-red transition-colors duration-200" 
              />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-rebellious-red text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-inter font-medium">
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
