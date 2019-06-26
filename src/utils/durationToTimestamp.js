export const durationToTimestamp = timestamp => {
  let minutes = Math.floor(timestamp / 60);
  let seconds = timestamp - minutes * 60;
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  timestamp = `${minutes}:${seconds}`;
  return timestamp;
};
