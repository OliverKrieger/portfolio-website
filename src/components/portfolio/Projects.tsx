import React from "react";

import ProjectCard from "./ProjectCard";

import { useOverlay } from '../OverlayContext';
import TopicProjects from "../topics/TopicProjects";

import HelixImg from "../../assets/project_imgs/Helix.jpg";
import OddlyImg from "../../assets/project_imgs/OddlySatisfying.jpg";
import SkywardImg from "../../assets/project_imgs/SkywardBound.jpg";
import EternalImg from "../../assets/project_imgs/EternalDivide.jpg";
import JoEImg from "../../assets/project_imgs/JoE.jpg";
import HealtifyImg from "../../assets/project_imgs/Healthify.jpg";
import OSVPImg from "../../assets/project_imgs/OSVP.jpg";
import M2LiveImg from "../../assets/project_imgs/M2Live.jpg";
import FYPImg from "../../assets/project_imgs/FYP.jpg";


interface ProjectsProps {

}

const Projects: React.FC<ProjectsProps> = ({ }) => {
    const { openOverlay } = useOverlay();

    return (
        <div className="animate-slideInLeft grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 h-full p-4">
            <ProjectCard
                img={HelixImg}
                title='Helix'
                tags={["Unreal Engine", "C++", "VR", "VueJS", "NodeJS", "Docker", "Kubernetes", "Gitlab"]}
                onClick={() => openOverlay(
                    <TopicProjects
                        title='Helix'
                        description='Helix Project'
                        links={["https://figmentproductions.co.uk/index.php/pf/helix/"]}
                    />
                )}
            />
            <ProjectCard
                img={OddlyImg}
                title='Oddly Satisfying'
                tags={["Unreal Engine", "C++"]}
                onClick={() => openOverlay(
                    <TopicProjects
                        title='Oddly Satisfying'
                        description='Oddly Satisfying Project'
                    />
                )}
            />
            <ProjectCard
                img={SkywardImg}
                title='Skyward Bound'
                tags={["Unreal Engine", "C++", "Maya"]}
                onClick={() => openOverlay(
                    <TopicProjects
                        title='Skyward Bound'
                        description='Skyward Bound Project'
                    />
                )}
            />
            <ProjectCard
                img={EternalImg}
                title='Eternal Divide'
                tags={["Unity", "C#", "Maya"]}
                onClick={() => openOverlay(
                    <TopicProjects
                        title='Eternal Divide'
                        description='Eternal Divide Project'
                    />
                )}
            />
            <ProjectCard
                img={JoEImg}
                title='Jaws of Extinction'
                tags={["Unreal Engine", "C++", "Blender"]}
                onClick={() => openOverlay(
                    <TopicProjects
                        title='Jaws of Extinction'
                        description='Jaws of Extinction Project'
                    />
                )}
            />
            <ProjectCard
                img={HealtifyImg}
                title='Healtify'
                tags={["VueJS", "HTML", "SCSS", "CSS", "JavaScript", "Prisma", "PostgreSQL"]}
                onClick={() => openOverlay(
                    <TopicProjects
                        title='Healtify'
                        description='Healtify Project'
                    />
                )}
            />
            <ProjectCard
                img={OSVPImg}
                title='OSVP'
                tags={["Unreal Engine", "C++", "Python", "VR", "Playstation"]}
                onClick={() => openOverlay(
                    <TopicProjects
                        title='OSVP'
                        description='OSVP Project'
                    />
                )}
            />
            <ProjectCard
                img={M2LiveImg}
                title='M2Live'
                tags={["C++", "CUDA", "React", "Python"]}
                onClick={() => openOverlay(
                    <TopicProjects
                        title='M2Live'
                        description='M2Live Project'
                    />
                )}
            />
            <ProjectCard
                img={FYPImg}
                title='Natural Language Processing for Resume Parsing Using Labelling'
                tags={["Python", "PyTorch", "VueJS", "Electron"]}
                onClick={() => openOverlay(
                    <TopicProjects
                        title='Natural Language Processing for Resume Parsing Using Labelling'
                        description='Natural Language Processing for Resume Parsing Using Labelling Project'
                    />
                )}
            />
        </div>
    );
};

export default Projects;