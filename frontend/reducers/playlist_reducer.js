import { RECEIVE_PLAYLIST } from "../actions/playlist_actions";

const playlistReducer = (oldState={}, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_PLAYLIST:
      return { [action.playlist.id]: action.playlist };
      break;
    default:
      return oldState;
  }
}

export default playlistReducer;