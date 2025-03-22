import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">BookBuddy</h3>
            <p className="text-gray-300">
              Making education more affordable while encouraging sustainable reuse of resources.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white">Home</Link></li>
              <li><Link to="/search" className="text-gray-300 hover:text-white">Browse Books</Link></li>
              <li><Link to="/login" className="text-gray-300 hover:text-white">Login</Link></li>
              <li><Link to="/register" className="text-gray-300 hover:text-white">Register</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li><Link to="/search?category=Computer Science" className="text-gray-300 hover:text-white">Computer Science</Link></li>
              <li><Link to="/search?category=Mathematics" className="text-gray-300 hover:text-white">Mathematics</Link></li>
              <li><Link to="/search?category=Physics" className="text-gray-300 hover:text-white">Physics</Link></li>
              <li><Link to="/search?category=Literature" className="text-gray-300 hover:text-white">Literature</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; 2025 BookBuddy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;