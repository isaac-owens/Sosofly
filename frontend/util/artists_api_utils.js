export const fetchArtist = (artistId) => {
  return $.ajax({
    method: "GET",
    url: `/api/artist/${artistId}`
  })
}