import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../common/Button';
import { categories } from '../../utils/mockData';

const ListingForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    category: '',
    condition: '',
    price: '',
    description: '',
    image: null
  });
  
  const conditions = ["New", "Like New", "Very Good", "Good", "Acceptable"];
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({
        ...formData,
        image: file
      });
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const formattedData = {
      ...formData,
      price: parseFloat(formData.price)
    };
    
    console.log('Submitting listing:', formattedData);
    
    navigate('/profile');
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="title" className="block text-gray-700 font-medium mb-2">
          Book Title*
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter the full title of the book"
        />
      </div>
      
      <div>
        <label htmlFor="author" className="block text-gray-700 font-medium mb-2">
          Author*
        </label>
        <input
          type="text"
          id="author"
          name="author"
          value={formData.author}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Author's full name"
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label htmlFor="category" className="block text-gray-700 font-medium mb-2">
            Category*
          </label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select a category</option>
            {categories.map((category) => (
              <option key={category.id} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        
        <div>
          <label htmlFor="condition" className="block text-gray-700 font-medium mb-2">
            Condition*
          </label>
          <select
            id="condition"
            name="condition"
            value={formData.condition}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select condition</option>
            {conditions.map((condition) => (
              <option key={condition} value={condition}>
                {condition}
              </option>
            ))}
          </select>
        </div>
        
        <div>
          <label htmlFor="price" className="block text-gray-700 font-medium mb-2">
            Price ($)*
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
            min="0"
            step="0.01"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="0.00"
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="description" className="block text-gray-700 font-medium mb-2">
          Description*
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
          rows="5"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Provide details about the book, including edition, ISBN, any damage or highlights, etc."
        ></textarea>
      </div>
      
      <div>
        <label htmlFor="image" className="block text-gray-700 font-medium mb-2">
          Book Image*
        </label>
        <input
          type="file"
          id="image"
          name="image"
          onChange={handleImageChange}
          required
          accept="image/*"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      
      <div className="flex justify-end gap-4">
        <Button variant="secondary" type="button" onClick={() => navigate('/profile')}>
          Cancel
        </Button>
        <Button variant="primary" type="submit">
          Create Listing
        </Button>
      </div>
    </form>
  );
};

export default ListingForm;