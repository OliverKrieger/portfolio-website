import React, { useState } from 'react';

import Subjects from '../components/portfolio/Subjects';
import Topics from '../components/portfolio/Topics';

import CodeIcon from '../assets/icons/i_code.svg?react';
import ProjectIcon from '../assets/icons/i_projects.svg?react';


const Portfolio: React.FC = () => {
    const [activeSubject, setActiveSubject] = useState<string>('');

    const renderPage = () => {
        switch (activeSubject) {
            case 'subjects':
                return <Subjects setActiveSubject={setActiveSubject} />;
            case 'web':
            case 'games':
            case 'devops':
            case 'ai':
                return <Topics activeSubject={activeSubject} setActiveSubject={setActiveSubject} />;
            default:
                return <Subjects setActiveSubject={setActiveSubject} />;
        }
    };

    return (
        <div className="animate-slideInLeft h-full">
            <div className="flex">
                <div className="flex-none bg-slate-800 w-24">
                    <CodeIcon className="w-12 h-12 text-bisque-500"/>
                    <ProjectIcon className="w-12 h-12 text-bisque-500"/>
                </div>
                <div className="flex-1 bg-slate-400">
                    {renderPage()}
                </div>
                <div className="flex-none bg-slate-800 w-24">

                </div>
            </div>

        </div>
    );
};

export default Portfolio;