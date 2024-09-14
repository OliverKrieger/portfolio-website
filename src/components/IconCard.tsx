import React from 'react';

interface IconCardProp {
    Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    header: string;
    message: string;
}

const IconCard: React.FC<IconCardProp> = ({ Icon, header = '', message = '' }) => {
    return (
        <div className="p-2 max-w-sm mx-auto shadow-lg flex items-center space-x-4 border-slate-500">
            <div className="shrink-0 bg-slate-900 p-1 rounded">
                <Icon className="w-12 h-12 text-bisque-500" />
            </div>
            <div className='text-left'>
                <div className="text-m font-medium text-slate-500 italic">{header}</div>
                <p className="text-l text-bisque-100">{message}</p>
            </div>
        </div>
    );
};

export default IconCard;