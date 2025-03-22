import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../common/Card';
import Button from '../common/Button';
import RatingStars from '../feedback/RatingStars';

const UserProfile = ({ user }) => {
  const joinDate = new Date(user.joinDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  
  return (
    <Card>
      <div className="p-6">
        <div className="flex flex-col sm:flex-row items-center gap-6 mb-6">
          <img 
            src={user.avatar} 
            alt={user.name} 
            className="w-24 h-24 rounded-full"
          />
          
          <div className="text-center sm:text-left">
            <h2 className="text-2xl font-bold text-gray-800">{user.name}</h2>
            <p className="text-gray-600 mb-2">Member since {joinDate}</p>
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <RatingStars rating={user.rating} />
              <span className="text-gray-600">({user.rating}/5)</span>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Contact Information</h3>
            <p className="text-gray-600 mb-1">Email: {user.email}</p>
          </div>
        </div>
        
        <div className="mt-6 flex flex-wrap gap-3">
          <Link to="/profile/edit">
            <Button variant="outline">Edit Profile</Button>
          </Link>
          <Link to="/profile/change-password">
            <Button variant="outline">Change Password</Button>
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default UserProfile;