import { RECEIVE_TRACKS } from "../actions/track_actions"

const tracksReducer = (oldState={}, action) => {
  Object.freeze(oldState);
    
  switch (action.type) {
    case RECEIVE_TRACKS:
      action.tracks
      break;
    default:
      return oldState;
  }
}

export default tracksReducer;