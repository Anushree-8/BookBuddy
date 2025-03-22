import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../common/Card';

const ListingCard = ({ book }) => {
  return (
    <Link to={`/listing/${book.id}`}>
      <Card className="h-full hover:shadow-lg transition-shadow duration-200">
        <img 
          src={book.image} 
          alt={book.title} 
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-1">{book.title}</h3>
          <p className="text-gray-600 mb-2">{book.author}</p>
          <p className="text-sm text-gray-500 mb-3">{book.category}</p>
          <div className="flex justify-between items-center">
            <span className="font-bold text-blue-600">${book.price.toFixed(2)}</span>
            <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">
              {book.condition}
            </span>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default ListingCard;