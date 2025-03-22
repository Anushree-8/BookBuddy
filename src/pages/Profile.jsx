import React, { useState, useEffect } from 'react';
import { useNavigate, Link, Routes, Route } from 'react-router-dom';
import UserProfile from '../components/user/UserProfile';
import UserListings from '../components/user/UserListings';
import ListingForm from '../components/listings/ListingForm';
import Button from '../components/common/Button';
import { useAuth } from '../contexts/AuthContext';
import { books } from '../utils/mockData';

const Profile = () => {
  const { isAuthenticated, currentUser } = useAuth();
  const navigate = useNavigate();
  const [userListings, setUserListings] = useState([]);
  
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }
    
    const filteredBooks = books.filter(book => book.sellerId === currentUser.id);
    setUserListings(filteredBooks);
  }, [isAuthenticated, currentUser, navigate]);
  
  if (!isAuthenticated || !currentUser) {
    return null;
  }
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/3">
          <UserProfile user={currentUser} />
          
          <div className="mt-6 bg-white rounded-lg shadow-md p-4">
            <h3 className="font-semibold text-gray-800 mb-3">Dashboard</h3>
            <nav className="space-y-2">
              <Link to="/profile" className="block px-3 py-2 bg-blue-50 text-blue-600 rounded-md">
                Your Listings
              </Link>
              <Link to="/messages" className="block px-3 py-2 hover:bg-gray-50 rounded-md">
                Messages
              </Link>
              <Link to="/profile/purchases" className="block px-3 py-2 hover:bg-gray-50 rounded-md">
                Purchase History
              </Link>
              <Link to="/profile/saved" className="block px-3 py-2 hover:bg-gray-50 rounded-md">
                Saved Books
              </Link>
            </nav>
          </div>
        </div>
        
        <div className="md:w-2/3">
          <Routes>
            <Route path="/" element={<UserListings listings={userListings} />} />
            <Route path="/create-listing" element={<ListingForm />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Profile;