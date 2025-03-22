import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import MessageList from '../components/messages/MessageList';
import Conversation from '../components/messages/Conversation';
import MessageForm from '../components/messages/MessageForm';
import { useAuth } from '../contexts/AuthContext';
import { messages, books, users } from '../utils/mockData';

const Messages = () => {
  const { isAuthenticated, currentUser } = useAuth();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const bookId = searchParams.get('bookId') ? parseInt(searchParams.get('bookId')) : null;
  const sellerId = searchParams.get('sellerId') ? parseInt(searchParams.get('sellerId')) : null;
  
  const [allMessages, setAllMessages] = useState([]);
  const [conversations, setConversations] = useState([]);
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [showNewMessageForm, setShowNewMessageForm] = useState(false);
  
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }
    
    setAllMessages(messages);
    
    const userConversations = messages.filter(msg => 
      msg.senderId === currentUser.id || msg.receiverId === currentUser.id
    );
    
    const conversationMap = {};
    
    userConversations.forEach(msg => {
      const otherPersonId = msg.senderId === currentUser.id ? msg.receiverId : msg.senderId;
      const conversationKey = `${Math.min(msg.bookId, otherPersonId)}-${Math.max(msg.bookId, otherPersonId)}`;
      
      if (!conversationMap[conversationKey] || new Date(conversationMap[conversationKey].timestamp) < new Date(msg.timestamp)) {
        conversationMap[conversationKey] = msg;
      }
    });
    
    setConversations(Object.values(conversationMap).sort((a, b) => 
      new Date(b.timestamp) - new Date(a.timestamp)
    ));
    
    if (bookId && sellerId) {
      const existingConversation = userConversations.find(msg => 
        msg.bookId === bookId && (
          (msg.senderId === currentUser.id && msg.receiverId === sellerId) ||
          (msg.senderId === sellerId && msg.receiverId === currentUser.id)
        )
      );
      
      if (existingConversation) {
        setSelectedConversation({
          bookId,
          otherUserId: sellerId,
          messages: userConversations.filter(msg => 
            msg.bookId === bookId && (
              (msg.senderId === currentUser.id && msg.receiverId === sellerId) ||
              (msg.senderId === sellerId && msg.receiverId === currentUser.id)
            )
          ).sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp))
        });
      } else {
        setShowNewMessageForm(true);
      }
    }
  }, [isAuthenticated, currentUser, navigate, bookId, sellerId]);
  
  const handleSelectConversation = (convo) => {
    const otherPersonId = convo.senderId === currentUser.id ? convo.receiverId : convo.senderId;
    
    const conversationMessages = allMessages.filter(msg => 
      msg.bookId === convo.bookId && (
        (msg.senderId === currentUser.id && msg.receiverId === otherPersonId) ||
        (msg.senderId === otherPersonId && msg.receiverId === currentUser.id)
      )
    ).sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
    
    setSelectedConversation({
      bookId: convo.bookId,
      otherUserId: otherPersonId,
      messages: conversationMessages
    });
    
    setShowNewMessageForm(false);
  };
  
  const handleSendMessage = (newMessage) => {
    const updatedMessages = [...allMessages, newMessage];
    setAllMessages(updatedMessages);
    
    if (selectedConversation) {
      setSelectedConversation({
        ...selectedConversation,
        messages: [...selectedConversation.messages, newMessage]
      });
    }
    
    const updatedConversation = conversations.find(convo => 
      convo.bookId === newMessage.bookId && (
        (convo.senderId === newMessage.senderId && convo.receiverId === newMessage.receiverId) ||
        (convo.senderId === newMessage.receiverId && convo.receiverId === newMessage.senderId)
      )
    );
    
    if (updatedConversation) {
      const updatedConversations = conversations.map(convo => 
        convo.id === updatedConversation.id ? newMessage : convo
      );
      setConversations(updatedConversations);
    } else {
      setConversations([newMessage, ...conversations]);
    }
    
    setShowNewMessageForm(false);
  };
  
  const handleSendNewMessage = ({ bookId, sellerId, message }) => {
    const newMessage = {
      id: allMessages.length + 1,
      senderId: currentUser.id,
      receiverId: sellerId,
      bookId,
      text: message,
      timestamp: new Date().toISOString(),
      read: false
    };
    
    handleSendMessage(newMessage);
    
    setSelectedConversation({
      bookId,
      otherUserId: sellerId,
      messages: [newMessage]
    });
  };
  
  if (!isAuthenticated || !currentUser) {
    return null;
  }
  
  let messageContent;
  
  if (showNewMessageForm && bookId && sellerId) {
    const book = books.find(b => b.id === bookId);
    const seller = users.find(u => u.id === sellerId);
    
    messageContent = (
      <MessageForm 
        book={book}
        seller={seller}
        onSendMessage={handleSendNewMessage}
      />
    );
  } else if (selectedConversation) {
    messageContent = (
      <Conversation 
        messages={selectedConversation.messages}
        currentUserId={currentUser.id}
        otherUserId={selectedConversation.otherUserId}
        bookId={selectedConversation.bookId}
        onSendMessage={handleSendMessage}
      />
    );
  } else {
    messageContent = (
      <div className="h-full flex items-center justify-center bg-gray-50 rounded-lg p-8 text-center">
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Select a conversation</h3>
          <p className="text-gray-600">
            Choose a conversation from the list to view messages.
          </p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Messages</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <MessageList 
            conversations={conversations}
            currentUserId={currentUser.id}
            onSelectConversation={handleSelectConversation}
          />
        </div>
        
        <div className="md:col-span-2 h-96">
          {messageContent}
        </div>
      </div>
    </div>
  );
};

export default Messages;