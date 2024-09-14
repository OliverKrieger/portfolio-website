import React from "react";

interface TwoColumnBannerProps {
    leftHeader: string,
    leftText: string,
    rightHeader: string,
    rightText: string
}

const TwoColumnBanner: React.FC<TwoColumnBannerProps> = ({ leftHeader, leftText, rightHeader, rightText }) => {
    return (
        <div className="px-4 flex justify-center text-center">
            <div className="flex flex-col justify-center flex-1 border-r border-bisque-500 p-6 relative">
                <h2 className="text-xl font-semibold text-bisque-300">{leftHeader}</h2>
                <p>{leftText}</p>
                <div className="w-5 h-5 bg-bisque-500 rounded-full absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2"></div>
                <div className="w-3 h-3 bg-bisque-100 rounded-full absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2"></div>
            </div>
            <div className="flex flex-col justify-center flex-1 p-6">
                <h2 className="text-xl font-semibold text-bisque-300">{rightHeader}</h2>
                <p>{rightText}</p>
            </div>
        </div>
    );
};

export default TwoColumnBanner;