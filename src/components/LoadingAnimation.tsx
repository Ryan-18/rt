import React from 'react';
import { Loader2 } from 'lucide-react';

const LoadingAnimation: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-2xl">
        <div className="relative">
          <div className="w-16 h-16 relative">
            <Loader2 className="w-16 h-16 animate-spin text-green-600 dark:text-green-400" />
            <div className="absolute inset-0 rounded-full bg-green-400/20 dark:bg-green-400/10 animate-pulse blur-xl" />
          </div>
        </div>
        <p className="mt-4 text-lg font-medium text-gray-700 dark:text-gray-200 animate-pulse">
          Analyzing your herb...
        </p>
      </div>
    </div>
  );
};

export default LoadingAnimation;