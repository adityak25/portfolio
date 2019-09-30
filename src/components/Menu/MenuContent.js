import React from 'react';
import { Link } from 'react-scroll';

export default function MenuContent() {
  return (
    <div className='menu'>
      <div className='menu__wrap'>
        <ul className='menu__list'>
          <li className='menu__list__item'>
            <Link
              activeClass='active-link'
              to='home'
              spy={true}
              smooth={true}
              offset={0}
              duration={1000}
              className='menu__list__item__link'>
              Home
            </Link>
          </li>

          <li className='menu__list__item'>
            <Link
              activeClass='active-link'
              to='projects'
              spy={true}
              smooth={true}
              offset={0}
              duration={1000}
              className='menu__list__item__link'>
              Projects
            </Link>
          </li>

          <li className='menu__list__item'>
            <Link
              activeClass='active-link'
              to='timeline'
              spy={true}
              smooth={true}
              offset={0}
              duration={1000}
              className='menu__list__item__link'>
              Timeline
            </Link>
          </li>

          {/* <li className='menu__list__item'>
              <Link activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500} className='menu__list__item__link'>
                Contact
              </Link>
            </li> */}
        </ul>
      </div>
    </div>
  );
}
