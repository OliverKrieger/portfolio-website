import { useState } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import './styles/main.scss';

function App() {
  const [activeTab, setActiveTab] = useState<string>('home');

  // Conditional rendering of the page components
  const renderPage = () => {
    switch (activeTab) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="App">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="content">{renderPage()}</div>
    </div>
  );
}

export default App;
