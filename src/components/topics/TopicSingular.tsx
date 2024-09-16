import React from "react";

interface TopicSingularProps {
    Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    title?: string;
    description?: string;
    list?: string[];
}

const TopicSingular: React.FC<TopicSingularProps> = ({ Icon, title = "", description = "", list = [] }) => {
    return (
        <div className="text-bisque-100 p-12">
            <Icon className="w-24 h-24 text-bisque-500 m-auto" />
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