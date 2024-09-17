import React from "react";

import ProjectCard from "./ProjectCard";

import { useOverlay } from '../OverlayContext';
import TopicProjects from "../topics/TopicProjects";


interface ProjectsProps {

}

const Projects: React.FC<ProjectsProps> = ({ }) => {
    const { openOverlay } = useOverlay();

    return (
        <div className="animate-slideInLeft">
            <ProjectCard
                title='Helix'
                tags={["Unreal Engine", "C++", "VueJS"]}
                onClick={() => openOverlay(
                    <TopicProjects
                        title='Helix'
                        description='Helix Project'
                        links={["https://figmentproductions.co.uk/index.php/pf/helix/"]}
                    />
                )}
            />
            <p>Oddly Satisfying</p>
            <p>Skyward Bound</p>
            <p>Eternal Divide</p>
            <p>Healtify</p>
            <p>OSVP</p>
            <p>OSVP Playstation</p>
            <p>M2Live</p>
            <p>Natural Language Processing for Resume Parsing Using Labelling</p>
        </div>
    );
};

export default Projects;