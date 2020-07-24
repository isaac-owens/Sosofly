export const RECEIVE_ARTIST = "RECEIVE_ARTIST";

import * as APIUtils from '../util/artists_api_utils';

// regular actions

export const receiveArtist = (artist) => {
  return {
    type: RECEIVE_ARTIST,
    artist
  };
};

// thunk actions

export const fetchArtist = (artistId) => dispatch => {
  return APIUtils.fetchArtist(artistId)
  .then(artist => dispatch(receiveArtist(artist)));
}