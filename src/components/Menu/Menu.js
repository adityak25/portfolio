import React, { Component } from 'react';
import Particles from 'react-particles-js';
import { particlesParams } from './../../constants/particlesParams';
import MenuHeader from './MenuHeader';
import MenuContent from './MenuContent';
import MenuFooter from './MenuFooter';

class Menu extends Component {
  render() {
    return (
      <React.Fragment>
        <div className='Menu'>
          <Particles className='particles' params={particlesParams} />
          <div className='Menu-content'>
            <MenuHeader />
            <MenuContent />
            <MenuFooter />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Menu;
