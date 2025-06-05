
import { X, Minus, Plus } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

const Cart = () => {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, totalPrice, clearCart } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-white/50 z-50 transition-opacity duration-300"
        onClick={() => setIsOpen(false)}
      />
      
      {/* Cart Slide-out */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-black z-50 shadow-2xl transform transition-transform duration-300 animate-slide-in-right border-l border-gray-800">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-800">
            <h2 className="font-playfair text-2xl font-medium text-white">
              Shopping Cart
            </h2>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 hover:bg-gray-800 rounded-full transition-colors duration-200"
            >
              <X size={20} className="text-gray-400" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {items.length === 0 ? (
              <div className="text-center py-12">
                <p className="font-inter text-gray-500 mb-4">Your cart is empty</p>
                <button
                  onClick={() => setIsOpen(false)}
                  className="font-inter text-rebellious-red hover:underline"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                {items.map((item) => (
                  <div key={`${item.id}-${item.size}`} className="flex gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-24 object-cover bg-gray-800"
                    />
                    <div className="flex-1">
                      <h3 className="font-playfair text-lg text-white mb-1">
                        {item.name}
                      </h3>
                      <p className="font-inter text-sm text-gray-400 mb-2">
                        Size: {item.size}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => updateQuantity(`${item.id}-${item.size}`, item.quantity - 1)}
                            className="p-1 hover:bg-gray-800 rounded text-gray-400"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="font-inter text-sm w-8 text-center text-white">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(`${item.id}-${item.size}`, item.quantity + 1)}
                            className="p-1 hover:bg-gray-800 rounded text-gray-400"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <div className="text-right">
                          <p className="font-inter font-medium text-white">
                            ${item.price * item.quantity}
                          </p>
                          <button
                            onClick={() => removeItem(`${item.id}-${item.size}`)}
                            className="font-inter text-xs text-gray-500 hover:text-rebellious-red transition-colors"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-gray-800 p-6">
              <div className="flex justify-between items-center mb-4">
                <span className="font-playfair text-xl font-medium text-white">
                  Total
                </span>
                <span className="font-inter text-xl font-medium text-white">
                  ${totalPrice}
                </span>
              </div>
              <button className="w-full bg-white text-black py-3 px-6 font-inter font-medium hover:bg-rebellious-red hover:text-white transition-all duration-300 transform hover:scale-[1.02] mb-3">
                Checkout
              </button>
              <button
                onClick={clearCart}
                className="w-full font-inter text-gray-500 hover:text-rebellious-red transition-colors text-sm"
              >
                Clear Cart
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
