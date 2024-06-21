
import React, { useState } from 'react';

const Stars = () => {
  const [rating, setRating] = useState(0);

  const handleClick = (ratingValue) => {
    setRating(ratingValue);
  };

  return (
    <div className="stars">
      {[1, 2, 3, 4, 5].map((star) => (
        <span key={star} onClick={() => handleClick(star)}>
          {star <= rating ? '★' : '☆'}
        </span>
      ))}
    </div>
  );
};

export default Stars;
