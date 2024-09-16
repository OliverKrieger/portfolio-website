import React from 'react';

interface SubjectCardProps {
    Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    iconClassName?: string;
    subjectName: string;
    onClick: () => void;
}

const SubjectCard: React.FC<SubjectCardProps> = ({Icon, iconClassName="w-12 h-12", subjectName, onClick}) => {
    return (
        <div onClick={onClick}>
            <Icon className={iconClassName} />
            <p>{subjectName}</p>
        </div>
    );
};

export default SubjectCard;
