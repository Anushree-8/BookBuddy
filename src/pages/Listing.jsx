import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Button from '../components/common/Button';
import Card from '../components/common/Card';
import RatingStars from '../components/feedback/RatingStars';
import FeedbackList from '../components/feedback/FeedbackList';
import { books, users, feedback } from '../utils/mockData';
import { useAuth } from '../contexts/AuthContext';

const Listing = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [seller, setSeller] = useState(null);
  const [relatedBooks, setRelatedBooks] = useState([]);
  const [bookFeedback, setBookFeedback] = useState([]);
  const { isAuthenticated } = useAuth();
  
  useEffect(() => {
    const bookId = parseInt(id);
    const foundBook = books.find(b => b.id === bookId);
    
    if (foundBook) {
      setBook(foundBook);
      
      const foundSeller = users.find(u => u.id === foundBook.sellerId);
      setSeller(foundSeller);
      
      const related = books
        .filter(b => b.category === foundBook.category && b.id !== bookId)
        .slice(0, 3);
      setRelatedBooks(related);
      
      const bookReviews = feedback.filter(f => f.bookId === bookId);
      setBookFeedback(bookReviews);
    }
  }, [id]);
  
  if (!book || !seller) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Listing not found</h2>
        <p className="text-gray-600 mb-8">The book you're looking for might have been sold or removed.</p>
        <Link to="/search">
          <Button variant="primary">Browse other books</Button>
        </Link>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8 mb-12">
        <div className="md:w-1/3">
          <img 
            src={book.image} 
            alt={book.title} 
            className="w-full rounded-lg shadow-md"
          />
        </div>
        
        <div className="md:w-2/3">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">{book.title}</h1>
          <p className="text-xl text-gray-600 mb-4">by {book.author}</p>
          
          <div className="flex items-center gap-4 mb-6">
            <span className="text-2xl font-bold text-blue-600">${book.price.toFixed(2)}</span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
              {book.condition}
            </span>
            <span className="text-gray-500">Category: {book.category}</span>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">Description</h2>
            <p className="text-gray-700">{book.description}</p>
          </div>
          
          <Card className="mb-6">
            <div className="p-4 flex items-center gap-4">
              <img 
                src={seller.avatar} 
                alt={seller.name} 
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h3 className="font-semibold">Seller: {seller.name}</h3>
                <div className="flex items-center gap-1">
                  <RatingStars rating={seller.rating} />
                  <span className="text-gray-600 text-sm">({seller.rating}/5)</span>
                </div>
              </div>
              {isAuthenticated && (
                <div className="ml-auto">
                  <Link to={`/messages?bookId=${book.id}&sellerId=${seller.id}`}>
                    <Button variant="primary">Contact Seller</Button>
                  </Link>
                </div>
              )}
            </div>
          </Card>
          
          {!isAuthenticated && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
              <p className="text-blue-800 mb-2">
                Want to buy this book? Login or create an account to contact the seller.
              </p>
              <div className="flex justify-center gap-4">
                <Link to="/login">
                  <Button variant="primary">Login</Button>
                </Link>
                <Link to="/register">
                  <Button variant="outline">Register</Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
      
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Feedback & Reviews</h2>
        {bookFeedback.length > 0 ? (
          <FeedbackList feedback={bookFeedback} />
        ) : (
          <p className="text-gray-600">No reviews yet for this book.</p>
        )}
      </div>
      
      {relatedBooks.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Related Books</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedBooks.map((relatedBook) => (
              <Link key={relatedBook.id} to={`/listing/${relatedBook.id}`}>
                <Card className="h-full hover:shadow-lg transition-shadow duration-200">
                  <img 
                    src={relatedBook.image} 
                    alt={relatedBook.title} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">{relatedBook.title}</h3>
                    <p className="text-gray-600 mb-2">{relatedBook.author}</p>
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-blue-600">${relatedBook.price.toFixed(2)}</span>
                      <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">
                        {relatedBook.condition}
                      </span>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Listing;