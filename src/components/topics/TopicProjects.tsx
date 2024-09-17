import React from "react";

interface TopicProjectsProps {
    imgs?: string[];
    videos?: string[];
    title?: string;
    description?: string;
    links?: string[];
}

const TopicProjects: React.FC<TopicProjectsProps> = ({ imgs = [], videos = [], title = "", description = "", links = [] }) => {
    return (
        <div className="text-bisque-100 p-12 max-w-[960px]">
            {imgs.map((img, index) => (
                <div key={index}>
                    <img src={img} />
                </div>
            ))}
            {videos.map((video, index) => (
                <div key={index}>
                    <iframe
                        width="480"
                        height="640"
                        src={video}
                        title="Video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            ))}
            <h1 className="text-xl">{title}</h1>
            <p className="my-4">{description}</p>
            {links.map((link, index) => (
                <div key={index}>
                    <a href={link} target="_blank" rel="noopener noreferrer" className="text-sky-500">{link}</a>
                </div>
            ))}
        </div>
    );
};

export default TopicProjects;