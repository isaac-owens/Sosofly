export const RECEIVE_TRACKS = "RECEIVE_TRACKS";

import * as APIUtils from "../util/tracks_api_utils";

const receiveTracks = (tracks) => {
  return {
    type: RECEIVE_TRACKS,
    tracks
  }
}

export const fetchPlaylistTracks = (entityId) => dispatch => {
  return APIUtils.fetchPlaylistTracks(entityId)
  .then(tracks => dispatch(receiveTracks(tracks)));
}

export const fetchAlbumTracks = (entityId) => dispatch => {
  return APIUtils.fetchAlbumTracks(entityId)
  .then(tracks => dispatch(receiveTracks(tracks)));
}
