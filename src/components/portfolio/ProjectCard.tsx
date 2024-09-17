import React from "react";

interface ProjectCardProps{
    img?: string;
    title?: string;
    tags?: string[];
    onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({img, title="", tags=[], onClick}) => {
    return(
        <div onClick={onClick}>
            <img src={img} />
            <h1>{title}</h1>
            {tags.map((tag, index) => (
                <span key={index}>
                    <span>{tag}</span>
                </span>
            ))}
        </div>
    );
};

export default ProjectCard;