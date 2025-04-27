import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import { useSidebar } from '../../hooks/useSidebar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { isOpen, toggle, close } = useSidebar();
  const location = useLocation();
  const showFooter = location.pathname === '/';

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header toggleSidebar={toggle} />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar isOpen={isOpen} onClose={close} />
        <main className={`flex-1 overflow-auto flex flex-col transition-all duration-300 ${
          isOpen ? 'blur-sm' : ''
        }`}>
          <div className="flex-1">
            {children}
          </div>
          {showFooter && <Footer />}
        </main>
      </div>
    </div>
  );
};

export default Layout;