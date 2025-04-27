import React from 'react';
import { Link } from 'react-router-dom';
import { SidebarItem as SidebarItemType } from '../../types';

interface SidebarItemProps {
  item: SidebarItemType;
  onClose?: () => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ item, onClose }) => {
  const { icon: Icon, label, href } = item;

  return (
    <li>
      <Link
        to={href}
        onClick={onClose}
        className="flex items-center gap-3 px-4 py-2 text-gray-700 dark:text-gray-300 
          hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors group"
      >
        <Icon className="w-5 h-5 transition-colors group-hover:text-green-600 dark:group-hover:text-green-400" />
        <span className="transition-colors group-hover:text-green-600 dark:group-hover:text-green-400">
          {label}
        </span>
      </Link>
    </li>
  );
};

export default SidebarItem;