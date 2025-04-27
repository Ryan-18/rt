import React from 'react';
import { Bot, User } from 'lucide-react';

interface AvatarProps {
  isBot: boolean;
}

const Avatar: React.FC<AvatarProps> = ({ isBot }) => {
  return (
    <div className="flex-shrink-0">
      {isBot ? (
        <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center shadow-lg">
          <Bot className="w-5 h-5 text-white" />
        </div>
      ) : (
        <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center shadow-lg">
          <User className="w-5 h-5 text-white" />
        </div>
      )}
    </div>
  );
};

export default Avatar;