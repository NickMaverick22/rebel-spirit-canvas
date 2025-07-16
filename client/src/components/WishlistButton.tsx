import { Heart } from 'lucide-react';
import { useWishlist } from '@/contexts/WishlistContext';
import { useState } from 'react';

interface WishlistButtonProps {
  product: {
    id: string;
    name: string;
    price: number;
    image: string;
  };
  size?: 'sm' | 'md' | 'lg';
}

const WishlistButton = ({ product, size = 'md' }: WishlistButtonProps) => {
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const [isAnimating, setIsAnimating] = useState(false);
  const isLiked = isInWishlist(product.id);

  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-10 h-10'
  };

  const iconSizes = {
    sm: 16,
    md: 20,
    lg: 24
  };

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 300);

    if (isLiked) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`
        ${sizeClasses[size]} 
        flex items-center justify-center 
        bg-white/90 backdrop-blur-sm 
        rounded-full shadow-md 
        hover:bg-white hover:scale-110 
        transition-all duration-200 
        ${isAnimating ? 'animate-pulse scale-125' : ''}
        group
      `}
      aria-label={isLiked ? 'Remove from wishlist' : 'Add to wishlist'}
    >
      <Heart
        size={iconSizes[size]}
        className={`
          transition-all duration-200
          ${isLiked 
            ? 'text-rebellious-red fill-rebellious-red' 
            : 'text-gray-600 group-hover:text-rebellious-red'
          }
          ${isAnimating ? 'scale-125' : ''}
        `}
      />
    </button>
  );
};

export default WishlistButton;