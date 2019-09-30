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
              href='#'
              onClick={e => e.preventDefault()}>
              <div
                className='portfolio-item__image'
                style={{
                  backgroundImage:
                    "url('https://d1qmdf3vop2l07.cloudfront.net/jovial-peafowl.cloudvent.net/compressed/_min_/fe89e1e859acb2feebca86028e2db97d.jpg')"
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
            <div className='portfolio-item__codelink'>
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
            </div>
          </div>

          <div className='portfolio-item'>
            <a
              className='portfolio-item__link'
              href='#'
              onClick={e => e.preventDefault()}>
              <div
                className='portfolio-item__image'
                style={{
                  backgroundImage:
                    "url('https://d1qmdf3vop2l07.cloudfront.net/jovial-peafowl.cloudvent.net/compressed/_min_/2c035e90c04b4151f5d04f14c1687d00.jpg')"
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
            <div className='portfolio-item__codelink'>
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
