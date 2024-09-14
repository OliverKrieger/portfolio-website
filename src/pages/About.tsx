import TwoColumnBanner from "../components/TwoColumnBanner";

const About: React.FC = () => {
    return (
        <div className="text-center animate-slideInLeft">
            <div className="rounded-lg bg-bisque-850 max-w-screen-lg mx-auto p-4">
                <div className="experience-container">
                    <h2 className="text-2xl uppercase text-bisque-300 pb-4">Experience</h2>
                    <TwoColumnBanner
                        leftHeader=""
                        leftText="September 2022 - September 2023"
                        rightHeader="Sony | Professional Europe"
                        rightText="Software Developer Placement, Basingstoke"
                    />
                    <TwoColumnBanner
                        leftHeader=""
                        leftText="January 2018 - August 2020"
                        rightHeader="Figment Productions"
                        rightText="Software Developer, Guildford, Surrey"
                    />
                    <TwoColumnBanner
                        leftHeader=""
                        leftText="December 2017 - January 2018"
                        rightHeader="KYE Creations"
                        rightText="Technical Artist"
                    />
                    <TwoColumnBanner
                        leftHeader=""
                        leftText="June 2015 - June 2016"
                        rightHeader="Sagittarius Marketing"
                        rightText="Front End Web Developer Intern, Ashford, Kent"
                    />
                </div>
                <div className="education-container">
                    <h2 className="text-2xl uppercase text-bisque-300 py-4">Education</h2>
                    <TwoColumnBanner
                        leftHeader=""
                        leftText="September 2020 - July 2024"
                        rightHeader="University of Surrey"
                        rightText="BSc (Hons) Computer Science, Guildford, Surrey"
                    />
                    <TwoColumnBanner
                        leftHeader=""
                        leftText="September 2013 - July 2017"
                        rightHeader="University of Kent"
                        rightText="BSc (Hons) Multimedia Technology and Design with Year in Industry, Canterbury, Kent"
                    />
                </div>
            </div>
        </div>
    );
};

export default About;
