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
            <button className='bg-bisque-500 p-2 m-4 rounded hover:bg-bisque-700 transition duration-150 ease-in-out' onClick={() => setActiveSubject("")}>Subjects</button>
            {renderPage()}
        </div>
    );
};

export default Topics;
