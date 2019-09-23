import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

export default function MenuContent() {
  return (
    <div className='Menu__sub'>
      <div className='Menu__wrap'>
        <ul className='Menu__list'>
          <li className='Menu__list__item'>
            <Link
              activeClass='active'
              to='home'
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
              className='Menu__list__item__link'>
              Home
            </Link>
          </li>

          <li className='Menu__list__item'>
            <Link
              activeClass='active'
              to='projects'
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
              className='Menu__list__item__link'>
              Projects
            </Link>
          </li>

          <li className='Menu__list__item'>
            <Link
              activeClass='active'
              to='timeline'
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
              className='Menu__list__item__link active-link'>
              Timeline
            </Link>
          </li>

          {/* <li className='Menu__list__item'>
              <Link activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500} className='Menu__list__item__link'>
                Contact
              </Link>
            </li> */}
        </ul>
      </div>
    </div>
  );
}
