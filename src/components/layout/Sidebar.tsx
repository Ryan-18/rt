import React from 'react';
import { X } from 'lucide-react';
import { MENU_ITEMS } from '../../constants/navigation';
import SidebarItem from './SidebarItem';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-20 transition-opacity duration-300"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white dark:bg-gray-800 shadow-lg 
          transform transition-transform duration-300 ease-in-out z-30 
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Menu</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
            aria-label="Close sidebar"
          >
            <X className="w-5 h-5 text-gray-600 dark:text-gray-400" />
          </button>
        </div>

        <nav className="p-4">
          <ul className="space-y-2">
            {MENU_ITEMS.map((item) => (
              <SidebarItem key={item.label} item={item} onClose={onClose} />
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
