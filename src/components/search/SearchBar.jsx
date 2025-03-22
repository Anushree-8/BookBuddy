import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  
  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
  };
  
  return (
    <form onSubmit={handleSearch} className="flex w-full max-w-2xl mx-auto">
      <input
        type="text"
        placeholder="Search for books by title, author, or subject..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="flex-grow py-3 px-4 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white py-3 px-6 rounded-r-lg hover:bg-blue-700 transition duration-200"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;