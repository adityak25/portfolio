import React from 'react';
import { Link } from 'react-router-dom';

export default function MenuHeader() {
  return (
    <div className='Menu-header'>
      <Link to='/' className='Menu-title'>
        Aditya Kankanala
      </Link>
      <h1 className='Menu-title__tagline'>I'm a frontend developer</h1>
    </div>
  );
}
