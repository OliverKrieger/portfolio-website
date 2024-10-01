import React, { useState, useEffect } from "react";

import LoadingSpinner from "../LoadingSpinner";

interface ProjectCardProps {
    imgSrc?: string;
    title?: string;
    tags?: string[];
    onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ imgSrc = "", title = "", tags = [], onClick }) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const img = new Image();
        img.src = imgSrc;

        if (imgSrc != "") {
            img.onload = () => {
                setIsLoading(false);
            };

            img.onerror = () => {
                console.error('ERROR - Image failed to load!');
                setIsLoading(false);
            };
        }
    }, [imgSrc]);

    const formatTagName = (name: string) => {
        if (name === "C++") {
            return "cplusplus"
        }
        else if (name === "C#") {
            return "csharp"
        }
        else {
            return name.toLowerCase();
        }
    };

    return (
        <div>
            {isLoading ? (
                <LoadingSpinner />
            ) : (
                <div className="animate-fadeIn text-center cursor-pointer px-2 pt-4 pb-2 transition-all ease-in-out hover:bg-bisque-900" onClick={onClick}>
                    <img src={imgSrc} className="m-auto" />
                    <h1 className="my-4 text-xl">{title}</h1>
                    {tags.map((tag, index) => (
                        <span key={index} className={`${formatTagName(tag)} rounded py-1 px-2 inline-block m-1`}>
                            {tag}
                        </span>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ProjectCard;