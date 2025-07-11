import { X, Heart } from 'lucide-react';
import { useWishlist } from '@/contexts/WishlistContext';
import { Link } from 'react-router-dom';

const Wishlist = () => {
  const { 
    wishlistItems, 
    isWishlistOpen, 
    setIsWishlistOpen, 
    removeFromWishlist 
  } = useWishlist();

  if (!isWishlistOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300"
        onClick={() => setIsWishlistOpen(false)}
      />
      
      {/* Wishlist Panel */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-50 transform transition-transform duration-300">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-6 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <h2 className="font-playfair text-2xl font-medium text-gray-900">
                Wishlist
              </h2>
              <button
                onClick={() => setIsWishlistOpen(false)}
                className="p-2 hover:bg-gray-50 rounded-full transition-all duration-200"
                aria-label="Close Wishlist"
              >
                <X size={20} className="text-gray-600" />
              </button>
            </div>
            <p className="font-inter text-sm text-gray-500 mt-1">
              {wishlistItems.length} {wishlistItems.length === 1 ? 'item' : 'items'}
            </p>
          </div>

          {/* Wishlist Items */}
          <div className="flex-1 overflow-y-auto">
            {wishlistItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center p-6">
                <Heart size={48} className="text-gray-300 mb-4" />
                <h3 className="font-playfair text-xl font-medium text-gray-900 mb-2">
                  Your wishlist is empty
                </h3>
                <p className="font-inter text-gray-500 mb-6">
                  Add items you love to keep track of them
                </p>
                <button
                  onClick={() => setIsWishlistOpen(false)}
                  className="px-6 py-2 bg-black text-white font-inter font-medium hover:bg-rebellious-red transition-all duration-300"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <div className="p-6 space-y-6">
                {wishlistItems.map((item) => (
                  <div key={item.id} className="group">
                    <div className="flex gap-4">
                      <Link 
                        to={`/product/${item.id}`}
                        className="flex-shrink-0"
                        onClick={() => setIsWishlistOpen(false)}
                      >
                        <div className="w-20 h-24 bg-gray-50 overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      </Link>
                      
                      <div className="flex-1">
                        <Link 
                          to={`/product/${item.id}`}
                          onClick={() => setIsWishlistOpen(false)}
                        >
                          <h3 className="font-playfair text-lg font-medium text-gray-900 group-hover:text-rebellious-red transition-colors duration-300">
                            {item.name}
                          </h3>
                        </Link>
                        <p className="font-inter text-gray-600 mt-1">
                          ${item.price}
                        </p>
                      </div>
                      
                      <button
                        onClick={() => removeFromWishlist(item.id)}
                        className="p-2 hover:bg-gray-50 rounded-full transition-all duration-200 self-start"
                        aria-label="Remove from wishlist"
                      >
                        <Heart 
                          size={16} 
                          className="text-rebellious-red fill-current hover:scale-110 transition-transform duration-200" 
                        />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Wishlist;