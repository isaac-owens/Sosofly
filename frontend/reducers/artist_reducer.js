import { RECEIVE_ARTIST } from '../actions/artist_actions';

const artistReducer = (oldState={}, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_ARTIST:
      return { [action.artist.id]: action.artist };
      break;
    default:
      return oldState;
  }
}

export default artistReducer