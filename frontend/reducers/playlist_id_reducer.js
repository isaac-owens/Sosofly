import { RECEIVE_PLAYLIST_ID } from '../actions/ui_actions';

const playlistIdReducer = (oldState = null, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_PLAYLIST_ID:
      return action.playlistId;
    default:
      return oldState;
  }
};

export default playlistIdReducer;