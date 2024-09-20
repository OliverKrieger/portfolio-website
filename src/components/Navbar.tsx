import React, { useState, useEffect } from 'react';
import TabButton from './TabButton';
import BurgerMenuButton from './BurgerMenuButton';

interface NavbarProps {
    activeTab: string;
    setActiveTab: (tab: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
    const [isOpen, setIsOpen] = useState(false);

    const BurgerShowWidth:number = 768;

    const toggleMenu = () => {
        if(window.innerWidth < BurgerShowWidth){
            setIsOpen(!isOpen);
        }
    };

    const tabs = ['home', 'about', 'portfolio', 'contact']; // Define tab labels

    const handleResize = () => {
        if (window.innerWidth >= BurgerShowWidth) {
            setIsOpen(true);
        } else {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <nav className="flex justify-center">
            <ul className="flex flex-col text-center md:flex-row space-x-4 p-4 border-solid border-0 md:border-2 rounded-full border-bisque-500">
                <BurgerMenuButton isOpen={isOpen} toggleMenu={toggleMenu} />
                {isOpen && tabs.map((tab) => (
                    <li key={tab}>
                        <TabButton
                            label={tab.charAt(0).toUpperCase() + tab.slice(1)} // Capitalize first letter
                            active={activeTab === tab}
                            onClick={() => {
                                setActiveTab(tab);
                                toggleMenu();
                            }}
                        />
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
