export const RECEIVE_ALBUM = "RECEIVE_ALBUM";
export const RECEIVE_ALBUMS = "RECEIVE_ALBUMS";

import * as APIUtils from '../util/albums_api_utils';

// regular actions
export const receiveAlbums = (albums) => {
  return {
    type: RECEIVE_ALBUMS,
    albums
  }
}

export const receiveAlbum = (album) => {
  return {
    type: RECEIVE_ALBUM,
    album
  };
};

// thunk actions

export const fetchAlbum = (albumId) => dispatch => {
  return APIUtils.fetchAlbum(albumId)
    .then(album => dispatch(receiveAlbum(album)));
}
