import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const Navbar = () => {
  const { isAuthenticated, currentUser, logout } = useAuth();

  return (
    <nav className="bg-blue-600 text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">BookBuddy</Link>
        
        <div className="flex items-center">
          <Link to="/search" className="mx-2 hover:text-blue-200">Browse</Link>
          
          {isAuthenticated ? (
            <>
              <Link to="/profile" className="mx-2 hover:text-blue-200">
                {currentUser.name}
              </Link>
              <Link to="/messages" className="mx-2 hover:text-blue-200">Messages</Link>
              <button onClick={logout} className="mx-2 hover:text-blue-200">Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className="mx-2 hover:text-blue-200">Login</Link>
              <Link to="/register" className="mx-2 hover:text-blue-200">Register</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;