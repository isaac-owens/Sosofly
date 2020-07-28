export const RECEIVE_ALBUM = "RECEIVE_ALBUM";

import * APIUtils from '../util/albums_api_utils';

// regular actions

export const receiveAlbum = (album) => {
  return {
    type: RECEIVE_ARTIST,
    album
  };
};

// thunk actions

export const fetchAlbum = (albumId) => dispatch => {
  return APIUtils.fetchArtist(albumId)
    .then(album => dispatch(receiveArtist(album)));
}