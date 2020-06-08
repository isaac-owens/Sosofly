export const fetchUserPlaylists = (userId) => {
  return $.ajax({
    method: 'GET',
    url: `api/users/${userId}/playlists`,
  })
}

export const fetchPlaylist = (playlistId) => {
  return $.ajax({
    method: 'GET',
    url: `api/playlists/${playlistId}`,
  })
}

export const createPlaylist = (userId, playlist) => {
  return $.ajax({
    method: 'POST',
    url: `api/users/${userId}/playlists`,
    data: { playlist }
  })
}

export const deletePlaylist = (userId, playlistId) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/users/${userId}/playlists/${playlistId}`,
  })
}