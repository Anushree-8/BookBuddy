import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchBar from '../components/search/SearchBar';
import FilterOptions from '../components/search/FilterOptions';
import SearchResults from '../components/search/SearchResults';
import { books } from '../utils/mockData';

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const categoryParam = searchParams.get('category') || '';
  
  const [filters, setFilters] = useState({
    categories: categoryParam ? [categoryParam] : [],
    conditions: [],
    price: {
      min: null,
      max: null
    }
  });
  
  const [results, setResults] = useState([]);
  
  useEffect(() => {
    let filteredBooks = [...books];
    
    if (query) {
      const lowerQuery = query.toLowerCase();
      filteredBooks = filteredBooks.filter(book => 
        book.title.toLowerCase().includes(lowerQuery) ||
        book.author.toLowerCase().includes(lowerQuery) ||
        book.category.toLowerCase().includes(lowerQuery) ||
        book.description.toLowerCase().includes(lowerQuery)
      );
    }
    
    if (filters.categories.length > 0) {
      filteredBooks = filteredBooks.filter(book => 
        filters.categories.includes(book.category)
      );
    }
    
    if (filters.conditions.length > 0) {
      filteredBooks = filteredBooks.filter(book => 
        filters.conditions.includes(book.condition)
      );
    }
    
    if (filters.price.min !== null) {
      filteredBooks = filteredBooks.filter(book => book.price >= filters.price.min);
    }
    
    if (filters.price.max !== null) {
      filteredBooks = filteredBooks.filter(book => book.price <= filters.price.max);
    }
    
    setResults(filteredBooks);
  }, [query, filters]);
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          {query ? `Search results for "${query}"` : 'Browse Books'}
        </h1>
        <SearchBar />
      </div>
      
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-64 flex-shrink-0">
          <FilterOptions filters={filters} setFilters={setFilters} />
        </div>
        
        <div className="flex-grow">
          <div className="flex justify-between items-center mb-4">
            <p className="text-gray-600">{results.length} results found</p>
            <select className="border border-gray-300 rounded px-3 py-2">
              <option value="relevance">Sort by: Relevance</option>
              <option value="price_low">Price: Low to High</option>
              <option value="price_high">Price: High to Low</option>
              <option value="newest">Newest First</option>
            </select>
          </div>
          
          <SearchResults results={results} />
        </div>
      </div>
    </div>
  );
};

export default Search;