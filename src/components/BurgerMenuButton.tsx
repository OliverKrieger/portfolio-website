import React from "react";

interface BurgerMenuButtonProps {
    isOpen: boolean;
    toggleMenu: () => void;
}

const BurgerMenuButton: React.FC<BurgerMenuButtonProps> = ({isOpen = false, toggleMenu}) => {


    return (
        <div className="md:hidden absolute top-4 right-4">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={!isOpen ? "M4 6h16M4 12h16M4 18h16" : "M6 18L18 6M6 6l12 12"}
              />
            </svg>
          </button>
        </div>
    );
};

export default BurgerMenuButton;