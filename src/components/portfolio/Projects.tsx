import React from "react";

import ProjectCard from "./ProjectCard";

import { useOverlay } from '../OverlayContext';
import TopicProjects from "../topics/TopicProjects";

import HelixImg from "../../assets/project_imgs/Helix.jpg";
import OddlyImg from "../../assets/project_imgs/OddlySatisfying.jpg";
import SkywardImg from "../../assets/project_imgs/SkywardBound.jpg";
import EternalImg from "../../assets/project_imgs/EternalDivide.jpg";
import PersonalProjImg from "../../assets/project_imgs/PersonalProjects.jpg";
import JoEImg from "../../assets/project_imgs/JoE.jpg";
import HealtifyImg from "../../assets/project_imgs/Healthify.jpg";
import OSVPImg from "../../assets/project_imgs/OSVP.jpg";
import M2LiveImg from "../../assets/project_imgs/M2Live.jpg";
import FYPImg from "../../assets/project_imgs/FYP.jpg";
import PersonalWebProjImg from "../../assets/project_imgs/PersonalWebProjects.jpg";

import FYPProject from "../../assets/projects/FYP_Report.pdf";


interface ProjectsProps {

}

const Projects: React.FC<ProjectsProps> = ({ }) => {
    const { openOverlay } = useOverlay();

    return (
        <div className="animate-fadeIn grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 h-full p-4">
            <ProjectCard
                imgSrc={HelixImg}
                title='Helix'
                tags={["Unreal Engine", "C++", "VR", "VueJS", "NodeJS", "Docker", "Kubernetes", "Gitlab", "C#"]}
                onClick={() => openOverlay(
                    <TopicProjects
                        title='Helix'
                        description='I started working on the Helix project when I joined Figment Productions in the start of 2018
                            and ended up working on it throughout my time there (on and off) until August of 2020. Helix was meant to be an immersive
                            virtual relative experience that could be loaded onto laptop backpacks and connected to headsets. The project
                            was built using Unreal Engine and had multiple parts, like using UDP messaging to have the real world parts talk
                            to the game, Docker and Kubernetes to handle loading the servers and using an automation system to deploy onto
                            the backpacks using VueJS. It also had to handle multiplayer to connect the backpacks to each other in a server. 
                            At the time the project also featured generating avatars from user pictures and a bespoke
                            animation system that tried to mimic speed and movement of the users depending on the data captured from previous runs (think early days of motion matching). 
                            During the time there I got to work with headsets like MSVR, Vive and Vive Pro and Quest.'
                        links={["https://figmentproductions.co.uk/index.php/pf/helix/"]}
                    />
                )}
            />
            <ProjectCard
                imgSrc={HealtifyImg}
                title='Healtify'
                tags={["VueJS", "HTML", "SCSS", "CSS", "JavaScript", "Prisma", "PostgreSQL", "Docker", "Gitlab"]}
                onClick={() => openOverlay(
                    <TopicProjects
                        title='Healtify'
                        description='The Healtify project was a end of second year project and involved working with 4 other people to build and
                            develop a full stack application with 4 microservices. During the project, I both led the team and managed the main
                            bulk of coding, including setting up the technical stack with Vue, Prisma and PostgreSQL, building the main structure 
                            of the project, building the backend implementation for Prisma and PostgreSQL and building 2 of the 4 microservices (
                            google maps API and a real time connection update using websockets to give user reminders). I also implemented user 
                            logins and designed most of the pages.'
                    />
                )}
            />
            <ProjectCard
                imgSrc={FYPImg}
                title='Natural Language Processing for Resume Parsing Using Labelling'
                tags={["Python", "PyTorch", "AI", "VueJS", "TypeScript", "Vite", "WebSockets", "Electron", "Github"]}
                onClick={() => openOverlay(
                    <TopicProjects
                        title='Natural Language Processing for Resume Parsing Using Labelling'
                        description='My final year project at the University of Surrey was Natural Language Processing for Resume Parsing Using 
                            Labelling. While the title is long, it did have many parts, mostly focus on artifical intelligence. The idea was to 
                            take a number of job descriptions and a number of resumes and match the best matching resumes to the best matching 
                            job descriptions. The project tackled generating data and used Python and Pytorch for the AI and VueJS, TypeScript, 
                            WebSockets and Electron to visualise the project and the data manipulation as well as Jupyter Notebooks for smaller 
                            visualisations and data accuracy.'
                        downloadables={[[FYPProject, "Final Year Project"]]}
                    />
                )}
            />
            <ProjectCard
                imgSrc={OSVPImg}
                title='OSVP'
                tags={["Unreal Engine", "C++", "Python", "VR", "Playstation", "Gitlab"]}
                onClick={() => openOverlay(
                    <TopicProjects
                        title='OSVP'
                        description='During my time in Sony I worked on 3 projects, 2 of which were related to OSVP. OSVP was a virtual production
                            project developed in Unreal Engine. On the project, I worked with building internal systems inside of unreal, test 
                            automation, bringing the project to Playstation, user interface and virtual reality tracking using Vive motion trackers.
                            I also worked with unreals render pipeline.'
                    />
                )}
            />
            <ProjectCard
                imgSrc={M2LiveImg}
                title='M2Live'
                tags={["C++", "CUDA", "React", "Python", "Gitlab"]}
                onClick={() => openOverlay(
                    <TopicProjects
                        title='M2Live'
                        description='The M2Live Image Processing project was the final project I worked on during my time in Sony and involved 
                            working with CUDA and as the name suggests, image processing. I implemented controls to adjust video parameters and 
                            build a colour matching system based on histogram matching using cumulative distribution function. The project also
                            had a react frontend and python testing system, both of which I would interact with while working on the project and
                            add functionality to them.'
                    />
                )}
            />
            <ProjectCard
                imgSrc={OddlyImg}
                title='Oddly Satisfying'
                tags={["Unreal Engine", "C++", "VR", "Blender", "Gitlab"]}
                onClick={() => openOverlay(
                    <TopicProjects
                        title='Oddly Satisfying'
                        videos={["https://www.youtube.com/embed/wXPEp9yPdGg?si=HinjJ90UELpkqIeP"]}
                        description='During my time at Figment I also worked on a BBC requested project called "Oddly Satisfying". The idea behind it 
                            was to create an experience where the user could interact with the virtual world, making a cake and playing some music, 
                            essentially to give the users a taste of virtual reality. The project used Unreal Engine and was built on the Quest headset. 
                            It also had an element of making HTTP requests to capture user analytics for which experiences they chose and which elements 
                            they chose to interact with. I also ended up working on slight blender modifications for the project.'
                    />
                )}
            />
            <ProjectCard
                imgSrc={SkywardImg}
                title='Skyward Bound'
                tags={["Unreal Engine", "C++", "Maya", "Gitlab"]}
                onClick={() => openOverlay(
                    <TopicProjects
                        title='Skyward Bound'
                        videos={["https://www.youtube.com/embed/ERZNujdimRI?si=hfAW7XQYKhzf6uTR&amp;start=34"]}
                        description='As my final project for my degree at the University of Kent, myself and two other members of my course 
                            built a game together called "Skyward Bound". This project was our first proper use of Unreal Engine and was quite
                            ambitious considering none of us had used it before. It also had a simple local multiplayer element to it. On the
                            project I worked on everything, but was focused on the technical art aspects, as well as character modelling and animation.
                            I also handled systems to do with animation state machine and game logic.'
                    />
                )}
            />
            <ProjectCard
                imgSrc={EternalImg}
                title='Eternal Divide'
                tags={["Unity", "C#", "Maya", "Gitlab"]}
                onClick={() => openOverlay(
                    <TopicProjects
                        title='Eternal Divide'
                        videos={["https://www.youtube.com/embed/ERZNujdimRI?si=WMNLUg2tbR1uGKUJ"]}
                        description='Eternal Divide was the first video game project I worked together in the University of Kent. It was built on
                            the Unity game engine and was built to be a simple 2.5D game where the player could switch between "realms" to solve
                            puzzles. The game features a very basic attack system. During the making of this, I handled the artistic and animation
                            logic of the game, as well as the game and puzzle logic for the first level.'
                    />
                )}
            />
            <ProjectCard
                imgSrc={JoEImg}
                title='Jaws of Extinction'
                tags={["Unreal Engine", "C++", "Blender"]}
                onClick={() => openOverlay(
                    <TopicProjects
                        title='Jaws of Extinction'
                        description='During a brief time between finishing my degree at University of Kent and moving on to Figment Productions, 
                            for a time, I worked as a technical artist for Jaws of Extinction. I dealt with some of the character design and art,
                            as well as implementing it inside of unreal.'
                        links={["https://store.steampowered.com/app/617850/Jaws_Of_Extinction/"]}
                    />
                )}
            />
            <ProjectCard
                imgSrc={PersonalProjImg}
                title='Personal Game Projects'
                tags={["Unreal Engine", "C++", "Blender", "Github", "SDL"]}
                onClick={() => openOverlay(
                    <TopicProjects
                        title='Personal Game Projects'
                        videos={["https://www.youtube.com/embed/LawG2yUxJOU?si=en01VTAMul9ct2Op"]}
                        description='Over the years, on the side of work and other commitments, I have still tried to keep up with a variety of
                            game develolpment. There have been projects and systems I have just built for fun to test out new releases of unreal 
                            engine, as well as to either showcase something or build something functional to assist me in a specific task. These 
                            project range from using Unreal Engine and C++ to testing out C++ in SDL and more.'
                    />
                )}
            />
            <ProjectCard
                imgSrc={PersonalWebProjImg}
                title='Personal Web Projects'
                tags={["React", "VueJS", "JavaScript", "TypeScript", "Python", "Vite", "WebSockets", "Express", "NodeJS", "Tailwind", "HTML", "CSS", "SCSS", "Github", "Wordpress", "PHP"]}
                onClick={() => openOverlay(
                    <TopicProjects
                        title='Personal Web Projects'
                        description='As part of work and building small applications, I have had experience with a number of web technologies, 
                            both for frontend and backend. These range from designing frontend for websites, web APIs for user data updates, 
                            data parsers and generators, web scrapers and more.'
                    />
                )}
            />
        </div>
    );
};

export default Projects;