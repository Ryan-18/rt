import React from 'react';

const TypingIndicator: React.FC = () => {
  return (
    <div className="flex space-x-2 p-2">
      <div className="w-2 h-2 bg-green-600 dark:bg-green-400 rounded-full animate-[bounce_1s_infinite_0ms]"></div>
      <div className="w-2 h-2 bg-green-600 dark:bg-green-400 rounded-full animate-[bounce_1s_infinite_200ms]"></div>
      <div className="w-2 h-2 bg-green-600 dark:bg-green-400 rounded-full animate-[bounce_1s_infinite_400ms]"></div>
    </div>
  );
};

export default TypingIndicator;