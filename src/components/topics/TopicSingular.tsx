import React from "react";

interface TopicSingularProps {
    Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    title?: string;
    description? :string;
    list?: string[];
}

const TopicSingular: React.FC<TopicSingularProps> = ({ Icon, title = "", description="", list = [] }) => {
    return (
        <div className="text-bisque-100">
            <Icon className="w-12 h-12 text-bisque-500" />
            <h1>{title}</h1>
            <p>{description}</p>
            {list.map((listItem) => (
                <li key={listItem}>
                    {listItem}
                </li>
            ))}
        </div>
    );
};

export default TopicSingular;