import React from 'react';

interface TabButtonProps {
    label: string;
    active: boolean;
    onClick: () => void;
}

const TabButton: React.FC<TabButtonProps> = ({ label, active, onClick }) => {
    return (
        <button
            className={`${active ? 'bg-indigo-500' : 'bg-sky-500'
                } text-white px-4 py-2 rounded transition duration-300 ease-in-out hover:bg-sky-700 hover:shadow-lg`}
            onClick={onClick}
        >
            {label}
        </button>
    );
};

export default TabButton;
