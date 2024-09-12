import React from 'react';
import TabButton from './TabButton'; // Import the new TabButton component

interface NavbarProps {
    activeTab: string;
    setActiveTab: (tab: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
    const tabs = ['home', 'about', 'contact']; // Define tab labels

    return (
        <nav className="flex justify-center">
            <ul className="flex space-x-4">
                {tabs.map((tab) => (
                    <li key={tab}>
                        <TabButton
                            label={tab.charAt(0).toUpperCase() + tab.slice(1)} // Capitalize first letter
                            active={activeTab === tab}
                            onClick={() => setActiveTab(tab)} // Set the active tab on click
                        />
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
