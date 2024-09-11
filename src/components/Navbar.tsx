import React from 'react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  return (
    <nav className="flex justify-center">
      <ul className="flex space-x-4">
        <li>
          <button
            className={`${
              activeTab === 'home' ? 'bg-green-500' : 'bg-blue-500'
            } text-white px-4 py-2 rounded`}
            onClick={() => setActiveTab('home')}
          >
            Home
          </button>
        </li>
        <li>
          <button
            className={`${
              activeTab === 'about' ? 'bg-green-500' : 'bg-blue-500'
            } text-white px-4 py-2 rounded`}
            onClick={() => setActiveTab('about')}
          >
            About
          </button>
        </li>
        <li>
          <button
            className={`${
              activeTab === 'contact' ? 'bg-green-500' : 'bg-blue-500'
            } text-white px-4 py-2 rounded`}
            onClick={() => setActiveTab('contact')}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
