export const fetchPlaylistTracks = (entityId) => {
  $.ajax({
    method: 'GET',
    url: `/api/playlists/${entityId}/tracks`
  })
}

export const fetchAlbumTracks = (entityId) => {
  $.ajax({
    method: 'GET',
    url: `/api/albums/${entityId}/tracks`
  })
}




