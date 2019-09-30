import React from 'react';

export default function AboutPage() {
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
            <div className='skills'>
              <div className='chip'>
                <span className='chip__label'>React</span>
              </div>
              <div className='chip'>
                <span className='chip__label'>Redux</span>
              </div>
              <div className='chip'>
                <span className='chip__label'>Angular</span>
              </div>
              <div className='chip'>
                <span className='chip__label'>AngularJS</span>
              </div>
              <div className='chip'>
                <span className='chip__label'>Javascript</span>
              </div>
              <div className='chip'>
                <span className='chip__label'>HTML</span>
              </div>
              <div className='chip'>
                <span className='chip__label'>CSS</span>
              </div>
              <div className='chip'>
                <span className='chip__label'>Material-UI</span>
              </div>
              <div className='chip'>
                <span className='chip__label'>Bootstrap</span>
              </div>
              <div className='chip'>
                <span className='chip__label'>Node.js</span>
              </div>
              <div className='chip'>
                <span className='chip__label'>GraphQL</span>
              </div>
              <div className='chip'>
                <span className='chip__label'>Express.js</span>
              </div>
              <div className='chip'>
                <span className='chip__label'>MongoDB</span>
              </div>
              <div className='chip'>
                <span className='chip__label'>Grunt</span>
              </div>
              <div className='chip'>
                <span className='chip__label'>Git</span>
              </div>
            </div>
          </ul>
        </div>
      </section>
    </div>
  );
}
