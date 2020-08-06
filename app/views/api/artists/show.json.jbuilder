json.id @artist.id
json.name @artist.name
json.biography @artist.biography
  if @artist.image.attached?
    json.image url_for(@artist.image)
  end
albumIds = []
@artist.albums.each do |album|
  albumIds.push(album.id)
end
json.albumIds albumIds
