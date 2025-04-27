import React, { useEffect, useRef } from 'react';
import ChatMessage from './ChatMessage';
import { Message } from '../types';

interface ChatContainerProps {
  messages: Message[];
  isTyping: boolean;
}

const ChatContainer: React.FC<ChatContainerProps> = ({ messages, isTyping }) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  return (
    <div className="flex-1 overflow-y-auto bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl mx-auto">
        {messages.map((message, index) => (
          <ChatMessage
            key={index}
            message={message.text}
            isBot={message.isBot}
            showTypewriter={message.isBot && index === messages.length - 1}
          />
        ))}
        {isTyping && (
          <ChatMessage
            message=""
            isBot={true}
            isTyping={true}
          />
        )}
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
};

export default ChatContainer;