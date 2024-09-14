const About: React.FC = () => {
    return (
        <div className="text-center animate-slideInLeft">
            <h1>About Page</h1>
            <div className="rounded-lg bg-bisque-850 max-w-screen-lg mx-auto ">
                <div className="p-4 flex justify-center text-center">
                    <div className="flex flex-col justify-center flex-1 border-r border-gray-300 p-6 relative">
                        <h2 className="text-xl font-semibold">Left Column</h2>
                        <p>Content for the left column. This column has a right border.</p>
                        <div className="w-5 h-5 bg-bisque-500 rounded-full absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2"></div>
                        <div className="w-3 h-3 bg-bisque-100 rounded-full absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2"></div>
                    </div>
                    <div className="flex flex-col justify-center flex-1 p-6">
                        <h2 className="text-xl font-semibold">Right Column</h2>
                        <p>Content for the right column. This column will grow as needed to match the height of the left column.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
