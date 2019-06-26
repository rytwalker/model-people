import React, { useState } from 'react';
import { animated, useSpring } from 'react-spring';
import useDimensions from 'react-use-dimensions';
import SectionHeading from '../../elements/SectionHeading';
import MediaPlayer from '../mediaPlayer/MediaPlayer';
import Playlist from '../mediaPlayer/Playlist';

const Demos = () => {
  const [toggle, setToggle] = useState(false);
  const [ref, { height }] = useDimensions({ liveMeasure: false });

  return (
    <section style={{ marginBottom: '3rem' }}>
      <SectionHeading>Demos</SectionHeading>
      <MediaPlayer />
      <button onClick={() => setToggle(!toggle)}>Show playlist</button>
      {toggle && <Playlist ref={ref} />}
    </section>
  );
};

export default Demos;
