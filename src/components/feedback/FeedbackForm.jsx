import React, { useState } from 'react';
import Button from '../common/Button';
import RatingStars from './RatingStars';

const FeedbackForm = ({ bookId, sellerId, onSubmit }) => {
  const [formData, setFormData] = useState({
    rating: 0,
    comment: ''
  });
  
  const handleRatingChange = (rating) => {
    setFormData({
      ...formData,
      rating
    });
  };
  
  const handleCommentChange = (e) => {
    setFormData({
      ...formData,
      comment: e.target.value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (formData.rating === 0) {
      alert('Please select a rating.');
      return;
    }
    
    onSubmit({
      ...formData,
      bookId,
      sellerId
    });
    
    setFormData({
      rating: 0,
      comment: ''
    });
  };
  
  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-sm p-4">
      <h3 className="text-lg font-semibold text-gray-800 mb-3">Leave Feedback</h3>
      
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">
          Rating
        </label>
        <RatingStars rating={formData.rating} onChange={handleRatingChange} />
      </div>
      
      <div className="mb-4">
        <label htmlFor="comment" className="block text-gray-700 font-medium mb-2">
          Your Review
        </label>
        <textarea
          id="comment"
          value={formData.comment}
          onChange={handleCommentChange}
          required
          rows="4"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Share your experience with this book and seller..."
        ></textarea>
      </div>
      
      <Button variant="primary" type="submit">
        Submit Review
      </Button>
    </form>
  );
};

export default FeedbackForm;