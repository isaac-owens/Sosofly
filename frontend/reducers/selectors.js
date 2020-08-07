
export const getArtist = state => {
  return Object.values(state.entities.artist)[0]
}

export const getArtistAlbums = state => {
  const { albumIds } = getArtist(state)

  debugger
  return albumIds.map(albumId => {
    debugger
    return state.entities.album[albumId]
  })
}