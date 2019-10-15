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
        //offset={0}
        duration={500}
        className='header__title'>
        Aditya Kankanala
      </Link>
      <p className='header__tagline'>Front End Developer</p>
    </React.Fragment>
  );
}
