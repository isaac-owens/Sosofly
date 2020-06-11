export const fetchPlaylistTracks = (entityId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/playlists/${entityId}/tracks`
  })
}

export const fetchAlbumTracks = (entityId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/albums/${entityId}/tracks`
  })
}




