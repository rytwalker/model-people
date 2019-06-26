import React from 'react';
import { tracks } from './tracks';
import { durationToTimestamp } from '../../utils/durationToTimestamp';

const Playlist = React.forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      {tracks.map(track => (
        <div style={{ padding: '2rem' }}>
          <div>IMG</div>
          <div>
            <h3>{track.title}</h3>
          </div>
          <div>{durationToTimestamp(track.duration)}</div>
        </div>
      ))}
    </div>
  );
});

export default Playlist;
