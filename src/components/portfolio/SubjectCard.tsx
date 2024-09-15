import React from 'react';

interface SubjectCardProps {
    Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    subjectName: string;
    onClick: () => void;
}

const SubjectCard: React.FC<SubjectCardProps> = ({Icon, subjectName, onClick}) => {
    return (
        <div onClick={onClick}>
            <Icon className="w-12 h-12 text-bisque-500" />
            <p>{subjectName}</p>
        </div>
    );
};

export default SubjectCard;
