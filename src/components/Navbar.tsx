import React from 'react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  return (
    <nav>
      <ul>
        <li>
          <button 
            className={activeTab === 'home' ? 'active' : ''}
            onClick={() => setActiveTab('home')}>
            Home
          </button>
        </li>
        <li>
          <button 
            className={activeTab === 'about' ? 'active' : ''}
            onClick={() => setActiveTab('about')}>
            About
          </button>
        </li>
        <li>
          <button 
            className={activeTab === 'contact' ? 'active' : ''}
            onClick={() => setActiveTab('contact')}>
            Contact
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
