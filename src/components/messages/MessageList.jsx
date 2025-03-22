import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../common/Card';
import { users, books } from '../../utils/mockData';

const MessageList = ({ conversations, currentUserId, onSelectConversation }) => {
  return (
    <Card>
      <div className="divide-y divide-gray-200">
        {conversations.length === 0 ? (
          <div className="p-4 text-center text-gray-600">
            No messages yet.
          </div>
        ) : (
          conversations.map((convo) => {
            const otherPersonId = convo.senderId === currentUserId 
              ? convo.receiverId 
              : convo.senderId;
            const otherPerson = users.find(user => user.id === otherPersonId);
            const book = books.find(book => book.id === convo.bookId);
            const latestMessage = convo.text.length > 60 
              ? convo.text.substring(0, 60) + '...' 
              : convo.text;
            const messageDate = new Date(convo.timestamp).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric'
            });
              
            return (
              <div 
                key={convo.id}
                className="p-4 hover:bg-gray-50 cursor-pointer"
                onClick={() => onSelectConversation(convo)}
              >
                <div className="flex items-center gap-3">
                  <img 
                    src={otherPerson.avatar} 
                    alt={otherPerson.name} 
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="flex-grow min-w-0">
                    <div className="flex justify-between items-center mb-1">
                      <h4 className="font-semibold text-gray-800 truncate">{otherPerson.name}</h4>
                      <span className="text-sm text-gray-500">{messageDate}</span>
                    </div>
                    <p className="text-sm text-gray-600 truncate">
                      Re: {book.title}
                    </p>
                    <p className="text-sm text-gray-500 truncate">
                      {latestMessage}
                    </p>
                  </div>
                  {!convo.read && convo.receiverId === currentUserId && (
                    <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  )}
                </div>
              </div>
            );
          })
        )}
      </div>
    </Card>
  );
};

export default MessageList;