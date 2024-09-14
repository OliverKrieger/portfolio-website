import Logo from '../components/Logo';

const Home: React.FC = () => {
    return (
        <div className="animate-slideInLeft h-full ...">
            <div className='home-container flex flex-col justify-center text-center ... h-full ... -mt-24'>
                <div className='logo-container flex justify-center'>
                    <Logo width_val={312} height_val={312} />
                </div>
                <div className='content-container'>
                    <h1 className='text-4xl text-bisque-500 tracking-[.25em] uppercase ... font-verdana custom-shadow-white text-stroke'>Oliver Krieger</h1>
                    <p className='text-2xl text-bisque-500 tracking-[.5em] uppercase ... font-verdana' >Software Developer</p>
                </div>
            </div>
        </div>
    );
};

export default Home;