import React from 'react';
import TypingIndicator from './TypingIndicator';
import TypewriterText from './TypewriterText';

interface MessageBubbleProps {
  message: string;
  isBot: boolean;
  isTyping?: boolean;
  showTypewriter?: boolean;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ 
  message, 
  isBot, 
  isTyping,
  showTypewriter = false
}) => {
  return (
    <div 
      className={`flex-1 ${isBot ? 'pr-12' : 'pl-12'} ${
        isBot ? 'justify-start' : 'justify-end'
      } flex`}
    >
      <div
        className={`rounded-2xl px-4 py-2 shadow-sm max-w-[80%] ${
          isBot
            ? 'bg-green-100 dark:bg-green-900/30 text-green-900 dark:text-green-100'
            : 'bg-blue-100 dark:bg-blue-900/30 text-blue-900 dark:text-blue-100'
        }`}
      >
        {isTyping ? (
          <TypingIndicator />
        ) : showTypewriter && isBot ? (
          <TypewriterText text={message} />
        ) : (
          <p className="leading-relaxed whitespace-pre-wrap">{message}</p>
        )}
      </div>
    </div>
  );
};

export default MessageBubble;