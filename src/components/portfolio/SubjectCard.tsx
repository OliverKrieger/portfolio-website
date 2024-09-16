import React from 'react';

interface SubjectCardProps {
    Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    iconClassName?: string;
    subjectName: string;
    onClick: () => void;
}

const SubjectCard: React.FC<SubjectCardProps> = ({Icon, iconClassName="w-12 h-12", subjectName, onClick}) => {
    return (
        <div onClick={onClick} className='cursor-pointer bg-slate-900 hover:bg-slate-800 transition-all ease-in-out p-4 w-48 h-48 flex flex-col items-center content-center justify-center text-center'>
            <Icon className={iconClassName} />
            <p className='pt-2'>{subjectName}</p>
        </div>
    );
};

export default SubjectCard;
