import React from "react";

interface TopicSingularProps {
    Icons: React.FunctionComponent<React.SVGProps<SVGSVGElement>>[];
    gridClassName?: string;
    title?: string;
    description?: string;
    list?: string[];
}

const TopicSingular: React.FC<TopicSingularProps> = ({ Icons, title = "", gridClassName= "", description = "", list = [] }) => {
    return (
        <div className="text-bisque-100 p-12 max-w-[960px]">
            <div className={gridClassName}>
                {Icons.map((Icon, index) => (
                    <div key={index}>
                        <Icon className="w-24 h-24 m-auto" />
                    </div>
                ))}
            </div>
            
            <h1 className="text-center text-xl uppercase py-6">{title}</h1>
            <p>{description}</p>
            <ul className="list-inside list-disc mt-6">
                {list.map((listItem) => (
                    <li key={listItem}>
                        {listItem}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TopicSingular;