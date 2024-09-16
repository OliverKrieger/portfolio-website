import React from 'react';

interface SubjectCardProps {
    Icons: React.FunctionComponent<React.SVGProps<SVGSVGElement>>[];
    iconClassName?: string;
    gridClassName?: string;
    subjectName: string;
    onClick: () => void;
}

const SubjectCard: React.FC<SubjectCardProps> = ({ Icons, iconClassName = "w-12 h-12", gridClassName = "", subjectName, onClick }) => {
    return (
        <div onClick={onClick} className='cursor-pointer bg-slate-900 hover:bg-slate-800 transition-all ease-in-out p-4 w-48 h-48 flex flex-col items-center content-center justify-center text-center'>
            <div className={gridClassName}>
                {Icons.map((Icon, index) => (
                    <div key={index}>
                        <Icon className={iconClassName} />
                    </div>
                ))}
            </div>
            <p className='pt-2'>{subjectName}</p>
        </div>
    );
};

export default SubjectCard;
