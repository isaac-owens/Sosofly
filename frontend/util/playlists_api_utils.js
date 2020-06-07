export const fetchUserPlaylists = (userId) => {
  return $.ajax({
    method: 'GET',
    url: `api/users/${userId}/playlists`,
    data: { playlists }
  })
}

export const fetchPlaylist = (playlistId) => {
  return $.ajax({
    method: 'GET',
    url: `api/playlists/${playlistId}`,
    data: { playlist }
  })
}