import React from "react";

interface TwoColumnBannerProps {
    leftHeader?: string,
    leftText?: string,
    leftSubText?: string,
    rightHeader?: string,
    rightText?: string,
    rightSubText?: string,
}

const TwoColumnBanner: React.FC<TwoColumnBannerProps> = ({ leftHeader = '', leftText = '', leftSubText = '', rightHeader = '', rightText = '', rightSubText = '' }) => {
    return (
        <div className="px-4 flex flex-col md:flex-row justify-center text-center">
            <div className="flex flex-col justify-center flex-1 border-r border-none md:border-solid md:border-bisque-500 pt-6 md:p-6 relative">
                <h2 className="text-xl font-semibold text-bisque-300">{leftHeader}</h2>
                <p className="italic">{leftText}</p>
                <p>{leftSubText}</p>
                <div className="w-5 h-5 background-none md:bg-bisque-500 rounded-full absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2"></div>
                <div className="w-3 h-3 background-none md:bg-bisque-100 rounded-full absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2"></div>
            </div>
            <div className="flex flex-col justify-center flex-1 pt-0 md:p-6">
                <h2 className="text-xl font-semibold text-bisque-300">{rightHeader}</h2>
                <p>{rightText}</p>
                <p className="text-slate-400">{rightSubText}</p>
            </div>
        </div>
    );
};

export default TwoColumnBanner;