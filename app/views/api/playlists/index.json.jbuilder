@playlists.each do |playlist|
  json.set! playlist.id do
    json.id playlist.id
    json.title playlist.title
    json.description playlist.description
    json.tracks playlist.tracks.each do |track|
      json.set! track.id do 
        json.id track.id
        json.title track.title
        json.track_file url_for(track.track_file)
      end
    end
  end
end