import React from "react";

interface ProjectCardProps {
    img?: string;
    title?: string;
    tags?: string[];
    onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ img, title = "", tags = [], onClick }) => {
    const formatTagName = (name: string) => {
        if(name === "C++"){
            return "cplusplus"
        }
        else if(name === "C#"){
            return "csharp"
        }
        else{
            return name.toLowerCase();
        }
    };

    return (
        <div className="text-center cursor-pointer px-2 pt-4 pb-2 transition-all ease-in-out hover:bg-bisque-900" onClick={onClick}>
            <img src={img} className="m-auto" />
            <h1 className="my-4 text-xl">{title}</h1>
            {tags.map((tag, index) => (
                <span key={index} className={`${formatTagName(tag)} rounded py-1 px-2 inline-block m-1`}>
                    {tag}
                </span>
            ))}
        </div>
    );
};

export default ProjectCard;