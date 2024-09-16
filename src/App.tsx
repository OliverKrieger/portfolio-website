import { useState } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';

import Navbar from './components/Navbar';

import './styles/main.scss';


function App() {
  const [activeTab, setActiveTab] = useState<string>('home');

  const renderPage = () => {
    switch (activeTab) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      case 'portfolio':
        return <Portfolio />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="App bg-bisque-900 text-bisque-100 p-6 flex flex-col">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="content grow-[1] content-center relative">{renderPage()}</div>
    </div>
  );
}

export default App;
