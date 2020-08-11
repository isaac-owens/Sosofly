@tracks.each do |track|
  json.set! track.id do
    json.id track.id
    json.title track.title
    json.artist track.artist.name
    json.album track.album.title
    json.album_id track.album_id
    json.poster url_for(track.album.image)
    json.artist_id track.artist_id
    json.free false
    json.duration track.duration
    if track.track_file.attached?
      json.sources do
        json.mp3 url_for(track.track_file)
      end
    end
  end
end