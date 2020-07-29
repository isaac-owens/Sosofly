import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import playlistsReducer from "./playlists_reducer";
import playlistReducer from "./playlist_reducer";
import tracksReducer from "./tracks_reducer";
import artistReducer from "./artist_reducer";
import albumReducer from "./album_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  playlists: playlistsReducer,
  playlist: playlistReducer,
  tracks: tracksReducer,
  artist: artistReducer,
  album: albumReducer,
});

export default entitiesReducer;
