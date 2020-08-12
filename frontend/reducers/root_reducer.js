import { combineReducers } from "redux";
import sessionReducer from "./session_reducer";
import entitiesReducer from "./entities_reducer";
import errorsReducer from "./errors_reducer";
import uiReducer from "./ui_reducer";
import { reducer as jPlaylists } from 'react-jplaylist';
import { reducer as jPlayers } from 'react-jplayer';

const rootReducer = combineReducers({
  entities: entitiesReducer,
  session: sessionReducer,
  errors: errorsReducer,
  ui: uiReducer,
  jPlaylists,
  jPlayers,
});

export default rootReducer;
