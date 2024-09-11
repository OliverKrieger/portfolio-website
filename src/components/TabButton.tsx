import React from 'react';

interface TabButtonProps {
    label: string;
    active: boolean;
    onClick: () => void;
}

const TabButton: React.FC<TabButtonProps> = ({ label, active, onClick }) => {
    return (
        <button
            className={`${active ? 'bg-green-500' : 'bg-blue-500'
                } text-white px-4 py-2 rounded`}
            onClick={onClick}
        >
            {label}
        </button>
    );
};

export default TabButton;
