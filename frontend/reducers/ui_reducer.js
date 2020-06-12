import { combineReducers } from 'redux';
import modalReducer from './modal_reducer';
import nowPlayingReducer from './now_playing_reducer';

const uiReducer = combineReducers({
  modal: modalReducer,
  nowPlaying: nowPlayingReducer
})

export default uiReducer;
