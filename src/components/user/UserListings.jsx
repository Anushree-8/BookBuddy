import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../common/Button';
import Card from '../common/Card';

const UserListings = ({ listings }) => {
  if (listings.length === 0) {
    return (
      <Card>
        <div className="p-6 text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">No Listings Yet</h3>
          <p className="text-gray-600 mb-4">
            You haven't created any book listings yet. Start selling your books today!
          </p>
          <Link to="/profile/create-listing">
            <Button variant="primary">Create Listing</Button>
          </Link>
        </div>
      </Card>
    );
  }
  
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-800">Your Listings</h2>
        <Link to="/profile/create-listing">
          <Button variant="primary">Create Listing</Button>
        </Link>
      </div>
      
      <div className="space-y-4">
        {listings.map((book) => (
          <Card key={book.id}>
            <div className="p-4 flex flex-col sm:flex-row gap-4">
              <img 
                src={book.image} 
                alt={book.title} 
                className="w-24 h-24 object-cover rounded"
              />
              
              <div className="flex-grow">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">{book.title}</h3>
                <p className="text-gray-600 mb-1">by {book.author}</p>
                <div className="flex flex-wrap items-center gap-3 text-sm">
                  <span className="font-bold text-blue-600">${book.price.toFixed(2)}</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
                    {book.condition}
                  </span>
                  <span className="text-gray-500">Category: {book.category}</span>
                </div>
              </div>
              
              <div className="flex flex-col gap-2 justify-center">
                <Link to={`/listing/${book.id}`}>
                  <Button variant="outline" className="w-full">View</Button>
                </Link>
                <Link to={`/profile/edit-listing/${book.id}`}>
                  <Button variant="outline" className="w-full">Edit</Button>
                </Link>
                <Button variant="danger" className="w-full">Delete</Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default UserListings;