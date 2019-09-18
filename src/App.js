import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import AboutPage from './pages/About';
import ContactPage from './pages/Contact';
import ProjectsPage from './pages/Projects';
import TimelinePage from './pages/Timeline';
import './App.css';

function SideBarHeader() {
  return (
    <React.Fragment>
      <Link to='/' className='SideBar-title'>
        Aditya Kankanala
      </Link>
      <h1 className='SideBar-title__tagline'>I'm a frontend developer</h1>
    </React.Fragment>
  );
}

function SideBarContent() {
  return (
    <div className='SideBar-menu'>
      <div className='SideBar-menu__wrap'>
        <ul className='SideBar-menu__list'>
          <li className='SideBar-menu__list__item'>
            <Link to='/' className='SideBar-menu__list__item__link'>
              About
            </Link>
          </li>

          <li className='SideBar-menu__list__item'>
            <Link to='/projects/' className='SideBar-menu__list__item__link'>
              Projects
            </Link>
          </li>

          <li className='SideBar-menu__list__item'>
            <Link
              to='/timeline'
              className='SideBar-menu__list__item__link active-link'
            >
              Timeline
            </Link>
          </li>

          <li className='SideBar-menu__list__item'>
            <Link to='/contact' className='SideBar-menu__list__item__link'>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

function SideBarFooter() {
  return <div className='SideBar-menu__footer'>This is Footer</div>;
}

function SideBar() {
  return (
    <div className='SideBar'>
      <div className='SideBar-content'>
        <SideBarHeader />
        <SideBarContent />
        <SideBarFooter />
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className='App'>
        <SideBar />

        <div className='MainPage'>
          <div className='MainPage-content'>
            <Route exact path='/' component={AboutPage} />
            <Route path='/about' component={AboutPage} />
            <Route path='/projects' component={ProjectsPage} />
            <Route path='/timeline' component={TimelinePage} />
            <Route path='/contact' component={ContactPage} />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
