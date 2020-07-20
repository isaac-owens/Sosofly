import { combineReducers } from 'redux';
import modalReducer from './modal_reducer';
import nowPlayingReducer from './now_playing_reducer';
import playlistIdReducer from './playlist_id_reducer';

const uiReducer = combineReducers({
  modal: modalReducer,
  nowPlaying: nowPlayingReducer,
  playlistId: playlistIdReducer
})

export default uiReducer;
