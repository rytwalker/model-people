import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { tracks } from './tracks';
import { durationToTimestamp } from '../../utils/durationToTimestamp';

const MediaPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [currentTrack, setCurrentTrack] = useState({});
  const [percent, setPercent] = useState('0%');

  const updateTime = timestamp => {
    timestamp = Math.floor(timestamp);
    setCurrentTime(timestamp);
  };

  const updatePlaybackBar = percent => {
    setPercent(percent);
  };

  const togglePlay = () => {
    const audio = document.getElementById('audio');
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
      setInterval(function() {
        let currentTime = audio.currentTime;
        let duration = currentTrack.duration;
        let percent = (currentTime / duration) * 100 + '%';
        updatePlaybackBar(percent);
        updateTime(currentTime);
        console.log(currentTime);
      }, 100);
    }

    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    setCurrentTrack(tracks[0]);
  }, []);

  return (
    <MediaPlayerContainer>
      <PlayButton onClick={togglePlay}>
        {isPlaying ? (
          <svg
            width="32"
            height="45"
            viewBox="0 0 32 45"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="10" height="45" rx="2" fill="#DEDEDE" />
            <rect x="22" width="10" height="45" rx="2" fill="#DEDEDE" />
          </svg>
        ) : (
          <svg
            width="40"
            height="45"
            viewBox="0 0 40 45"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M39 20.7679C40.3333 21.5377 40.3333 23.4623 39 24.2321L3.75 44.5836C2.41667 45.3534 0.749998 44.3912 0.749998 42.8516L0.75 2.1484C0.75 0.608803 2.41667 -0.35345 3.75 0.41635L39 20.7679Z"
              fill="#DEDEDE"
            />
          </svg>
        )}
      </PlayButton>
      <MediaPlayerRight>
        <TrackTitle>{currentTrack && currentTrack.title}</TrackTitle>
        <PlaybackContainer>
          <Time>{durationToTimestamp(currentTime)}</Time>
          <Time>
            {currentTrack && durationToTimestamp(currentTrack.duration)}
          </Time>
          <PlaybackBar>
            {currentTrack && <audio id="audio" src={currentTrack.source} />}
            <PlaybackBarFill width={percent} />
          </PlaybackBar>
        </PlaybackContainer>
      </MediaPlayerRight>
    </MediaPlayerContainer>
  );
};

const MediaPlayerContainer = styled.div`
  background: #33312e;
  padding: 1rem;
  display: flex;
  border-radius: 4px;
  align-items: center;
`;

const TrackTitle = styled.h3`
  font-weight: 700;
  color: #fff;
`;

const PlayButton = styled.div`
  margin-right: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 55px;
  width: 55px;
  cursor: pointer;
`;

const MediaPlayerRight = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const PlaybackContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const PlaybackBar = styled.div`
  height: 10px;
  background: #fff;
  width: 100%;
  border-radius: 2px;
  position: relative;
  overflow: hidden;
`;

const PlaybackBarFill = styled.div`
  width: ${props => (props.width ? props.width : 0)};
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: #17a398;
  z-index: 2000;
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
  overflow: hidden;
  transition: width 0.2s;
`;

const Time = styled.div`
  font-size: 1.2rem;
  color: #fff;
`;

export default MediaPlayer;
