import React from 'react';
import SectionHeading from '../../elements/SectionHeading';
import MediaPlayer from '../mediaPlayer/MediaPlayer';

const Demos = () => {
  return (
    <section style={{ marginBottom: '3rem' }}>
      <SectionHeading>Demos</SectionHeading>
      <MediaPlayer />
    </section>
  );
};

export default Demos;
