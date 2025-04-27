import React, { useState, useEffect } from 'react';

interface TypewriterTextProps {
  text: string;
  speed?: number;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({ text, speed = 30 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed]);

  return (
    <span className="whitespace-pre-wrap">
      {displayedText}
      {currentIndex < text.length && (
        <span className="inline-block w-1 h-4 ml-1 bg-green-600 animate-pulse" />
      )}
    </span>
  );
};

export default TypewriterText;