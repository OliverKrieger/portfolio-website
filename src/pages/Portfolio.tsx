import React, { useState } from 'react';

import Subjects from '../components/portfolio/Subjects';
import Topics from '../components/portfolio/Topics';


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
                    <p>Coding Languages (Split into Frontend, Backend, Unreal, Dev Ops, etc... then add languages underneath)</p>
                    <p>
                        Projects (Mainly Game reels, but also list projects / jobs and languages / skills used
                        (placement and CUDA and Virtual production at sony?)). Maybe also upload Final Project?
                    </p>
                    <p>
                        Check git over years as well
                    </p>
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