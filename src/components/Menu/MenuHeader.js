import React from 'react';
import { Link } from 'react-scroll';

export default function MenuHeader() {
  return (
    <React.Fragment>
      <Link
        activeClass='active'
        to='home'
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        className='header__title'
      >
        Aditya Kankanala
      </Link>
      <p className='header__tagline'>I'm a frontend developer.</p>
    </React.Fragment>
  );
}
