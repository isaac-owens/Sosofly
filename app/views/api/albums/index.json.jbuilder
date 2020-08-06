@albums.each do |album|
  json.set! album.id do
    json.id album.id
    json.title album.title
    json.year album.year
    if album.image.attached?
      album.image url_for(album.image)
    end
  end
end