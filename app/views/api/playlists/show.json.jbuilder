  json.id @playlist.id
  json.title @playlist.title
  json.description @playlist.description
  json.creator_id @playlist.creator_id
  json.tracks @playlist.tracks
  if @playlist.image.attached?
    json.image url_for(@playlist.image)
  end

