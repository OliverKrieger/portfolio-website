import React from 'react';

import SubjectCard from './SubjectCard';

import Games from '../../assets/icons/i_controller.svg?react';
import Web from '../../assets/icons/i_web.svg?react';
import DevOps from '../../assets/icons/i_devops.svg?react';
import AI from '../../assets/icons/i_ai.svg?react';

import TopicGames from '../topics/TopicGames';

import { useOverlay } from '../OverlayContext';

interface SubjectsProps {
    setActiveSubject: (tab: string) => void;
}

const Subjects: React.FC<SubjectsProps> = ({ setActiveSubject }) => {
    const { openOverlay } = useOverlay();

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 place-items-center h-full">
            {/* <SubjectCard Icon={Games} subjectName='Video Game Development' onClick={() => setActiveSubject("games")} /> */}
            <SubjectCard Icon={Games} subjectName='Video Game Development' onClick={() => openOverlay(<TopicGames />)} />
            <SubjectCard Icon={Web} subjectName='Web Development' onClick={() => setActiveSubject("web")} />
            <SubjectCard Icon={DevOps} subjectName='Dev Ops' onClick={() => setActiveSubject("devops")} />
            <SubjectCard Icon={AI} subjectName='Artificial Intelligence' onClick={() => setActiveSubject("ai")} />
        </div>
    );
};

export default Subjects;
