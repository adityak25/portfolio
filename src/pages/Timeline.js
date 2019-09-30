import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

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
          <VerticalTimeline>
            <VerticalTimelineElement
              className='vertical-timeline-element--work'
              date='Oct 2016 - Present'
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}>
              <h3 className='vertical-timeline-element-title'>
                Software Developer
              </h3>
              <h4 className='vertical-timeline-element-subtitle'>Folsom, CA</h4>
              <p></p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className='vertical-timeline-element--work'
              date='Mar 2016 - Sep 2016'
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}>
              <h3 className='vertical-timeline-element-title'>
                Custom Web Developer
              </h3>
              <h4 className='vertical-timeline-element-subtitle'>Folsom, CA</h4>
              <p></p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className='vertical-timeline-element--work'
              date='Aug 2014 - Nov 2016'
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}>
              <h3 className='vertical-timeline-element-title'>
                Graduate Student
              </h3>
              <h4 className='vertical-timeline-element-subtitle'>
                Sacramento, CA
              </h4>
              <p></p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className='vertical-timeline-element--work'
              date='Jan 2014 - Jun 2014'
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}>
              <h3 className='vertical-timeline-element-title'>
                Software Intern
              </h3>
              <h4 className='vertical-timeline-element-subtitle'>
                Hyderabad, India
              </h4>
              <p> </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </section>
    </div>
  );
}
