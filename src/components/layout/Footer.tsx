import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-4">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            Developed by Ryan
          </p>
          <a 
            href="mailto:mdryanurrehman@gmail.com"
            className="text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 text-sm transition-colors"
          >
            Contact: mdryanurrehman@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;