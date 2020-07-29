import { RECEIVE_ALBUM} from '../actions/album_actions';

const albumReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_ALBUM:
      return { [action.album.id]: action.album };
      break;
    default:
      return oldState;
  }
}

export default albumReducer