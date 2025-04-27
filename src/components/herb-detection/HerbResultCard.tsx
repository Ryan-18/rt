import React from 'react';
import { RefreshCw } from 'lucide-react';
import { HerbResult } from '../../types';

interface HerbResultCardProps {
  result: HerbResult;
  onReset: () => void;
  imageUrl: string;
}

const HerbResultCard: React.FC<HerbResultCardProps> = ({ result, onReset, imageUrl }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
      {/* Image Display */}
      <div className="relative w-full h-64 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={result.name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
            {result.name}
          </h2>
          <button
            onClick={onReset}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
            aria-label="Analyze another herb"
          >
            <RefreshCw className="w-5 h-5 text-gray-600 dark:text-gray-400" />
          </button>
        </div>
        
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Description
          </h3>
          <p className="text-gray-600 dark:text-gray-400">{result.description}</p>
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Benefits
          </h3>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
            {result.benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Traditional Uses
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            {result.traditionalUses}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HerbResultCard;