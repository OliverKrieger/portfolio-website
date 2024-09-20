import React from "react";

import DownloadIcon from '../../assets/icons/i_download.svg?react';

interface TopicProjectsProps {
    imgs?: string[];
    videos?: string[];
    title?: string;
    description?: string;
    links?: string[];
    downloadables?: string[][];
}

const TopicProjects: React.FC<TopicProjectsProps> = ({ imgs = [], videos = [], title = "", description = "", links = [], downloadables = [] }) => {
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
                        className="w-full h-96"
                        src={video}
                        title="Video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            ))}
            <h1 className="text-4xl text-center my-4">{title}</h1>
            <p className="my-4">{description}</p>
            {links.map((link, index) => (
                <div key={index}>
                    <a href={link} target="_blank" rel="noopener noreferrer" className="text-sky-500">{link}</a>
                </div>
            ))}
            {downloadables.map((downloadable, index) => (
                <div className="flex justify-center" key={index}>
                    <a href={downloadable[0]} download={downloadable[1]} target="_blank" rel="noopener noreferrer" className='bg-bisque-500 p-2 rounded hover:bg-bisque-700 transition duration-150 ease-in-out'>
                        <DownloadIcon className="w-6 h-6 text-bisque-100 inline-block -mt-1" />
                        <span className='pr-2'>{downloadable[1]}</span>
                    </a>
                </div>
            ))}
        </div>
    );
};

export default TopicProjects;