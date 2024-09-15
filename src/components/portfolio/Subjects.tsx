import React from 'react';

import SubjectCard from './SubjectCard';

import Games from '../../assets/icons/i_controller.svg?react';
import Web from '../../assets/icons/i_web.svg?react';
import DevOps from '../../assets/icons/i_devops.svg?react';
import AI from '../../assets/icons/i_ai.svg?react';

interface SubjectsProps {
    setActiveSubject: (tab: string) => void;
}

const Subjects: React.FC<SubjectsProps> = ({setActiveSubject}) => {
    return (
        <div>
            <div className="grid grid-cols-4 gap-4 place-items-center">
                <SubjectCard Icon={Games} subjectName='Video Game Development' onClick={() => setActiveSubject("games")} />
                <SubjectCard Icon={Web} subjectName='Video Game Development' onClick={() => setActiveSubject("web")} />
                <SubjectCard Icon={DevOps} subjectName='Video Game Development' onClick={() => setActiveSubject("devops")} />
                <SubjectCard Icon={AI} subjectName='Video Game Development' onClick={() => setActiveSubject("ai")} />
            </div>
        </div>
    );
};

export default Subjects;
