
import { User, ShoppingCart } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { useUser } from '@/contexts/UserContext';

const Header = () => {
  const { setIsOpen, totalItems } = useCart();
  const { setDashboardOpen } = useUser();

  return (
    <header className="relative z-50 bg-white border-b border-gray-100">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-1">
            <img 
              src="/lovable-uploads/c690406b-488b-44a7-bb45-c70060a14e7f.png" 
              alt="Rebellious Spirits" 
              className="h-8 w-auto opacity-90"
            />
          </div>

          {/* Header Icons */}
          <div className="flex items-center space-x-6">
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
