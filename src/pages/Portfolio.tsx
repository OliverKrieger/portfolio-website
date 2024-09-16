import React, { useState } from 'react';

import Subjects from '../components/portfolio/Subjects';
import Projects from '../components/portfolio/Projects';

import LeftTabButton from '../components/LeftTabButton';

import CodeIcon from '../assets/icons/i_code.svg?react';
import ProjectIcon from '../assets/icons/i_projects.svg?react';


const Portfolio: React.FC = () => {
    const [activeTab, setActiveTab] = useState<string>('');

    const renderPage = () => {
        switch (activeTab) {
            case 'subjects':
                return <Subjects />;
            case 'projects':
                return <Projects />;
            default:
                return <Subjects />;
        }
    };

    return (
        <div className="animate-slideInLeft h-full w-full absolute top-0">
            <div className="flex flex-col md:flex-row h-full">
                <div className="flex flex-row md:flex-col items-center justify-center w-full md:w-24">
                    <LeftTabButton Icon={CodeIcon} setActiveTab={setActiveTab} text='Code' tab='subjects' />
                    <LeftTabButton Icon={ProjectIcon} setActiveTab={setActiveTab} text='Projects' tab='projects' />
                </div>
                <div className="flex-1 bg-bisque-850 rounded">
                    {renderPage()}
                </div>
                <div className="w-24">

                </div>
            </div>

        </div>
    );
};

export default Portfolio;