import { useState } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
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
      <nav>
        <ul>
          <li>
            <button
              className={activeTab === 'home' ? 'active' : ''}
              onClick={() => setActiveTab('home')}>
              Home
            </button>
          </li>
          <li>
            <button
              className={activeTab === 'about' ? 'active' : ''}
              onClick={() => setActiveTab('about')}>
              About
            </button>
          </li>
          <li>
            <button
              className={activeTab === 'contact' ? 'active' : ''}
              onClick={() => setActiveTab('contact')}>
              Contact
            </button>
          </li>
        </ul>
      </nav>
      <div className="content">{renderPage()}</div>
    </div>
  );
}

export default App;
