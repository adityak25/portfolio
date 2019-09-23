import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AboutPage from './pages/About';
import ContactPage from './pages/Contact';
import ProjectsPage from './pages/Projects';
import TimelinePage from './pages/Timeline';
import Menu from './components/Menu/Menu';
import MenuHeader from './components/Menu/MenuHeader';
import MenuFooter from './components/Menu/MenuFooter';
import debounce from './utilities/helper';
import './App.css';

function App() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);

  React.useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      setIsSmallScreen(window.innerWidth <= 768);
    }, 100);

    window.addEventListener('resize', debouncedHandleResize);

    return () => {
      window.removeEventListener('resize', debouncedHandleResize);
    };
  });

  return (
    <Router>
      <div className='App'>
        {!isSmallScreen && <Menu />}

        <div className={!isSmallScreen ? 'MainPage' : ''}>
          {isSmallScreen && <MenuHeader />}
          <div className='MainPage-content'>
            <AboutPage />
            <ProjectsPage />
            <TimelinePage />
            {/* <ContactPage /> */}
          </div>
          {isSmallScreen && <MenuFooter />}
        </div>
      </div>
    </Router>
  );
}

export default App;
