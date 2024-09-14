import LinkedInIcon from '../assets/icons/i_linkin.svg?react';
import EmailIcon from '../assets/icons/i_email.svg?react';
import GithubIcon from '../assets/icons/i_github.svg?react';
import LocationIcon from '../assets/icons/i_location.svg?react';
import PhoneIcon from '../assets/icons/i_phone.svg?react';
import DownloadIcon from '../assets/icons/i_download.svg?react';

import AvatarImg from '../assets/Avatar.jpg';

import LinkIconButton from '../components/LinkIconButton';
import IconCard from '../components/IconCard';

import CV from '../assets/cv/Oliver Krieger CV.pdf'

const Contact = () => {
    return (
        <div className="flex justify-center animate-slideInLeft">
            <div className="flex flex-col text-center ... bg-bisque-825 p-4 rounded relative mt-32">
                <div className='w-52 h-52 rounded-xl overflow-hidden mx-auto mb-5 absolute -top-28 left-1/2 transform -translate-x-1/2'>
                    <img className='absolute top-12 left-1/2 transform -translate-x-1/2 scale-150' src={AvatarImg} />
                </div>
                <div className='mt-24'>
                    <h2 className="text-xl ... font-bold ... tracking-[.1em] ...">Oliver Krieger</h2>
                    <h3 className='text-sm text-slate-400 my-3'>Software Developer</h3>
                    <div className="links-container">
                        <LinkIconButton Icon={LinkedInIcon} url="https://www.linkedin.com/in/oliver-krieger-080434a5/" linkClassName="bg-bisque-500 ... p-2 ... m-1 ... rounded ... hover:bg-bisque-700 ... transition duration-150 ease-in-out ..." className="text-bisque-100" target="_blank" rel="noopener noreferrer" />
                        <LinkIconButton Icon={GithubIcon} url="https://github.com/OliverKrieger" linkClassName="bg-bisque-500 ... p-2 ... m-1 ... rounded ... hover:bg-bisque-700 ... transition duration-150 ease-in-out ..." className="text-bisque-100" target="_blank" rel="noopener noreferrer" />
                    </div>
                    <div className="info-container bg-bisque-850 ... rounded ... p-2 ... my-4 ... divide-y">
                        <IconCard Icon={EmailIcon} header='Email' message='oliver.krieger76@gmail.com' />
                        <IconCard Icon={PhoneIcon} header='Mobile' message='+44 (0) 7754774679' />
                        <IconCard Icon={LocationIcon} header='Location' message='Surrey, United Kingdom' />
                    </div>
                    <a href={CV} download="Oliver Krieger CV" target="_blank" rel="noopener noreferrer" className='bg-bisque-500 ... p-2 ... m-1 ... rounded ... hover:bg-bisque-700 ... transition duration-150 ease-in-out ...'>
                        <DownloadIcon className="w-6 h-6 text-bisque-100 inline-block -mt-1" />
                        <span className='pr-2'>Download CV</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Contact;
