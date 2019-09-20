import React from 'react';
import { Link } from 'react-router-dom';

export default function MenuContent() {
  return (
    <div className='Menu__sub'>
      <div className='Menu__wrap'>
        <ul className='Menu__list'>
          <li className='Menu__list__item'>
            <Link to='/' className='Menu__list__item__link'>
              About
            </Link>
          </li>

          <li className='Menu__list__item'>
            <Link to='/projects/' className='Menu__list__item__link'>
              Projects
            </Link>
          </li>

          <li className='Menu__list__item'>
            <Link to='/timeline' className='Menu__list__item__link active-link'>
              Timeline
            </Link>
          </li>

          <li className='Menu__list__item'>
            <Link to='/contact' className='Menu__list__item__link'>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
