import React, { useState } from 'react';
import Card from '../common/Card';
import Button from '../common/Button';

const MessageForm = ({ book, seller, onSendMessage }) => {
  const [message, setMessage] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (message.trim() === '') return;
    
    onSendMessage({
      bookId: book.id,
      sellerId: seller.id,
      message: message.trim()
    });
    
    setMessage('');
  };
  
  return (
    <Card>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">
          Contact About: {book.title}
        </h3>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Ask about the book's condition, availability, or arrange an exchange..."
            ></textarea>
          </div>
          
          <Button variant="primary" type="submit">
            Send Message
          </Button>
        </form>
      </div>
    </Card>
  );
};

export default MessageForm;