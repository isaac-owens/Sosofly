import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import playlistsReducer from "./playlists_reducer";
import playlistReducer from "./playlist_reducer";
import tracksReducer from "./tracks_reducer";
import artistReducer from "./artist_reducer";
import albumReducer from "./album_reducer";
import { reducer as jPlaylists } from 'react-jplaylist';
import { reducer as jPlayers } from 'react-jplayer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  playlists: playlistsReducer,
  playlist: playlistReducer,
  tracks: tracksReducer,
  artist: artistReducer,
  album: albumReducer,
  jPlaylists: jPlaylists,
  jPlayer: jPlayers,
});

export default entitiesReducer;
