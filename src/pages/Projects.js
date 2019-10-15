import React from 'react';

export default function ProjectsPage() {
  return (
    <div id='projects' className='page__content'>
      <section className='intro'>
        <div className='wrap'>
          <h1>Projects</h1>
          <p>What I've been working on lately.</p>
        </div>
      </section>
      <section className='portfolio'>
        <div className='wrap'>
          <div className='portfolio-item'>
            <a
              className='portfolio-item__link'
              href='https://github.com/adityak25/event-book'
              target='_blank'
              rel='noopener noreferrer'>
              <div
                className='portfolio-item__image'
                style={{
                  backgroundImage: `url(${require('./../images/events.png')})`,
                  width: '90%'
                }}></div>

              <div className='portfolio-item__content'>
                <div className='portfolio-item__info'>
                  <h2 className='portfolio-item__title'>Event Book</h2>
                  <p className='portfolio-item__subtitle'>
                    Create, find & reserve events
                  </p>
                </div>
              </div>
            </a>
            {/* <div className='portfolio-item__codelink'>
              <a
                href='https://github.com/adityak25'
                target='_blank'
                rel='noopener noreferrer'>
                Demo
              </a>
              <a
                href='https://github.com/adityak25'
                target='_blank'
                rel='noopener noreferrer'>
                Code
              </a>
            </div> */}
          </div>

          <div className='portfolio-item'>
            <a
              className='portfolio-item__link'
              href='https://github.com/adityak25/quick-shop'
              target='_blank'
              rel='noopener noreferrer'>
              <div
                className='portfolio-item__image'
                style={{
                  backgroundImage: `url(${require('./../images/quick-shop.png')})`,
                  width: '90%'
                }}></div>

              <div className='portfolio-item__content'>
                <div className='portfolio-item__info'>
                  <h2 className='portfolio-item__title'>Quick shop</h2>
                  <p className='portfolio-item__subtitle'>
                    An e-commerce shopping application
                  </p>
                </div>
              </div>
            </a>
            {/* <div className='portfolio-item__codelink'>
              <a
                href='https://github.com/adityak25'
                target='_blank'
                rel='noopener noreferrer'>
                Demo
              </a>
              <a
                href='https://github.com/adityak25'
                target='_blank'
                rel='noopener noreferrer'>
                Code
              </a>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
}
