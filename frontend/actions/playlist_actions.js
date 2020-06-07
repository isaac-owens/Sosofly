export const RECEIVE_PLAYLISTS = "RECEIVE_PLAYLISTS";
export const RECEIVE_PLAYLIST = "RECEIVE_PLAYLIST";

import * as APIUtils from '../util/playlists_api_utils';


// regular actions

export const receivePlaylists = (playlists) => {
  return {
    type: RECEIVE_PLAYLISTS,
    playlists
  };
};

export const receivePlaylist = (playlist) => {
  return {
    type: RECEIEVE_PLAYLIST,
    playlist
  };
};

// thunk actions

export const fetchUserPlaylists = (userId) => dispatch => {
  return APIUtils.fetchUserPlaylists(userId)
  .then(playlists => dispatch(receivePlaylists(playlists)));
}

export const fetchPlaylist = (playlistId) => dispatch => {
  return APIUtils.fetchPlaylist(playlistId)
  .then(playlist => dispatch(receivePlaylist(playlist)));
}


