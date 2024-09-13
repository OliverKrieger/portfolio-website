import Logo from '../components/Logo';

const Home: React.FC = () => {
    return (
        <div className="grid grid-cols-1 gap-4 place-content-stretch h-48 ... animate-slideInLeft">
            <div className='home-container'>
                <div className='logo-container'>
                    <Logo />
                </div>
                <div className='content-container'>
                    <h1>Oliver Krieger</h1>
                    <p>Software Developer</p>
                </div>
            </div>
        </div>
    );
};

export default Home;