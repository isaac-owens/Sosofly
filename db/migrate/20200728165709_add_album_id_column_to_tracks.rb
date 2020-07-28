class AddAlbumIdColumnToTracks < ActiveRecord::Migration[5.2]
  def change
    add_column :tracks, :album_id, :integer
    add_index :tracks, :album_id
  end
end
