import React from 'react';
import styled from 'styled-components';
import { tracks } from './tracks';
import { animated } from 'react-spring';
import { durationToTimestamp } from '../../utils/durationToTimestamp';

const Playlist = React.forwardRef(({ animation }, ref) => {
  return (
    <animated.div ref={ref} style={animation}>
      {tracks.map(track => (
        <PlaylistItem key={track.title}>
          <div>IMG</div>
          <div>
            <h3>{track.title}</h3>
          </div>
          <div>{durationToTimestamp(track.duration)}</div>
        </PlaylistItem>
      ))}
    </animated.div>
  );
});

const PlaylistItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
`;

export default Playlist;
