json.id @artist.id
  json.name @artist.name
  json.biography @artist.biography
  if @artist.image.attached?
    json.image url_for(@artist.image)
  end