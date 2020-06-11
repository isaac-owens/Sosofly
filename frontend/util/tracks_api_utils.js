export const fetchPlalyistTracks = (playlistId) => {
  $.ajax({
    method: 'GET',
    url: `/api/playlists/${playlistId}/tracks`
  })
}

export const fetchTrack = (trackId) => {
  $.ajax({
    method: 'GET',
    url: `/api/tracks/${trackId}/tracks`
  })
}