import React from 'react';
import Avatar from './Avatar';
import MessageBubble from './MessageBubble';

interface ChatMessageProps {
  message: string;
  isBot: boolean;
  isTyping?: boolean;
  showTypewriter?: boolean;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ 
  message, 
  isBot, 
  isTyping,
  showTypewriter 
}) => {
  return (
    <div className={`flex gap-4 p-4 ${isBot ? 'bg-gray-50 dark:bg-gray-900/50' : 'bg-white dark:bg-gray-800'}`}>
      {isBot && <Avatar isBot={true} />}
      <MessageBubble 
        message={message} 
        isBot={isBot} 
        isTyping={isTyping}
        showTypewriter={showTypewriter} 
      />
      {!isBot && <Avatar isBot={false} />}
    </div>
  );
};

export default ChatMessage;