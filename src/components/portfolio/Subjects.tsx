import React from 'react';

import SubjectCard from './SubjectCard';

import CSSIcon from '../../assets/icons_code/i_css.svg?react';
import CUDAIcon from '../../assets/icons_code/i_CUDA.svg?react';
import DockerIcon from '../../assets/icons_code/i_docker.svg?react';
import ElectronIcon from '../../assets/icons_code/i_electron.svg?react';
import FlaskIcon from '../../assets/icons_code/i_flask.svg?react';
import GitIcon from '../../assets/icons_code/i_git.svg?react';
import GitlabIcon from '../../assets/icons_code/i_gitlab.svg?react';
import HTMLIcon from '../../assets/icons_code/i_html.svg?react';
import JavaIcon from '../../assets/icons_code/i_java.svg?react';
import JupyterNotebookIcon from '../../assets/icons_code/i_jnotebook.svg?react';
import JavaScriptIcon from '../../assets/icons_code/i_js.svg?react';
import NodeJSIcon from '../../assets/icons_code/i_node.svg?react';
import NuxtJSIcon from '../../assets/icons_code/i_nuxtjs.svg?react';
import PiniaIcon from '../../assets/icons_code/i_pinia.svg?react';
import PostgreSQLIcon from '../../assets/icons_code/i_postgresql.svg?react';
import PrismaIcon from '../../assets/icons_code/i_prisma.svg?react';
import PythonIcon from '../../assets/icons_code/i_python.svg?react';
import PytorchIcon from '../../assets/icons_code/i_pytorch.svg?react';
import ReactIcon from '../../assets/icons_code/i_react.svg?react';
import SCSSIcon from '../../assets/icons_code/i_scss.svg?react';
import SQLIcon from '../../assets/icons_code/i_sql.svg?react';
import TailwindIcon from '../../assets/icons_code/i_tailwind.svg?react';
import TypeScriptIcon from '../../assets/icons_code/i_ts.svg?react';
import UnrealIcon from '../../assets/icons_code/i_unreal.svg?react';
import ViteIcon from '../../assets/icons_code/i_vite.svg?react';
import VueJSIcon from '../../assets/icons_code/i_vue.svg?react';
import CSharpIcon from '../../assets/icons_code/i_csharp.svg?react';
import CPlusIcon from '../../assets/icons_code/i_cplus.svg?react';

import { useOverlay } from '../OverlayContext';
import TopicSingular from '../topics/TopicSingular';

interface SubjectsProps {

}

