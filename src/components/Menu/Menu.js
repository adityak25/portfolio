import React from 'react';
import Particles from 'react-particles-js';
import MenuContent from './MenuContent';
import { particlesParams } from './../../constants/particlesParams';
import MenuFooter from './MenuFooter';
import MenuHeader from './MenuHeader';

export default function Menu() {
  return (
    <header className='header'>
      <Particles className='particles' params={particlesParams} />
      <div className='header-overlay'></div>
      <div className='header__content'>
        <MenuHeader></MenuHeader>
        <MenuContent></MenuContent>
        <MenuFooter></MenuFooter>
      </div>
    </header>
  );
}
