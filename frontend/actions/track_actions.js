export const RECEIVE_TRACKS = "RECEIVE_TRACKS";
export const ADD_TRACK = "ADD_TRACK";
export const REMOVE_TRACK = "REMOVE_TRACK";

import * as APIUtils from "../util/tracks_api_utils";

export const receiveTracks = (tracks) => {
  return {
    type: RECEIVE_TRACKS,
    tracks
  }
}

export const fetchPlaylistTracks = (entityId) => {
  debugger
  return APIUtils.fetchPlaylistTracks(entityId)
  .then(tracks => dispatch(receiveTracks(tracks)));
}

export const fetchAlbumTracks = (entityId) => {
  return APIUtils.fetchAlbumTracks(entityId)
  .then(tracks => dispatch(receiveTracks(tracks)));
}
