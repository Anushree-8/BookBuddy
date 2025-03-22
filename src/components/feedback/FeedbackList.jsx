import React from 'react';
import Card from '../common/Card';
import RatingStars from './RatingStars';
import { users } from '../../utils/mockData';

const FeedbackList = ({ feedback }) => {
  return (
    <div className="space-y-4">
      {feedback.map((review) => {
        const reviewer = users.find(user => user.id === review.reviewerId);
        const reviewDate = new Date(review.timestamp).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        });
        
        return (
          <Card key={review.id}>
            <div className="p-4">
              <div className="flex items-center gap-3 mb-3">
                <img 
                  src={reviewer.avatar} 
                  alt={reviewer.name} 
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">{reviewer.name}</h4>
                  <p className="text-sm text-gray-500">{reviewDate}</p>
                </div>
                <div className="ml-auto flex items-center gap-1">
                  <RatingStars rating={review.rating} />
                  <span className="text-gray-600 text-sm">({review.rating}/5)</span>
                </div>
              </div>
              <p className="text-gray-700">{review.comment}</p>
            </div>
          </Card>
        );
      })}
    </div>
  );
};

export default FeedbackList;