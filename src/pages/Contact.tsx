import LinkedInIcon from '../assets/icons/i_linkin.svg?react';
import EmailIcon from '../assets/icons/i_email.svg?react';
import GithubIcon from '../assets/icons/i_github.svg?react';
import LocationIcon from '../assets/icons/i_location.svg?react';
import PhoneIcon from '../assets/icons/i_phone.svg?react';

const Contact = () => {
    return (
        <div className="flex justify-center animate-slideInLeft">
            <div className="flex flex-col text-center ...">
                <h2 className="text-lg font-bold">Oliver Krieger</h2>
                <h3>Software Developer</h3>
                <div className="links-container">
                    <LinkedInIcon className="w-6 h-6 text-blue-500" />
                    <EmailIcon className="w-6 h-6 text-blue-500" />
                    <GithubIcon className="w-6 h-6 text-blue-500" />
                    <LocationIcon className="w-6 h-6 text-blue-500" />
                    <PhoneIcon className="w-6 h-6 text-blue-500" />
                </div>
                <div className="info-container">

                </div>
                <button>Download CV</button>
            </div>
        </div>
    );
};

export default Contact;
