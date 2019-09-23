import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

export default function MenuHeader() {
  return (
    <div className='Menu-header'>
      <Link
        activeClass='active'
        to='home'
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        className='Menu-title'>
        Aditya Kankanala
      </Link>
      <h1 className='Menu-title__tagline'>I'm a frontend developer</h1>
    </div>
  );
}
