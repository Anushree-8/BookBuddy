import React from 'react';
import { categories } from '../../utils/mockData';

const FilterOptions = ({ filters, setFilters }) => {
  const conditions = ["New", "Like New", "Very Good", "Good", "Acceptable"];
  
  const handleCategoryChange = (categoryName) => {
    if (filters.categories.includes(categoryName)) {
      setFilters({
        ...filters,
        categories: filters.categories.filter(cat => cat !== categoryName)
      });
    } else {
      setFilters({
        ...filters,
        categories: [...filters.categories, categoryName]
      });
    }
  };
  
  const handleConditionChange = (condition) => {
    if (filters.conditions.includes(condition)) {
      setFilters({
        ...filters,
        conditions: filters.conditions.filter(c => c !== condition)
      });
    } else {
      setFilters({
        ...filters,
        conditions: [...filters.conditions, condition]
      });
    }
  };
  
  const handlePriceChange = (e, bound) => {
    const value = e.target.value === '' ? null : Number(e.target.value);
    setFilters({
      ...filters,
      price: {
        ...filters.price,
        [bound]: value
      }
    });
  };
  
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 space-y-6">
      <div>
        <h3 className="font-semibold text-gray-800 mb-3">Price Range</h3>
        <div className="flex items-center gap-2">
          <input
            type="number"
            placeholder="Min"
            min="0"
            value={filters.price.min === null ? '' : filters.price.min}
            onChange={(e) => handlePriceChange(e, 'min')}
            className="w-24 py-2 px-3 border border-gray-300 rounded"
          />
          <span className="text-gray-500">to</span>
          <input
            type="number"
            placeholder="Max"
            min="0"
            value={filters.price.max === null ? '' : filters.price.max}
            onChange={(e) => handlePriceChange(e, 'max')}
            className="w-24 py-2 px-3 border border-gray-300 rounded"
          />
        </div>
      </div>
      
      <div>
        <h3 className="font-semibold text-gray-800 mb-3">Categories</h3>
        <div className="space-y-2 max-h-48 overflow-y-auto">
          {categories.map((category) => (
            <label key={category.id} className="flex items-center">
              <input
                type="checkbox"
                checked={filters.categories.includes(category.name)}
                onChange={() => handleCategoryChange(category.name)}
                className="mr-2"
              />
              <span className="text-gray-700">{category.name}</span>
              <span className="text-gray-500 text-sm ml-1">({category.count})</span>
            </label>
          ))}
        </div>
      </div>
      
      <div>
        <h3 className="font-semibold text-gray-800 mb-3">Condition</h3>
        <div className="space-y-2">
          {conditions.map((condition) => (
            <label key={condition} className="flex items-center">
              <input
                type="checkbox"
                checked={filters.conditions.includes(condition)}
                onChange={() => handleConditionChange(condition)}
                className="mr-2"
              />
              <span className="text-gray-700">{condition}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterOptions;