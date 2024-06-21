
import React, { useState } from 'react';

const ReviewForm = ({ addReview }) => {
  const [review, setReview] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (review.trim()) {
      addReview(review);
      setReview('');
    }
  };

  return (
    <form className="review-form" onSubmit={handleSubmit}>
      <textarea
        value={review}
        onChange={(e) => setReview(e.target.value)}
        placeholder="Leave a review"
      ></textarea>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ReviewForm;
