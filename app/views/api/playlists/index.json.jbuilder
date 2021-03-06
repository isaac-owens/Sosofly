@playlists.each do |playlist|
  json.set! playlist.id do
    json.id playlist.id
    json.title playlist.title
    json.description playlist.description
    json.tracks playlist.tracks
    if playlist.image.attached?
      json.image url_for(playlist.image)
    end
  end
end