class AddPlaylistIdColumn < ActiveRecord::Migration[5.2]
  def change
    add_column :tracks, :playlist_id, :integer
  end
end