const Subjects: React.FC<SubjectsProps> = ({ }) => {
    const { openOverlay } = useOverlay();

    return (
        <div className="animate-fadeIn grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 place-items-center h-full p-4">
            <SubjectCard
                Icons={[UnrealIcon]}
                iconClassName="w-12 h-12 text-white-100"
                subjectName='Unreal Engine'
                onClick={() => openOverlay(
                    <TopicSingular
                        Icons={[UnrealIcon]}
                        title='Unreal Engine'
                        description='I have used Unreal Engine for many years now, for both industry and personal projects. I become interested in the engnine when it became free in 2014, but did not fully begin working with it until 2016, after which I have been working with many companies while using it. I have used it for many different purposes, including:'
                        list={[
                            "At Figment Productions, working on immersive VR experiences for the company and for a BBC project",
                            "At Sony Europe for Virtual Production project, along with Playstation usage",
                            "With KYE for Jaws of Exctinction for technical art contract",
                            "In University of Kent for project Skyward Bound",
                            "Using it in spare time for personal projects"
                        ]}
                    />
                )}
            />
            <SubjectCard
                Icons={[CPlusIcon]}
                subjectName='C++'
                onClick={() => openOverlay(
                    <TopicSingular
                        Icons={[CPlusIcon]}
                        title='C++'
                        description='Due to having worked with unreal engine for a long time, I have also been working with C++. This includes:'
                        list={[
                            "Using it during the Helix and Oddly Satisfying projects while working at Figment Productions",
                            "Using C++ while working for Sony Europe for both, developing virtual production tools and while working on video processing with CUDA",
                            "In University of Kent for an encryption project",
                            "Personal projects"
                        ]}
                    />
                )}
            />
            <SubjectCard
                Icons={[CUDAIcon]}
                subjectName='CUDA'
                onClick={() => openOverlay(
                    <TopicSingular
                        Icons={[CUDAIcon]}
                        title='CUDA'
                        description='While I have not developed with CUDA as long as I have with C++, I have had experience with it, both in a university setting and commercial. This includes:'
                        list={[
                            "Used while working at Sony Europe for video processing",
                            "Completing parallel computing course"
                        ]}
                    />
                )}
            />
            <SubjectCard
                Icons={[GitIcon, GitlabIcon, DockerIcon]}
                subjectName='CI/CD'
                gridClassName='grid grid-cols-2 gap-4 place-items-center'
                onClick={() => openOverlay(
                    <TopicSingular
                        Icons={[GitIcon, GitlabIcon, DockerIcon]}
                        gridClassName='grid grid-cols-2 md:grid-cols-3 gap-4 place-items-center'
                        title='CI/CD'
                        description='The various tools that are required for CI/CD, I have used extensively across the years. This includes:'
                        list={[
                            "Sourcetree and BitBucket during my time in Sagittarius Marketing, proper staging and production environments",
                            "Gitlab during the Eternal Divide and Skyward Bound projects",
                            "Gitlab, Docker and Kubernetes while working at Figment Productions as well as Git commands and Github for separate projects",
                            "Gitlab, Github, Git and Docker while working on various projects at the University of Surrey",
                            "Gitlab, Github and Jenkins while at Sony Europe",
                            "Git and Github for personal projects"
                        ]}
                    />
                )}
            />
            <SubjectCard
                Icons={[VueJSIcon, PiniaIcon, PrismaIcon, NuxtJSIcon]}
                subjectName='VueJS Stack'
                gridClassName='grid grid-cols-2 gap-4 place-items-center'
                onClick={() => openOverlay(
                    <TopicSingular
                        Icons={[VueJSIcon, PiniaIcon, PrismaIcon, NuxtJSIcon]}
                        gridClassName='grid grid-cols-2 md:grid-cols-4 gap-4 place-items-center'
                        title='VueJS Stack'
                        description='I have worked with VueJS for a few years now, starting from my time at Figment Productions. 
                            Vue was somewhat of a passion framework for me, as a lot of companies ended up leaning towards React or Angular, 
                            but in a lot of my own projects I did end up using Vue, as it felt quite lightweight, while still having good integration. 
                            My work with VueJS and its stack includes:'
                        list={[
                            "In Figment Productions for Automation and Deployment systems",
                            "Building a Full Stack application with a team of 5 while leading for a healthy lifestyle app using VueJS, Bootstrap, Fastify, Prisma and PostgreSQL",
                            "Building frontend for my Artifical Intelligence project in 'Natural Language Processing for Resume Parsing' as part of my dissertatoin at the University of Surrey"
                        ]}
                    />
                )}
            />
            <SubjectCard
                Icons={[ReactIcon]}
                subjectName='React'
                onClick={() => openOverlay(
                    <TopicSingular
                        Icons={[ReactIcon]}
                        title='React'
                        description='While having worked with VueJS, it was quite straightforward to pick up React, as the two frameworks share a
                            lot of similarity. I have worked with React in both university setting and commercially. This includes:'
                        list={[
                            "Internal applications at Figment Productions",
                            "Projects at the University of Surrey",
                            "Internal visualisation for internal systems at Sony Europe",
                            "Personal website projects"
                        ]}
                    />
                )}
            />
            <SubjectCard
                Icons={[HTMLIcon, CSSIcon, SCSSIcon, TailwindIcon]}
                subjectName='Frontend Design Stack'
                gridClassName='grid grid-cols-2 gap-4 place-items-center'
                onClick={() => openOverlay(
                    <TopicSingular
                        Icons={[HTMLIcon, CSSIcon, SCSSIcon, TailwindIcon]}
                        gridClassName='grid grid-cols-2 md:grid-cols-4 gap-4 place-items-center'
                        title='Frontend Design Stack'
                        description='As I originally also have a background in Multimedia Technology and Design, I have achieved a formal recognition 
                            for the ability to design and style web based coding languages. I try to keep up with the latest trends and stacks, originally
                            starting from using Foundations, then Bootstrap and now lately adopting Tailwind. While having both university and commercial experience,
                            my work with the frontend stack includes:'
                        list={[
                            "For a variety of projects during the time at University of Kent",
                            "Extensively used during my time at Sagittarius Marketing for a variety of website modifications and client requests. This included use of HTML, CSS and SCSS, JavaScript and Sitecore",
                            "Internal systems design at Figment Productions",
                            "Variety of projects during my time at University of Surrey",
                            "Internal projects at Sony Europe"
                        ]}
                    />
                )}
            />
            <SubjectCard
                Icons={[JavaScriptIcon, TypeScriptIcon]}
                subjectName='Frontend Stack'
                gridClassName='grid grid-cols-2 gap-4 place-items-center'
                onClick={() => openOverlay(
                    <TopicSingular
                        Icons={[JavaScriptIcon, TypeScriptIcon]}
                        gridClassName='grid grid-cols-2 md:grid-cols-2 gap-4 place-items-center'
                        title='Frontend Stack'
                        description='Having been involved across many commercial and personal projects over the years, I have quite a bit of 
                            experience with JavaScript and TypeScript.'
                        list={[
                            "Various web projects using JavaScript in University of Kent",
                            "Used JavaScript to build frontend for websites in Sagittarius Marketing",
                            "Used JavaScript and TypeScript for various internal projects, including using RESTful APIs",
                            "Used TypeScript for a variety of projects in Univeristy of Surrey, both for web and applications",
                            "Used TypeScript for internal system projects at Sony Europe"
                        ]}
                    />
                )}
            />
            <SubjectCard
                Icons={[NodeJSIcon, ViteIcon, PostgreSQLIcon, SQLIcon]}
                subjectName='Full Stack'
                gridClassName='grid grid-cols-2 gap-4 place-items-center'
                onClick={() => openOverlay(
                    <TopicSingular
                        Icons={[NodeJSIcon, ViteIcon, PostgreSQLIcon, SQLIcon]}
                        gridClassName='grid grid-cols-2 md:grid-cols-4 gap-4 place-items-center'
                        title='Frontend Stack'
                        description='In order to develop full stack applications and websites I have used a variety of frameworks and systems. This includes:'
                        list={[
                            "Using SQL based databses during my time at University of Kent",
                            "Using NodeJS and SQL based databases during my time in Sagittarius Marketing",
                            "Using NodeJS, Express, Websockets, MongoDB and Postman during my time in Figment Productions",
                            "Using SQL based Databases, Fastify, NodeJS, Vite and PostgreSQL during my studies at University of Surrey"
                        ]}
                    />
                )}
            />
            <SubjectCard
                Icons={[ElectronIcon]}
                subjectName='Electron'
                onClick={() => openOverlay(
                    <TopicSingular
                        Icons={[ElectronIcon]}
                        title='Electron'
                        description='For building applications that could run both on a webserver and locally, I have used Electron as my main
                            platform of choice. This includes using it for:'
                        list={[
                            "Internal applications and visualisation of project data at Figment Productions",
                            "For final year project relating to AI for visualisation and interaction",
                            "A number of personal projects, including data generators and visualisers"
                        ]}
                    />
                )}
            />
            <SubjectCard
                Icons={[PythonIcon, FlaskIcon, JupyterNotebookIcon]}
                subjectName='Python Stack'
                gridClassName='grid grid-cols-2 gap-4 place-items-center'
                onClick={() => openOverlay(
                    <TopicSingular
                        Icons={[PythonIcon, FlaskIcon, JupyterNotebookIcon]}
                        gridClassName='grid grid-cols-2 md:grid-cols-3 gap-4 place-items-center'
                        title='Python Stack'
                        description='Since my time in University of Surrey and afterwards, I have used python and its subsequent libraries for a 
                            variety of tasks including, but not limited to, data manipulation, visualisation and processing. This includes:'
                        list={[
                            "In University of Surrey for data analysis and artificial intelligence projects, including the use of Python, JupyterNotebooks, Flask, Numpy, MatplotLib and SciKit",
                            "For Automation, image processing and testing while at Sony Europe",
                            "For backend systems and data manipulation in personal projects"
                        ]}
                    />
                )}
            />
            <SubjectCard
                Icons={[PytorchIcon]}
                subjectName='Artificial Intelligence'
                onClick={() => openOverlay(
                    <TopicSingular
                        Icons={[PytorchIcon]}
                        title='Artificial Intelligence'
                        description='During the time at the University I completed 3 separate modules on Artifical Intelligence and have been looking
                            into other wise AI could be implemented into future projects. Projects I have worked on are as following:'
                        list={[
                            "Using Tensorflow to build cell recognition AI",
                            "Researching and using PyTorch to build basis for recognition of brain signals using EEG (electroencephalogram) to measure participants mood and motor functions",
                            "Using PyTorch with Natural Language Processing to recognise abbreviations for given words using SpaCy and BERT",
                            "Using PyTorch with Natural Language Processing to recognise labels like 'Work Experience' and 'Years of Experience' with SpaCy and BERT and using a mix of rule based and word vector (FastText) ranking to recognise resume similarity to job description"
                        ]}
                    />
                )}
            />
            <SubjectCard
                Icons={[JavaIcon]}
                subjectName='Java'
                onClick={() => openOverlay(
                    <TopicSingular
                        Icons={[JavaIcon]}
                        title='Java'
                        description='During my years in computer science I have worked with Java. Because of having already worked with C++ for a number of years, I have the OOP fundamentals down, so I have never found using Java too difficult or dissimilar. My interactions with include:'
                        list={[
                            "During my degree in University of Kent to build a small Android application",
                            "Programming Fundamentals at the University of Surrey",
                            "Computer Security module for encryption tests using Java encryption libraries"
                        ]}
                    />
                )}
            />
            <SubjectCard
                Icons={[CSharpIcon]}
                subjectName='C#'
                onClick={() => openOverlay(
                    <TopicSingular
                        Icons={[CSharpIcon]}
                        title='C#'
                        description='Similarly to C++, without the pointers and having to handle memory excplicitly, I have had to use C# for a number of projects over the years, though not as extensively as C++. This includes:'
                        list={[
                            "During my time in Sagittarius Marketing for adjustments to backend that used IIS (Internet Information Services) and MVC (Model View Controller) pipeline for Sitecore and Umbraco websites",
                            "At Figment Productions for small windows applications to help run internal systems and for brief encounters with Unity",
                            "For Unreal automation tool"
                        ]}
                    />
                )}
            />
        </div>
    );
};

export default Subjects;
