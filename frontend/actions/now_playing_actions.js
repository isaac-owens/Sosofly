export const RECEIVE_NOW_PLAYING = "RECEIVE_NOW_PLAYING";

export const receiveNowPlaying = (track) => {
  return {
    type: RECEIVE_NOW_PLAYING,
    track
  }
}

