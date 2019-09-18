import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AboutPage from './pages/About';
import ContactPage from './pages/Contact';
import ProjectsPage from './pages/Projects';
import TimelinePage from './pages/Timeline';
import MenuHeader from './components/Menu/MenuHeader';
import MenuContent from './components/Menu/MenuContent';
import MenuFooter from './components/Menu/MenuFooter';
import debounce from './utilities/helper';
import './App.css';

function Menu() {
  return (
    <div className='Menu'>
      <div className='Menu-content'>
        <MenuHeader />
        <MenuContent />
        <MenuFooter />
      </div>
    </div>
  );
}

function App() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 600);

  React.useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      setIsSmallScreen(window.innerWidth < 600);
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
            <Route exact path='/' component={AboutPage} />
            <Route path='/about' component={AboutPage} />
            <Route path='/projects' component={ProjectsPage} />
            <Route path='/timeline' component={TimelinePage} />
            <Route path='/contact' component={ContactPage} />
          </div>
          {isSmallScreen && <MenuFooter />}
        </div>
      </div>
    </Router>
  );
}

export default App;
