class AddArtistIdToArtistsTable < ActiveRecord::Migration[5.2]
  def change
    add_column :artists, :artist_id, :integer
  end
end
