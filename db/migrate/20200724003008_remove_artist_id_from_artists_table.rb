class RemoveArtistIdFromArtistsTable < ActiveRecord::Migration[5.2]
  def change
    remove_column :artists, :artist_id
    add_column :tracks, :artist_id, :integer
  end
end
