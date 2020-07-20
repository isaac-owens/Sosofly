export const RECEIVE_PLAYLIST_ID = "RECEIVE_PLAYLIST_ID";

export const receivePlaylistId = playlistId => {
  type: RECEIVE_PLAYLIST_ID,
  playlistId
}

