import React from 'react';

import SubjectCard from './SubjectCard';

import Games from '../../assets/icons/i_controller.svg?react';
import Web from '../../assets/icons/i_web.svg?react';
import DevOps from '../../assets/icons/i_devops.svg?react';
import AI from '../../assets/icons/i_ai.svg?react';

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
import NumpyIcon from '../../assets/icons_code/i_numpy.svg?react';
import PiniaIcon from '../../assets/icons_code/i_pinia.svg?react';
import PostgreSQLIcon from '../../assets/icons_code/i_postgresql.svg?react';
import PrismaIcon from '../../assets/icons_code/i_prisma.svg?react';
import PythonIcon from '../../assets/icons_code/i_python.svg?react';
import PytorchIcon from '../../assets/icons_code/i_pytorch.svg?react';
import ReactIconIcon from '../../assets/icons_code/i_react.svg?react';
import SCSSIcon from '../../assets/icons_code/i_scss.svg?react';
import SQLIcon from '../../assets/icons_code/i_sql.svg?react';
import TailwindIcon from '../../assets/icons_code/i_tailwind.svg?react';
import TypeScriptIcon from '../../assets/icons_code/i_ts.svg?react';
import UnrealIcon from '../../assets/icons_code/i_unreal.svg?react';
import ViteIcon from '../../assets/icons_code/i_vite.svg?react';
import VRIcon from '../../assets/icons_code/i_vr.svg?react';
import VueJSIcon from '../../assets/icons_code/i_vue.svg?react';

import TopicGames from '../topics/TopicGames';

import { useOverlay } from '../OverlayContext';
import TopicSingular from '../topics/TopicSingular';

interface SubjectsProps {

}

const Subjects: React.FC<SubjectsProps> = ({}) => {
    const { openOverlay } = useOverlay();

    return (
        <div className="animate-slideInLeft grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 place-items-center h-full">
            <SubjectCard Icon={UnrealIcon} iconClassName="w-12 h-12 text-white-100" subjectName='Unreal Engine' onClick={() => openOverlay(
                <TopicSingular 
                    Icon={UnrealIcon}
                    title='Unreal Engine'
                    description='I have used Unreal Engine for many years now, for both industry and personal projects. I become interested in the engnine when it became free in 2014, but did not fully begin working with it until 2016, after which I have been working with many companies while using it. I have used it for many different purposes, including:'
                    list={[
                        "Nearly 3 years at Figment Productions, working on immersive VR experiences for the company and for a BBC project",
                        "1 year at Sony Europe for Virtual Production project, along with Playstation usage",
                        "2 months with KYE for Jaws of Exctinction for technical art contract",
                        "1 year in University of Kent for project Skyward Bound",
                        "Using it in spare time for personal projects"
                    ]}
                />
            )} />
            <SubjectCard Icon={Games} subjectName='Video Game Development' onClick={() => openOverlay(<TopicGames />)} />
            <SubjectCard Icon={Web} subjectName='Web Development' onClick={() => openOverlay(<TopicGames />)} />
            <SubjectCard Icon={DevOps} subjectName='Dev Ops' onClick={() => openOverlay(<TopicGames />)} />
            <SubjectCard Icon={AI} subjectName='Artificial Intelligence' onClick={() => openOverlay(<TopicGames />)} />
        </div>
    );
};

export default Subjects;
