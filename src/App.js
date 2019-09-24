import React, { useState } from 'react';
import AboutPage from './pages/About';
import ProjectsPage from './pages/Projects';
import TimelinePage from './pages/Timeline';
import Menu from './components/Menu/Menu';
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
    <React.Fragment>
      <Menu></Menu>
      <div className='page'>
        <AboutPage />
        <ProjectsPage />
        <TimelinePage />
      </div>
    </React.Fragment>
  );
}

export default App;
