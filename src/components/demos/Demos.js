import React from 'react'; // {useState}
// import { useSpring } from 'react-spring';
// import useDimensions from 'react-use-dimensions';
import SectionHeading from '../../elements/SectionHeading';
import MediaPlayer from '../mediaPlayer/MediaPlayer';
// import Playlist from '../mediaPlayer/Playlist';

const Demos = () => {
  // const [toggle, setToggle] = useState(false);
  // const [ref, { height }] = useDimensions();
  // console.log(height);
  // const animation = useSpring({
  //   height: toggle ? (typeof height === 'undefined' ? 65 : height) : 0
  // });

  return (
    <section style={{ marginBottom: '3rem' }}>
      <SectionHeading>Demos</SectionHeading>
      <MediaPlayer />
      {/* <button onClick={() => setToggle(!toggle)}>Show playlist</button> */}
      {/* {toggle && <Playlist ref={ref} animation={animation} />} */}
    </section>
  );
};

export default Demos;
