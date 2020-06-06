class RemovePlaylistIdColumn < ActiveRecord::Migration[5.2]
  def change
    remove_column :tracks, :playlist_id
  end
end
