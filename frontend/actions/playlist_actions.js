export const RECEIVE_PLAYLISTS = "RECEIVE_PLAYLISTS";
export const RECEIVE_PLAYLIST = "RECEIVE_PLAYLIST";
export const ADD_PLAYLIST = "ADD_PLAYLIST";
export const REMOVE_PLAYLIST = "REMOVE_PLAYLIST";
export const ADD_TRACK = "ADD_TRACK";
export const REMOVE_TRACK = "REMOVE_TRACK";

import { receiveErrors } from './session_actions';

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
    type: RECEIVE_PLAYLIST,
    playlist
  };
};

export const addPlaylist = (playlist) => {
  return {
    type: ADD_PLAYLIST,
    playlist
  }
}

export const removePlaylist = (playlist) => {
  return {
    type: REMOVE_PLAYLIST,
    playlist
  }
}

export const addTrackToPlaylist = (playlist, track) => {
  return {
    type: ADD_TRACK,
    playlist, 
    track
  }
}

export const removeTrackFromPlaylist = (playlist, track) => {
  return {
    type: REMOVE_TRACK,
    playlist, 
    track
  }
}

// thunk actions

export const fetchUserPlaylists = (userId) => dispatch => {
  return APIUtils.fetchUserPlaylists(userId)
  .then(playlists => dispatch(receivePlaylists(playlists)));
}

export const fetchPlaylist = (playlistId) => dispatch => {
  return APIUtils.fetchPlaylist(playlistId)
  .then(playlist => dispatch(receivePlaylist(playlist)));
}

export const createPlaylist = (userId, playlist) => dispatch => {
  return APIUtils.createPlaylist(userId, playlist)
  .then(playlist => dispatch(addPlaylist(playlist)),
  errors => dispatch(receiveErrors(errors)));
}

export const deletePlaylist = (userId, playlistId) => dispatch => {
  return APIUtils.deletePlaylist(userId, playlistId)
  .then(playlist => dispatch(removePlaylist(playlist)));
}

export const addTrack = (playlistId, track) => dispatch => {
  return APIUtils.fetchPlaylist(playlistId)
  .then(playlist => dispatch(addTrackToPlaylist(playlist, track)));
}

export const removeTrack = (playlistId, track) => dispatch => {
  return APIUtils.fetchPlaylist(playlistId)
  .then(playlist => dispatch(removeTrackFromPlaylist(playlist, track)));
}




