import React, { Component } from 'react';

class AboutPage extends Component {
  render() {
    return (
      <div id='home' className='page__content'>
        <section className='intro'>
          <div className='wrap'>
            <h1>hello there!</h1>
            <p>
              I'm a frontend developer by profession and seeking to be more than
              that
            </p>
          </div>
        </section>

        <section className='single'>
          <div className='wrap'>
            <div className='image-wrap'>
              <img src={require('./../images/web_developer.png')} alt='' />
            </div>

            <h2 id='features'>Skills</h2>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua:
            </p>

            <ul>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </li>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </li>
              <li>Lorem ipsum dolor sit amets</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
            </ul>
          </div>
        </section>
      </div>
    );
  }
}

export default AboutPage;
