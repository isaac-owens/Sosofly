 json.id @album.id
 json.title @album.title
 json.artist_id @album.artist_id
 json.year @album.year
 if @album.image.attached?
    json.image url_for(@album.image)
  end