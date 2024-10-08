import React from 'react';

interface LogoProps {
    width_val: number;
    height_val: number;
}


const Logo: React.FC<LogoProps> = ({width_val, height_val}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width_val} height={height_val}
            viewBox="0 0 483.5 483.5">
            <path fillRule="evenodd" stroke="rgb(191, 129, 99)" strokeWidth="25px" strokeLinecap="butt" strokeLinejoin="miter" fill="none"
                d="M445.462,238.500 L406.532,238.500 C405.992,144.496 329.631,68.455 235.500,68.455 C141.035,68.455 64.455,145.035 64.455,239.500 C64.455,333.965 141.035,410.544 235.500,410.544 L235.500,445.500 C119.520,445.500 25.500,351.480 25.500,235.500 C25.500,119.520 119.520,25.500 235.500,25.500 C351.480,25.500 445.500,119.520 445.500,235.500 C445.500,236.503 445.476,237.500 445.462,238.500 ZM305.867,356.558 L381.196,281.333 L408.409,281.333 L344.773,342.796 L411.203,433.025 L384.714,433.025 L330.700,356.248 L305.867,380.461 L305.867,433.025 L285.793,433.025 L285.793,281.333 L305.867,281.333 L305.867,356.558 Z" />
        </svg>
    );
};

export default Logo;
