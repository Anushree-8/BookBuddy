import React from 'react';

const RatingStars = ({ rating, onChange }) => {
  const totalStars = 5;
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  
  const handleClick = (selectedRating) => {
    if (onChange) {
      onChange(selectedRating);
    }
  };
  
  return (
    <div className="flex">
      {[...Array(totalStars)].map((_, index) => {
        const starValue = index + 1;
        
        return (
          <span 
            key={index}
            onClick={() => handleClick(starValue)}
            className={`text-xl ${onChange ? 'cursor-pointer' : ''}`}
            title={`${starValue} star${starValue !== 1 ? 's' : ''}`}
          >
            {starValue <= fullStars ? (
              <span className="text-yellow-400">★</span>
            ) : starValue === fullStars + 1 && hasHalfStar ? (
              <span className="text-yellow-400">⯪</span>
            ) : (
              <span className="text-gray-300">☆</span>
            )}
          </span>
        );
      })}
    </div>
  );
};

export default RatingStars;