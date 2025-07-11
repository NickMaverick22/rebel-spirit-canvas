import { Star } from 'lucide-react';
import { useState } from 'react';

interface StarRatingProps {
  rating: number;
  totalReviews: number;
  onRate?: (rating: number) => void;
  readonly?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const StarRating = ({ rating, totalReviews, onRate, readonly = false, size = 'md' }: StarRatingProps) => {
  const [hoverRating, setHoverRating] = useState(0);
  const [userRating, setUserRating] = useState(0);

  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  };

  const handleClick = (starValue: number) => {
    if (readonly) return;
    setUserRating(starValue);
    onRate?.(starValue);
  };

  const displayRating = userRating || rating;

  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => {
          const isFilled = star <= (hoverRating || displayRating);
          
          return (
            <button
              key={star}
              onClick={() => handleClick(star)}
              onMouseEnter={() => !readonly && setHoverRating(star)}
              onMouseLeave={() => !readonly && setHoverRating(0)}
              disabled={readonly}
              className={`
                ${sizeClasses[size]} 
                transition-all duration-200 
                ${readonly ? 'cursor-default' : 'cursor-pointer hover:scale-110'}
              `}
            >
              <Star
                className={`
                  w-full h-full transition-colors duration-200
                  ${isFilled 
                    ? 'text-yellow-400 fill-yellow-400' 
                    : 'text-gray-300'
                  }
                  ${!readonly && 'hover:text-yellow-400'}
                `}
              />
            </button>
          );
        })}
      </div>
      
      {totalReviews > 0 && (
        <span className="font-inter text-sm text-gray-600">
          ({totalReviews} {totalReviews === 1 ? 'review' : 'reviews'})
        </span>
      )}
    </div>
  );
};

export default StarRating;