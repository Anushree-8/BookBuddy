import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../../utils/mockData';

const PopularCategories = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {categories.map((category) => (
        <Link
          key={category.id}
          to={`/search?category=${encodeURIComponent(category.name)}`}
          className="bg-white border border-gray-200 rounded-lg p-4 text-center hover:bg-blue-50 hover:border-blue-200 transition-colors duration-200"
        >
          <h3 className="text-lg font-semibold text-gray-800 mb-1">{category.name}</h3>
          <p className="text-sm text-gray-500">{category.count} books</p>
        </Link>
      ))}
    </div>
  );
};

export default PopularCategories;