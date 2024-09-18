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
                        description=''
                        list={[
                            ""
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
                        description=''
                        list={[
                            ""
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
                        gridClassName='grid grid-cols-2 md:grid-cols-4 gap-4 place-items-center'
                        title='CI/CD'
                        description=''
                        list={[
                            ""
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
                        description='I have worked with VueJS for a few years now, starting from my time at Figment Productions. My work with VueJS and its stack includes:'
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
                        description=''
                        list={[
                            ""
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
                        description=''
                        list={[
                            ""
                        ]}
                    />
                )}
            />
            <SubjectCard
                Icons={[JavaScriptIcon, TypeScriptIcon, NodeJSIcon]}
                subjectName='Frontend Stack'
                gridClassName='grid grid-cols-2 gap-4 place-items-center'
                onClick={() => openOverlay(
                    <TopicSingular
                        Icons={[JavaScriptIcon, TypeScriptIcon, NodeJSIcon]}
                        gridClassName='grid grid-cols-2 md:grid-cols-4 gap-4 place-items-center'
                        title='Frontend Design Stack'
                        description=''
                        list={[
                            ""
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
                        title='Frontend Design Stack'
                        description=''
                        list={[
                            ""
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
                        description=''
                        list={[
                            ""
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
                        gridClassName='grid grid-cols-2 md:grid-cols-4 gap-4 place-items-center'
                        title='Python Stack'
                        description=''
                        list={[
                            ""
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
                        description=''
                        list={[
                            ""
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
                        description=''
                        list={[
                            ""
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
                        description=''
                        list={[
                            ""
                        ]}
                    />
                )}
            />
        </div>
    );
};

export default Subjects;
