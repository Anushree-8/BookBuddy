import React, { useState, useRef, useEffect } from 'react';
import Card from '../common/Card';
import Button from '../common/Button';
import { users, books } from '../../utils/mockData';

const Conversation = ({ messages, currentUserId, otherUserId, bookId, onSendMessage }) => {
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef(null);
  
  const otherUser = users.find(user => user.id === otherUserId);
  const book = books.find(book => book.id === bookId);
  
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (newMessage.trim() === '') return;
    
    onSendMessage({
      senderId: currentUserId,
      receiverId: otherUserId,
      bookId,
      text: newMessage.trim(),
      timestamp: new Date().toISOString(),
      read: false
    });
    
    setNewMessage('');
  };
  
  return (
    <Card className="h-full flex flex-col">
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <img 
            src={otherUser.avatar} 
            alt={otherUser.name} 
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h3 className="font-semibold text-gray-800">{otherUser.name}</h3>
            <p className="text-sm text-gray-600">
              Re: {book.title}
            </p>
          </div>
        </div>
      </div>
      
      <div className="flex-grow p-4 overflow-y-auto">
        <div className="space-y-4">
          {messages.map((message, index) => {
            const isSentByCurrentUser = message.senderId === currentUserId;
            const messageTime = new Date(message.timestamp).toLocaleTimeString('en-US', {
              hour: '2-digit',
              minute: '2-digit'
            });
            
            return (
              <div 
                key={index} 
                className={`flex ${isSentByCurrentUser ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-xs sm:max-w-md rounded-lg p-3 ${
                    isSentByCurrentUser 
                      ? 'bg-blue-600 text-white rounded-br-none' 
                      : 'bg-gray-100 text-gray-800 rounded-bl-none'
                  }`}
                >
                  <p>{message.text}</p>
                  <p className={`text-xs mt-1 text-right ${
                    isSentByCurrentUser ? 'text-blue-200' : 'text-gray-500'
                  }`}>
                    {messageTime}
                  </p>
                </div>
              </div>
            );
          })}
          <div ref={messagesEndRef} />
        </div>
      </div>
      
      <div className="p-4 border-t border-gray-200">
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            className="flex-grow px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Type your message..."
          />
          <Button variant="primary" type="submit">
            Send
          </Button>
        </form>
      </div>
    </Card>
  );
};

export default Conversation;