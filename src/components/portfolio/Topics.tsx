import React from 'react';

import TopicGames from '../topics/TopicGames';
import TopicWeb from '../topics/TopicWeb';
import TopicDevOps from '../topics/TopicDevOps';
import TopicAI from '../topics/TopicAI';

interface TopicsProps {
    activeSubject: string;
    setActiveSubject: (tab: string) => void;
}

const Topics: React.FC<TopicsProps> = ({activeSubject, setActiveSubject}) => {

    const renderPage = () => {
        switch (activeSubject) {
            case 'web':
                return <TopicWeb />;
            case 'games':
                return <TopicGames />;
            case 'devops':
                return <TopicDevOps />;
            case 'ai':
                return <TopicAI />;
            default:
                return <div></div>;
        }
    };

    return (
        <div>
            <button onClick={() => setActiveSubject("")}>Subjects</button>
            {renderPage()}
        </div>
    );
};

export default Topics;
