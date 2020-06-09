tracks = @playlist.tracks
tracks.each do |track|
  json.set! track.id do
    json.id track.id
    json.title track.title
  end
end