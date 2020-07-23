export const RECEIVE_ARTIST = "RECEIVE_ARTIST";

import * as APIUtils from '../util/actions_api_utils';

export const reveiveArtist = (artist) => {
  return {
    type: RECEIVE_ARTIST,
    artist
  };
};