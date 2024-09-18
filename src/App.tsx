import { useState } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';

import Navbar from './components/Navbar';

import { OverlayProvider } from './components/OverlayContext';

import './styles/main.scss';
import './styles/tagColours.scss';

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
    <OverlayProvider>
      <div className="App bg-bisque-900 text-bisque-100 p-6 flex flex-col overflow-auto scrollbar-light">
        <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="content grow-[1] content-center relative">{renderPage()}</div>
      </div>
    </OverlayProvider>
  );
}

export default App;
