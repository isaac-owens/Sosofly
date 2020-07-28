@tracks.each do |track|
  json.set! track.id do
    json.id track.id
    json.title track.title
    json.artist track.artist.name
    json.album track.album.title
    json.artist_id track.artist_id
    json.track_file url_for(track.track_file)
  end
end