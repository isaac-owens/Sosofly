import { 
  RECEIVE_PLAYLIST, 
  RECEIVE_PLAYLISTS,
  ADD_PLAYLIST,
  REMOVE_PLAYLIST } from '../actions/playlist_actions';


const playlistsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);

  switch (action.type) {
    case RECEIVE_PLAYLIST:
      return { [action.playlist.id]: action.playlist };
    case RECEIVE_PLAYLISTS:
      debugger
      return action.playlists;
    case ADD_PLAYLIST:
      newState[action.playlist.id] = action.playlist;
      return newState;
    case REMOVE_PLAYLIST:
      delete newState[action.playlist.id];
      return newState;
    default:
     return oldState;
  };
};

export default playlistsReducer