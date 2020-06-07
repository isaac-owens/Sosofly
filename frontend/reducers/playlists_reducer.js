import { RECEIVE_PLAYLIST } from '../actions/playlist_actions';
import { RECEIVE_PLAYLISTS } from "../actions/playlist_actions";

const playlistsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);

  switch (action.type) {
    case RECEIVE_PLAYLIST:
      return { [action.playlist.id]: action.playlist };
    case RECEIVE_PLAYLISTS:
      debugger
      return action.playlists;
    default:
     return oldState;
  };
};

export default playlistsReducer