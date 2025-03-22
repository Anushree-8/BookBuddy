import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../common/Card';

const SearchResults = ({ results }) => {
  if (results.length === 0) {
    return (
      <div className="bg-gray-50 rounded-lg p-8 text-center">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">No books found</h3>
        <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
      </div>
    );
  }
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {results.map((book) => (
        <Link key={book.id} to={`/listing/${book.id}`}>
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
      ))}
    </div>
  );
};

export default SearchResults;