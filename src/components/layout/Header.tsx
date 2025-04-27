import React from 'react';
import { Leaf, Menu, Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-4 py-3 shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Toggle Sidebar Button: Now Visible on All Screens */}
        <button
          onClick={toggleSidebar}
          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
          aria-label="Toggle sidebar"
        >
          <Menu className="w-6 h-6 text-gray-600 dark:text-gray-300" />
        </button>

        <div className="flex items-center gap-3 mx-auto lg:mx-0">
          <div className="p-2 bg-green-50 dark:bg-green-900 rounded-lg">
            <Leaf className="w-6 h-6 text-green-600 dark:text-green-400" />
          </div>
          <div className="text-center lg:text-left">
            <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
             AyurHeal
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Your personal guide to natural wellness
            </p>
          </div>
        </div>

        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
          aria-label="Toggle theme"
        >
          {theme === 'light' ? (
            <Moon className="w-6 h-6 text-gray-600" />
          ) : (
            <Sun className="w-6 h-6 text-gray-300" />
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
