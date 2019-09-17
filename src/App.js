import React from "react";
import "./App.css";

function App() {
  return (
    <div className='App'>
      <div className='SideBar'>
        <div className='SideBar-content'>
          <a href='/' className='SideBar-title'>
            Aditya Kankanala
          </a>
          <h1 className='SideBar-title__tagline'>
            Front End Developer @ Retail Pro
          </h1>
          <div className='SideBar-menu'>
            <div className='SideBar-menu__wrap'>
              <ul className='SideBar-menu__list'>
                <li className='SideBar-menu__list__item'>
                  <a href='/' className='SideBar-menu__list__item__link'>
                    About
                  </a>
                </li>

                <li className='SideBar-menu__list__item'>
                  <a href='/blog/' className='SideBar-menu__list__item__link'>
                    Projects
                  </a>
                </li>

                <li className='SideBar-menu__list__item'>
                  <a
                    href='/about'
                    className='SideBar-menu__list__item__link active-link'>
                    Timeline
                  </a>
                </li>

                <li className='SideBar-menu__list__item'>
                  <a href='/contact' className='menu__list__item__link'>
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='MainPage'>
        <div className='MainPage-content'> Hello Aditya!! </div>
      </div>
    </div>
  );
}

export default App;
