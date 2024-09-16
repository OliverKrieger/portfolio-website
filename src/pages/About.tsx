import TwoColumnBanner from "../components/TwoColumnBanner";

import aboutPortrait from "../assets/aboutPortrait.jpg";

const About: React.FC = () => {
    return (
        <div className="text-center animate-slideInLeft">
            <div className="flex items-stretch lg:items-center flex-col lg:flex-row p-6 bg-bisque-850 rounded-t-lg">
                <div className="flex-1 min-h-[185px] sm:min-h-[256px] md:min-h-[338px] lg:min-h-[448px] ring mx-8 p-2 ring-bisque-500 ring-offset-8 dark:ring-offset-slate-900 rounded-lg overflow-hidden relative">
                    <img className="absolute max-h-full max-w-none top-0 lg:top-16 left-1/2 transform -translate-x-1/2 scale-[1.7]" src={aboutPortrait} />
                </div>
                <div className="flex-1 text-left p-6">
                    <h2 className="text-lg uppercase text-bisque-300">Hi, my name is</h2>
                    <h1 className="text-4xl uppercase tracking-[.15em] py-4">Oliver Krieger</h1>
                    <h2 className="text-lg uppercase text-bisque-300 pb-4">and I am a <span className="text-bisque-400 font-bold">Software Developer</span></h2>
                    <p className="pb-4">Having worked in the industry for years now, acquiring a degree in BSc (Hons) Multimedia Technology and Design from the University of Kent and BSc (Hons) Computer Science from the University of Surrey, my experience in the field of design and programming is substantially wide. Having started out my career more on the design side of web development, doing Front-End Development, I gradually progressed into the game asset creation and coding. This led me to eventually progress towards a code-only career path, which after acquiring my degree in computer science I am actively pursuing. Thus, I have the expertise to offer best of two worlds.</p>
                    <p className="pb-4">I have always been passionate about technology and everything that comes with it. While my interest started out in video games and their creation, in recent years I have become more fluid in my interests. Because of my love for video games and its wide use in the industry, I am quite proficient with using Unreal Engine. I have written apps and websites in their full lifecycle, have experience with dev ops / atomisation and have worked with Artificial Intelligence.</p>
                    <p>I am currently living in Woking, England</p>
                </div>
            </div>
            <div className="rounded-b-lg bg-bisque-850 mx-auto p-4">
                <div className="experience-container">
                    <h2 className="text-2xl uppercase text-bisque-300 pb-0 md:pb-4">Experience</h2>
                    <TwoColumnBanner
                        leftText="September 2022 - September 2023"
                        rightHeader="Sony | Professional Europe"
                        rightText="Software Developer Placement"
                        rightSubText="Basingstoke"
                    />
                    <TwoColumnBanner
                        leftText="January 2018 - August 2020"
                        rightHeader="Figment Productions"
                        rightText="Software Developer"
                        rightSubText="Guildford, Surrey"
                    />
                    <TwoColumnBanner
                        leftText="December 2017 - January 2018"
                        rightHeader="KYE Creations"
                        rightText="Technical Artist"
                    />
                    <TwoColumnBanner
                        leftText="June 2015 - June 2016"
                        rightHeader="Sagittarius Marketing"
                        rightText="Front End Web Developer Intern"
                        rightSubText="Ashford, Kent"
                    />
                </div>
                <div className="education-container">
                    <h2 className="text-2xl uppercase text-bisque-300 pt-4 pb-0 md:py-4">Education</h2>
                    <TwoColumnBanner
                        leftText="September 2020 - July 2024"
                        rightHeader="University of Surrey"
                        rightText="BSc (Hons) Computer Science"
                        rightSubText="Guildford, Surrey"
                    />
                    <TwoColumnBanner
                        leftText="September 2013 - July 2017"
                        rightHeader="University of Kent"
                        rightText="BSc (Hons) Multimedia Technology and Design"
                        rightSubText="Canterbury, Kent"
                    />
                </div>
            </div>
        </div>
    );
};

export default About;
