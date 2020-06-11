export const RECEIVE_TRACKS = "RECEIVE_TRACKS";
export const RECEIVE_TRACK = "RECEIVE_TRACK";

import * as APIUtils from "../util/tracks_api_utils";

export const receiveTracks = (tracks) => {
  return {
    type: RECEIVE_TRACKS,
    tracks
  }
}

export const receiveTrack = (track) => {
  return {
    type: RECEIVE_TRACK,
    track
  }
}


export const fetchPlaylistTracks = (playlistId) => {
  return APIUtils.fetchPlalyistTracks()
  .then(tracks => dispatch(receiveTracks(tracks)));
}

export const fetchTrack = (trackId) => {
  return APIUtils.fetchTrack(trackId)
  .then(track => dispatch(receiveTrack(track)));
}
