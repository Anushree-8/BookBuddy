import React from 'react';
import { Link } from 'react-router-dom';
import FeaturedItems from '../components/home/FeaturedItems';
import PopularCategories from '../components/home/PopularCategories';
import SearchBar from '../components/search/SearchBar';
import Button from '../components/common/Button';

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="bg-blue-50 py-16 px-4 rounded-lg mb-12">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Buy, Sell, and Exchange Educational Materials
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Join our community to make education more affordable and sustainable.
          </p>
          
          <div className="mb-8">
            <SearchBar />
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/search">
              <Button variant="primary" className="text-lg px-6 py-3">
                Browse Books
              </Button>
            </Link>
            <Link to="/register">
              <Button variant="outline" className="text-lg px-6 py-3">
                Join BookBuddy
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Featured Books</h2>
        <FeaturedItems />
      </section>
      
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Popular Categories</h2>
        <PopularCategories />
      </section>
      
      <section className="bg-gray-50 rounded-lg p-8 mb-12">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-xl font-bold">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">List Your Books</h3>
              <p className="text-gray-600">Upload photos and details of the books you want to sell or exchange.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-xl font-bold">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Connect with Buyers</h3>
              <p className="text-gray-600">Communicate directly with interested buyers through our secure messaging system.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-xl font-bold">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Complete the Exchange</h3>
              <p className="text-gray-600">Meet up or ship the books, then rate your experience to help the community.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;