class CreatePlaylists < ActiveRecord::Migration[5.2]
  def change
    create_table :playlists do |t|
      t.integer :creator_id, null:false
      t.integer :genre_id, optional: true
      t.string :title, null:false
      t.text :description, optional:true

      t.timestamps
    end

    add_index :playlists, :creator_id
    add_index :playlists, :genre_id
  end
end
