import React, { useState } from 'react';
import Particles from 'react-particles-js';
import { particlesParams } from './constants/particlesParams';
import debounce from './utilities/helper';
import './App.css';
import MenuFooter from './components/Menu/MenuFooter';
import MenuContent from './components/Menu/MenuContent';
import MenuHeader from './components/Menu/MenuHeader';
import AboutPage from './pages/About';
import ProjectsPage from './pages/Projects';
import TimelinePage from './pages/Timeline';

function App() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 1024);

  React.useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      setIsSmallScreen(window.innerWidth <= 1024);
    }, 100);

    window.addEventListener('resize', debouncedHandleResize);

    return () => {
      window.removeEventListener('resize', debouncedHandleResize);
    };
  });

  return (
    <React.Fragment>
      <header className='header'>
        <Particles className='particles' params={particlesParams} />
        <div className='header-overlay'></div>
        <div className='header__content'>
          <MenuHeader></MenuHeader>
          <MenuContent></MenuContent>
          {!isSmallScreen && <MenuFooter></MenuFooter>}
        </div>
      </header>
      <div className='page'>
        <AboutPage />
        <ProjectsPage />
        <TimelinePage />
      </div>
      <footer className='footer'>
        {isSmallScreen && <MenuFooter />}
        <div className='footer__copyright'>
          <span>© 2019. All rights reserved.</span>
        </div>
      </footer>
    </React.Fragment>
  );
}

export default App;
