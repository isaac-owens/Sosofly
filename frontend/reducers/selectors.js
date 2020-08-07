
export const getArtist = state => {
  return Object.values(state.entities.artist)[0]
}

export const getArtistAlbums = state => {
  const artist = getArtist(state);
  if (typeof artist === "undefined") return [];

  return artist.albumIds.map(albumId => {
    return state.entities.album[albumId]
  })
}