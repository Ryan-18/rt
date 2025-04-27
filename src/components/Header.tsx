import React from 'react';
import { Leaf } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-200 px-4 py-3 shadow-sm">
      <div className="max-w-4xl mx-auto flex items-center gap-3">
        <div className="p-2 bg-green-50 rounded-lg">
          <Leaf className="w-6 h-6 text-green-600" />
        </div>
        <div>
          <h1 className="text-xl font-semibold text-gray-800">Ayurvedic Health Assistant</h1>
          <p className="text-sm text-gray-500">Your personal guide to natural wellness</p>
        </div>
      </div>
    </header>
  );
};

export default Header;