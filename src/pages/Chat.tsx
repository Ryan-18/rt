import React, { useState } from 'react';
import ChatContainer from '../components/ChatContainer';
import ChatInput from '../components/ChatInput';
import { Message } from '../types';
import { WELCOME_MESSAGE, PLACEHOLDER_RESPONSE } from '../constants/messages';

// Define the backend URL
const BACKEND_URL = 'https://flask-48gw.onrender.com/ask';

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      text: WELCOME_MESSAGE,
      isBot: true,
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = async (message: string) => {
    // Add user message immediately to the chat
    setMessages((prev) => [...prev, { text: message, isBot: false }]);
    setIsTyping(true);

    try {
      // Send the message to the backend (Flask API)
      const response = await fetch(BACKEND_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: message }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response from the server');
      }

      const data = await response.json();
      const botMessage = data.answer || "I couldn't process that. Please try again.";

      // Add bot message to the chat
      setMessages((prev) => [
        ...prev,
        {
          text: botMessage,
          isBot: true,
        },
      ]);
    } catch (error) {
      console.error('Error:', error);
      setMessages((prev) => [
        ...prev,
        {
          text: "There was an error connecting to the backend. Please try again later.",
          isBot: true,
        },
      ]);
    } finally {
      setIsTyping(false); // Remove typing indicator
    }
  };

  return (
    <div className="flex flex-col h-full">
      <ChatContainer messages={messages} isTyping={isTyping} />
      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  );
};

export default Chat;
