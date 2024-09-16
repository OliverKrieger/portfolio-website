import React from "react";

interface LeftTabButtonProps{
    Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    text?: string;
    setActiveTab: (tab: string) => void;
    tab: string;
}

const LeftTabButton: React.FC<LeftTabButtonProps> = ({Icon, text="", setActiveTab, tab}) => {
    return(
        <button onClick={() => setActiveTab(tab)} className="w-20 h-20 flex flex-col items-center border-bisque-400 border-2 p-1 m-2 rounded text-bisque-400 hover:bg-bisque-400 hover:text-bisque-100 transition-all ease-in-out">
            <Icon className="w-16 h-16"/>
            <p>{text}</p>
        </button>
    );
};

export default LeftTabButton;