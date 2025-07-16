import { Heart, ArrowLeft } from 'lucide-react';
import { useWishlist } from '@/contexts/WishlistContext';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Cart from '@/components/Cart';
import UserDashboard from '@/components/UserDashboard';

const WishlistPage = () => {
  const { 
    wishlistItems, 
    removeFromWishlist 
  } = useWishlist();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="container mx-auto px-6 py-8">
        {/* Back Button */}
        <Link 
          to="/"
          className="inline-flex items-center space-x-2 text-gray-600 hover:text-rebellious-red transition-colors duration-300 mb-8"
        >
          <ArrowLeft size={20} />
          <span className="font-inter">Back to Collection</span>
        </Link>

        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="font-playfair text-4xl md:text-5xl font-medium text-gray-900 mb-4">
            Your Wishlist
          </h1>
          <p className="font-inter text-lg text-gray-600">
            {wishlistItems.length} {wishlistItems.length === 1 ? 'item' : 'items'} saved for later
          </p>
        </div>

        {/* Wishlist Items */}
        {wishlistItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <Heart size={64} className="text-gray-300 mb-6" />
            <h2 className="font-playfair text-2xl font-medium text-gray-900 mb-4">
              Your wishlist is empty
            </h2>
            <p className="font-inter text-gray-600 mb-8 max-w-md">
              Discover our collection and save the pieces you love for later
            </p>
            <Link
              to="/"
              className="px-8 py-3 bg-black text-white font-inter font-medium hover:bg-rebellious-red transition-all duration-300 transform hover:scale-105"
            >
              Explore Collection
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {wishlistItems.map((item) => (
              <div key={item.id} className="group">
                <div className="bg-white shadow-editorial hover:shadow-hover transition-all duration-500 transform hover:-translate-y-1">
                  <div className="relative aspect-[3/4] overflow-hidden bg-gray-50">
                    <Link to={`/product/${item.id}`}>
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </Link>
                    <button
                      onClick={() => removeFromWishlist(item.id)}
                      className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center bg-white/90 backdrop-blur-sm rounded-full shadow-md hover:bg-white hover:scale-110 transition-all duration-200"
                      aria-label="Remove from wishlist"
                    >
                      <Heart 
                        size={16} 
                        className="text-rebellious-red fill-rebellious-red" 
                      />
                    </button>
                  </div>
                  <div className="p-6">
                    <Link to={`/product/${item.id}`}>
                      <h3 className="font-playfair text-xl font-medium text-gray-900 mb-2 group-hover:text-rebellious-red transition-colors duration-300">
                        {item.name}
                      </h3>
                    </Link>
                    <p className="font-inter text-lg text-gray-600">
                      ${item.price}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <Cart />
      <UserDashboard />
    </div>
  );
};

export default WishlistPage;