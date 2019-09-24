import React from 'react';

export default function TimelinePage() {
  return (
    <div id='timeline' className='page__content'>
      <section className='intro'>
        <div className='wrap'>
          <h1>Timeline</h1>
          <p>What happened so far.</p>
        </div>
      </section>
      <section className='blog single'>
        <div className='wrap'>
          <article className='blog-post'>
            <div className='blog-post__header'>
              <h2 className='blog-post__title'>
                <a href='/'>Hitting The Road</a>
              </h2>
              <p className='blog-post__subtitle'>30 June 2018</p>
            </div>

            <a
              href='/'
              className='blog-post__image'
              style={{
                backgroundImage:
                  "url('https://d1qmdf3vop2l07.cloudfront.net/jovial-peafowl.cloudvent.net/compressed/_min_/b6ee2edcabcf225c7f448c61784091c9.jpg')"
              }}></a>

            <div className='blog-post__content'>
              <p>
                This page is a demo that shows everything you can do inside
                portfolio and blog posts. We've included everything you need to
                create engaging posts about your work, and show off your case
                studies in a beautiful way.
              </p>
            </div>
          </article>

          <article className='blog-post'>
            <div className='blog-post__header'>
              <h2 className='blog-post__title'>
                <a href='/'>Down The River</a>
              </h2>
              <p className='blog-post__subtitle'>29 June 2018</p>
            </div>

            <a
              href='/'
              className='blog-post__image'
              style={{
                backgroundImage:
                  "url('https://d1qmdf3vop2l07.cloudfront.net/jovial-peafowl.cloudvent.net/compressed/_min_/faf56ff7f9a0f1bf956a8e753a647fe8.jpg')"
              }}></a>

            <div className='blog-post__content'>
              <p>
                This page is a demo that shows everything you can do inside
                portfolio and blog posts. We've included everything you need to
                create engaging posts about your work, and show off your case
                studies in a beautiful way.
              </p>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
