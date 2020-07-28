class AddNullConstraintToAlbumIdAgain < ActiveRecord::Migration[5.2]
  def change
    change_column_null :tracks, :album_id, false
  end
end
