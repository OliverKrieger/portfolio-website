import React from "react";

interface ProjectCardProps{
    img?: string;
    title?: string;
    tags?: string[];
    onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({img, title="", tags=[], onClick}) => {
    return(
        <div className="text-center" onClick={onClick}>
            <img src={img} className="m-auto" />
            <h1 className="my-4 text-xl">{title}</h1>
            {tags.map((tag, index) => (
                <span key={index} className={`${tag} rounded py-1 px-2 inline-block`}>
                    {tag}
                </span>
            ))}
        </div>
    );
};

export default ProjectCard;